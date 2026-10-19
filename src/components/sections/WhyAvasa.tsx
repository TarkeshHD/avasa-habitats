import { motion } from 'framer-motion';
import { Gauge, Repeat, Eye, MapPin, ShieldCheck, TrendingUp } from 'lucide-react';
import { whyAvasa } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

const iconMap = [Gauge, Repeat, Eye, MapPin, ShieldCheck, TrendingUp];

export default function WhyAvasa() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Why AVASA"
            title="Why This Model Works"
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyAvasa.map((item, i) => {
            const Icon = iconMap[i] || Gauge;
            return (
              <Reveal key={item.number} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full bg-cream border border-ink/8 p-8 hover:border-forest-300/30 transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center bg-forest-300/8 group-hover:bg-forest-300 transition-colors duration-500">
                      <Icon className="h-6 w-6 text-forest-300 group-hover:text-cream transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-3xl font-bold text-ink/8">{item.number}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/55 font-body leading-relaxed">{item.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
