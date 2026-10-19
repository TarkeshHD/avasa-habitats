import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { IMAGES } from '@/data/images';
import { heroMetrics } from '@/data/content';
import { AnimatedCounter, useReducedMotion } from '@/components/ui/primitives';

/* ------------------------------------------------------------------ */
/* Animation variants                                                  */
/* ------------------------------------------------------------------ */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const metricItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/* Button helpers                                                      */
/* ------------------------------------------------------------------ */

function PrimaryCta({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-cream bg-terracotta-200 hover:bg-terracotta-300 shadow-lg hover:shadow-2xl hover:shadow-terracotta-200/30 transition-all duration-300"
    >
      {children}
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2 8h12M9 3l5 5-5 5" strokeLinecap="square" />
      </svg>
    </a>
  );
}

function SecondaryCta({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-cream border border-cream/30 hover:border-cream/70 hover:bg-cream/5 backdrop-blur-sm transition-all duration-300"
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll indicator                                                    */
/* ------------------------------------------------------------------ */

function ScrollIndicator() {
  const reduced = useReducedMotion();
  return (
    <a
      href="#designs"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cream/50 hover:text-cream/80 transition-colors duration-300"
      aria-label="Scroll to explore"
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
      <div className="relative h-12 w-px overflow-hidden bg-cream/20">
        {!reduced && (
          <motion.div
            className="absolute inset-x-0 top-0 h-4 bg-cream/80"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax — background drifts down & scales slightly as you scroll.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-ink-400"
    >
      {/* ---------- Background image with parallax ---------- */}
      <motion.div
        className="absolute inset-0 z-0"
        style={reduced ? undefined : { y: bgY, scale: bgScale }}
      >
        <img
          src={IMAGES.villaHero}
          alt="AVASA premium villa exterior"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* ---------- Dark gradient overlay ---------- */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink-400/80 via-ink-400/55 to-ink-400/90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink-400/70 via-transparent to-ink-400/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-400 via-transparent to-transparent" />

      {/* ---------- Content ---------- */}
      <motion.div
        className="relative z-20 flex min-h-screen flex-col justify-center px-6 sm:px-10 lg:px-20 pt-28 pb-32"
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="mx-auto w-full max-w-5xl">
          <motion.div variants={container} initial="hidden" animate="visible">
            {/* Eyebrow */}
            <motion.div variants={item} className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-terracotta-200" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cream/70">
                AVASA Habitats
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-hero font-display font-semibold text-cream text-balance max-w-4xl"
            >
              Homes, Engineered for{' '}
              <span className="text-terracotta-50">Predictable Delivery.</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-cream/80 font-body"
            >
              A standardized housing system combining intelligent design,
              aluminium-formwork construction, technology-enabled execution and
              rigorous quality control.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <PrimaryCta href="#designs">Explore Our Homes</PrimaryCta>
              <SecondaryCta href="#timeline">See the 60-Day Process</SecondaryCta>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={item}
              className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10 max-w-4xl"
            >
              {heroMetrics.map((metric, i) => (
                <motion.div
                  key={i}
                  variants={metricItem}
                  className="bg-ink-400/40 backdrop-blur-md px-5 py-6 flex flex-col gap-1"
                >
                  <div className="flex items-baseline font-display text-3xl sm:text-4xl font-semibold text-cream">
                    {i === 2 && <span className="mr-0.5">~</span>}
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-xs font-body text-cream/60 leading-snug mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-8 max-w-2xl text-xs font-body text-cream/40 leading-relaxed"
          >
            Timelines are subject to approvals, site readiness, scope and project
            conditions.
          </motion.p>
        </div>
      </motion.div>

      {/* ---------- Scroll indicator ---------- */}
      <ScrollIndicator />
    </section>
  );
}
