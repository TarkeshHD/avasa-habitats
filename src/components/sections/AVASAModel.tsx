import { motion } from 'framer-motion';
import { Timer, LayoutGrid, Network, Boxes } from 'lucide-react';
import { modelCards } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

const iconMap: Record<string, React.ElementType> = {
  timer: Timer,
  modules: LayoutGrid,
  network: Network,
  blocks: Boxes,
};

export default function AVASAModel() {
  return (
    <section className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="The AVASA Model"
            title="Housing, Reimagined as a Production System."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {modelCards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Timer;
            return (
              <Reveal key={card.number} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full bg-ivory border border-ink/8 p-8 lg:p-10 hover:border-forest-300 transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center bg-forest-300/8 group-hover:bg-forest-300 transition-colors duration-500">
                      <Icon
                        className="h-7 w-7 text-forest-300 group-hover:text-cream transition-colors duration-500 group-hover:rotate-6"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-mono text-sm text-ink/30">{card.number}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-ink mb-4">
                    {card.title}
                  </h3>
                  <p className="text-ink/60 font-body leading-relaxed text-sm mb-6">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {card.points.map((pt) => (
                      <span
                        key={pt}
                        className="inline-flex items-center gap-1.5 text-xs font-body text-forest-300 bg-forest-300/8 px-3 py-1.5"
                      >
                        <span className="h-1 w-1 bg-forest-300 rounded-full" />
                        {pt}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
