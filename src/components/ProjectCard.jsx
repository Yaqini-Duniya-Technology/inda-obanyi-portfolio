
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";

function isValidLink(value) {
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

function ProjectCard({ project, index = 0 }) {
  const reduceMotion = useReducedMotion();

  if (!project) return null;

  const hasDemo = isValidLink(project.demo);
  const hasGitHub = isValidLink(project.github);

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  const visibleTechnologies = technologies.slice(0, 5);
  const remainingCount = Math.max(
    technologies.length - visibleTechnologies.length,
    0
  );

  const caseStudyPath = `/projects/${project.id}`;

  // Explicit project status is preferred over inferring
  // production readiness from the existence of a demo.
  const projectStatus = [project.developmentStatus, project.status]
    .find((value) => typeof value === "string" && value.trim())?.trim() || "";

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 24 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion
          ? 0
          : Math.min(index * 0.05, 0.2),
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition-colors duration-300 hover:border-cyan-400/25 hover:bg-white/[0.035]"
    >
      {/* Project screenshot */}
      <Link
        to={caseStudyPath}
        className="block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-400"
        aria-label={`View ${project.title} case study`}
      >
        <div className="relative aspect-video overflow-hidden bg-zinc-950">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} application preview`}
              className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.035]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Code2
                size={32}
                aria-hidden="true"
                className="text-gray-500"
              />
            </div>
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cyan-400/0 transition-colors duration-500 group-hover:bg-cyan-400/[0.025]"
          />

          {/* Project number */}
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Explicit status */}
          {projectStatus && (
            <div className="absolute right-4 top-4 max-w-[65%] rounded-full border border-cyan-400/20 bg-black/80 px-3 py-1.5 text-right backdrop-blur-md">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan-300">
                {projectStatus}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {project.category && (
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] leading-5 text-cyan-400">
            {project.category}
          </p>
        )}

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
          <Link
            to={caseStudyPath}
            className="focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-300">
          {project.shortDescription ||
            project.description ||
            "Explore the project's technical approach, implementation, and outcomes."}
        </p>

        {(project.whyBuilding || project.plannedOutcome) && (
          <div className="mt-5 space-y-3 border-l-2 border-cyan-400/30 pl-4">
            {project.whyBuilding && (
              <p className="line-clamp-2 text-xs leading-6 text-gray-300">
                <span className="font-semibold text-cyan-300">Why I'm building it: </span>
                {project.whyBuilding}
              </p>
            )}
            {project.plannedOutcome && (
              <p className="line-clamp-2 text-xs leading-6 text-gray-300">
                <span className="font-semibold text-cyan-300">My goal: </span>
                {project.plannedOutcome}
              </p>
            )}
          </div>
        )}

        {/* Technology stack */}
        {technologies.length > 0 && (
          <ul
            aria-label={`${project.title} technologies`}
            className="mt-6 flex flex-wrap gap-2"
          >
            {visibleTechnologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs font-medium text-gray-300"
              >
                {technology}
              </li>
            ))}

            {remainingCount > 0 && (
              <li className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-gray-400">
                +{remainingCount} more
              </li>
            )}
          </ul>
        )}

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/[0.07] pt-6">
          <Link
            to={caseStudyPath}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Case Study

            <ArrowRight
              size={15}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover/link:translate-x-1"
            />
          </Link>

          {hasGitHub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} GitHub repository (opens in a new tab)`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              GitHub
              <ExternalLink
                size={12}
                aria-hidden="true"
              />
            </a>
          )}

          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} demo (opens in a new tab)`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              View Demo
              <ExternalLink
                size={12}
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
