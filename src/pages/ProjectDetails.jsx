import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, ExternalLink, Code2, Target, BrainCircuit,
  Layers3, Rocket, Gauge, CheckCircle2, Lightbulb, BarChart3,
  ShieldCheck, AlertCircle, Database,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import SEO from "../components/SEO";

const SITE_URL = "https://indaobanyi.vercel.app";

function validExternalUrl(value) {
  if (typeof value !== "string" || !value.trim() || value.includes("YOUR_")) return false;
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

function SectionHeading({ number, label, title, description }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {number ? `${number} / ` : ""}{label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">{description}</p>}
    </div>
  );
}

function ContentSection({ children, reduceMotion, className = "" }) {
  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
      className={`mt-20 sm:mt-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function ExternalAction({ href, children, primary = false }) {
  if (!validExternalUrl(href)) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 ${
        primary
          ? "bg-cyan-400 text-black hover:bg-cyan-300"
          : "border border-white/15 text-gray-200 hover:border-cyan-400/40 hover:text-cyan-300"
      }`}
    >
      {children}<ExternalLink size={15} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const reduceMotion = useReducedMotion();
  const projectIndex = projects.findIndex((item) => item.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main id="main-content" tabIndex={-1} className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <p className="mt-4 text-gray-300">This case study is not available.</p>
        <Link to="/projects" className="mt-8 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black">Browse projects</Link>
      </main>
    );
  }

  const list = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
  const technologies = list(project.technologies);
  const approach = list(project.approach);
  const pipeline = list(project.pipeline);
  const highlights = list(project.highlights);
  const lessons = list(project.lessonsLearned);
  const metrics = list(project.metrics).filter((item) => item?.label && item?.value);
  const comparedModels = list(project.evaluation?.modelsCompared).length
    ? list(project.evaluation.modelsCompared)
    : list(project.model?.comparison);
  const status = [project.developmentStatus, project.status]
    .find((value) => typeof value === "string" && value.trim())?.trim()
    || "Project Case Study";
  const nextProject = projects.length > 1 ? projects[(projectIndex + 1) % projects.length] : null;
  const description = project.shortDescription || project.description || "Explore this AI engineering project.";
  const imageUrl = project.image ? new URL(project.image, SITE_URL).href : undefined;
  const projectUrl = `${SITE_URL}/projects/${project.id}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description,
    url: projectUrl,
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(validExternalUrl(project.github) ? { codeRepository: project.github } : {}),
    ...(validExternalUrl(project.demo) ? { softwareHelp: project.demo } : {}),
    programmingLanguage: technologies.filter((tool) => ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"].includes(tool)),
    author: { "@type": "Person", name: "Inda Obanyi" },
  };

  return (
    <>
      <SEO
        title={`${project.title} | AI/ML Project`}
        description={description}
        path={`/projects/${project.id}`}
        image={imageUrl}
        imageAlt={`${project.title} application preview`}
        type="article"
        structuredData={structuredData}
      />
      <main id="main-content" tabIndex={-1} className="min-h-screen overflow-hidden bg-black text-white">
        <section className="relative border-b border-white/[0.07] px-6 pb-16 pt-32 sm:pb-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-400/[0.05] blur-[110px]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
                <ArrowLeft size={16} aria-hidden="true" /> All Projects
              </Link>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5 text-xs font-semibold text-cyan-300">{status}</span>
            </div>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.5 }}>
                {project.category && <p className="text-xs font-semibold uppercase tracking-[0.2em] leading-6 text-cyan-400">{project.category}</p>}
                <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{project.title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">{description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ExternalAction href={project.demo} primary>View Demo</ExternalAction>
                  <ExternalAction href={project.github}>GitHub Repository</ExternalAction>
                  {list(project.engineeringEvidence).map((item) => <ExternalAction key={item.url} href={item.url}>{item.label}</ExternalAction>)}
                </div>
                {technologies.length > 0 && (
                  <ul aria-label="Technology stack" className="mt-8 flex flex-wrap gap-2">
                    {technologies.slice(0, 8).map((tool) => <li key={tool} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300">{tool}</li>)}
                    {technologies.length > 8 && <li className="px-2 py-1.5 text-xs text-gray-300">+{technologies.length - 8} more</li>}
                  </ul>
                )}
              </motion.div>
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.6 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-2">
                <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-zinc-950">
                  {project.image ? <img src={project.image} alt={`${project.title} application preview`} className="h-full w-full object-cover" decoding="async" /> : <div className="flex h-full items-center justify-center"><Code2 size={48} className="text-gray-500" aria-hidden="true" /></div>}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section aria-label="Project snapshot" className="border-b border-white/[0.07] bg-white/[0.015] px-6 py-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, label: "Project Type", value: project.model?.type || project.category || "AI / Software Project" },
              { icon: BrainCircuit, label: "Model / Approach", value: project.model?.name || "Application Design" },
              { icon: Layers3, label: "Technology Stack", value: `${technologies.length} documented tools` },
              { icon: Rocket, label: "Development Status", value: status },
            ].map((item) => {
              const Icon = item.icon;
              return <div key={item.label} className="rounded-2xl border border-white/[0.07] bg-black/20 p-5"><Icon size={19} className="text-cyan-400" aria-hidden="true" /><p className="mt-4 text-xs uppercase tracking-[0.12em] text-gray-400">{item.label}</p><p className="mt-2 text-sm font-semibold text-white">{item.value}</p></div>;
            })}
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 pb-24">
          {project.description && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="01" label="Overview" title={status.toLowerCase().includes("development") ? "What I am building" : "What I built"} /><div className="mt-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10"><p className="text-base leading-8 text-gray-300">{project.description}</p></div></ContentSection>}

          {(project.whyBuilding || project.plannedOutcome) && (
            <ContentSection reduceMotion={reduceMotion}>
              <SectionHeading
                label="Vision & Motivation"
                title="Why I am building this project"
                description="The motivation behind the work and the outcomes I want to achieve."
              />
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {project.whyBuilding && (
                  <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8">
                    <Target size={24} className="text-cyan-400" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-semibold text-white">Why I am developing it</h3>
                    <p className="mt-4 text-sm leading-8 text-gray-300">{project.whyBuilding}</p>
                  </div>
                )}
                {project.plannedOutcome && (
                  <div className="rounded-[1.75rem] border border-cyan-400/15 bg-cyan-400/[0.025] p-7 sm:p-8">
                    <Rocket size={24} className="text-cyan-400" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-semibold text-white">What I plan to achieve</h3>
                    <p className="mt-4 text-sm leading-8 text-gray-300">{project.plannedOutcome}</p>
                  </div>
                )}
              </div>
            </ContentSection>
          )}

          {project.problem && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="02" label="Problem" title="The challenge" /><div className="mt-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10"><p className="text-base leading-8 text-gray-300">{project.problem}</p></div></ContentSection>}

          {approach.length > 0 && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="03" label="Engineering Approach" title="How I approached it" /><ol className="mt-8 grid gap-4 md:grid-cols-2">{approach.map((step, index) => <li key={`${index}-${step}`} className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"><span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 text-xs font-bold text-cyan-300">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-7 text-gray-300">{step}</p></li>)}</ol></ContentSection>}

          {pipeline.length > 0 && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="04" label="Workflow" title="Development workflow & roadmap" /><ol className="mt-8 flex flex-wrap items-center gap-2 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">{pipeline.map((step, index) => <li key={`${index}-${step}`} className="flex items-center gap-2"><div className="rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3"><p className="text-xs text-gray-400">Step {String(index + 1).padStart(2, "0")}</p><p className="mt-1 text-sm font-medium text-gray-200">{step}</p></div>{index < pipeline.length - 1 && <ArrowRight size={14} className="text-gray-500" aria-hidden="true" />}</li>)}</ol></ContentSection>}

          {project.model && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="05" label="Machine Learning" title="Selected model or approach" /><div className="mt-8 grid gap-4 md:grid-cols-3">{[{ label: "Model / System", value: project.model.name, icon: BrainCircuit }, { label: "Task", value: project.model.type, icon: Layers3 }, { label: "Target", value: project.model.target, icon: Target }].filter((item) => item.value).map((item) => { const Icon = item.icon; return <div key={item.label} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-6"><Icon size={22} className="text-cyan-400" aria-hidden="true" /><p className="mt-5 text-xs uppercase tracking-[0.12em] text-gray-400">{item.label}</p><p className="mt-2 text-lg font-semibold text-white">{item.value}</p></div>; })}</div>{project.model.note && <p className="mt-5 text-sm leading-7 text-gray-300">{project.model.note}</p>}</ContentSection>}

          {comparedModels.length > 0 && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="06" label="Experimentation" title="Model comparison" description="Reported experimental scores from the project. Compare the models using the evaluation setup documented in the repository; these figures do not establish real-world generalization." /><div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/[0.08]"><div className="overflow-x-auto"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><caption className="sr-only">Reported classification metrics for {project.title}</caption><thead className="bg-white/[0.05]"><tr>{["Model", "Accuracy", "Precision", "Recall", "F1", "ROC-AUC"].map((heading) => <th scope="col" key={heading} className="border-b border-white/10 px-4 py-4 text-xs font-semibold text-gray-200">{heading}</th>)}</tr></thead><tbody>{comparedModels.map((model, index) => { const selected = model.name === project.model?.name; return <tr key={`${model.name}-${index}`} className={selected ? "bg-cyan-400/[0.06]" : "bg-white/[0.015]"}><th scope="row" className="border-b border-white/[0.06] px-4 py-4 font-semibold text-white">{model.name}{selected && <span className="ml-2 text-xs text-cyan-300">(Selected)</span>}</th>{[model.accuracy, model.precision, model.recall, model.f1Score ?? model.f1, model.rocAuc].map((value, i) => <td key={i} className="border-b border-white/[0.06] px-4 py-4 tabular-nums text-gray-300">{value ?? "—"}</td>)}</tr>; })}</tbody></table></div></div>{project.evaluation?.focus && <p className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-6 text-sm leading-7 text-gray-300">{project.evaluation.focus}</p>}</ContentSection>}

          {metrics.length > 0 && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="07" label="Evaluation" title="Reported model metrics" description="These are project-reported evaluation results, not verified production performance or guarantees of future predictions." /><div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">{metrics.map((metric, index) => <div key={`${metric.label}-${index}`} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5"><Gauge size={19} className="text-cyan-400" aria-hidden="true" /><p className="mt-5 text-2xl font-bold tabular-nums text-white">{metric.value}</p><p className="mt-2 text-xs leading-5 text-gray-300">{metric.label}</p></div>)}</div>{project.id === "fraudguard-ai" && <p className="mt-5 flex items-start gap-2 text-sm leading-7 text-gray-300"><AlertCircle size={18} className="mt-1 shrink-0 text-cyan-400" aria-hidden="true" />Near-perfect fraud-detection scores warrant careful checking for data leakage, class imbalance, train/test separation, and evaluation on representative unseen transactions.</p>}{project.id === "resume-screening" && <p className="mt-5 flex items-start gap-2 text-sm leading-7 text-gray-300"><AlertCircle size={18} className="mt-1 shrink-0 text-cyan-400" aria-hidden="true" />The reported ROC-AUC of 0.5425 indicates limited discrimination above chance. Candidate rankings should be treated as decision support, with human review and fairness checks.</p>}</ContentSection>}

          {highlights.length > 0 && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="08" label="Engineering" title="Capabilities and design highlights" description="The following items are drawn from the project's documentation. Check the repository and demo to distinguish implemented features from proposed integrations." /><ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{highlights.map((item, index) => <li key={`${index}-${item}`} className="flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"><CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-400" aria-hidden="true" /><span className="text-sm leading-7 text-gray-300">{item}</span></li>)}</ul></ContentSection>}

          {project.id === "fraudguard-ai" && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="09" label="System" title="Application architecture" /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{ icon: BrainCircuit, title: "ML Model", detail: "XGBoost classification and preprocessing" }, { icon: Code2, title: "API", detail: "FastAPI model-serving interface" }, { icon: Database, title: "Storage", detail: "SQLite transaction records" }, { icon: ShieldCheck, title: "Access & Monitoring", detail: "Authentication, RBAC, and audit logging" }].map((item) => { const Icon = item.icon; return <div key={item.title} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-6"><Icon size={22} className="text-cyan-400" aria-hidden="true" /><h3 className="mt-5 font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-gray-300">{item.detail}</p></div>; })}</div></ContentSection>}

          {project.results && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="10" label="Outcome" title="Project outcomes" /><div className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.04] p-7 sm:p-10"><BarChart3 size={25} className="text-cyan-400" aria-hidden="true" /><p className="mt-5 text-base leading-8 text-gray-200">{project.results}</p></div></ContentSection>}

          {lessons.length > 0 && <ContentSection reduceMotion={reduceMotion}><SectionHeading number="11" label="Reflection" title="What I learned" /><ul className="mt-8 grid gap-4 md:grid-cols-2">{lessons.map((lesson, index) => <li key={`${index}-${lesson}`} className="flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"><Lightbulb size={18} className="mt-1 shrink-0 text-cyan-400" aria-hidden="true" /><p className="text-sm leading-7 text-gray-300">{lesson}</p></li>)}</ul></ContentSection>}

          {technologies.length > 0 && <ContentSection reduceMotion={reduceMotion}><SectionHeading label="Technology" title="Tools behind the project" /><ul className="mt-8 flex flex-wrap gap-3">{technologies.map((technology) => <li key={technology} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-sm text-gray-300">{technology}</li>)}</ul></ContentSection>}
        </div>

        {nextProject && nextProject.id !== project.id && <section className="border-t border-white/[0.07] px-6 py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Continue Exploring</p><h2 className="mt-3 text-3xl font-bold text-white">{nextProject.title}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">{nextProject.shortDescription || nextProject.description}</p></div><Link to={`/projects/${nextProject.id}`} className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black hover:bg-cyan-300">Next Case Study <ArrowRight size={16} aria-hidden="true" /></Link></div></section>}
      </main>
    </>
  );
}

export default ProjectDetails;
