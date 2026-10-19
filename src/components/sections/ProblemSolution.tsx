import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';
import { comparisonData } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProblemSolution() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="The Problem"
            title="Building an Independent Home Shouldn't Feel Unpredictable."
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Traditional */}
          <Reveal delay={0.1}>
            <div className="bg-sand/40 border border-sand/60 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">
                  01
                </span>
                <h3 className="font-display text-xl font-semibold text-ink/60">
                  Traditional Experience
                </h3>
              </div>
              <ul className="space-y-5">
                {comparisonData.traditional.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="h-5 w-5 flex-shrink-0 text-terracotta-300/60 mt-0.5" strokeWidth={1.5} />
                    <span className="text-ink/50 font-body leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* AVASA */}
          <Reveal delay={0.2}>
            <div className="bg-forest-300 p-8 lg:p-10 text-cream relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-forest-200/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                    02
                  </span>
                  <h3 className="font-display text-xl font-semibold text-cream">
                    The AVASA System
                  </h3>
                </div>
                <ul className="space-y-5">
                  {comparisonData.avasa.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-sage-50 mt-0.5" strokeWidth={1.5} />
                      <span className="text-cream/90 font-body leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
