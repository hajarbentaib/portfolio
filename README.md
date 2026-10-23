# Portfolio — Hajar Bentaib (AI & Data Engineer)

A calm, high-performance, production-ready personal portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

The site is designed following the quiet luxury aesthetic: warm paper background (`#f4f2ee`), crisp ink typography (`#0d0d0d`), balanced grays, seamless scroll dynamics with **Lenis**, self-hosted typography, and zero extraneous dependencies.

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18.18 (tested on Node v22 LTS)
- Python 3.10+ (for hero video processing scripts)

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run the local development server
npm run dev

# 3. Production build & start
npm run build
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the live site.

---

## 📐 Sections Table

| # | Section | Component | Source in Résumé | Animation & Interactivity |
|---|---|---|---|---|
| 01 | **Hero** | `src/components/hero/Hero.tsx` | Role: AI & Data Engineer, Status: Master IA FSBM, Casablanca, Maroc | Seamless looping video (VP9/H.264), multiply blend mode, muted autoplay with audio unlock on first user interaction, auto-pause when scrolled away (&lt;35% visible), round sound toggle button. |
| 02 | **About** | `src/components/sections/About.tsx` | Verbatim profile summary, quote, FSBM Master & Licence details, contact | 3-column layout with a realistic hanging ID card on a lanyard: damped pendulum swing tracking pointer velocity, idle sway, 3D flip card (hover/tap/keyboard Enter). |
| 03 | **Skills** | `src/components/sections/Skills.tsx` | 35 exact skills & tools from résumé (ML, Big Data, DevOps, Full Stack, Languages) | Periodic table grid (8 cols desktop / 4 mobile) with diagonal wave entrance, family category filtering chips, and sticky interactive Inspector panel showing official brand SVGs & soft tint glow. |
| 04 | **Work** | `src/components/sections/Work.tsx` | 8 projets complets (Big Data streaming, MLOps EarthquakeSafe, DevOps K8s AWS, Drug Discovery IA, Anticancéreux GDSC2, Scraping Voitures Avito, Matching CV IA, Prédiction d'Admission PFE) | Système d'onglets interactif multi-vues par projet : 1. Vue d'ensemble & Méthodologie, 2. Schéma d'Architecture en 5 étapes dynamiques, 3. Démonstration Vidéo MP4 intégrée, 4. Code & Commandes de reproduction (Git, Docker, Conda) + Téléchargement des Rapports de Recherche PDF. |
| 05 | **Experience** | `src/components/sections/Experience.tsx` | Chronological education (Master & Licence d'Excellence Mention Très Bien) and professional internships (CAT Assurance & AWAL) | Continuous scroll-drawn spine lighting up timeline nodes sequentially as they enter view, ending with dashed card *"Next — Votre équipe ?"*. |
| 06 | **Contact & Footer** | `src/components/sections/Contact.tsx` | Email (`hajaar.bentaib@gmail.com`), phone (`+212 660-139160`), GitHub, LinkedIn | Bouncing interactive typography on heading letters, one-click email copy chip with `aria-live`, spinning circular *"Say Hello"* badge, and semantic footer. |

---

## 🎥 Hero Video Pipeline (`scripts/build-hero-assets.py`)

The hero video is generated from the original source file using FFmpeg and NumPy to create a zero-jump, seamless loop:

1. **Centering & Tight Head-to-Toe Crop**:
   ```
   crop=848:1060:536:10,scale=768:960
   ```
   Centers the speaker with natural headroom and vertical alignment.
2. **Whitening the Background**:
   ```
   colorlevels=rimax=0.98:gimax=0.98:bimax=0.98
   ```
   Makes the backdrop pure white, enabling clean `mix-blend-mode: multiply` into the warm `#f4f2ee` paper background.
3. **Sample-Accurate Loop Cross-Fade**:
   - Trims to 9.5 s total loop duration.
   - Cross-fades the final 0.5 s into the first 0.5 s using FFmpeg `xfade=transition=fade:duration=0.5:offset=9.0`.
   - Audio is extracted as raw 48 kHz 16-bit PCM and cross-faded sample-accurately in NumPy with an equal-power sine/cosine curve, avoiding audio drops or phase clicks.
4. **Export Formats**:
   - `public/hero/hero.webm`: VP9 (CRF 36, Opus audio 80 kbps)
   - `public/hero/hero.mp4`: H.264 (CRF 24, slow preset, AAC audio 96 kbps, +faststart)
   - `public/portrait-bust.webp`: 480×600 head-to-shirt crop still
   - `public/og.jpg`: 1200×630 OpenGraph social share card

To rebuild hero assets anytime:
```bash
python scripts/build-hero-assets.py
```

---

## 🛠 Projets Détaillés, Schémas d'Architecture & Démonstrations Vidéo

Chaque projet dans `src/lib/data.ts` est exhaustif et s'appuie directement sur les travaux de recherche et d'ingénierie réels de Hajar :

```typescript
export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  kicker: string;
  category: "Data & Big Data" | "MLOps & Cloud" | "IA & Santé" | "NLP & Sémantique" | "Full Stack & ML";
  year: string;
  description: string;
  detailedExplanation: string;
  datasetInfo: string;
  methodology: string[];
  features: string[];
  tech: string[];
  github?: string;
  videoUrl?: string;           // Vidéo de démonstration MP4 native (/videos/*.mp4)
  docUrl?: string;             // Rapport académique complet en PDF (/docs/*.pdf)
  architectureSteps: {
    step: string;
    title: string;
    tools: string[];
    description: string;
  }[];
  metrics?: { label: string; value: string }[];
  installCommand?: string;
  uiType: "streaming" | "mlops" | "devops" | "pharma" | "cancer" | "cars" | "matching" | "admission";
}
```

### Projets Inclus :
1. **Pipeline Big Data & Streaming (Kafka – Flink – Spark – HDFS)** — Ingestion temps réel 98k+ msgs/s, stockage distribué dual HDFS & Elasticsearch, dashboard Kibana.
2. **EarthquakeSafe (MLOps End-to-End)** — Pipeline automatisé dlt + DuckDB + dbt + Dagster + MLflow + FastAPI SHAP + CI/CD.
3. **Infrastructure DevOps & Kubernetes sur AWS** — IaC Terraform, Playbooks Ansible, cluster Kubernetes Master/Worker (Flannel), rolling updates sans interruption.
4. **Drug Discovery IA (Binding Affinity DAVIS & BACE)** — Bioinformatique, représentations SMILES, régression pKd, application Streamlit. *(Inclut vidéo MP4 + Rapport PDF)*.
5. **Prédiction de Réponse Anticancéreuse (GDSC2 & Sanger)** — Modélisation GroupKFold par lignée COSMIC_ID, HistGradientBoosting, IC50. *(Inclut Rapport PDF)*.
6. **Scraping & Estimation du Prix des Voitures (Avito.ma)** — Collecte BeautifulSoup, XGBoost / LightGBM, Streamlit. *(Inclut vidéo MP4)*.
7. **Matching Intelligent Offres & Profils (NLP Sémantique)** — Plongements SentenceTransformers all-MiniLM-L6-v2, 20k offres HuggingFace, similarité cosinus. *(Inclut vidéo MP4)*.
8. **Système Prédictif d'Admission Étudiante (PFE)** — Rééquilibrage SMOTE/ADASYN, CatBoost / LightGBM, portal Streamlit. *(Inclut vidéo MP4)*.

---

## 📜 Credits & Licences

- **Fonts**:
  - *Inter Tight*: SIL Open Font License (OFL) by Rasmus Andersson
  - *Instrument Serif*: SIL Open Font License (OFL) by Instrument & Rodrigo Fuenzalida
  - *JetBrains Mono*: SIL Open Font License (OFL) by JetBrains
- **Brand Logos**:
  - Official brand SVGs are stored in `public/logos/` under the MIT License (Devicon) and CC0 (Simple Icons).
- **Libraries**:
  - Smooth scrolling powered by [Lenis](https://github.com/darkroomengineering/lenis) (MIT License).
