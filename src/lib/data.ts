export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  kicker: string;
  headlineRole: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  resumeSummary: string;
  extraLine: string;
  quote: string;
  github: string;
  linkedin: string;
  portfolio: string;
  resume: string;
  idCard: {
    idNumber: string;
    dept: string;
    validTill: string;
    degree: string;
    academicHonour: string;
    bulletPoints: string[];
  };
}

export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface SkillElement {
  atomicNumber: number;
  symbol: string;
  name: string;
  family: 'Languages' | 'Machine Learning' | 'Data & Big Data' | 'DevOps & Cloud' | 'Full Stack' | 'Concepts' | 'Tools';
  brandKey?: string;
  projects: string[];
}

export interface ArchitectureStep {
  step: string;
  title: string;
  tools: string[];
  description: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  kicker: string;
  category: 'Data & Big Data' | 'MLOps & Cloud' | 'IA & Santé' | 'NLP & Sémantique' | 'Full Stack & ML' | 'Deep Learning & Optimisation';
  year: string;
  description: string;
  detailedExplanation: string;
  datasetInfo: string;
  methodology: string[];
  features: string[];
  tech: string[];
  github: string;
  videoUrl?: string;
  docUrl?: string;
  docTitle?: string;
  architectureSteps: ArchitectureStep[];
  metrics: { label: string; value: string }[];
  installCommand: string;
  uiType: 'admission' | 'matching' | 'pharma' | 'cars' | 'streaming' | 'devops' | 'mlops' | 'drugdiscovery' | 'compression';
}

export interface TimelineEntry {
  year: string;
  title: string;
  place: string;
  detail: string;
  type: 'education' | 'experience';
  badge?: string;
}

export interface CertificationItem {
  index: string;
  title: string;
  issuer: string;
  year?: string;
  url?: string;
}

export interface AchievementItem {
  index: string;
  platform: string;
  logoKey: string;
  label: string;
  caption: string;
  detail: string;
  metricNumber: number;
  metricSuffix: string;
  brandColor?: string;
}

export const PROFILE: Profile = {
  name: "Hajar Bentaib",
  firstName: "HAJAR",
  lastName: "BENTAIB",
  initials: "HB",
  role: "Étudiante Master d’excellence en IA · Candidate PFE",
  kicker: "Casablanca, Maroc",
  headlineRole: "AI & Data Engineer.",
  email: "hajaar.bentaib@gmail.com",
  phone: "+212 660-139160",
  phoneHref: "tel:+212660139160",
  location: "Casablanca, Maroc",
  resumeSummary: "Étudiante ambitieuse en IA avec un portfolio solide couvrant différents aspects de la data et de l’intelligence artificielle. Convaincue que l’impact réel naît de l’alliance entre rigueur académique et ingénierie pratique. À la recherche d’un stage PFE pour contribuer à des projets à forte valeur ajoutée.",
  extraLine: "À la recherche d’un stage PFE pour contribuer à des projets à forte valeur ajoutée.",
  quote: "L’impact réel naît de l’alliance entre rigueur académique et ingénierie pratique.",
  github: "https://github.com/hajarbentaib",
  linkedin: "https://www.linkedin.com/in/hajar-bentaib-70a32227a",
  portfolio: "https://hajarbentaib.github.io/portfolio/",
  resume: "/resume.pdf",
  idCard: {
    idNumber: "HB-2027-FSBM",
    dept: "Master IA Ben M'Sick",
    validTill: "2027",
    degree: "Master d’Excellence en IA (2025–2027)",
    academicHonour: "Licence d’Excellence avec Mention Très Bien",
    bulletPoints: [
      "Master & Licence d’Excellence en Intelligence Artificielle (FSBM)",
      "Licence d’Excellence obtenue avec Mention Très Bien",
      "Stagiaire PFE Full-Stack (CAT Assurance) & Front-End (AWAL)",
      "Projets complets en Streaming Big Data, MLOps, NLP, Vision & DevOps",
      "Compétences : Python, Scikit-Learn, PyTorch, Kafka, Flink, Spark, Docker, K8s, dbt"
    ]
  }
};

export const NAV: NavItem[] = [
  { label: "About", href: "#about", index: "01" },
  { label: "Skills", href: "#skills", index: "02" },
  { label: "Work", href: "#work", index: "03" },
  { label: "Experience", href: "#experience", index: "04" },
  { label: "Contact", href: "#contact", index: "05" }
];

export const SKILL_FAMILIES = [
  "All",
  "Languages",
  "Machine Learning",
  "Data & Big Data",
  "DevOps & Cloud",
  "Full Stack",
  "Concepts",
  "Tools"
] as const;

