
const projects = [
  // ============================================================
  // 1. FRAUDGUARD AI
  // ============================================================
  {
    id: "fraudguard-ai",

    title: "FraudGuard AI",

    category: "Machine Learning / FinTech / AI Engineering",

    status: "Functional MVP",

    evidence: {
      evaluationStatus: "Reported experimental results",
      evaluationNotes:
        "The model-comparison metrics reflect earlier documented experiments. More recent temporal-split evaluation results are also reported. These experiments use different evaluation setups and should not be treated as directly comparable. Independent validation on new production transaction data has not been established.",
      deploymentStatus: "Functional MVP",
    },

    shortDescription:
      "An AI-powered mobile money fraud detection and monitoring application combining XGBoost, FastAPI inference, Streamlit analytics, transaction persistence, authentication, and audit logging.",

    description:
      "FraudGuard AI is a machine learning and AI engineering project designed to identify potentially fraudulent mobile money transactions and support transaction-risk review. The project combines supervised machine learning, transaction and balance-related feature engineering, an XGBoost classification model, FastAPI inference, a Streamlit dashboard, SQLite persistence, authentication, role-based access control, and audit logging. It demonstrates the transition from model experimentation toward a functional financial security MVP.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Machine Learning",
      "Feature Engineering",
      "SMOTE",
      "FastAPI",
      "Streamlit",
      "SQLite",
      "Bcrypt",
      "Role-Based Access Control",
      "Audit Logging",
    ],

    image: "/projects/fraudguard-ai.webp",

    github:
      "https://github.com/Inda-Obanyi/mobile-money-fraud-prediction",

    demo: "https://fraudguard-streamlit.onrender.com/",

    featured: true,

    problem:
      "The growth of mobile money and digital financial transactions creates a need for systems that can identify suspicious activity efficiently. Manual transaction review becomes difficult to scale as transaction volume increases. Fraud detection models can help estimate fraud probability, classify transaction risk, and prioritize suspicious transactions for further investigation.",

    approach: [
      "Defined the mobile money fraud detection problem and target variable.",
      "Loaded and explored the transaction dataset.",
      "Analyzed transaction types, account balances, transaction amounts, and fraud patterns.",
      "Performed data cleaning and exploratory data analysis.",
      "Engineered transaction and balance-related features.",
      "Prepared categorical and numerical variables for machine learning.",
      "Investigated class imbalance and resampling techniques.",
      "Compared supervised classification algorithms.",
      "Evaluated models using accuracy, precision, recall, F1-score, and ROC-AUC.",
      "Performed hyperparameter tuning and examined model trade-offs.",
      "Selected XGBoost for the application inference workflow.",
      "Conducted temporal-split evaluation to assess performance on later transactions.",
      "Selected an alert threshold using validation data.",
      "Persisted the model and supporting preprocessing artifacts.",
      "Integrated model inference into a FastAPI service.",
      "Built a Streamlit dashboard for transaction analysis and monitoring.",
      "Implemented SQLite transaction persistence.",
      "Added authentication, role-based permissions, and audit logging.",
    ],

    pipeline: [
      "Problem Definition",
      "Data Loading",
      "Data Understanding",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Data Preprocessing",
      "Class Imbalance Analysis",
      "Model Training",
      "Model Comparison",
      "Hyperparameter Tuning",
      "Temporal Validation",
      "Threshold Selection",
      "Model Evaluation",
      "Model Persistence",
      "FastAPI Inference",
      "Fraud Probability Scoring",
      "Risk Classification",
      "Transaction Persistence",
      "Monitoring and Analytics",
      "Authentication and RBAC",
      "Audit Logging",
      "MVP Deployment",
    ],

    model: {
      name: "XGBoost",
      type: "Binary Classification",
      target: "Fraud vs Legitimate Transaction",
    },

    evaluation: {
      modelsCompared: [
        {
          name: "Gradient Boosting",
          accuracy: "1.00",
          precision: "0.86",
          recall: "1.00",
          f1Score: "0.92",
          rocAuc: "1.00",
        },
        {
          name: "XGBoost",
          accuracy: "1.00",
          precision: "0.90",
          recall: "1.00",
          f1Score: "0.95",
          rocAuc: "1.00",
        },
        {
          name: "Random Forest",
          accuracy: "1.00",
          precision: "0.98",
          recall: "1.00",
          f1Score: "0.99",
          rocAuc: "1.00",
        },
        {
          name: "Extra Trees",
          accuracy: "1.00",
          precision: "0.92",
          recall: "0.98",
          f1Score: "0.95",
          rocAuc: "1.00",
        },
        {
          name: "LightGBM",
          accuracy: "1.00",
          precision: "0.86",
          recall: "1.00",
          f1Score: "0.92",
          rocAuc: "1.00",
        },
        {
          name: "Decision Tree",
          accuracy: "1.00",
          precision: "0.93",
          recall: "1.00",
          f1Score: "0.96",
          rocAuc: "1.00",
        },
        {
          name: "Logistic Regression",
          accuracy: "0.97",
          precision: "0.04",
          recall: "0.91",
          f1Score: "0.07",
          rocAuc: "0.99",
        },
        {
          name: "Tuned Random Forest",
          accuracy: "0.35",
          precision: "0.00",
          recall: "0.98",
          f1Score: "0.00",
          rocAuc: "0.63",
        },
      ],

      metrics: [
        "Accuracy",
        "Precision",
        "Recall",
        "F1-Score",
        "ROC-AUC",
        "Average Precision",
        "Confusion Matrix",
      ],

      focus:
        "Earlier model comparisons reported near-perfect performance for several classifiers, but those results should not be interpreted as production guarantees. A later XGBoost temporal-split evaluation reported test precision of 0.9315, recall of 0.7226, F1-score of 0.8139, average precision of 0.8907, and ROC-AUC of 0.9988 at a validation-selected threshold of 0.96549. The temporal evaluation is more informative about performance on later transactions, although it remains an offline dataset experiment.",
    },

    metrics: [
      {
        label: "Test Precision",
        value: "93.15%",
      },
      {
        label: "Test Recall",
        value: "72.26%",
      },
      {
        label: "Test F1",
        value: "81.39%",
      },
      {
        label: "Average Precision",
        value: "0.8907",
      },
      {
        label: "ROC-AUC",
        value: "0.9988",
      },
    ],

    results:
      "FraudGuard AI progressed from model experimentation into a functional fraud-monitoring MVP. In the documented temporal-split test evaluation, XGBoost identified 2,720 fraudulent transactions, produced 200 false positives, and missed 1,044 fraudulent transactions at the selected threshold. The application demonstrates transaction-level risk scoring, monitoring workflows, persistence, authentication, and audit logging. These results reflect offline evaluation rather than independently verified production performance.",

    lessonsLearned: [
      "How to translate a financial security problem into a supervised machine learning workflow.",
      "Why fraud detection requires careful treatment of severe class imbalance.",
      "How transaction and balance-related feature engineering supports classification.",
      "Why model evaluation should include precision, recall, F1-score, and average precision.",
      "Why near-perfect experimental metrics require critical examination.",
      "How temporal validation helps assess performance on later observations.",
      "How classification thresholds affect alert volume and missed fraud.",
      "How to expose a trained model through FastAPI.",
      "How to integrate model inference into a Streamlit application.",
      "How authentication, persistence, monitoring, and audit logging support an operational MVP.",
    ],

    highlights: [
      "Mobile money fraud detection",
      "XGBoost binary classification",
      "Transaction feature engineering",
      "Model comparison",
      "Temporal-split evaluation",
      "Validation-selected alert threshold",
      "Class imbalance analysis",
      "FastAPI inference backend",
      "Streamlit monitoring dashboard",
      "Fraud probability scoring",
      "Risk classification",
      "SQLite persistence",
      "Authentication and RBAC",
      "Audit logging",
    ],
  },

  // ============================================================
  // 2. RESUME SCREENING AI
  // ============================================================
  {
    id: "resume-screening",

    title: "Resume Screening AI",

    category: "Machine Learning / NLP / Recruitment",

    status: "Deployed Prototype",

    evidence: {
      evaluationStatus: "Experimental classification results",
      evaluationNotes:
        "The reported Random Forest ROC-AUC is 0.5425, indicating limited discrimination in the documented experiment. Its accuracy and F1-score do not outperform the majority-class baseline. Candidate assessments require human review and should not be used as the sole basis for hiring decisions.",
      deploymentStatus: "Deployed Prototype",
    },

    shortDescription:
      "An AI-assisted resume screening and candidate-job matching application combining machine learning, NLP, skills analysis, experience assessment, education matching, and candidate ranking.",

    description:
      "Resume Screening AI is a machine learning and natural language processing application designed to assist initial recruitment screening. The system analyzes PDF and DOCX resumes against predefined roles or custom job descriptions, extracts candidate information, evaluates skills, experience, education, and textual relevance, and produces structured candidate assessments. It supports individual and batch screening, candidate ranking, and shortlist review. Its experimental classifier has documented limitations, so the application is positioned as decision support rather than autonomous hiring.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Natural Language Processing",
      "TF-IDF",
      "Cosine Similarity",
      "Feature Engineering",
      "SMOTE",
      "PyPDF",
      "python-docx",
      "Streamlit",
      "Git",
      "GitHub",
    ],

    image: "/projects/resume-screening.webp",

    github: "https://github.com/Inda-Obanyi/Resume-Screening-AI",

    demo: "https://resume-screening-ai-h.streamlit.app/",

    featured: true,

    problem:
      "Recruiters often review large numbers of resumes against job-specific requirements. Manual screening can be time-consuming and inconsistent. This project explores how NLP and structured qualification analysis can organize candidate information and support initial screening while keeping people responsible for hiring decisions.",

    approach: [
      "Defined the candidate screening and classification problem.",
      "Loaded and inspected the resume dataset.",
      "Performed data cleaning and exploratory analysis.",
      "Engineered candidate suitability features.",
      "Preprocessed numerical and categorical variables.",
      "Investigated class imbalance using SMOTE.",
      "Split the dataset into training and testing sets.",
      "Trained and compared classification models.",
      "Evaluated models against a majority-class baseline.",
      "Examined accuracy, F1-score, and ROC-AUC.",
      "Built resume parsing and information extraction.",
      "Added predefined job-role requirements and custom descriptions.",
      "Implemented skills extraction and matching.",
      "Implemented experience and education analysis.",
      "Added TF-IDF vectorization and cosine similarity.",
      "Combined multiple signals into structured candidate assessments.",
      "Implemented single-resume and batch screening.",
      "Added candidate ranking and shortlist identification.",
      "Integrated the workflow into Streamlit.",
      "Deployed the prototype for demonstration.",
    ],

    pipeline: [
      "Problem Definition",
      "Dataset Loading",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Data Preprocessing",
      "Class Imbalance Analysis",
      "Train-Test Split",
      "Model Training",
      "Baseline Comparison",
      "Model Evaluation",
      "Resume Parsing",
      "Candidate Information Extraction",
      "Job Role Configuration",
      "Skill Matching",
      "Experience Analysis",
      "Education Matching",
      "TF-IDF Vectorization",
      "Cosine Similarity",
      "Relevance Scoring",
      "Candidate Assessment",
      "Candidate Ranking",
      "Batch Screening",
      "Streamlit Deployment",
    ],

    model: {
      name: "Random Forest",
      type: "Binary Classification",
      target: "Fit vs Not Fit",

      comparison: [
        {
          name: "Majority Baseline",
          accuracy: "70.61%",
          f1Score: "82.77%",
          rocAuc: "0.5000",
        },
        {
          name: "Logistic Regression",
          accuracy: "51.97%",
          f1Score: "58.91%",
          rocAuc: "0.5586",
        },
        {
          name: "Random Forest",
          accuracy: "70.42%",
          f1Score: "82.59%",
          rocAuc: "0.5425",
        },
        {
          name: "HistGradientBoosting",
          accuracy: "70.61%",
          f1Score: "82.77%",
          rocAuc: "0.5566",
        },
      ],

      note:
        "Random Forest was used in the classification pipeline, but the reported evaluation does not demonstrate strong predictive discrimination. The deployed prototype supplements classification with NLP similarity and structured qualification analysis.",
    },

    evaluation: {
      metrics: [
        "Accuracy",
        "F1-Score",
        "ROC-AUC",
        "Confusion Matrix",
        "Skill Match",
        "Experience Score",
        "Education Score",
        "TF-IDF Similarity",
        "Controlled Relevance",
      ],

      trainingResults: {
        randomForest: {
          accuracy: "70.42%",
          f1Score: "82.59%",
          rocAuc: "0.5425",
        },
      },

      focus:
        "The Random Forest classifier reported 70.42% accuracy, 82.59% F1-score, and 0.5425 ROC-AUC. The majority baseline reported 70.61% accuracy and 82.77% F1-score, indicating that the classifier did not outperform the baseline on those metrics. The application should therefore be assessed as an experimental screening workflow rather than a validated automated hiring system.",
    },

    metrics: [
      {
        label: "RF Accuracy",
        value: "70.42%",
      },
      {
        label: "RF F1-Score",
        value: "82.59%",
      },
      {
        label: "RF ROC-AUC",
        value: "0.5425",
      },
    ],

    highlights: [
      "AI-assisted resume screening",
      "Experimental candidate classification",
      "NLP-powered resume matching",
      "TF-IDF and cosine similarity",
      "Controlled relevance scoring",
      "Job-specific screening",
      "Skill extraction and matching",
      "Experience analysis",
      "Education matching",
      "Single-resume screening",
      "Batch screening",
      "Candidate ranking",
      "Shortlist review",
      "Human decision oversight",
      "Streamlit deployment",
    ],

    results:
      "The project evolved from an experimental Fit vs Not Fit classifier into an AI-assisted recruitment screening prototype. It can analyze resumes, compare them with job requirements, identify matched and missing skills, assess experience and education, calculate text similarity, and organize candidates for review. The reported classification metrics show substantial limitations and do not establish reliable hiring suitability predictions.",

    exampleResult: {
      candidate: "David Adeyemi",
      finalScore: "69.09%",
      resumeMatch: "39.69%",
      skillMatch: "83.33%",
      experienceScore: "100%",
      educationScore: "100%",
      controlledRelevance: "70.88%",
      detectedExperience: "6.33 years",
      requiredExperience: "2 years",
      requiredSkills: 17,
      detectedSkills: 18,
      matchedSkills: 13,
      missingSkills: 4,

      matchedSkillsList: [
        "Python",
        "FastAPI",
        "Machine Learning",
        "Data Science",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "SQL",
        "AWS",
        "Docker",
        "Git",
        "GitHub",
      ],

      missingSkillsList: [
        "Flask",
        "Artificial Intelligence",
        "PyTorch",
        "Software Engineering",
      ],
    },

    lessonsLearned: [
      "The importance of preprocessing and data quality.",
      "Why class imbalance affects classification performance.",
      "How to evaluate models against simple baselines.",
      "Why accuracy and F1-score can be misleading without additional metrics.",
      "How NLP can complement structured qualification features.",
      "Why text similarity alone is not sufficient for candidate suitability.",
      "How to build single-resume and batch-screening workflows.",
      "Why human review and fairness considerations are essential in recruitment technology.",
    ],
  },

  // ============================================================
  // 3. AIRLINE CUSTOMER SATISFACTION AI
  // ============================================================
  {
    id: "airline-satisfaction",

    title: "Airline Customer Satisfaction Prediction",

    category: "Machine Learning / Customer Analytics",

    status: "Deployed Prototype",

    evidence: {
      evaluationStatus: "Reported test-set model evaluation",
      evaluationNotes:
        "The tuned Random Forest achieved 95.61% accuracy, 96.93% precision, 94.98% recall, 95.95% F1-score, and 0.9928 ROC-AUC in the documented test evaluation. Results reflect the project dataset and do not establish performance on future airline customers or independently collected production data.",
      deploymentStatus: "Deployed Prototype",
    },

    shortDescription:
      "A deployed Streamlit machine learning application that predicts airline passenger satisfaction using a tuned Random Forest model and analyzes service factors associated with customer experience.",

    description:
      "Airline Customer Satisfaction Prediction is an end-to-end supervised machine learning project that analyzes passenger characteristics, travel information, and airline service ratings to predict whether a customer is satisfied or dissatisfied. The project uses a dataset containing 129,880 records and 22 columns, compares Logistic Regression with a tuned Random Forest classifier, applies preprocessing, cross-validation, and hyperparameter tuning, and translates evaluation findings into customer-experience recommendations. A Streamlit application provides an interactive demonstration of the prediction workflow.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "Machine Learning",
      "Feature Engineering",
      "Data Analysis",
      "Cross-Validation",
      "Hyperparameter Tuning",
      "Matplotlib",
      "Seaborn",
      "SHAP",
      "Joblib",
      "Streamlit",
    ],

    image: "/projects/airline-satisfaction.webp",

    // Add the confirmed repository URL when available.
    github: "",

    demo: "https://airline-satisfaction-ai.streamlit.app/",

    featured: true,

    problem:
      "Airlines receive large amounts of passenger feedback across booking, check-in, boarding, inflight services, and arrival experiences. Understanding which factors are associated with satisfaction can support better service planning. This project investigates whether supervised machine learning can classify customer satisfaction and help identify areas for improvement.",

    approach: [
      "Defined the airline customer satisfaction prediction problem.",
      "Loaded a dataset containing 129,880 records and 22 columns.",
      "Inspected target distribution, variable types, and data quality.",
      "Performed exploratory data analysis.",
      "Examined passenger characteristics and service-related features.",
      "Prepared categorical and numerical features for classification.",
      "Applied preprocessing and feature engineering.",
      "Separated training and test data for model evaluation.",
      "Trained Logistic Regression as a baseline classifier.",
      "Trained and evaluated a Random Forest classifier.",
      "Applied cross-validation to assess model consistency.",
      "Performed hyperparameter tuning for Random Forest.",
      "Compared accuracy, precision, recall, F1-score, and ROC-AUC.",
      "Examined influential service-related features.",
      "Translated findings into airline service recommendations.",
      "Saved model artifacts for application inference.",
      "Built a Streamlit application for interactive predictions.",
      "Deployed the application for public demonstration.",
    ],

    pipeline: [
      "Problem Definition",
      "Data Loading",
      "Data Understanding",
      "Data Quality Assessment",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Categorical Encoding",
      "Data Preprocessing",
      "Train-Test Split",
      "Logistic Regression Baseline",
      "Random Forest Training",
      "Cross-Validation",
      "Hyperparameter Tuning",
      "Model Comparison",
      "Model Evaluation",
      "Feature Analysis",
      "Business Recommendations",
      "Model Persistence",
      "Streamlit Integration",
      "Cloud Deployment",
    ],

    model: {
      name: "Tuned Random Forest",
      type: "Binary Classification",
      target: "Satisfied vs Dissatisfied",

      comparison: [
        {
          name: "Logistic Regression",
          accuracy: "82.89%",
          precision: "84.45%",
          recall: "84.25%",
          f1Score: "84.35%",
          rocAuc: "0.9030",
        },
        {
          name: "Tuned Random Forest",
          accuracy: "95.61%",
          precision: "96.93%",
          recall: "94.98%",
          f1Score: "95.95%",
          rocAuc: "0.9928",
        },
      ],

      note:
        "Logistic Regression provided the baseline, while the tuned Random Forest achieved stronger reported test-set results. Model performance was evaluated using multiple classification metrics and cross-validation. These are offline evaluation results rather than verified production outcomes.",
    },

    evaluation: {
      modelsCompared: [
        {
          name: "Logistic Regression",
          accuracy: "0.8289",
          precision: "0.8445",
          recall: "0.8425",
          f1Score: "0.8435",
          rocAuc: "0.9030",
        },
        {
          name: "Tuned Random Forest",
          accuracy: "0.9561",
          precision: "0.9693",
          recall: "0.9498",
          f1Score: "0.9595",
          rocAuc: "0.9928",
        },
      ],

      metrics: [
        "Accuracy",
        "Precision",
        "Recall",
        "F1-Score",
        "ROC-AUC",
        "Confusion Matrix",
        "Cross-Validation",
      ],

      crossValidation: {
        accuracy: "95.47%",
        rocAuc: "0.9925",
      },

      focus:
        "The tuned Random Forest achieved 95.61% test accuracy, 96.93% precision, 94.98% recall, 95.95% F1-score, and 0.9928 ROC-AUC. The reported cross-validation mean accuracy was 95.47%, with mean ROC-AUC of 0.9925. These results suggest strong discrimination on the documented dataset, but additional validation would be required before operational deployment.",
    },

    metrics: [
      {
        label: "Test Accuracy",
        value: "95.61%",
      },
      {
        label: "Precision",
        value: "96.93%",
      },
      {
        label: "Recall",
        value: "94.98%",
      },
      {
        label: "F1-Score",
        value: "95.95%",
      },
      {
        label: "ROC-AUC",
        value: "0.9928",
      },
    ],

    highlights: [
      "Airline customer satisfaction prediction",
      "129,880-record dataset",
      "Logistic Regression baseline",
      "Tuned Random Forest classification",
      "Feature engineering",
      "Categorical preprocessing",
      "Cross-validation",
      "Hyperparameter tuning",
      "Model comparison",
      "95.61% reported test accuracy",
      "0.9928 reported test ROC-AUC",
      "Service-factor analysis",
      "Customer experience recommendations",
      "Interactive Streamlit application",
      "Cloud deployment",
    ],

    results:
      "The tuned Random Forest achieved 95.61% test accuracy, 95.95% F1-score, and 0.9928 ROC-AUC on the documented airline satisfaction dataset, outperforming the Logistic Regression baseline on the reported evaluation metrics. The analysis highlighted service factors including inflight entertainment, onboard service, check-in service, seat comfort, and online booking experience as important areas for investigation and improvement. The Streamlit application demonstrates the prediction workflow. These results should not be interpreted as proof of causal relationships or guaranteed production accuracy.",

    lessonsLearned: [
      "How to translate customer experience data into a classification problem.",
      "How to prepare categorical and numerical features for machine learning.",
      "Why a baseline model is important when evaluating more complex algorithms.",
      "How Random Forest captures nonlinear relationships in structured data.",
      "How cross-validation supports more reliable model assessment.",
      "How hyperparameter tuning can improve model performance.",
      "Why precision, recall, F1-score, and ROC-AUC should complement accuracy.",
      "How to interpret feature importance without assuming causation.",
      "How machine learning insights can inform customer service recommendations.",
      "How to integrate a trained model into a Streamlit application.",
      "How to deploy a machine learning prototype for public demonstration.",
    ],
  },

  // ============================================================
  // 4. FLOODGUARD AI
  // ============================================================
  {
    id: "floodguard-ai",

    title: "FloodGuard AI",

    category: "AI / Climate Tech / Social Impact",

    status: "MVP / In Development",

    evidence: {
      evaluationStatus: "MVP and solution-design assessment",
      evaluationNotes:
        "The project has not reported validated predictive flood-model performance. Future SMS, USSD, WhatsApp, environmental data integration, and forecasting capabilities remain development objectives rather than confirmed production features.",
      deploymentStatus: "MVP / In Development",
    },

    shortDescription:
      "A Nigeria-focused AI flood awareness and emergency information platform designed to improve preparedness, accessibility, and community safety.",

    description:
      "FloodGuard AI is a Nigeria-focused flood awareness and emergency information project exploring how artificial intelligence, risk information, emergency guidance, and accessible digital interfaces can support community preparedness. The MVP includes an AI-assisted information experience and a foundation for national flood-risk visualization. Proposed future capabilities include integration with environmental datasets, predictive flood models, automated alerts, and communication through SMS, USSD, and WhatsApp.",

    technologies: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning Concepts",
      "Generative AI",
      "Data Analysis",
      "Risk Analysis",
      "Streamlit",
      "Web Technology",
    ],

    image: "/projects/floodguard-ai.webp",

    github: "https://github.com/Inda-Obanyi/floodguard-ninja",

    demo: "https://3e7e648e.mydala.app",

    featured: true,

    problem:
      "Flooding is a recurring environmental and humanitarian challenge in Nigeria, affecting homes, infrastructure, agriculture, businesses, and livelihoods. Communities may struggle to access timely, understandable, and actionable flood-risk information, especially where internet connectivity or smartphone access is limited.",

    approach: [
      "Identified challenges in accessing understandable flood-risk information.",
      "Designed a Nigeria-focused flood awareness and emergency information platform.",
      "Developed an MVP for presenting flood-related guidance.",
      "Explored national flood-risk visualization for Nigerian states and the Federal Capital Territory.",
      "Integrated AI-assisted natural-language flood safety support.",
      "Organized emergency preparedness information for before, during, and after flooding.",
      "Considered emergency shelter and resource information.",
      "Designed future SMS, USSD, and WhatsApp accessibility concepts.",
      "Considered users with limited internet access.",
      "Planned future integration of reliable environmental datasets.",
      "Explored a roadmap for machine learning-based flood forecasting.",
      "Designed the project for incremental MVP validation and expansion.",
    ],

    pipeline: [
      "Problem Identification",
      "Flood-Risk Research",
      "Information Analysis",
      "Risk Awareness Design",
      "MVP Development",
      "AI Assistant",
      "National Risk Visualization Concept",
      "Emergency Information",
      "Accessibility Planning",
      "SMS Integration Concept",
      "USSD Integration Concept",
      "WhatsApp Integration Concept",
      "Environmental Data Roadmap",
      "Predictive Model Roadmap",
      "Deployment and Scalability Planning",
    ],

    model: {
      name: "AI-Powered Flood Awareness Platform",
      type: "AI / Data-Driven Risk Awareness MVP",
      target: "Flood Awareness, Preparedness, and Emergency Support",
    },

    evaluation: {
      metrics: [
        "Risk Awareness",
        "Accessibility",
        "AI Assistance",
        "Emergency Support",
        "Information Quality",
        "Scalability",
      ],

      focus:
        "FloodGuard AI is assessed at the MVP and solution-design level. The current project does not claim a validated predictive flood model or measured forecasting accuracy. Future capabilities depend on access to reliable environmental data, geographic information, and suitable validation procedures.",
    },

    metrics: [],

    highlights: [
      "Nigeria-focused flood awareness",
      "AI-assisted flood information",
      "Emergency preparedness guidance",
      "National risk visualization concept",
      "Emergency resource information",
      "Accessibility-focused design",
      "SMS accessibility concept",
      "USSD accessibility concept",
      "WhatsApp communication concept",
      "Future environmental data integration",
      "Future predictive flood modeling",
      "Social-impact MVP",
    ],

    results:
      "FloodGuard AI demonstrates an early-stage approach to making flood preparedness and emergency information more accessible through an AI-assisted digital experience. The MVP establishes a foundation for future work involving real-time environmental data, validated forecasting models, geographic risk visualization, and multi-channel alerts. No predictive accuracy claims are made for the current version.",

    lessonsLearned: [
      "Why public-safety AI projects must prioritize reliable information.",
      "How to design around community needs and accessibility constraints.",
      "Why geographic and environmental data quality matters for flood-risk prediction.",
      "How AI-assisted interfaces can make technical information easier to understand.",
      "Why an MVP should distinguish current capabilities from proposed features.",
      "How prototype development can guide future predictive-system architecture.",
    ],
  },
];

export default projects;
