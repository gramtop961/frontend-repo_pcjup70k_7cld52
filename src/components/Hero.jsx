import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#07071A] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle dark overlay to ensure text contrast over the cover background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-300" />
            <span className="text-sm text-white/80">Building immersive web experiences</span>
          </div>

          <h1 className="mx-auto max-w-4xl bg-gradient-to-br from-fuchsia-300 via-cyan-200 to-sky-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
            Hi, I’m Jayanth Kumar,
            <br />
            a Full Stack Developer specializing in Java & MERN
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            I craft performant backends with Spring Boot and bring interfaces to life with React, Three.js, and cinematic motion.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              onClick={handleScroll}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-blue-600 px-6 py-3 text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowDown className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              <span className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.25),transparent)] opacity-60" />
            </motion.button>

            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/80 transition hover:text-white hover:backdrop-brightness-125">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/80 transition hover:text-white hover:backdrop-brightness-125">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/80 transition hover:text-white hover:backdrop-brightness-125">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating orb accents */}
        <motion.div
          variants={floating}
          initial="initial"
          animate="animate"
          className="pointer-events-none absolute left-10 top-24 h-24 w-24 rounded-full bg-gradient-to-tr from-fuchsia-500/40 to-cyan-400/40 blur-xl"/>
        <motion.div
          variants={floating}
          initial="initial"
          animate="animate"
          transition={{ duration: 7, repeat: Infinity }}
          className="pointer-events-none absolute bottom-24 right-10 h-28 w-28 rounded-full bg-gradient-to-tr from-sky-500/40 to-pink-400/40 blur-xl"/>
      </div>
    </section>
  );
}
