import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { centralHierarchy } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

export default function CentralEnablement() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-sage-50" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-sage-50">Central Enablement</span>
          </div>
          <h2 className="text-section font-display font-semibold text-cream text-balance max-w-4xl">
            Central Intelligence. Local Execution.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-cream/60 font-body leading-relaxed">
            Strategy, technology, procurement standards, design systems and quality frameworks are centralized.
            Execution happens close to customers.
          </p>
        </Reveal>

        {/* Hierarchy diagram */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-2">
            {centralHierarchy.map((level, i) => (
              <Reveal key={level.level} delay={i * 0.1}>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`flex items-center gap-4 p-5 border ${
                      i === 0
                        ? 'bg-forest-300/20 border-sage-50/30'
                        : i === centralHierarchy.length - 1
                        ? 'bg-terracotta-200/15 border-terracotta-200/30'
                        : 'bg-cream/5 border-cream/10'
                    }`}
                  >
                    <span className={`font-mono text-xs ${
                      i === 0 ? 'text-sage-50' : i === centralHierarchy.length - 1 ? 'text-terracotta-50' : 'text-cream/40'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-display text-base font-semibold text-cream">{level.level}</h4>
                      <p className="text-xs text-cream/50 font-body mt-0.5">{level.description}</p>
                    </div>
                  </motion.div>
                  {i < centralHierarchy.length - 1 && (
                    <div className="flex justify-center py-1">
                      <motion.div
                        animate={{ y: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <ArrowDown className="h-4 w-4 text-sage-50/50" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Data flow indicators */}
          <Reveal delay={0.4}>
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-cream/5 border border-cream/10">
                <ArrowUp className="h-5 w-5 text-sage-50" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-sage-50/60">Data</div>
                  <div className="text-sm text-cream/70 font-body">Flows toward the platform</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-cream/5 border border-cream/10">
                <ArrowDown className="h-5 w-5 text-terracotta-50" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-terracotta-50/60">Decisions / Standards</div>
                  <div className="text-sm text-cream/70 font-body">Flow toward execution teams</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
