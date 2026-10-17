
import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  ServerCog,
  Workflow,
  ArrowRight,
} from "lucide-react";

const skillGroups = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Developing, comparing, and evaluating predictive models for classification and regression problems.",
    skills: [
      "Supervised Learning",
      "Classification",
      "Regression",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "Decision Trees",
      "Model Evaluation",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data Science",
    description:
      "Exploring datasets, identifying patterns, and preparing reliable features for machine learning.",
    skills: [
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Data Cleaning",
      "Preprocessing",
      "Statistical Analysis",
      "Data Visualization",
      "Class Imbalance",
      "SMOTE",
    ],
  },
  {
    icon: ServerCog,
    title: "AI Engineering",
    description:
      "Integrating machine learning models with APIs, interactive applications, and practical software workflows.",
    skills: [
      "FastAPI",
      "Model Inference",
      "Model Persistence",
      "REST APIs",
      "Streamlit",
      "Authentication",
      "RBAC",
      "Audit Logging",
    ],
  },
  {
    icon: Code2,
    title: "Programming & Frontend",
    description:
      "Developing application logic and responsive interfaces that make intelligent systems usable.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Git",
      "GitHub",
    ],
  },
  {
    icon: Database,
    title: "Data & Persistence",
    description:
      "Working with data processing libraries, datasets, notebooks, and application storage.",
    skills: [
      "Pandas",
      "NumPy",
      "SQLite",
      "Jupyter Notebook",
      "Dataset Processing",
      "Data Pipelines",
      "CSV",
      "Kaggle",
    ],
  },
  {
    icon: Workflow,
    title: "Delivery & Deployment",
    description:
      "Moving projects from experimentation toward accessible, tested, and maintainable applications.",
    skills: [
      "Application Deployment",
      "API Integration",
      "Vercel",
      "Render",
      "Git Workflows",
      "Environment Variables",
      "Testing",
      "Production Builds",
    ],
  },
];

const engineeringFlow = [
  "Define Problem",
  "Explore Data",
  "Engineer Features",
  "Train Models",
  "Evaluate Results",
  "Build APIs",
  "Deploy & Test",
];

function Skills() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          {...reveal()}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Skills & Capabilities
            </p>

            <h2
              id="skills-heading"
              className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl"
            >
              Technology is the tool.
              <span className="block text-gray-400">
                Solving problems is the goal.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-gray-300 sm:text-lg lg:ml-auto">
            My toolkit covers the machine learning lifecycle, from
            understanding data and developing predictive models to
            API integration, application engineering, testing, and
            deployment.
          </p>
        </motion.div>

        {/* Engineering workflow */}
        <motion.div
          {...reveal(0.05)}
          className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-5 sm:px-7"
        >
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            My Engineering Workflow
          </h3>

          <ol className="flex flex-wrap items-center gap-2">
            {engineeringFlow.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-2"
              >
                <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-xs font-medium text-cyan-300">
                  {step}
                </span>

                {index < engineeringFlow.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    size={13}
                    className="text-gray-500"
                  />
                )}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Skill categories */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                {...reveal(index * 0.04)}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7 transition-colors duration-300 hover:border-cyan-400/25 hover:bg-white/[0.035]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.08]"
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-400">
                      <Icon size={20} aria-hidden="true" />
                    </div>

                    <span className="text-xs font-medium text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-400">
                    {group.description}
                  </p>

                  <ul
                    aria-label={`${group.title} technologies and skills`}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 group-hover:border-white/[0.12]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering mindset */}
        <motion.div
          {...reveal()}
          className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.055] to-transparent p-7 sm:p-9"
        >
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Engineering Mindset
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Beyond the notebook.
              </h3>
            </div>

            <p className="leading-7 text-gray-300">
              I approach machine learning as part of a larger
              software system. Beyond model performance, I consider
              data quality, explainability, APIs, user experience,
              persistence, security, deployment, and testing.
              My goal is to turn useful predictions into applications
              people can understand and use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
