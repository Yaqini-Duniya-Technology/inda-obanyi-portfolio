
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  BrainCircuit,
  ServerCog,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function isValidExternalLink(value) {
  if (typeof value !== "string") return false;

  const url = value.trim();

  if (
    !url ||
    url === "#" ||
    url.includes("YOUR_")
  ) {
    return false;
  }

  try {
    const parsed = new URL(url);

    return (
      parsed.protocol === "https:" ||
      parsed.protocol === "http:"
    );
  } catch {
    return false;
  }
}

function Projects() {
  const reduceMotion = useReducedMotion();

  const fraudGuard = projects.find(
    (project) => project.id === "fraudguard-ai"
  );

  const otherProjects = projects
    .filter(
      (project) =>
        project.id !== "fraudguard-ai" &&
        project.featured !== false
    )
    .slice(0, 4);

  const fraudGuardHasDemo = isValidExternalLink(
    fraudGuard?.demo
  );

  const fraudGuardHasGitHub = isValidExternalLink(
    fraudGuard?.github
  );

  const fraudGuardTechnologies = Array.isArray(
    fraudGuard?.technologies
  )
    ? fraudGuard.technologies
    : [];

  const fraudGuardMetrics = Array.isArray(
    fraudGuard?.metrics
  )
    ? fraudGuard.metrics.filter(
        (metric) => metric?.label && metric?.value
      )
    : [];

  const fraudGuardStatus =
    typeof fraudGuard?.status === "string" &&
    fraudGuard.status.trim()
      ? fraudGuard.status.trim()
      : "Project Case Study";

  const architecture = [
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      technology: "XGBoost",
    },
    {
      icon: ServerCog,
      title: "Inference API",
      technology: "FastAPI",
    },
    {
      icon: Database,
      title: "Data Persistence",
      technology: "SQLite",
    },
  ].filter((item) =>
    fraudGuardTechnologies.some(
      (technology) =>
        technology.toLowerCase() ===
        item.technology.toLowerCase()
    )
  );

  const reveal = (delay = 0, y = 24) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: {
      once: true,
      amount: 0.12,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.55,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-44 top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          {...reveal()}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Selected Work
            </p>

            <h2
              id="projects-heading"
              className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl"
            >
              Building AI systems for
              <span className="block text-gray-400">
                real-world problems.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Explore my machine learning and software
              engineering projects, from data exploration
              and model development to application
              interfaces, APIs, and practical workflows.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Explore All Projects

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Flagship project */}
        {fraudGuard && (
          <motion.article
            {...reveal(0.05, 28)}
            className="group relative mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.055] via-white/[0.025] to-transparent"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[100px]"
            />

            <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
              {/* Screenshot */}
              <Link
                to={`/projects/${fraudGuard.id}`}
                aria-label={`View ${fraudGuard.title} case study`}
                className="relative block min-h-[280px] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-400 sm:min-h-[360px] lg:min-h-[520px]"
              >
                {fraudGuard.image ? (
                  <img
                    src={fraudGuard.image}
                    alt={`${fraudGuard.title} application preview`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                    <ShieldCheck
                      size={52}
                      aria-hidden="true"
                      className="text-cyan-400/50"
                    />
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/35"
                />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/80 px-4 py-2 backdrop-blur-xl">
                  <ShieldCheck
                    size={14}
                    aria-hidden="true"
                    className="text-cyan-400"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Flagship Project
                  </span>
                </div>
              </Link>

              {/* Project information */}
              <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] leading-5 text-cyan-400">
                    {fraudGuard.category ||
                      "AI Engineering"}
                  </p>

                  <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-200">
                    {fraudGuardStatus}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-white sm:text-4xl">
                  {fraudGuard.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base">
                  {fraudGuard.shortDescription ||
                    fraudGuard.description}
                </p>

                {/* Architecture highlights */}
                {architecture.length > 0 && (
                  <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {architecture.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.technology}
                          className="rounded-xl border border-white/[0.07] bg-black/20 p-3.5"
                        >
                          <Icon
                            size={17}
                            aria-hidden="true"
                            className="text-cyan-400"
                          />

                          <p className="mt-2 text-xs font-semibold text-white">
                            {item.technology}
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            {item.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Reported evaluation metrics */}
                {fraudGuardMetrics.length > 0 && (
                  <div className="mt-7">
                    <p className="mb-4 text-xs font-medium text-gray-300">
                      Reported model evaluation
                    </p>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
                      {fraudGuardMetrics
                        .slice(0, 5)
                        .map((metric) => (
                          <div
                            key={metric.label}
                            className="border-l border-cyan-400/25 pl-3"
                          >
                            <p className="text-lg font-bold text-white">
                              {metric.value}
                            </p>

                            <p className="mt-1 text-[10px] uppercase leading-4 tracking-[0.08em] text-gray-400">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                    </div>

                    <p className="mt-4 text-xs leading-5 text-gray-400">
                      Experimental results reported in the
                      project case study; not a guarantee
                      of real-world detection performance.
                    </p>
                  </div>
                )}

                {/* Technologies */}
                {fraudGuardTechnologies.length > 0 && (
                  <ul
                    aria-label="FraudGuard AI technologies"
                    className="mt-7 flex flex-wrap gap-2"
                  >
                    {fraudGuardTechnologies
                      .slice(0, 6)
                      .map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-gray-300"
                        >
                          {technology}
                        </li>
                      ))}
                  </ul>
                )}

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${fraudGuard.id}`}
                    className="group/button inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                  >
                    View Case Study

                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform motion-safe:group-hover/button:translate-x-1"
                    />
                  </Link>

                  {fraudGuardHasDemo && (
                    <a
                      href={fraudGuard.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${fraudGuard.title} demo in a new tab`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-cyan-400/25 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                    >
                      View Demo
                      <ExternalLink
                        size={14}
                        aria-hidden="true"
                      />
                    </a>
                  )}

                  {fraudGuardHasGitHub && (
                    <a
                      href={fraudGuard.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${fraudGuard.title} GitHub repository in a new tab`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-cyan-400/25 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                    >
                      GitHub
                      <ExternalLink
                        size={14}
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Additional featured projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                More Selected Work
              </h3>

              <div
                aria-hidden="true"
                className="h-px flex-1 bg-white/[0.07]"
              />
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <motion.div
          {...reveal()}
          className="mt-12 flex flex-col gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-gray-400">
            {projects.length}{" "}
            {projects.length === 1
              ? "project"
              : "projects"}{" "}
            documented in my portfolio.
          </p>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Browse Complete Portfolio

            <ArrowRight
              size={15}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
