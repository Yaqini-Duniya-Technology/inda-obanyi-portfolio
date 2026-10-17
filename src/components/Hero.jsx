import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  "Python",
  "Machine Learning",
  "XGBoost",
  "Scikit-learn",
  "FastAPI",
  "Streamlit",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:pb-24 lg:pt-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Cyan glow */}
        <div className="absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.07] blur-[120px]" />

        {/* Blue glow */}
        <div className="absolute bottom-[5%] right-[8%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:gap-24">

        {/* ===================================================
            LEFT SIDE — CONTENT
        ==================================================== */}

        <div className="max-w-4xl">

          {/* Availability badge */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              Open to opportunities & collaborations
            </span>
          </motion.div>

          {/* Professional positioning */}

          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.55,
    delay: 0.18,
  }}
  className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
>
  I'm Inda Obanyi, an AI/ML Engineer and Software Developer
  specializing in turning machine learning models into practical
  applications. I build predictive systems, Python APIs,
  intelligent workflows, and user-focused AI software —
  from experimentation and model evaluation to application
  development and deployment.
</motion.p>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mt-6 text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            I build intelligent

            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              systems that matter.
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.18,
            }}
            className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            I'm Inda Obanyi, an AI/ML Engineer transforming
            machine learning ideas into practical applications —
            from predictive models and inference APIs to secure,
            user-focused AI systems.
          </motion.p>

          {/* =================================================
              PRIMARY ACTIONS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.26,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            {/* Projects */}

            <Link
                to="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_35px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Explore My Work

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* CV */}

            <a
              href="/resume/Inda-Obanyi-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
            >
              <Download size={16} />

              Download CV
            </a>
          </motion.div>

          {/* =================================================
              PROFESSIONAL LINKS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.34,
            }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-600">
              Find me
            </span>

            <div className="hidden h-px w-8 bg-white/10 sm:block" />

            {/* GitHub */}

            <a
              href="https://github.com/Inda-Obanyi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-cyan-300"
            >
              GitHub

              <ExternalLink
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/inda-obanyi-8886553a6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-cyan-300"
            >
              LinkedIn

              <ExternalLink
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* =================================================
              CORE TECHNOLOGIES
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.4,
            }}
            className="mt-10 border-t border-white/[0.07] pt-7"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
              Core Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-1.5 text-xs font-medium text-gray-400 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            RIGHT SIDE — PROFESSIONAL PORTRAIT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto w-full max-w-[470px] pb-10 lg:mx-0 lg:ml-auto lg:pb-0"
        >
          <div className="relative">

            {/* Portrait glow */}

            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-[4rem] bg-cyan-400/[0.08] blur-[80px]"
            />

            {/* Decorative outline */}

            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.6rem] border border-cyan-400/[0.08]"
            />

            {/* =================================================
                PORTRAIT CARD
            ================================================== */}

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-zinc-950">

                <img
  src="/images/profile.jpg"
  alt="Inda Obanyi, AI/ML Engineer and Software Developer"
  className="h-full w-full object-cover object-top"
  fetchPriority="high"
  loading="eager"
  decoding="async"
  sizes="(min-width: 1024px) 470px, 100vw"
/>

                {/* Portrait overlay */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent"
                />

                {/* Name */}

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

                  <p className="text-2xl font-bold tracking-tight text-white">
                    Inda Obanyi
                  </p>

                  <p className="mt-1 text-sm font-medium text-cyan-300">
                    AI/ML Engineer
                  </p>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-gray-400">
                    Building intelligent solutions.
                    Creating real-world impact.
                  </p>

                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING CAPABILITY CARD
            ================================================== */}

            <div className="absolute -bottom-7 left-2 max-w-[230px] rounded-2xl border border-white/10 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-xl sm:-left-8">

              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Sparkles size={17} />
                </div>

                <div>

                  <p className="text-xs font-semibold text-white">
                    End-to-End AI Engineering
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-gray-500">
                    ML · APIs · Applications
                  </p>

                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING FOCUS CARD
            ================================================== */}

            <div className="absolute -right-2 top-8 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-7">

              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-gray-600">
                Focus
              </p>

              <p className="mt-1 text-xs font-semibold text-cyan-300">
                Real-world impact
              </p>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;