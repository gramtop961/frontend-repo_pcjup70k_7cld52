import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Send } from 'lucide-react';

const projects = [
  {
    title: 'Nebula Commerce',
    desc: 'Headless commerce with reactive microservices and a 3D product studio.',
    tech: ['Spring Boot', 'Kafka', 'React', 'Three.js', 'MongoDB'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Pulse Analytics',
    desc: 'Real-time metrics dashboard with WebSockets and GPU-animated charts.',
    tech: ['Node.js', 'Express', 'React', 'WebSockets', 'Redis'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Orbit CMS',
    desc: 'Content platform with rich animations and pluggable workflows.',
    tech: ['Spring Boot', 'GraphQL', 'React', 'PostgreSQL'],
    demo: '#',
    repo: '#',
  },
];

export default function Showcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C0C2C] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(167,139,250,0.08)_0%,transparent_30%),linear-gradient(240deg,rgba(56,189,248,0.08)_0%,transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Projects */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="text-sm text-white/80">Projects</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ scale: 1.02, rotateX: 6, rotateY: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.06)_100%)]" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.demo} className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/20">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/20">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.4),transparent_60%)] blur-2xl opacity-60" />
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="text-sm text-white/80">Experience</span>
          </div>
          <div className="relative grid gap-6 md:grid-cols-2">
            {[
              { role: 'Lead Developer', org: 'HyperNova Labs', time: '2023 — Present', points: ['Architected microservices', '3D UI prototyping', 'DevOps on AWS'] },
              { role: 'Full Stack Engineer', org: 'CloudByte', time: '2021 — 2023', points: ['Built analytics suite', 'Real-time dashboards', 'Improved DX & CI'] },
              { role: 'Backend Engineer', org: 'DataMesh', time: '2020 — 2021', points: ['Event-driven pipelines', 'Optimized SQL/NoSQL', 'SRE rotations'] },
              { role: 'Intern', org: 'StartupX', time: '2019 — 2020', points: ['MERN features', 'Unit/integration tests', 'UX polish'] },
            ].map((e, idx) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{e.role}</h4>
                    <p className="text-sm text-white/70">{e.org}</p>
                  </div>
                  <span className="text-xs text-white/60">{e.time}</span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/80">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mt-24 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Let’s build something cosmic</h3>
          <p className="mt-2 text-white/70">Reach out for collaborations, consulting, or just to say hi.</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input required placeholder="Your name" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-cyan-400/60" />
            <input type="email" required placeholder="Email address" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-cyan-400/60" />
            <input placeholder="Subject" className="md:col-span-2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-cyan-400/60" />
            <textarea required rows={5} placeholder="Your message" className="md:col-span-2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-cyan-400/60" />
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-max items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-blue-600 px-6 py-3 text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]"
              onClick={() => alert('Thanks! This demo form can be wired to an API later.')}
            >
              Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.button>
        
            <div className="md:col-span-2 flex items-center gap-4 pt-2 text-white/80">
              <a href="https://github.com/" className="hover:text-white">GitHub</a>
              <a href="https://www.linkedin.com/" className="hover:text-white">LinkedIn</a>
              <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
