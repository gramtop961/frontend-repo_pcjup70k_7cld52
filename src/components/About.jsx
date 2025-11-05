import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={ref} className="relative w-full overflow-hidden bg-[#0A0A22] py-24 text-white">
      {/* Parallax gradients */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-3xl bg-[conic-gradient(at_top_left,_#22d3ee_20%,_#a78bfa_40%,_#f472b6_60%,_transparent_70%)] opacity-50 blur-2xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -right-16 bottom-16 h-72 w-72 rounded-3xl bg-[conic-gradient(at_bottom_right,_#60a5fa_20%,_#06b6d4_40%,_#f0abfc_60%,_transparent_70%)] opacity-50 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <User className="h-4 w-4 text-pink-300" />
          <span className="text-sm text-white/80">About Me</span>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto aspect-square w-64 overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl md:w-80"
          >
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_70%_-20%,rgba(168,85,247,0.45),transparent_60%),radial-gradient(circle_at_10%_120%,rgba(34,211,238,0.35),transparent_60%)]" />
            <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-black/30">
              <div className="h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,#a78bfa,transparent_40%),radial-gradient(circle_at_70%_60%,#22d3ee,transparent_40%)] shadow-[0_0_40px_#a78bfa55,0_0_80px_#22d3ee55]" />
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-6">
            <p className="text-lg text-white/80">
              I engineer scalable systems with Java/Spring Boot and craft immersive interfaces with the MERN stack. I love blending strong architecture with playful, futuristic UI motion.
            </p>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 h-full w-0.5 bg-gradient-to-b from-fuchsia-400/60 via-cyan-400/60 to-blue-400/60" />
              {[
                {
                  title: 'Senior Full Stack Developer',
                  time: '2022 — Present',
                  desc: 'Leading development of multi-tenant platforms, designing microservices, and building reactive UIs with 3D interactions.',
                },
                {
                  title: 'Software Engineer',
                  time: '2020 — 2022',
                  desc: 'Built Spring Boot services, GraphQL gateways, and modern React apps with CI/CD on AWS.',
                },
                {
                  title: 'B.Tech in Computer Science',
                  time: '2016 — 2020',
                  desc: 'Focused on distributed systems, algorithms, and human-computer interaction.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative mb-6 rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_0_30px_rgba(167,139,250,0.15)] backdrop-blur"
                >
                  <div className="absolute -left-2 top-4 h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 shadow-[0_0_12px_#a78bfa]" />
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="text-xs text-white/60">{item.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
