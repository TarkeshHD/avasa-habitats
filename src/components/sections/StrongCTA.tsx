import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data/images';
import { useReducedMotion } from '@/components/ui/primitives';

export default function StrongCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0 z-0"
        style={reduced ? undefined : { y }}
      >
        <img
          src={IMAGES.villaDusk1}
          alt="Completed modern villa at dusk"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink/60 to-transparent" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-terracotta-50" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cream/60">Start Your Project</span>
          </div>

          <h2 className="text-hero font-display font-semibold text-cream text-balance">
            Your Plot. A Better Way to Build.
          </h2>

          <p className="mt-6 text-lg text-cream/70 font-body leading-relaxed max-w-xl">
            Choose a standardized home, understand the process and start planning
            your project with AVASA.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-cream bg-terracotta-200 hover:bg-terracotta-300 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Start Your Home
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 8h12M9 3l5 5-5 5" strokeLinecap="square" />
              </svg>
            </a>
            <a
              href="#designs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-cream border border-cream/30 hover:border-cream/60 hover:bg-cream/5 transition-all duration-300"
            >
              Explore Designs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
