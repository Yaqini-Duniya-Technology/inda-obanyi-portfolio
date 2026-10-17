
import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Code2,
  Rocket,
  GraduationCap,
  Layers3,
  ArrowUpRight,
  Award,
} from "lucide-react";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Developing predictive models through feature engineering, algorithm comparison, evaluation, and explainability.",
  },
  {
    icon: Code2,
    title: "AI Engineering",
    description:
      "Connecting machine learning models to APIs, interactive interfaces, persistence layers, and application workflows.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Transforming raw datasets through exploratory analysis, cleaning, preprocessing, and data-driven investigation.",
  },
  {
    icon: Rocket,
    title: "AI Product Development",
    description:
      "Building practical AI applications with attention to usability, security, testing, deployment, and user needs.",
  },
];

const domains = [
  "FinTech",
  "Recruitment",
  "Customer Analytics",
  "Agriculture",
  "Social Impact",
];

function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0, x = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reduceMotion ? 0 : 0.55,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-400/[0.035] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          {...reveal()}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2
              id="about-heading"
              className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl"
            >
              From data to
              <span className="block text-gray-400">
                working systems.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-gray-300 sm:text-lg lg:ml-auto">
            I'm Inda Obanyi, an AI/ML Engineer and Software Developer
            focused on transforming machine learning ideas into
            practical software solutions that address real-world
            problems.
          </p>
        </motion.div>

        {/* Professional story and snapshot */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            {...reveal(0, -16)}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-32 w-32 bg-cyan-400/[0.04] blur-3xl"
            />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-400">
                <Layers3 size={20} aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                Building beyond the model.
              </h3>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300 sm:text-base">
                <p>
                  My foundation in Computer Science introduced me
                  to programming, analytical thinking, and software
                  development. I have since expanded into artificial
                  intelligence, machine learning, and the engineering
                  of intelligent applications.
                </p>

                <p>
                  I work across the machine learning lifecycle:
                  exploring data, engineering features, training
                  and evaluating models, interpreting predictions,
                  and integrating those models into software
                  interfaces and APIs.
                </p>

                <p>
                  My portfolio includes projects in financial fraud
                  detection, NLP-based recruitment screening, and
                  airline customer satisfaction prediction. I am
                  also developing AI products for agriculture,
                  flood-risk awareness, and creative applications.
                </p>

                <p className="font-medium text-white">
                  My goal is to build intelligent systems that
                  are technically sound, understandable, and
                  useful to the people who depend on them.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Professional snapshot */}
          <motion.aside
            {...reveal(0.08, 16)}
            aria-label="Professional qualifications and focus"
            className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-7 sm:p-8"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Professional Snapshot
            </h3>

            <div className="mt-7 space-y-7">
              {/* Education */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/[0.07] text-cyan-400">
                  <GraduationCap size={19} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                    Education
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Higher National Diploma (HND)
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    Computer Science
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Lagos State Polytechnic
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/[0.07]" />

              {/* Technical qualification */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/[0.07] text-cyan-400">
                  <Award size={19} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                    Technical Training
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    AI & Machine Learning
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    3 Million Technical Talent (3MTT)
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/[0.07]" />

              {/* Engineering focus */}
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                  Engineering Focus
                </p>

                <p className="mt-2 font-semibold text-white">
                  End-to-End AI/ML Systems
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Predictive modelling · Python APIs ·
                  intelligent applications · software development
                </p>
              </div>

              <div className="h-px bg-white/[0.07]" />

              {/* Domains */}
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                  Domains Explored
                </p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {domains.map((domain) => (
                    <li
                      key={domain}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {domain}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Focus areas */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                {...reveal(index * 0.05)}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.025]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/[0.07] text-cyan-400 transition-colors group-hover:bg-cyan-400/[0.12]">
                  <Icon size={19} aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {area.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Opportunity CTA */}
        <motion.div
          {...reveal()}
          className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.06] via-cyan-400/[0.025] to-transparent p-7 sm:p-9"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Open To Opportunities
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Building useful technology with ambitious teams.
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                I'm interested in AI/ML engineering roles,
                software development opportunities, technical
                collaborations, and projects focused on building
                practical intelligent systems.
              </p>
            </div>

            <a
              href="/#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              Start a Conversation

              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
