import os
import subprocess
import numpy as np
import imageio_ffmpeg
from PIL import Image

def get_ffmpeg():
    # Try ffmpeg in path or imageio_ffmpeg
    try:
        res = subprocess.run(['ffmpeg', '-version'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if res.returncode == 0:
            return 'ffmpeg'
    except Exception:
        pass
    return imageio_ffmpeg.get_ffmpeg_exe()

ffmpeg = get_ffmpeg()
print("Using ffmpeg:", ffmpeg)

os.makedirs("public/hero", exist_ok=True)
os.makedirs("public", exist_ok=True)

# 1. Process audio with numpy
# Extract raw PCM 48kHz 16-bit stereo from intro.mp4
print("Extracting audio from intro.mp4...")
extract_audio_cmd = [
    ffmpeg, '-y',
    '-i', 'intro.mp4',
    '-vn',
    '-t', '10.0',
    '-f', 's16le',
    '-ar', '48000',
    '-ac', '2',
    'scratch_audio.raw'
]
subprocess.run(extract_audio_cmd, check=True)

with open('scratch_audio.raw', 'rb') as f:
    raw_data = f.read()

audio = np.frombuffer(raw_data, dtype=np.int16).reshape(-1, 2).astype(np.float32)
print("Audio shape:", audio.shape)

sr = 48000
crossfade_len = int(0.5 * sr) # 24000 samples
total_len = int(10.0 * sr)     # 480000 samples
audio = audio[:total_len]

# Part 1: from 0.5s to 10.0s (samples 24000 to 480000, length 456000)
# Part 2: from 0.0s to 0.5s (samples 0 to 24000, length 24000)
part1 = audio[crossfade_len:total_len].copy()
part2 = audio[0:crossfade_len].copy()

# In part1, the last crossfade_len samples (from 9.0s to 9.5s, i.e. 432000 to 456000)
# will be crossfaded with part2 (0 to 24000)
t = np.linspace(0.0, 1.0, crossfade_len, endpoint=False).reshape(-1, 1)
# Equal power crossfade or smooth linear
w_out = np.cos(t * np.pi / 2) # from 1 to 0
w_in = np.sin(t * np.pi / 2)  # from 0 to 1

# Blended region
blended = part1[-crossfade_len:] * w_out + part2 * w_in
part1[-crossfade_len:] = blended

out_audio = np.clip(part1, -32768, 32767).astype(np.int16)
with open('scratch_looped_audio.raw', 'wb') as f:
    f.write(out_audio.tobytes())
print("Processed looped audio. Length in seconds:", len(out_audio) / sr)

# 2. Process video + audio into hero.mp4 and hero.webm
# Crop parameters:
crop_filter = "crop=848:1060:536:10,scale=768:960,colorlevels=rimax=0.98:gimax=0.98:bimax=0.98"

# Video filter with xfade
# Split into Part 1 (0.5 to 10.0, duration 9.5) and Part 2 (0.0 to 0.5, duration 0.5)
# xfade offset 9.0, duration 0.5
vf = (
    f"[0:v]{crop_filter},split=2[v1][v2];"
    f"[v1]trim=start=0.5:end=10.0,settb=AVTB,setpts=PTS-STARTPTS,fps=24[p1];"
    f"[v2]trim=start=0.0:end=0.5,settb=AVTB,setpts=PTS-STARTPTS,fps=24[p2];"
    f"[p1][p2]xfade=transition=fade:duration=0.5:offset=9.0[v_out]"
)

# Export hero.mp4
print("Rendering hero.mp4...")
mp4_cmd = [
    ffmpeg, '-y',
    '-i', 'intro.mp4',
    '-f', 's16le', '-ar', '48000', '-ac', '2', '-i', 'scratch_looped_audio.raw',
    '-filter_complex', vf,
    '-map', '[v_out]',
    '-map', '1:a',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-crf', '24',
    '-preset', 'slow',
    '-c:a', 'aac',
    '-b:a', '96k',
    '-movflags', '+faststart',
    '-t', '9.5',
    'public/hero/hero.mp4'
]
subprocess.run(mp4_cmd, check=True)
print("Rendered public/hero/hero.mp4!")

# Export hero.webm
print("Rendering hero.webm...")
webm_cmd = [
    ffmpeg, '-y',
    '-i', 'intro.mp4',
    '-f', 's16le', '-ar', '48000', '-ac', '2', '-i', 'scratch_looped_audio.raw',
    '-filter_complex', vf,
    '-map', '[v_out]',
    '-map', '1:a',
    '-c:v', 'libvpx-vp9',
    '-crf', '36',
    '-b:v', '0',
    '-c:a', 'libopus',
    '-b:a', '80k',
    '-t', '9.5',
    'public/hero/hero.webm'
]
subprocess.run(webm_cmd, check=True)
print("Rendered public/hero/hero.webm!")

# 3. Portrait bust (480x600) and og.jpg (1200x630)
# From photo_hajar.png
photo = Image.open('photo_hajar.png')
pw, ph = photo.size
crop_w = int(pw * 0.9)
crop_h = int(crop_w * 600 / 480)
x0 = int((pw - crop_w) / 2)
y0 = 30
bust = photo.crop((x0, y0, x0 + crop_w, y0 + crop_h)).resize((480, 600), Image.Resampling.LANCZOS)
bust.save('public/portrait-bust.webp', 'WEBP', quality=92)
print("Saved public/portrait-bust.webp (480x600)")

# og.jpg (1200x630)
og = Image.new('RGB', (1200, 630), color=(244, 242, 238)) # #f4f2ee paper
# Paste bust or photo on right side
bust_thumb = bust.resize((int(630 * 480 / 600), 630), Image.Resampling.LANCZOS)
og.paste(bust_thumb, (1200 - bust_thumb.width - 60, 0))
og.save('public/og.jpg', 'JPEG', quality=90)
print("Saved public/og.jpg (1200x630)")
