import React from "react";

export const BRAND_MAP: Record<string, { logo: string; color: string; label: string }> = {
  python: { logo: "/logos/python.svg", color: "#3776AB", label: "Python" },
  sql: { logo: "/logos/mysql.svg", color: "#4479A1", label: "SQL" },
  scikitlearn: { logo: "/logos/scikitlearn.svg", color: "#F7931E", label: "Scikit-Learn" },
  pytorch: { logo: "/logos/pytorch.svg", color: "#EE4C2C", label: "PyTorch" },
  docker: { logo: "/logos/docker.svg", color: "#2496ED", label: "Docker" },
  kubernetes: { logo: "/logos/kubernetes.svg", color: "#326CE5", label: "Kubernetes" },
  ansible: { logo: "/logos/ansible.svg", color: "#EE0000", label: "Ansible" },
  terraform: { logo: "/logos/terraform.svg", color: "#7B42BC", label: "Terraform" },
  linux: { logo: "/logos/linux.svg", color: "#FCC624", label: "Linux" },
  git: { logo: "/logos/git.svg", color: "#F05032", label: "Git & GitHub" },
  flask: { logo: "/logos/flask.svg", color: "#000000", label: "Flask" },
  fastapi: { logo: "/logos/fastapi.svg", color: "#009688", label: "FastAPI" },
  streamlit: { logo: "/logos/streamlit.svg", color: "#FF4B4B", label: "Streamlit" },
  flutter: { logo: "/logos/flutter.svg", color: "#02569B", label: "Flutter" },
  firebase: { logo: "/logos/firebase.svg", color: "#FFCA28", label: "Firebase" },
  angular: { logo: "/logos/angular.svg", color: "#DD0031", label: "Angular" },
  pandas: { logo: "/logos/pandas.svg", color: "#150458", label: "Pandas" },
  numpy: { logo: "/logos/numpy.svg", color: "#013243", label: "NumPy" },
  jira: { logo: "/logos/jira.svg", color: "#0052CC", label: "Jira" },
  kafka: { logo: "/logos/apachekafka.svg", color: "#231F20", label: "Apache Kafka" },
  apachekafka: { logo: "/logos/apachekafka.svg", color: "#231F20", label: "Apache Kafka" },
  flink: { logo: "/logos/apacheflink.svg", color: "#E6526F", label: "Apache Flink" },
  apacheflink: { logo: "/logos/apacheflink.svg", color: "#E6526F", label: "Apache Flink" },
  spark: { logo: "/logos/spark.svg", color: "#E25A1C", label: "Apache Spark" },
  apachespark: { logo: "/logos/spark.svg", color: "#E25A1C", label: "Apache Spark" },
  hadoop: { logo: "/logos/hadoop.svg", color: "#66CCFF", label: "HDFS" },
  elasticsearch: { logo: "/logos/elasticsearch.svg", color: "#005571", label: "Elasticsearch" },
  duckdb: { logo: "/logos/duckdb.svg", color: "#FFF000", label: "DuckDB" },
  dbt: { logo: "/logos/dbt.svg", color: "#FF694B", label: "dbt" },
  mlflow: { logo: "/logos/mlflow.svg", color: "#0194E2", label: "MLflow" },
  dagster: { logo: "/logos/dagster.svg", color: "#252A36", label: "Dagster" },
  huggingface: { logo: "/logos/huggingface.svg", color: "#FFD21E", label: "Hugging Face" },
  aws: { logo: "/logos/amazonwebservices.svg", color: "#FF9900", label: "AWS" },
  amazonwebservices: { logo: "/logos/amazonwebservices.svg", color: "#FF9900", label: "AWS" },
};

export const CONCEPT_MAP: Record<string, { label: string }> = {
  nlp: { label: "Natural Language Processing" },
  cv: { label: "Computer Vision" },
  fe: { label: "Feature Engineering" },
  etl: { label: "ETL / ELT" },
  dp: { label: "Data Pipelines" },
  rest: { label: "REST APIs" },
  eda: { label: "Exploratory Data Analysis" },
  dv: { label: "Data Visualization" },
  me: { label: "Model Evaluation" },
  agile: { label: "Agile / Scrum" },
  xgboost: { label: "XGBoost" },
  lightgbm: { label: "LightGBM" },
  catboost: { label: "CatBoost" }
};

export function isBrand(key?: string): boolean {
  if (!key) return false;
  return Boolean(BRAND_MAP[key.toLowerCase()]);
}

interface TechLogoProps {
  nameKey?: string;
  size?: number;
  showGlow?: boolean;
  className?: string;
}

export function TechLogo({
  nameKey = "",
  size = 48,
  showGlow = false,
  className = "",
}: TechLogoProps) {
  const normalized = nameKey.toLowerCase().replace(/[^a-z0-9]/g, "");
  const brand = BRAND_MAP[normalized] || BRAND_MAP[nameKey.toLowerCase()];

  if (brand) {
    return (
      <div
        className={`relative inline-flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        {showGlow && (
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-25 pointer-events-none transition-opacity duration-300"
            style={{ backgroundColor: brand.color }}
          />
        )}
        <img
          src={brand.logo}
          alt={brand.label}
          width={size}
          height={size}
          className="object-contain relative z-10 filter drop-shadow-sm transition-transform duration-300"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          loading="lazy"
        />
      </div>
    );
  }

  // Concept / Fallback thin line SVG icon
  return (
    <div
      className={`relative inline-flex items-center justify-center text-[var(--ink-2)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.75}
        height={size * 0.75}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {normalized.includes("nlp") || normalized.includes("nl") ? (
          <>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h.01" />
            <path d="M12 10h.01" />
            <path d="M16 10h.01" />
          </>
        ) : normalized.includes("vision") || normalized.includes("cv") ? (
          <>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </>
        ) : normalized.includes("data") || normalized.includes("pipeline") || normalized.includes("dp") ? (
          <>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </>
        ) : normalized.includes("api") || normalized.includes("rest") ? (
          <>
            <rect width="20" height="8" x="2" y="2" rx="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
          </>
        ) : normalized.includes("agile") || normalized.includes("scrum") ? (
          <>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </>
        ) : normalized.includes("xgboost") || normalized.includes("lightgbm") || normalized.includes("catboost") ? (
          <>
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </>
        ) : (
          <>
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m9 8 6 4-6 4Z" />
          </>
        )}
      </svg>
    </div>
  );
}
