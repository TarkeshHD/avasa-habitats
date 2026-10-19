import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
          />
        </Reveal>

        <div className="mt-12 space-y-2">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.03}>
                <div className={`border transition-colors duration-300 ${isOpen ? 'border-forest-300/30 bg-ivory' : 'border-ink/8 bg-ivory/50'}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  >
                    <span className={`font-display text-sm font-semibold ${isOpen ? 'text-ink' : 'text-ink/70'}`}>
                      {item.q}
                    </span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-forest-300 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Plus className="h-4 w-4 text-ink/30 flex-shrink-0 mt-0.5" />
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
                        <p className="px-5 pb-5 text-sm text-ink/55 font-body leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
