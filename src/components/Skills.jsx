import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Boxes, Server, Cloud } from 'lucide-react';

const skills = [
  { name: 'Java', color: 'from-orange-300 to-pink-400', icon: Cpu },
  { name: 'Spring Boot', color: 'from-emerald-300 to-cyan-400', icon: Server },
  { name: 'React', color: 'from-cyan-300 to-sky-400', icon: Boxes },
  { name: 'Node.js', color: 'from-green-300 to-emerald-400', icon: Server },
  { name: 'Express', color: 'from-lime-300 to-emerald-400', icon: Server },
  { name: 'MongoDB', color: 'from-emerald-300 to-teal-400', icon: Boxes },
  { name: 'Docker', color: 'from-sky-300 to-blue-400', icon: Boxes },
  { name: 'AWS', color: 'from-amber-300 to-orange-400', icon: Cloud },
];

export default function Skills() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B26] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.18),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="text-sm text-white/80">Skills</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-40 blur-2xl transition-all duration-500 group-hover:opacity-70`} />
              <div className="relative z-10 flex items-center gap-4">
                <div className="grid h-12 w-12 place-content-center rounded-xl bg-white/10 text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">{s.name}</h4>
                  <p className="text-xs text-white/70">Hover to feel the glow</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional radial 3D skill cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-3 text-center text-sm text-white/80"
        >
          {['Microservices', 'REST & GraphQL', 'Design Systems', 'CI/CD', 'Kubernetes', 'PostgreSQL', 'Auth', 'WebSockets', 'Three.js'].map((chip) => (
            <div key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">{chip}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
