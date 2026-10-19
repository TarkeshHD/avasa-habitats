import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { customerJourney } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

export default function CustomerJourney() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Client Journey"
            title="Your Home Journey"
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          {/* Stepper list */}
          <div className="lg:col-span-7 space-y-2">
            {customerJourney.map((step, i) => {
              const isOpen = active === step.step;
              return (
                <Reveal key={step.step} delay={i * 0.04}>
                  <div className={`border transition-colors duration-300 ${isOpen ? 'border-forest-300 bg-ivory' : 'border-ink/8 bg-ivory/50'}`}>
                    <button
                      onClick={() => setActive(isOpen ? null : step.step)}
                      className="w-full flex items-center gap-4 p-5 text-left"
                    >
                      <span className={`flex h-8 w-8 items-center justify-center font-mono text-xs flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? 'bg-forest-300 text-cream' : 'bg-ink/8 text-ink/50'
                      }`}>
                        {String(step.step).padStart(2, '0')}
                      </span>
                      <span className={`flex-1 font-display text-sm font-semibold ${isOpen ? 'text-ink' : 'text-ink/70'}`}>
                        {step.title}
                      </span>
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-forest-300 flex-shrink-0" />
                      ) : (
                        <Plus className="h-4 w-4 text-ink/30 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 pl-16 text-sm text-ink/55 font-body leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Progress visual */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <Reveal delay={0.2}>
                <div className="bg-forest-300 p-8 lg:p-10 text-cream">
                  <div className="text-xs font-mono uppercase tracking-wider text-cream/50 mb-4">Progress</div>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="font-display text-5xl font-bold text-cream">
                      {active ? String(active).padStart(2, '0') : '01'}
                    </span>
                    <span className="font-display text-xl text-cream/30">/ 10</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 bg-cream/10 mb-8">
                    <motion.div
                      className="h-full bg-sage-50"
                      animate={{ width: `${((active || 1) / 10) * 100}%` }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  {/* Step dots */}
                  <div className="flex justify-between">
                    {customerJourney.map((s) => (
                      <button
                        key={s.step}
                        onClick={() => setActive(s.step)}
                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                          active === s.step ? 'bg-sage-50' : active && s.step < active ? 'bg-sage-50/50' : 'bg-cream/20'
                        }`}
                        aria-label={`Step ${s.step}: ${s.title}`}
                      />
                    ))}
                  </div>
                  <p className="mt-8 text-sm text-cream/60 font-body leading-relaxed">
                    {active ? customerJourney.find((s) => s.step === active)?.description : 'Click any step to explore your home journey from plot to handover.'}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
