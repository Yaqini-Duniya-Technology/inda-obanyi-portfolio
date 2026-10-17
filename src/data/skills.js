import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Rocket,
  Wrench,
} from "lucide-react";

import skills from "../data/skills";

const icons = [
  Code2,
  BrainCircuit,
  Rocket,
  Wrench,
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills & Technologies
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools I use to build machine learning solutions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            My current technical focus is centered around Python,
            machine learning, data analysis, model evaluation,
            and turning trained models into usable applications.
          </p>

        </div>


        {/* Skill Categories */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {skills.map((group, groupIndex) => {
            const Icon = icons[groupIndex % icons.length];

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.08,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/30"
              >

                {/* Category Header */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {group.category}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {group.description}
                    </p>
                  </div>

                </div>


                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">

                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                    >

                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>

                      <span className="text-[10px] uppercase tracking-wider text-gray-600 transition group-hover:text-cyan-400">
                        {skill.level}
                      </span>

                    </div>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7"
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
                Currently Developing
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                Growing from ML practitioner into ML Engineer
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                My current focus is strengthening model deployment,
                production-oriented machine learning workflows,
                APIs, cloud technologies, and software engineering
                practices around ML systems.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm text-cyan-400">
              <Rocket size={18} />
              Learning → Building → Deploying
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;