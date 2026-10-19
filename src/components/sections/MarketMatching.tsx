import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { marketMatching } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

const accentMap: Record<string, { text: string; bg: string; border: string }> = {
  NELE: { text: 'text-sage-300', bg: 'bg-sage-300/10', border: 'border-sage-300' },
  NIVASA: { text: 'text-forest-300', bg: 'bg-forest-300/10', border: 'border-forest-300' },
  NILAYA: { text: 'text-terracotta-200', bg: 'bg-terracotta-200/10', border: 'border-terracotta-200' },
};

export default function MarketMatching() {
  return (
    <section className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Market Matching"
            title="The Right Home for the Right Market."
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {marketMatching.map((match, i) => {
            const accent = accentMap[match.collection] || accentMap.NELE;
            return (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-ivory border border-ink/8 p-8 h-full flex flex-col">
                  {/* Market */}
                  <div className="mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-2">Market</div>
                    <h4 className="font-display text-lg font-semibold text-ink leading-snug">{match.market}</h4>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="flex items-center justify-center my-4"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <ArrowRight className={`h-6 w-6 ${accent.text}`} />
                  </motion.div>

                  {/* Collection */}
                  <div className="mb-6 text-center">
                    <div className={`inline-block px-6 py-3 ${accent.bg} ${accent.border} border-l-2`}>
                      <span className={`font-display text-2xl font-bold ${accent.text}`}>{match.collection}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-auto">
                    <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-2">Target Buyer</div>
                    <p className="text-sm text-ink/60 font-body leading-relaxed">{match.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
