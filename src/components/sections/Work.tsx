"use client";

import React, { useState } from "react";
import { PROJECTS, ProjectItem } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechLogo } from "@/components/ui/TechLogo";

type ActiveTab = "overview" | "schema" | "video" | "code";

export function Work() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [activeTab, setActiveTab] = useState<Record<string, ActiveTab>>({});

  const categories = [
    "Tous",
    "Data & Big Data",
    "MLOps & Cloud",
    "IA & Santé",
    "NLP & Sémantique",
    "Full Stack & ML",
    "Deep Learning & Optimisation",
  ];

  const filteredProjects =
    selectedCategory === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getTab = (projectId: string): ActiveTab => {
    return activeTab[projectId] || "overview";
  };

  const setTab = (projectId: string, tab: ActiveTab) => {
    setActiveTab((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="work" className="py-[var(--section-pad)] bg-[var(--paper)]">
      <div className="section-container">
        <SectionHeader
          index="03"
          tag="Réalisations & Projets"
          title="Architectures de données, MLOps &amp;"
          accentWord="systèmes IA."
          description="Systèmes de streaming temps réel, plateformes MLOps automatisées, infrastructures cloud Kubernetes, modélisations biomédicales et recherche sémantique."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 rv">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isSelected
                    ? "bg-[var(--ink)] text-white shadow-sm"
                    : "bg-white text-[var(--ink-2)] border border-[var(--line)] hover:border-[var(--ink)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid / Cards */}
        <div className="space-y-12">
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-[var(--mute)]">
              <span className="font-mono text-sm">Aucun projet dans cette catégorie.</span>
            </div>
          )}
          {filteredProjects.map((project, idx) => {
            const currentTab = getTab(project.id);

            return (
              <article
                key={`${selectedCategory}-${project.id}`}
                className="card-premium overflow-hidden border border-[var(--line)] bg-white p-6 sm:p-10 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Top Bar: Index, Kicker, Year, Category Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[var(--line)]">
                  <div className="flex items-center gap-3 font-mono text-xs text-[var(--mute)]">
                    <span className="font-bold text-[var(--ink)] text-sm">
                      {project.index}
                    </span>
                    <span>/</span>
                    <span className="uppercase tracking-wider">{project.kicker}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#f4f2ee] text-[var(--ink-2)] border border-[var(--line)]">
                      {project.category}
                    </span>
                    {project.videoUrl && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Démo Vidéo Incluse
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Header & Pitch */}
                <div className="pt-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--ink)] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[var(--ink-2)] leading-relaxed font-normal mb-6 max-w-4xl">
                    {project.description}
                  </p>
                </div>

                {/* Sub-Navigation Tabs within Project Card */}
                <div className="flex flex-wrap items-center gap-2 pt-2 pb-6 border-b border-[var(--line)]">
                  <button
                    onClick={() => setTab(project.id, "overview")}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      currentTab === "overview"
                        ? "bg-[var(--ink)] text-white"
                        : "bg-[#f4f2ee] text-[var(--ink-2)] hover:bg-[#e9e6e0]"
                    }`}
                  >
                    Vue d'ensemble &amp; Fonctionnalités
                  </button>

                  <button
                    onClick={() => setTab(project.id, "schema")}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                      currentTab === "schema"
                        ? "bg-[var(--ink)] text-white"
                        : "bg-[#f4f2ee] text-[var(--ink-2)] hover:bg-[#e9e6e0]"
                    }`}
                  >
                    <span>📐 Schéma d'Architecture</span>
                  </button>

                  {project.videoUrl && (
                    <button
                      onClick={() => setTab(project.id, "video")}
                      className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                        currentTab === "video"
                          ? "bg-[var(--ink)] text-white"
                          : "bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100"
                      }`}
                    >
                      <span>▶ Démonstration Vidéo</span>
                    </button>
                  )}

                  <button
                    onClick={() => setTab(project.id, "code")}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                      currentTab === "code"
                        ? "bg-[var(--ink)] text-white"
                        : "bg-[#f4f2ee] text-[var(--ink-2)] hover:bg-[#e9e6e0]"
                    }`}
                  >
                    <span>💻 Code &amp; Déploiement</span>
                  </button>
                </div>

                {/* TAB 1: OVERVIEW & FEATURES */}
                {currentTab === "overview" && (
                  <div className="pt-8 space-y-8 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Detailed context & methodology */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mute)] mb-2">
                            Explication Technique Approfondie
                          </h4>
                          <p className="text-sm sm:text-base text-[var(--ink-2)] leading-relaxed">
                            {project.detailedExplanation}
                          </p>
                        </div>

                        {project.datasetInfo && (
                          <div className="p-4 rounded-2xl bg-[#faf9f7] border border-[var(--line)]">
                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mute)] block mb-1">
                              Données &amp; Sources de Référence
                            </span>
                            <p className="text-xs sm:text-sm text-[var(--ink)] font-medium">
                              {project.datasetInfo}
                            </p>
                          </div>
                        )}

                        <div>
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mute)] mb-3">
                            Rigueur Méthodologique &amp; Bonnes Pratiques
                          </h4>
                          <ul className="space-y-2">
                            {project.methodology.map((m, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink-2)]"
                              >
                                <span className="text-[var(--ink)] font-bold">▪</span>
                                <span>{m}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Metrics & Interactive Mini-UI */}
                      <div className="lg:col-span-5 space-y-6">
                        {/* Metrics Bar */}
                        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#f4f2ee] border border-[var(--line)] text-center">
                          {project.metrics.map((met, idx) => (
                            <div key={idx} className="p-2">
                              <span className="text-[10px] font-mono text-[var(--mute)] uppercase block">
                                {met.label}
                              </span>
                              <span className="text-sm font-bold text-[var(--ink)] mt-0.5 block">
                                {met.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Illustrative Grayscale UI */}
                        <IllustrativeUI type={project.uiType} />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: SCHEMA & PIPELINE ARCHITECTURE */}
                {currentTab === "schema" && (
                  <div className="pt-8 space-y-6 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mute)]">
                        Schéma de Flux &amp; Pipeline de Données
                      </h4>
                      <span className="text-xs text-[var(--mute)] font-mono">
                        {project.architectureSteps.length} Étapes d'Ingénierie
                      </span>
                    </div>

                    {/* Step-by-Step Architecture Pipeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      {project.architectureSteps.map((step, idx) => (
                        <div
                          key={idx}
                          className="relative p-5 rounded-2xl bg-[#faf9f7] border border-[var(--line)] flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="w-6 h-6 rounded-full bg-[var(--ink)] text-white font-mono text-[11px] font-bold flex items-center justify-center">
                                {step.step}
                              </span>
                              {idx < project.architectureSteps.length - 1 && (
                                <span className="text-xs text-[var(--mute)] hidden lg:inline-block font-mono">
                                  →
                                </span>
                              )}
                            </div>

                            <h5 className="text-sm font-bold text-[var(--ink)] mb-1">
                              {step.title}
                            </h5>

                            <p className="text-xs text-[var(--ink-2)] leading-relaxed mb-4">
                              {step.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1 pt-3 border-t border-[var(--line)]">
                            {step.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-[var(--line)] text-[var(--ink-2)]"
                              >
                                <TechLogo nameKey={tool} size={12} />
                                <span>{tool}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: VIDEO DEMONSTRATION */}
                {currentTab === "video" && project.videoUrl && (
                  <div className="pt-8 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mute)]">
                        Enregistrement de Démonstration en Direct
                      </h4>
                      <span className="text-xs text-emerald-800 font-mono font-medium">
                        Vidéo HD Interactive
                      </span>
                    </div>

                    <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-xl aspect-video border border-black/20">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain"
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Votre navigateur ne supporte pas la balise vidéo.
                      </video>
                    </div>

                    <p className="text-xs text-[var(--mute)] font-mono text-center">
                      Astuce : Utilisez le mode plein écran pour observer les interactions de l'application en détail.
                    </p>
                  </div>
                )}

                {/* TAB 4: CODE & REPRODUCTION */}
                {currentTab === "code" && (
                  <div className="pt-8 space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-[#faf9f7] border border-[var(--line)] space-y-4">
                        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mute)]">
                          Reproduction &amp; Commandes Locales
                        </h4>
                        <div className="space-y-3 font-mono text-xs">
                          <div>
                            <span className="text-[var(--mute)] block text-[10px] uppercase mb-1">
                              1. Cloner le projet
                            </span>
                            <div className="p-2.5 rounded-lg bg-[#141414] text-gray-200">
                              git clone {project.github}
                            </div>
                          </div>

                          <div>
                            <span className="text-[var(--mute)] block text-[10px] uppercase mb-1">
                              2. Lancement immédiat
                            </span>
                            <div className="p-2.5 rounded-lg bg-[#141414] text-emerald-400">
                              {project.installCommand}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-[#faf9f7] border border-[var(--line)] flex flex-col justify-between">
                        <div>
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--mute)] mb-2">
                            Dépôt Git &amp; Documentation
                          </h4>
                          <p className="text-xs text-[var(--ink-2)] leading-relaxed mb-4">
                            Consultez le code source complet, les notebooks d'expérimentation, les fichiers Dockerfile et les pipelines CI/CD.
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-pill-primary text-xs"
                          >
                            <span>Dépôt GitHub</span>
                            <span>↗</span>
                          </a>

                          {project.docUrl && (
                            <a
                              href={project.docUrl}
                              download
                              className="btn-pill-secondary text-xs"
                            >
                              <span>{project.docTitle || "Rapport PDF"}</span>
                              <span>↓</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer of Card: Tech Chips + Direct Action Buttons */}
                <div className="pt-8 mt-8 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#f4f2ee] text-[var(--ink-2)] border border-[var(--line)]"
                      >
                        <TechLogo nameKey={t} size={13} />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.videoUrl && currentTab !== "video" && (
                      <button
                        onClick={() => setTab(project.id, "video")}
                        className="btn-pill-secondary text-xs py-2 px-4 border-emerald-300 text-emerald-900 bg-emerald-50/60 hover:bg-emerald-100"
                      >
                        <span>Regarder la démo ▶</span>
                      </button>
                    )}

                    {project.docUrl && (
                      <a
                        href={project.docUrl}
                        download
                        className="btn-pill-secondary text-xs py-2 px-4"
                      >
                        <span>Rapport PDF ↓</span>
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-pill-primary text-xs py-2 px-4"
                    >
                      <span>Voir sur GitHub</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Illustrative Mini-UI components in pure CSS / JSX (Grayscale with subtle accents, clearly labeled)
function IllustrativeUI({ type }: { type: ProjectItem["uiType"] }) {
  return (
    <div className="w-full bg-[#141414] text-white rounded-2xl p-5 border border-[#2a2a2a] shadow-lg flex flex-col justify-between select-none relative overflow-hidden min-h-[260px]">
      <div className="flex items-center justify-between border-b border-[#282828] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] font-mono text-gray-400 ml-2 uppercase tracking-wider">
            {type.toUpperCase()} MONITOR
          </span>
        </div>
        <span className="text-[9px] font-mono bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">
          Live Status
        </span>
      </div>

      {type === "streaming" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
            <span className="text-gray-400">Kafka Broker Partition</span>
            <span className="text-emerald-400">98,420 msgs/s</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
            <span className="text-gray-400">HDFS Storage Replication</span>
            <span className="text-gray-200">3x Synced</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
            <span className="text-gray-400">Apache Flink Windowing</span>
            <span className="text-blue-400">Latency: 14ms</span>
          </div>
        </div>
      )}

      {type === "mlops" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
            <span className="text-gray-400">dbt Marts &amp; Quality</span>
            <span className="text-emerald-400">12/12 Tests Passés</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
            <span className="text-gray-400">Dagster Orchestration</span>
            <span className="text-blue-400">DAG Executed: 0 Error</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
            <span className="text-gray-400">MLflow Model Registry</span>
            <span className="text-emerald-400">Production v2.1</span>
          </div>
        </div>
      )}

      {type === "devops" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-2 rounded">
              <span className="block text-emerald-400 font-bold">PYTEST</span>
              <span className="text-gray-400 text-[8px]">PASS</span>
            </div>
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-2 rounded">
              <span className="block text-emerald-400 font-bold">DOCKER</span>
              <span className="text-gray-400 text-[8px]">BUILT</span>
            </div>
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-2 rounded">
              <span className="block text-emerald-400 font-bold">AWS</span>
              <span className="text-gray-400 text-[8px]">ACTIVE</span>
            </div>
            <div className="bg-blue-950/60 border border-blue-500/30 p-2 rounded">
              <span className="block text-blue-400 font-bold">K8S</span>
              <span className="text-gray-400 text-[8px]">DEPLOY</span>
            </div>
          </div>
          <div className="p-2 rounded bg-white/5 text-[11px] text-gray-300">
            $ kubectl get nodes <br />
            <span className="text-gray-400">ip-10-0-1-50 (Master) Ready | ip-10-0-1-51 (Worker) Ready</span>
          </div>
        </div>
      )}

      {type === "drugdiscovery" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">DAVIS Benchmark (Kd)</span>
            <span className="text-emerald-400 font-bold">R² = 0.88</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">BACE Binary Inhibition</span>
            <span className="text-blue-400 font-bold">ROC-AUC 0.92</span>
          </div>
          <div className="text-[11px] text-gray-400 pt-1">
            Criblage moléculaire instantané par Joblib artifacts
          </div>
        </div>
      )}

      {type === "pharma" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-gray-400 text-[11px]">
            <span>Validation GroupKFold</span>
            <span className="text-emerald-400">COSMIC_ID Partition</span>
          </div>
          <div className="h-16 w-full bg-white/5 rounded border border-white/5 flex items-end p-2 gap-1.5">
            {[24, 38, 45, 62, 70, 78, 85, 92, 95].map((val, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-gray-700 to-gray-300 rounded-t-sm"
                style={{ height: `${val}%` }}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 block text-right">
            Zero Data Leakage garanti sur LN_IC50 &amp; AUC
          </span>
        </div>
      )}

      {type === "cars" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">Maroc Autos Scraping</span>
            <span className="text-emerald-400">12,500 fiches</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">Modèle LightGBM / XGBoost</span>
            <span className="text-gray-200">R² = 0.91</span>
          </div>
          <div className="text-[11px] text-gray-400 pt-1">
            Estimation marchande instantanée par régression
          </div>
        </div>
      )}

      {type === "matching" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between p-2 rounded bg-white/5">
            <span className="text-gray-400">SentenceTransformer</span>
            <span className="text-emerald-400 font-bold">all-MiniLM-L6-v2</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {["NLP Cosine", "20k HuggingFace Jobs", "PdfPlumber", "Bidirectionnel"].map((tag, i) => (
              <span key={i} className="text-[9px] bg-white/10 px-2 py-0.5 rounded text-gray-300">
                ✓ {tag}
              </span>
            ))}
          </div>
          <span className="text-[10px] text-gray-500 block">
            Recommandation de profil automatisée
          </span>
        </div>
      )}

      {type === "admission" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">Sur-échantillonnage</span>
            <span className="text-emerald-400">SMOTE + ADASYN</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-400 block">F1-Score</span>
              <span className="text-gray-200 font-bold text-xs">Optimisé minorité</span>
            </div>
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-400 block">Algorithme</span>
              <span className="text-gray-200 font-bold text-xs">CatBoost / LGBM</span>
            </div>
          </div>
        </div>
      )}

      {type === "compression" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center bg-white/5 p-2 rounded">
            <span className="text-gray-400">Quantification Dynamic</span>
            <span className="text-emerald-400 font-bold">FP32 → qint8 (-69.6%)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-400 block">Taille Modèle</span>
              <span className="text-gray-200 font-bold text-xs">244.9 KB → 74.3 KB</span>
            </div>
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-400 block">Précision Réseau</span>
              <span className="text-gray-200 font-bold text-xs">96.20% (Δ -0.13%)</span>
            </div>
          </div>
          <div className="text-[10px] text-gray-400">
            Pruning non-structuré 40% + Optimisation Adam/L-BFGS
          </div>
        </div>
      )}

      <div className="pt-3 border-t border-[#252525] flex justify-between items-center text-[9px] font-mono text-gray-500">
        <span>STATUS: PRODUCTION READY</span>
        <span>BENCHMARKS VALIDÉS</span>
      </div>
    </div>
  );
}
