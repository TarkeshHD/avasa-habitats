import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/data/images';
import { useReducedMotion } from '@/components/ui/primitives';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function PartnersHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      id="partners-hero"
      ref={ref}
      className="relative min-h-[70vh] w-full overflow-hidden bg-ink-400"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={reduced ? undefined : { y: bgY, scale: bgScale }}
      >
        <img
          src={IMAGES.meeting2}
          alt="AVASA partnership meeting"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink-400/85 via-ink-400/60 to-ink-400/90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink-400/70 via-transparent to-ink-400/40" />

      <div className="relative z-20 flex min-h-[70vh] flex-col justify-center px-6 sm:px-10 lg:px-20 pt-28 pb-20">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-terracotta-200" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cream/70">
                AVASA Partners
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-hero font-display font-semibold text-cream text-balance max-w-4xl"
            >
              Build a Scalable{' '}
              <span className="text-terracotta-50">Construction Business.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-cream/80 font-body"
            >
              A standardized operating model for entrepreneurs and local execution
              partners. Leverage central technology, engineering systems and quality
              frameworks to deliver homes at scale.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '/';
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 200);
                }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-cream bg-terracotta-200 hover:bg-terracotta-300 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Partnership Opportunities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '/';
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-cream border border-cream/30 hover:border-cream/70 hover:bg-cream/5 backdrop-blur-sm transition-all duration-300"
              >
                Back to Home
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
