import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Code2,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const featuredProject =
    projects.find((project) => project.id === "fraudguard-ai") ||
    projects.find((project) => project.featured !== false);

  const remainingProjects = projects.filter(
    (project) => project.id !== featuredProject?.id
  );

  return (
    <main id="main-content" tabIndex={-1} className="relative min-h-screen overflow-hidden bg-black px-6 pb-24 pt-32 text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />

        <div className="absolute -right-40 top-[40%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            BACK
        ====================================================== */}

        <Link
          to="/#projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-cyan-300"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />

          Back to Portfolio
        </Link>

        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-12 grid gap-10 border-b border-white/[0.07] pb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Project Portfolio
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Ideas turned into
              <span className="block text-gray-300">
                working systems.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              A collection of machine learning, AI, data science,
              and software projects built around practical problems,
              technical experimentation, and usable applications.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
              <Layers3
                size={18}
                className="text-cyan-400"
              />

              <p className="mt-4 text-2xl font-bold">
                {projects.length}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-300">
                Projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
              <BrainCircuit
                size={18}
                className="text-cyan-400"
              />

              <p className="mt-4 text-2xl font-bold">
                ML
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-300">
                Models
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
              <Code2
                size={18}
                className="text-cyan-400"
              />

              <p className="mt-4 text-2xl font-bold">
                E2E
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-300">
                Systems
              </p>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            FEATURED CASE STUDY
        ====================================================== */}

        {featuredProject && (
          <motion.section
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mt-16"
          >
            <div className="flex items-center gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Featured Case Study
              </p>

              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            <Link
              to={`/projects/${featuredProject.id}`}
              className="group mt-7 grid overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.05] to-white/[0.015] transition duration-300 hover:border-cyan-400/30 lg:grid-cols-[1.1fr_0.9fr]"
            >
              {/* Image */}

              <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[480px]">
                {featuredProject.image ? (
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.title} project`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/[0.03]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />

                <div className="absolute left-5 top-5 rounded-full border border-cyan-400/20 bg-black/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
                  Flagship Project
                </div>
              </div>

              {/* Content */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  {featuredProject.category}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight transition group-hover:text-cyan-300 sm:text-4xl">
                  {featuredProject.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base">
                  {featuredProject.shortDescription ||
                    featuredProject.description}
                </p>

                {featuredProject.technologies?.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-2">
                    {featuredProject.technologies
                      .slice(0, 6)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[11px] text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
                  </div>
                )}

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-400">
                  Read Full Case Study

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </motion.section>
        )}

        {/* =====================================================
            ALL OTHER PROJECTS
        ====================================================== */}

        {remainingProjects.length > 0 && (
          <section className="mt-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-300">
                  Project Archive
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  More projects.
                </h2>
              </div>

              <p className="text-sm text-gray-300">
                {remainingProjects.length} additional{" "}
                {remainingProjects.length === 1
                  ? "project"
                  : "projects"}
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {remainingProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.035] p-8 sm:p-10"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Interested In My Work?
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Let's build something useful.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-300">
                I'm open to AI/ML opportunities, technical
                collaborations, and projects focused on solving
                meaningful real-world problems.
              </p>
            </div>

            <Link
              to="/#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
            >
              Let's Connect

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default ProjectsPage;