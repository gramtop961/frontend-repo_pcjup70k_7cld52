import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const ry = ((x - midX) / midX) * 10; // rotateY
    const rx = -((y - midY) / midY) * 10; // rotateX
    setTilt({ rx, ry });
  };

  const onMouseLeave = () => setTilt({ rx: 0, ry: 0 });

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
          {/* Interactive Glass Card (replacing previous avatar) */}
          <motion.div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative mx-auto aspect-[4/5] w-72 select-none rounded-3xl border border-white/15 bg-white/10 p-4 shadow-[0_0_40px_rgba(167,139,250,0.25)] backdrop-blur-xl md:w-80 [transform-style:preserve-3d]"
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%_80%_at_10%_0%,rgba(168,85,247,0.35),transparent),radial-gradient(120%_80%_at_100%_100%,rgba(34,211,238,0.25),transparent)]" />

            {/* Profile content */}
            <div className="relative z-10 h-full w-full rounded-2xl bg-black/30 p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-tr from-fuchsia-400 to-cyan-300 shadow-[0_0_30px_#a78bfa66]" />
                <div>
                  <h3 className="text-lg font-semibold">Jayanth Kumar</h3>
                  <p className="text-xs text-white/70">Full Stack Developer — Java & MERN</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-white/80">
                <p>Crafting systems that scale while keeping the UI playful and cinematic.</p>
                <p className="text-white/60">Loves: 3D Web, Microservices, DX</p>
              </div>

              {/* Scanning shimmer */}
              <div className="pointer-events-none absolute inset-x-0 -top-1 h-1/3 animate-pulse bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent)]" />

              {/* Floating chips inside the card */}
              <motion.div drag dragMomentum={false} className="absolute -right-3 top-16 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 shadow backdrop-blur" style={{ transform: 'translateZ(40px)' }}>
                React 3D
              </motion.div>
              <motion.div drag dragMomentum={false} className="absolute left-6 bottom-6 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 shadow backdrop-blur" style={{ transform: 'translateZ(40px)' }}>
                Spring Boot
              </motion.div>
              <motion.div drag dragMomentum={false} className="absolute right-8 bottom-14 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 shadow backdrop-blur" style={{ transform: 'translateZ(40px)' }}>
                MongoDB
              </motion.div>
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