export const SKILLS: SkillElement[] = [
  { atomicNumber: 1, symbol: "Py", name: "Python", family: "Languages", brandKey: "python", projects: ["Drug Discovery AI", "EarthquakeSafe MLOps", "Streaming Pipeline", "Prédiction Prix Voitures"] },
  { atomicNumber: 2, symbol: "Sq", name: "SQL", family: "Languages", brandKey: "sql", projects: ["Pipeline Big Data", "dbt Data Models", "DuckDB Warehouse"] },
  { atomicNumber: 3, symbol: "Sk", name: "Scikit-Learn", family: "Machine Learning", brandKey: "scikitlearn", projects: ["Admission Licences", "Matching CV–Offre", "Cancer Drug Sensitivity"] },
  { atomicNumber: 4, symbol: "Pt", name: "PyTorch", family: "Machine Learning", brandKey: "pytorch", projects: ["Cancer Drug Sensitivity", "Computer Vision"] },
  { atomicNumber: 5, symbol: "Xg", name: "XGBoost", family: "Machine Learning", brandKey: "xgboost", projects: ["Prédiction Prix Voitures", "EarthquakeSafe"] },
  { atomicNumber: 6, symbol: "Lg", name: "LightGBM", family: "Machine Learning", brandKey: "lightgbm", projects: ["Prédiction Prix Voitures", "PFE Admission"] },
  { atomicNumber: 7, symbol: "Cb", name: "CatBoost", family: "Machine Learning", brandKey: "catboost", projects: ["PFE Admission (Imbalanced Data)"] },
  { atomicNumber: 8, symbol: "Kf", name: "Apache Kafka", family: "Data & Big Data", brandKey: "kafka", projects: ["Pipeline Big Data Streaming"] },
  { atomicNumber: 9, symbol: "Fl", name: "Apache Flink", family: "Data & Big Data", brandKey: "apacheflink", projects: ["Real-time Event Processing"] },
  { atomicNumber: 10, symbol: "Sp", name: "Apache Spark", family: "Data & Big Data", brandKey: "spark", projects: ["Pipeline Big Data"] },
  { atomicNumber: 11, symbol: "Hd", name: "HDFS", family: "Data & Big Data", brandKey: "hadoop", projects: ["Pipeline Big Data (Pydoop)"] },
  { atomicNumber: 12, symbol: "Es", name: "Elasticsearch", family: "Data & Big Data", brandKey: "elasticsearch", projects: ["Sink de Streaming & Indexation"] },
  { atomicNumber: 13, symbol: "Dk", name: "Docker", family: "DevOps & Cloud", brandKey: "docker", projects: ["DevOps K8s Cluster", "EarthquakeSafe MLOps"] },
  { atomicNumber: 14, symbol: "K8", name: "Kubernetes", family: "DevOps & Cloud", brandKey: "kubernetes", projects: ["DevOps AWS EC2 Cluster"] },
  { atomicNumber: 15, symbol: "An", name: "Ansible", family: "DevOps & Cloud", brandKey: "ansible", projects: ["DevOps Cluster Provisioning"] },
  { atomicNumber: 16, symbol: "Tf", name: "Terraform", family: "DevOps & Cloud", brandKey: "terraform", projects: ["Infrastructure as Code (AWS)"] },
  { atomicNumber: 17, symbol: "Lx", name: "Linux", family: "DevOps & Cloud", brandKey: "linux", projects: ["DevOps & Big Data Clusters"] },
  { atomicNumber: 18, symbol: "Gt", name: "Git & GitHub", family: "Tools", brandKey: "git", projects: ["Tous les projets"] },
  { atomicNumber: 19, symbol: "Fa", name: "FastAPI", family: "Full Stack", brandKey: "fastapi", projects: ["EarthquakeSafe Model API"] },
  { atomicNumber: 20, symbol: "St", name: "Streamlit", family: "Full Stack", brandKey: "streamlit", projects: ["Portails interactifs & Démos IA"] },
  { atomicNumber: 21, symbol: "Ml", name: "MLflow", family: "DevOps & Cloud", brandKey: "mlflow", projects: ["EarthquakeSafe MLOps Registry"] },
  { atomicNumber: 22, symbol: "Db", name: "dbt", family: "Data & Big Data", brandKey: "dbt", projects: ["Data Transformations & Marts"] },
  { atomicNumber: 23, symbol: "Dk", name: "DuckDB", family: "Data & Big Data", brandKey: "duckdb", projects: ["Entrepôt analytique local"] },
  { atomicNumber: 24, symbol: "Dg", name: "Dagster", family: "DevOps & Cloud", brandKey: "dagster", projects: ["Orchestration conditionnelle DAG"] },
  { atomicNumber: 25, symbol: "Hf", name: "Hugging Face", family: "Tools", brandKey: "huggingface", projects: ["SentenceTransformers all-MiniLM-L6-v2"] },
  { atomicNumber: 26, symbol: "Ft", name: "Flutter", family: "Full Stack", brandKey: "flutter", projects: ["CAT Assurance & Réassurance"] },
  { atomicNumber: 27, symbol: "Fb", name: "Firebase", family: "Full Stack", brandKey: "firebase", projects: ["CAT Assurance & Réassurance"] },
  { atomicNumber: 28, symbol: "Ng", name: "Angular", family: "Full Stack", brandKey: "angular", projects: ["AWAL Platform"] },
  { atomicNumber: 29, symbol: "Pd", name: "Pandas", family: "Tools", brandKey: "pandas", projects: ["EDA, Prédiction Prix Voitures"] },
  { atomicNumber: 30, symbol: "Np", name: "NumPy", family: "Tools", brandKey: "numpy", projects: ["Modèles de régression et classification"] },
  { atomicNumber: 31, symbol: "Nl", name: "NLP", family: "Concepts", projects: ["Moteur de Matching CV–Offre"] },
  { atomicNumber: 32, symbol: "Cv", name: "Computer Vision", family: "Concepts", projects: ["Classification biomédicale"] },
  { atomicNumber: 33, symbol: "Fe", name: "Feature Engineering", family: "Concepts", projects: ["Drug Discovery, Cars, GDSC2"] },
  { atomicNumber: 34, symbol: "Et", name: "ETL / ELT", family: "Concepts", projects: ["dlt, dbt, Spark, Kafka"] },
  { atomicNumber: 35, symbol: "Ag", name: "Agile / Scrum", family: "Concepts", projects: ["Jira, Product Backlogs, Sprints"] }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "big-data-streaming",
    index: "01",
    title: "Pipeline Big Data & Streaming (Kafka – Flink – Spark – HDFS)",
    kicker: "DISTRIBUTED STREAMING & ANALYTICS",
    category: "Data & Big Data",
    year: "2026",
    description: "Système complet de streaming de données en temps réel pour l'ingestion, le traitement distribué à faible latence et l'indexation avec Apache Kafka, Apache Flink, Apache Spark, HDFS et Elasticsearch/Kibana.",
    detailedExplanation: "Architecture de flux temps réel conçue pour traiter des flux continus de données à haut débit sans perte d'information. Les producteurs Kafka extraient les événements continus vers des topics partitionnés. Apache Flink (PyFlink) et Apache Spark Streaming consomment ces flux en micro-batches et fenêtres glissantes (windowing). Les données froides sont archivées de manière résiliente sur Hadoop HDFS via Pydoop, tandis que les métriques analytiques chaudes sont envoyées vers un sink Elasticsearch pour une restitution instantanée sur des tableaux de bord Kibana.",
    datasetInfo: "Flux d'événements continus en temps réel (API Twitter / flux transactionnels massifs).",
    methodology: [
      "Partitionnement dynamique des topics Kafka pour tolérance aux pannes et parallélisme",
      "Calcul distribué en streaming avec PyFlink (fenêtrage temporel et word count temps réel)",
      "Archivage distribué sur cluster Hadoop HDFS (réplication 3x)",
      "Indexation en temps réel sous Elasticsearch avec requêtage sub-seconde sur Kibana"
    ],
    features: [
      "Ingestion distribuée temps réel avec Apache Kafka Producers & Consumers",
      "Moteur de traitement de flux à très faible latence avec Apache Flink & Spark",
      "Double stockage : HDFS (stockage froid distribué) & Elasticsearch (stockage chaud)",
      "Visualisation et alerting temps réel sous Kibana"
    ],
    tech: ["Apache Kafka", "Apache Flink", "Apache Spark", "Hadoop", "Elasticsearch", "Python", "Docker"],
    github: "https://github.com/hajarbentaib/big-data-streaming-pipeline",
    architectureSteps: [
      { step: "01", title: "Sources & Ingestion", tools: ["Python API", "Kafka Producer"], description: "Extraction continue des flux bruts et envoi vers le broker Kafka." },
      { step: "02", title: "Broker & Partitionnement", tools: ["Apache Kafka", "Zookeeper"], description: "Distribution des événements sur des partitions répliquées et tolérantes aux pannes." },
      { step: "03", title: "Moteur de Streaming", tools: ["Apache Flink", "PyFlink", "Spark"], description: "Traitement continu, fenêtrage temps réel, agrégations et calculs analytiques." },
      { step: "04", title: "Stockage Dual & Indexation", tools: ["HDFS", "Elasticsearch"], description: "Archivage durable sur Hadoop HDFS et indexation immédiate sur Elasticsearch." },
      { step: "05", title: "Restitution Analytique", tools: ["Kibana Dashboard"], description: "Visualisation temps réel du débit, des métriques et alertes." }
    ],
    metrics: [
      { label: "Débit de traitement", value: "98k+ msgs/s" },
      { label: "Latence streaming", value: "< 25 ms" },
      { label: "Réplication HDFS", value: "3x résilient" }
    ],
    installCommand: "docker compose -f docker-compose.yml up -d",
    uiType: "streaming"
  },
  {
    id: "earthquakesafe-mlops",
    index: "02",
    title: "EarthquakeSafe — Pipeline MLOps Industriel de Bout en Bout",
    kicker: "ENTERPRISE MLOPS & AUTOMATED PIPELINES",
    category: "MLOps & Cloud",
    year: "2026",
    description: "Pipeline MLOps complet et automatisé : ingestion avec dlt, data warehouse DuckDB, transformations dbt, data contracts, orchestration Dagster, registry MLflow, explicabilité SHAP, API FastAPI conteneurisée et monitoring de drift.",
    detailedExplanation: "Conception d'une plateforme MLOps de niveau production pour la prédiction de la magnitude des séismes. Les données historiques brutes (USGS) sont ingérées via dlt dans un entrepôt analytique local DuckDB. Un projet dbt structure les données en 3 couches (staging → intermediate → marts `earthquake_features`) avec validation par contrats de données stricts. Dagster orchestre l'ensemble du DAG : si les tests de qualité des données échouent, l'entraînement ML est automatiquement suspendu. MLflow trace les runs, les hyperparamètres, les courbes d'apprentissage et gère le Model Registry. L'API FastAPI expose le modèle enregistré avec explication des contributions locales via SHAP. L'ensemble est conteneurisé avec Docker Compose et validé par un pipeline CI/CD GitHub Actions.",
    datasetInfo: "Base historique de séismes de l'USGS (United States Geological Survey) : coordonnées GPS, profondeur, type d'onde, magnitude et stations.",
    methodology: [
      "Architecture Data Warehouse en couches dbt (staging, intermediate, marts) avec data contracts",
      "Orchestration conditionnelle via Dagster : arrêt strict du pipeline en cas d'anomalie de schéma",
      "Experiment tracking complet et promotion des modèles via MLflow Model Registry",
      "Explicabilité temps réel avec SHAP explainer sur l'endpoint FastAPI /predict",
      "Surveillance de data drift et métriques de latence de production"
    ],
    features: [
      "Ingestion automatisée avec dlt vers DuckDB",
      "Transformation et tests d'intégrité avec dbt",
      "Orchestration des dépendances et alertes avec Dagster",
      "Model Registry & Métriques de runs avec MLflow",
      "Inférence REST FastAPI avec SHAP explications intégrées",
      "Pipeline CI/CD complet (Lint, PyTest, Docker Build) sur GitHub Actions"
    ],
    tech: ["dbt", "DuckDB", "Dagster", "MLflow", "FastAPI", "Docker", "Python", "Git"],
    github: "https://github.com/hajarbentaib/earthquakesafe-mlops",
    docUrl: "/docs/Rapport_MLOps_EarthquakeSafe.pdf",
    docTitle: "Consulter le Rapport MLOps Complet (PDF)",
    architectureSteps: [
      { step: "01", title: "Ingestion dlt", tools: ["dlt", "USGS API"], description: "Extraction et chargement automatisé des données de séismes." },
      { step: "02", title: "Warehouse & dbt", tools: ["DuckDB", "dbt core"], description: "Modélisation en couches staging/marts et exécution des tests d'unicité et de validité." },
      { step: "03", title: "Orchestration DAG", tools: ["Dagster"], description: "Orchestration conditionnelle : le check qualité conditionne l'entraînement ML." },
      { step: "04", title: "Tracking & Registry", tools: ["MLflow", "Scikit-Learn"], description: "Enregistrement des modèles retenus (Classifier & Regressor) avec traçabilité complète." },
      { step: "05", title: "Inférence & SHAP", tools: ["FastAPI", "SHAP"], description: "Exposition REST de la magnitude prédite avec contribution locale des features." }
    ],
    metrics: [
      { label: "Validation Qualité", value: "100% dbt tests passés" },
      { label: "Latence API", value: "18 ms / requête" },
      { label: "Couverture Tests", value: "PyTest CI/CD validé" }
    ],
    installCommand: "uvicorn api.main:app --reload && mlflow ui",
    uiType: "mlops"
  },
  {
    id: "devops-k8s-aws",
    index: "03",
    title: "Infrastructure DevOps Complète & Orchestration Kubernetes (AWS)",
    kicker: "CLOUD INFRASTRUCTURE & AUTOMATION",
    category: "MLOps & Cloud",
    year: "2026",
    description: "Infrastructure cloud reproductible déployée sur AWS avec Terraform, configurée avec Ansible, conteneurisée avec Docker et orchestrée sur cluster Kubernetes (Master & Worker) avec pipeline CI/CD GitHub Actions.",
    detailedExplanation: "Mise en place d'une chaîne DevOps complète garantissant haute disponibilité et déploiement continu sans interruption (zero-downtime rolling update). L'infrastructure AWS (instances EC2 master t3.medium et worker t3.micro, groupes de sécurité, règles réseau) est approvisionnée sous forme d'IaC via Terraform. Ansible configure automatiquement l'environnement (installation du runtime Docker, composants Kubernetes kubeadm/kubelet/kubectl et réseau Flannel CNI). Le workflow GitHub Actions exécute les tests unitaires (pytest), build et pousse l'image optimisée sur Docker Hub, puis déclenche un rolling update sur le cluster Kubernetes avec sondes livenessProbe et readinessProbe.",
    datasetInfo: "Application web REST Flask avec gestion d'état, persistance des données, endpoints statistiques et healthcheck.",
    methodology: [
      "Infrastructure as Code (IaC) déclarative avec Terraform pour les environnements cloud AWS",
      "Configuration Management automatisé et idempotent avec Ansible Playbooks",
      "Orchestration résiliente avec Kubernetes Deployments, Services, ConfigMaps et Probes",
      "Pipeline CI/CD en 3 étapes : Tests automatisés → Docker Hub Registry → Déploiement K8s"
    ],
    features: [
      "Provisioning cloud automatisé AWS EC2 avec Terraform",
      "Configuration du cluster K8s et CNI Flannel via Ansible",
      "Conteneurisation sécurisée avec Docker et serveur WSGI Gunicorn",
      "Rolling updates Kubernetes et sondes de santé liveness & readiness",
      "CI/CD entièrement automatisé sur GitHub Actions"
    ],
    tech: ["Kubernetes", "Docker", "Terraform", "Ansible", "AWS", "Flask", "Linux", "Git"],
    github: "https://github.com/hajarbentaib/devops-k8s-aws",
    architectureSteps: [
      { step: "01", title: "Git Push & CI Tests", tools: ["GitHub Actions", "pytest"], description: "Validation automatique du code et exécution de la suite de tests unitaires." },
      { step: "02", title: "Build & Push Docker", tools: ["Docker", "Docker Hub"], description: "Création de l'image de production et push sur le registre centralisé." },
      { step: "03", title: "Provisioning AWS", tools: ["Terraform", "AWS EC2"], description: "Déploiement des instances EC2 Master et Worker avec sécurité réseau." },
      { step: "04", title: "Configuration Ansible", tools: ["Ansible Playbooks"], description: "Installation de Docker, K8s, Flannel CNI et jonction des nœuds au cluster." },
      { step: "05", title: "Déploiement K8s", tools: ["Kubernetes Cluster"], description: "Rolling update sans coupure de service avec monitoring des sondes de santé." }
    ],
    metrics: [
      { label: "Temps d'arrêt", value: "0 ms (Rolling Update)" },
      { label: "Nœuds Cluster", value: "Master + Worker AWS" },
      { label: "Santé K8s", value: "Liveness/Readiness active" }
    ],
    installCommand: "terraform apply && ansible-playbook setup_master.yml",
    uiType: "devops"
  },
  {
    id: "drug-discovery-ai",
    index: "04",
    title: "Drug Discovery AI — Prédiction d'Affinité Médicament-Cible & Activité Moléculaire",
    kicker: "PHARMACOGENOMICS & MOLECULAR ML",
    category: "IA & Santé",
    year: "2026",
    description: "Système d'intelligence artificielle pour la découverte de médicaments prédisant l'affinité de liaison (Kd) et l'activité biologique moléculaire sur les benchmarks internationaux DAVIS et BACE avec application Streamlit interactive.",
    detailedExplanation: "Ce projet applique le Machine Learning de pointe au criblage virtuel de molécules thérapeutiques. Deux benchmarks majeurs sont exploités : le dataset DAVIS (25 772 interactions médicament-protéine cible sur 68 molécules et 379 cibles biologiques pour la régression de l'affinité Kd) et le dataset BACE (1 513 molécules pour la classification binaire d'activité inhibitrice). Le pipeline extrait les empreintes et descripteurs moléculaires, applique un encodage cible et un standard scaling, entraîne des ensembles d'arbres et régresseurs optimisés, puis exporte les modèles sérialisés sous Joblib. Une application web Streamlit intuitive permet aux chercheurs de saisir des séquences chimiques et d'obtenir immédiatement l'affinité prédite et la probabilité d'inhibition.",
    datasetInfo: "Benchmarks DAVIS (25 772 interactions médicamenteuses continues Kd) et BACE (1 513 molécules annotées chimiquement).",
    methodology: [
      "Extraction de descripteurs physico-chimiques et empreintes moléculaires à partir des formats SMILES",
      "Modélisation conjointe : Régression continue de l'affinité Kd (DAVIS) & Classification binaire (BACE)",
      "Validation croisée rigoureuse et optimisation des seuils de décision biologique",
      "Déploiement d'une interface de prédiction interactive Streamlit avec rapport de recherche de 45 pages"
    ],
    features: [
      "Double moteur de modélisation (Régression affinité + Classification d'activité)",
      "Traitement et encodage automatisé des structures moléculaires",
      "Sérialisation des pipelines complets avec Joblib",
      "Interface Streamlit prête pour le criblage virtuel de composés candidats"
    ],
    tech: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy", "Joblib"],
    github: "https://github.com/hajarbentaib/drug-discovery-ai",
    videoUrl: "/videos/drug-discovery-ai.mp4",
    docUrl: "/docs/Rapport_Drug_Discovery.pdf",
    docTitle: "Consulter le Rapport de Recherche (PDF)",
    architectureSteps: [
      { step: "01", title: "Données Moléculaires", tools: ["DAVIS", "BACE"], description: "Chargement des structures SMILES et des interactions cibles protéiques." },
      { step: "02", title: "Extraction & Encoding", tools: ["Descripteurs RDKit", "TargetEncoder"], description: "Transformation des chaînes chimiques en vecteurs d'empreintes numériques." },
      { step: "03", title: "Entraînement Dual", tools: ["Random Forest", "Gradient Boosting"], description: "Entraînement simultané du régresseur d'affinité Kd et du classifieur d'inhibition." },
      { step: "04", title: "Sérialisation Modèles", tools: ["Joblib"], description: "Exportation des artefacts et scalers pour inférence rapide en production." },
      { step: "05", title: "Criblage Streamlit", tools: ["Streamlit"], description: "Application interactive pour tester de nouveaux composés en temps réel." }
    ],
    metrics: [
      { label: "Interactions DAVIS", value: "25,772 paires" },
      { label: "Maintien de performance", value: "R² = 0.88 (Kd)" },
      { label: "Classification BACE", value: "ROC-AUC 0.92" }
    ],
    installCommand: "pip install -r requirements.txt && streamlit run app.py",
    uiType: "drugdiscovery"
  },
  {
    id: "cancer-drug-response-gdsc2",
    index: "05",
    title: "Prédiction de la Sensibilité aux Anticancéreux (GDSC2 & GroupKFold)",
    kicker: "PRECISION ONCOLOGY & RIGOROUS DATA SCIENCE",
    category: "IA & Santé",
    year: "2026",
    description: "Modélisation prédictive de la réponse des tumeurs aux composés anticancéreux sur la base GDSC2 avec validation GroupKFold par lignée cellulaire pour éliminer toute fuite de données (data leakage) et rapport de recherche de 36 pages.",
    detailedExplanation: "L'oncologie computationnelle souffre fréquemment de benchmarks trompeurs en raison du data leakage : lorsque les mêmes lignées cellulaires se retrouvent à la fois en entraînement et en test, le modèle surévalue sa performance. Ce projet, mené dans le cadre du Master d'Excellence en IA sous la direction du Dr. Ichrak Benamri, introduit une méthodologie irréprochable basée sur un GroupKFold partitionné sur l'identifiant cellulaire COSMIC_ID. Un ColumnTransformer scikit-learn garantit l'isolation stricte des phases d'imputation et de normalisation. Les modèles évaluent la sensibilité tumorale selon deux métriques cibles fondamentales : LN_IC50 (puissance cytotoxique) et AUC (aire sous la courbe dose-réponse).",
    datasetInfo: "Base de référence GDSC2 (Genomics of Drug Sensitivity in Cancer, Wellcome Sanger Institute) avec données génomiques, phénotypiques et profils de cytotoxicité.",
    methodology: [
      "Application stricte du GroupKFold sur COSMIC_ID pour tester la vraie généralisation à de nouveaux patients",
      "ColumnTransformer scikit-learn modulaire éliminant tout data leakage statistique",
      "Benchmark exhaustif : Ridge, ElasticNet, RandomForest, ExtraTrees, HistGradientBoosting",
      "Rapport de recherche académique de 36 pages détaillant l'état de l'art pharmacogénomique"
    ],
    features: [
      "Prédiction précise de LN_IC50 et AUC pour chaque association médicament-tumeur",
      "Élimination totale des biais d'évaluation grâce au GroupKFold",
      "Gestion robuste des types de cancer à forte cardinalité",
      "Rapport académique complet disponible au téléchargement"
    ],
    tech: ["Python", "Scikit-Learn", "PyTorch", "Pandas", "NumPy"],
    github: "https://github.com/hajarbentaib/cancer-drug-response-gdsc2",
    docUrl: "/docs/Rapport_Bioinformatique.pdf",
    docTitle: "Consulter le Rapport Académique (36 pages PDF)",
    architectureSteps: [
      { step: "01", title: "Base GDSC2 Sanger", tools: ["GDSC2 Dataset"], description: "Profils pharmacogénomiques dose-réponse sur centaines de lignées cellulaires." },
      { step: "02", title: "Isolation GroupKFold", tools: ["COSMIC_ID Split"], description: "Séparation hermétique des lignées cellulaires entre jeu d'entraînement et de test." },
      { step: "03", title: "ColumnTransformer", tools: ["SimpleImputer", "StandardScaler"], description: "Traitement statistique garantissant zéro fuite d'information statistique." },
      { step: "04", title: "Ensembles d'Arbres", tools: ["HistGradientBoosting", "RandomForest"], description: "Apprentissage supervisé optimisé sur de grands volumes de données tabulaires." },
      { step: "05", title: "Scores LN_IC50 & AUC", tools: ["Matplotlib", "Seaborn"], description: "Estimation de la concentration inhibitrice semi-maximale pour chaque composé." }
    ],
    metrics: [
      { label: "Garantie Méthodologique", value: "Zero Data Leakage" },
      { label: "Métrique Clé", value: "LN_IC50 & AUC" },
      { label: "Rapport Académique", value: "36 pages détaillées" }
    ],
    installCommand: "pip install -r requirements.txt && jupyter notebook",
    uiType: "pharma"
  },
  {
    id: "car-price-scraping",
    index: "06",
    title: "Moroccan Used Car Price Predictor (Scraping Avito.ma & Machine Learning)",
    kicker: "WEB SCRAPING, REGRESSION & APP DEPLOYMENT",
    category: "Full Stack & ML",
    year: "2026",
    description: "Pipeline complet de valorisation de véhicules d'occasion au Maroc : collecte automatisée par scraping sur Avito.ma avec BeautifulSoup, feature engineering approfondi, benchmark XGBoost/LightGBM et application web Streamlit.",
    detailedExplanation: "Conception et mise en production d'un estimateur algorithmique de la valeur des voitures d'occasion sur le marché marocain. Une solution de scraping développée avec BeautifulSoup extrait des milliers d'annonces réelles, suivie d'un pipeline de nettoyage regex pour parser les devises (DH), kilométrages, puissances fiscales (CV), boîtes de vitesses et mentions 'première main'. Après une analyse exploratoire approfondie (EDA) et élimination des valeurs aberrantes, un benchmark comparatif valide la suprématie de LightGBM et XGBoost (R² ≈ 0.91). Le modèle est encapsulé dans une interface web interactive Streamlit permettant une estimation marchande en direct.",
    datasetInfo: "12 500+ annonces de véhicules collectées sur Avito.ma avec caractéristiques techniques et prix constatés.",
    methodology: [
      "Scraping automatisé robuste avec BeautifulSoup et gestion des requêtes réseau",
      "Nettoyage et extraction de variables continues et catégorielles complexes",
      "Benchmark de modèles : Linear Regression, Random Forest, CatBoost, XGBoost, LightGBM",
      "Optimisation par K-Fold Cross-Validation et déploiement applicatif Streamlit"
    ],
    features: [
      "Extraction automatique de données marché réelles",
      "Prétraitement textuel des spécifications mécaniques",
      "Modèle de régression ensembliste haute précision (R² = 0.91)",
      "Calculateur web interactif avec estimation instantanée"
    ],
    tech: ["Python", "Streamlit", "LightGBM", "XGBoost", "Pandas", "Scikit-Learn"],
    github: "https://github.com/hajarbentaib/car-price-prediction",
    videoUrl: "/videos/car-price-prediction.mp4",
    architectureSteps: [
      { step: "01", title: "Web Scraping", tools: ["BeautifulSoup", "Requests"], description: "Extraction des annonces d'occasion sur le portail automobile marocain Avito.ma." },
      { step: "02", title: "Nettoyage Regex", tools: ["Pandas", "Regex"], description: "Parsing des puissances en CV, kilométrages réels, années et carburant." },
      { step: "03", title: "EDA & Filtres", tools: ["Seaborn", "NumPy"], description: "Suppression des anomalies de prix et modélisation des distributions." },
      { step: "04", title: "Ensembles LightGBM", tools: ["LightGBM", "XGBoost"], description: "Entraînement régresseur avec optimisation des hyperparamètres par cross-validation." },
      { step: "05", title: "App Streamlit", tools: ["Streamlit"], description: "Déploiement de l'outil d'estimation accessible aux particuliers et professionnels." }
    ],
    metrics: [
      { label: "Annonces récoltées", value: "12,500+ fiches" },
      { label: "Score Régression", value: "R² = 0.91" },
      { label: "Temps d'estimation", value: "Instantané" }
    ],
    installCommand: "pip install -r requirements.txt && streamlit run app.py",
    uiType: "cars"
  },
  {
    id: "cv-matching-nlp",
    index: "07",
    title: "Moteur de Matching CV–Offre (Recherche Sémantique & NLP)",
    kicker: "DEEP NLP & BIDIRECTIONAL RECOMMENDATION",
    category: "NLP & Sémantique",
    year: "2025",
    description: "Système de recommandation intelligent d'offres d'emploi et de profils candidats basé sur la similarité sémantique vectorielle via SentenceTransformers (all-MiniLM-L6-v2) sur 20 000 offres d'emploi avec application Streamlit.",
    detailedExplanation: "Dépassement des limites des moteurs de recherche de recrutement traditionnels basés sur de simples correspondances de mots-clés (TF-IDF). Cette solution utilise des embeddings sémantiques profonds générés par le modèle de Sentence Transformers `all-MiniLM-L6-v2` (dimension 768). Le système opère en mode bidirectionnel : il parse un CV au format PDF avec pdfplumber, extrait les sections clés (compétences, parcours, technologies), calcule la similarité cosinus avec un catalogue de 20 000 descriptions de postes Hugging Face, et restitue les meilleures offres avec jauge visuelle de compatibilité. Inversement, un recruteur peut coller une offre pour trouver les profils les plus adéquats.",
    datasetInfo: "Dataset Hugging Face `jacob-hugging-face/job-descriptions` (~20 000 offres d'emploi d'entreprises internationales).",
    methodology: [
      "Extraction structurée de documents PDF avec pdfplumber et parsing par expressions régulières",
      "Vectorisation sémantique dense avec le modèle SentenceTransformer all-MiniLM-L6-v2",
      "Calcul vectorisé de similarité cosinus avec mise en cache haute performance Streamlit",
      "Système de recommandation bidirectionnel (Candidat → Offres & Recruteur → Talents)"
    ],
    features: [
      "Upload direct de CV PDF et extraction automatique du contenu textuel",
      "Recherche sémantique insensible aux variations de vocabulaire",
      "Catalogue de 20 000 offres d'emploi vectorisées",
      "Score de pertinence en pourcentage avec jauge dynamique et highlights"
    ],
    tech: ["Python", "Hugging Face", "Streamlit", "Scikit-Learn", "Pandas"],
    github: "https://github.com/hajarbentaib/cv-job-matching-nlp",
    videoUrl: "/videos/cv-job-matching.mp4",
    architectureSteps: [
      { step: "01", title: "Parsing PDF", tools: ["pdfplumber", "Regex"], description: "Extraction et segmentation du texte des CVs téléchargés." },
      { step: "02", title: "Embeddings Denses", tools: ["SentenceTransformers", "all-MiniLM"], description: "Transformation du profil et des 20 000 offres en vecteurs sémantiques 768d." },
      { step: "03", title: "Similarité Cosinus", tools: ["Scikit-Learn"], description: "Calcul mathématique de proximité sémantique et ranking des correspondances." },
      { step: "04", title: "Filtrage Compétences", tools: ["Python NLP"], description: "Alignement des compétences requises avec le profil du candidat." },
      { step: "05", title: "Portail Streamlit", tools: ["Streamlit"], description: "Affichage des Top-K offres avec jauges de similarité et recommandations." }
    ],
    metrics: [
      { label: "Offres cataloguées", value: "~20,000 postes" },
      { label: "Modèle NLP", value: "all-MiniLM-L6-v2" },
      { label: "Précision matching", value: "Similarité Cosinus 94%+" }
    ],
    installCommand: "pip install -r requirements.txt && streamlit run app.py",
    uiType: "matching"
  },
  {
    id: "admission-prediction-pfe",
    index: "08",
    title: "Aide à la Décision d'Admission en Licence d'Excellence (PFE Master IA)",
    kicker: "IMBALANCED LEARNING & ACADEMIC CLASSIFICATION",
    category: "Full Stack & ML",
    year: "2025",
    description: "Système d'aide à la décision algorithmique pour la sélection des candidats à une Licence d'Excellence, résolvant le défi du déséquilibre sévère de classes grâce aux techniques SMOTE et ADASYN avec portail d'évaluation Streamlit.",
    detailedExplanation: "Projet de Fin d'Études réalisé à la Faculté des Sciences Ben M'Sick. Dans les filières d'excellence sélectives, seule une minorité de candidats est admise (environ 5 à 15% des candidatures), ce qui rend les modèles de Machine Learning traditionnels inefficaces par biais en faveur de la classe majoritaire. Cette solution résout le déséquilibre en appliquant les techniques de sur-échantillonnage synthétique SMOTE et ADASYN couplées à des algorithmes de gradient boosting (CatBoost et LightGBM) optimisés sur le F1-score et le rappel de la classe minoritaire. L'application Streamlit propose deux modes : une évaluation individuelle détaillée avec analyse des facteurs contributifs et une évaluation par lot (batch CSV/Excel) automatisant le classement de promotions entières.",
    datasetInfo: "Dossiers réels de candidatures académiques : filière bac, notes S1 à S4, sessions de rattrapage et vitesse de progression.",
    methodology: [
      "Résolution du déséquilibre extrême de classes via SMOTE et ADASYN",
      "Validation croisée stratifiée pour garantir la représentativité des profils d'excellence",
      "Benchmark des classifieurs CatBoost, LightGBM, Random Forest avec focalisation sur le F1-score",
      "Déploiement d'une double interface Streamlit (Évaluation unitaire + Traitement de promotions en lot)"
    ],
    features: [
      "Évaluation instantanée de dossiers d'étudiants avec explications",
      "Traitement de fichiers Excel/CSV de promotions complètes avec classement automatique",
      "Optimisation spécifique pour classes fortement déséquilibrées",
      "Visualisation claire des probabilités d'admission et facteurs d'admissibilité"
    ],
    tech: ["Python", "CatBoost", "LightGBM", "Streamlit", "Scikit-Learn", "Pandas"],
    github: "https://github.com/hajarbentaib/student-admission-prediction",
    videoUrl: "/videos/admission-prediction.mp4",
    architectureSteps: [
      { step: "01", title: "Collecte Académique", tools: ["Données Universitaires"], description: "Notes du Baccalauréat, moyennes semestrielles S1 à S4 et rattrapages." },
      { step: "02", title: "Traitement Déséquilibre", tools: ["SMOTE", "ADASYN"], description: "Génération d'échantillons synthétiques pour rééquilibrer la classe admise minoritaire." },
      { step: "03", title: "Classification CatBoost", tools: ["CatBoost", "LightGBM"], description: "Entraînement optimisé sur le F1-score et le recall de la classe minoritaire." },
      { step: "04", title: "Validation Stratifiée", tools: ["Scikit-Learn"], description: "Partitionnement rigoureux garantissant l'équité de la sélection." },
      { step: "05", title: "Portail Commission", tools: ["Streamlit"], description: "Interface double mode : évaluation individuelle et classement batch par lot." }
    ],
    metrics: [
      { label: "Sur-échantillonnage", value: "SMOTE + ADASYN" },
      { label: "Précision modèle", value: "F1-Score optimisé" },
      { label: "Traitement de lot", value: "Exports CSV/Excel" }
    ],
    installCommand: "pip install -r requirements.txt && streamlit run app.py",
    uiType: "admission"
  },
  {
    id: "neural-network-compression",
    index: "09",
    title: "Compression de Réseaux de Neurones par Optimisation sous Contraintes",
    kicker: "EDGE AI & EFFICIENT DEEP LEARNING",
    category: "Deep Learning & Optimisation",
    year: "2026",
    description: "Recherche expérimentale et outillage pour l'optimisation et la compression de réseaux convolutifs (LeNet-5) : régularisation de sparsité L1/L2, balayage empirique de pruning non structuré & structuré, quantification dynamique Int8 et benchmarks de robustesse.",
    detailedExplanation: "Étude approfondie de la réduction de l'empreinte mémoire et du coût calculatoire des modèles de Deep Learning pour le déploiement sur dispositifs contraints (Edge AI). L'expérimentation compare d'abord les trajectoires de convergence d'ordre 1 (Adam, SGD) et d'ordre 2 (L-BFGS) en démontrant l'instabilité de L-BFGS face aux mini-batches stochastiques. L'introduction d'une pénalité L1 favorise l'apparition de poids nuls, servant de tremplin à un élagage (pruning) non-structuré par magnitude et structuré (filter pruning). Enfin, une quantification dynamique qint8 est appliquée aux couches denses. Les mesures in situ (taille disque, mémoire vive psutil, inférence CPU et dégradation sous bruit gaussien) valident une réduction de 69.6% de la taille avec seulement 0.13% de perte d'accuracy.",
    datasetInfo: "Jeu de données de vision MNIST normalisé avec miniset de validation documenté et tests de dérive avec bruit gaussien additif.",
    methodology: [
      "Optimisation sous contraintes comparant Adam, SGD et L-BFGS avec analyse hessienne",
      "Induction de sparsité par régularisation L1 (lambda=1e-4) et L2 (weight decay)",
      "Balayage empirique du pruning magnitude non structuré (10% à 90%) et filter pruning ln_structured",
      "Quantification dynamique qint8 via PyTorch AO avec gain de taille de 3.29x (-69.6%)",
      "Évaluation in situ de la mémoire RAM processus (psutil) et de la résilience aux perturbations"
    ],
    features: [
      "Benchmark rigoureux de 3 optimiseurs d'ordre 1 et 2",
      "Pruning non structuré optimal à 40% préservant >98% de la précision initiale",
      "Quantification entière dynamique qint8 réduisant le modèle de 244.9 KB à 74.3 KB",
      "Mesure empirique du coût mémoire RAM psutil et latence CPU réelle"
    ],
    tech: ["PyTorch", "Python", "Torchvision", "NumPy", "Scikit-Learn", "Matplotlib", "psutil"],
    github: "https://github.com/hajarbentaib/neural-network-compression",
    architectureSteps: [
      { step: "01", title: "Entraînement FP32", tools: ["PyTorch", "Adam / SGD"], description: "Entraînement de référence du CNN LeNet-5 et profilage des fonctions de perte." },
      { step: "02", title: "Régularisation L1/L2", tools: ["Contraintes Lasso/Ridge"], description: "Induction mathématique de sparsité douce dans la distribution des poids." },
      { step: "03", title: "Pruning Empirique", tools: ["Magnitude Pruning", "Filter Pruning"], description: "Élagage structuré et non-structuré avec masquage des tenseurs non essentiels." },
      { step: "04", title: "Quantification Int8", tools: ["PyTorch AO Dynamic Quant"], description: "Conversion dynamique de la précision FP32 vers qint8 divisant la taille par 3.29x." },
      { step: "05", title: "Profilage & Robustesse", tools: ["psutil", "Bruit Gaussien"], description: "Mesure de la consommation mémoire RAM et test de robustesse sur signaux bruités." }
    ],
    metrics: [
      { label: "Réduction disque", value: "-69.6% (3.29x)" },
      { label: "Précision Int8", value: "96.20% (-0.13%)" },
      { label: "Pruning optimal", value: "40% sans perte" }
    ],
    installCommand: "pip install -r requirements.txt && python -m jupyter notebook compression_reseaux_neuronaux.ipynb",
    uiType: "compression"
  }
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2025 – 2027",
    title: "Master d’Excellence en Intelligence Artificielle",
    place: "Faculté des Sciences Ben M'Sick, Université Hassan II · Casablanca",
    detail: "Formation d'élite couvrant le Machine Learning avancé, Deep Learning, Big Data, MLOps, streaming temps réel et Vision par ordinateur. Cursus en cours.",
    type: "education",
    badge: "En cours"
  },
  {
    year: "2024 – 2025",
    title: "Licence d’Excellence en Intelligence Artificielle",
    place: "Faculté des Sciences Ben M'Sick, Université Hassan II · Casablanca",
    detail: "Spécialisation approfondie en science des données et algorithmes d'apprentissage automatique. Diplôme obtenu avec Mention Très Bien.",
    type: "education",
    badge: "Mention Très Bien"
  },
  {
    year: "Avr – Juin 2024",
    title: "Stagiaire PFE — Développement Web Full-Stack",
    place: "CAT Assurance & Réassurance · Casablanca",
    detail: "Développement d’une application web de gestion d’achats des certificats d’assurance avec Flutter & Firebase — réduction mesurable du traitement manuel.",
    type: "experience"
  },
  {
    year: "Juin – Juil 2023",
    title: "Stagiaire Développeur Front-End",
    place: "AWAL · Casablanca",
    detail: "Refonte complète du backoffice de la plateforme AWAL avec Angular — gain notable de productivité et d'ergonomie pour les utilisateurs.",
    type: "experience"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [];
export const ACHIEVEMENTS: AchievementItem[] = [];

export const PERSONAL_QUALITIES = [
  "Esprit analytique",
  "Autonome & rigoureuse",
  "Résolution de problèmes",
  "Travail en équipe",
  "Apprentissage rapide"
];

export const SPOKEN_LANGUAGES = [
  { language: "Arabe", level: "Langue maternelle" },
  { language: "Français", level: "Courant — C1" },
  { language: "Anglais", level: "Intermédiaire — B2" }
];
