
import { motion, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  BrainCircuit,
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const experiences = [
  {
    id: "independent-engineering",
    icon: BrainCircuit,
    period: "2026 - Present",
    title: "Independent AI/ML Engineer & Software Developer",
    organization: "Independent Projects & Applied AI Development",
    category: "Independent Engineering",
    description:
      "Designing and developing practical machine learning applications, predictive systems, APIs, and interactive software. My work connects model experimentation with usable interfaces, application logic, and deployment workflows.",
    highlights: [
      "Developed predictive machine learning applications",
      "Connected trained models with interactive interfaces",
      "Built Python-based application and API workflows",
      "Worked across data, backend, frontend, and deployment",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "Streamlit",
      "React",
      "AI Engineering",
    ],
    featured: true,
  },
  {
    id: "selected-projects",
    icon: Code2,
    period: "Portfolio Projects",
    title: "Applied Machine Learning & AI Projects",
    organization: "Independent Technical Portfolio",
    category: "Project Experience",
    description:
      "Building and documenting machine learning solutions across fraud detection, recruitment analytics, airline customer satisfaction, and flood-risk awareness. These projects demonstrate different stages of the AI product development lifecycle.",
    highlights: [
      "FraudGuard AI: mobile money fraud classification",
      "Resume Screening AI: NLP-based classification",
      "Airline Satisfaction AI: predictive modelling and explainability",
      "FloodGuard AI: flood-risk information and safety application",
    ],
    skills: [
      "Scikit-learn",
      "XGBoost",
      "Feature Engineering",
      "NLP",
      "SHAP",
      "Model Evaluation",
    ],
  },
  {
    id: "3mtt",
    icon: GraduationCap,
    period: "Professional Training",
    title: "AI & Machine Learning Fellow",
    organization: "3 Million Technical Talent (3MTT)",
    category: "Technical Education",
    description:
      "Completed structured training in artificial intelligence and machine learning, strengthening practical skills in Python, data preparation, supervised learning, model evaluation, and applied problem-solving.",
    highlights: [
      "Practiced supervised machine learning techniques",
      "Worked with datasets and preprocessing workflows",
      "Developed feature engineering skills",
      "Compared and evaluated classification models",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    id: "teaching",
    icon: BookOpen,
    period: "2023 - Present",
    title: "Mathematics Tutor",
    organization: "Divine Excellence Dynamic Academy",
    category: "Professional Experience",
    description:
      "Teaching mathematics and supporting students' analytical reasoning, problem-solving, and quantitative skills. This experience has strengthened my communication, mentoring, and ability to explain technical concepts clearly.",
    highlights: [
      "Deliver mathematics lessons and assessments",
      "Support students with structured problem-solving",
      "Explain complex concepts in accessible ways",
      "Develop instructional and assessment materials",
    ],
    skills: [
      "Mathematics",
      "Analytical Thinking",
      "Communication",
      "Teaching",
      "Mentoring",
    ],
  },
  {
    id: "computer-instructor",
    icon: BriefcaseBusiness,
    period: "2020 - 2022",
    title: "Computer Instructor",
    organization: "Honors Hall Academy",
    category: "Professional Experience",
    description:
      "Supported computer education and digital literacy, helping learners develop foundational computing knowledge and practical technology skills.",
    highlights: [
      "Delivered foundational computer instruction",
      "Supported practical technology learning",
      "Helped learners develop digital literacy",
      "Communicated computing concepts to students",
    ],
    skills: [
      "Computer Education",
      "Digital Literacy",
      "Instruction",
      "Communication",
    ],
  },
];

function Experience() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      delay: reduceMotion ? 0 : delay,
    },
  });

  const scrollToContact = () => {
    const contact = document.getElementById("contact");

    if (!contact) return;

    const navbarHeight = 90;

    const position =
      contact.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: position,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />
        <div className="absolute -left-40 bottom-10 h-[350px] w-[350px] rounded-full bg-blue-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          {...reveal()}
          className="grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Experience & Growth
            </p>

            <h2
              id="experience-heading"
              className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
            >
              Learning by building.
              <span className="block text-gray-400">
                Growing through execution.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              My experience combines independent AI engineering,
              applied machine learning projects, formal technical
              training, and professional teaching. Each contributes
              to how I design, build, and communicate technology.
            </p>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                {!reduceMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
                )}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs font-medium text-gray-300">
                Building & learning
              </span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-20">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent sm:block"
          />

          <div className="space-y-7">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.id}
                  {...reveal(Math.min(index * 0.04, 0.16))}
                  className="relative sm:pl-20"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-7 hidden sm:block">
                    <div
                      className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border ${
                        experience.featured
                          ? "border-cyan-400/30 bg-cyan-400/[0.08]"
                          : "border-white/10 bg-black"
                      } text-cyan-400 shadow-xl`}
                    >
                      <Icon
                        size={19}
                        aria-hidden="true"
                        className="relative"
                      />
                    </div>
                  </div>

                  {/* Experience card */}
                  <div
                    className={`group relative overflow-hidden rounded-[2rem] border p-6 transition-colors duration-300 sm:p-8 ${
                      experience.featured
                        ? "border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.045] via-white/[0.025] to-transparent"
                        : "border-white/[0.08] bg-white/[0.02]"
                    } hover:border-cyan-400/25`}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.025] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.05]"
                    />

                    <div className="relative">
                      {/* Period and category */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-400 sm:hidden">
                            <Icon size={17} aria-hidden="true" />
                          </div>

                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400">
                            {experience.period}
                          </p>
                        </div>

                        <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] font-medium text-gray-300">
                          {experience.category}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="mt-5">
                        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {experience.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-gray-400">
                          {experience.organization}
                        </p>
                      </div>

                      {/* Description and highlights */}
                      <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                        <p className="leading-8 text-gray-300">
                          {experience.description}
                        </p>

                        <ul className="grid gap-3 sm:grid-cols-2">
                          {experience.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-3.5"
                            >
                              <CheckCircle2
                                size={16}
                                aria-hidden="true"
                                className="mt-0.5 shrink-0 text-cyan-400"
                              />

                              <span className="text-xs leading-5 text-gray-300">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies and capabilities */}
                      <div className="mt-7 border-t border-white/[0.07] pt-6">
                        <ul
                          aria-label={`${experience.title} skills`}
                          className="flex flex-wrap gap-2"
                        >
                          {experience.skills.map((skill) => (
                            <li
                              key={skill}
                              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-gray-300"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Career direction */}
        <motion.div
          {...reveal()}
          className="mt-16 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.035] p-7 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <BriefcaseBusiness
                  size={20}
                  aria-hidden="true"
                  className="text-cyan-400"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Career Direction
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Building toward production-ready AI engineering.
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-gray-300">
                I'm interested in opportunities to contribute to
                meaningful AI products, collaborate with engineering
                teams, and continue developing reliable, practical
                machine learning systems.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              Let's Connect

              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
