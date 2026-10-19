import { motion } from 'framer-motion';
import { clusterTypes, clusterQualifications } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

function MiniHouse({ delay }: { delay: number }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <path d="M4 11l8-6 8 6v9H4z" stroke="#294F3D" strokeWidth="1.5" fill="#294F3D" fillOpacity="0.1" />
      <rect x="10" y="14" width="4" height="6" stroke="#294F3D" strokeWidth="1" />
    </motion.svg>
  );
}

function ClusterDiagram({ type, index }: { type: string; index: number }) {
  const counts: Record<string, number> = { '01': 15, '02': 40, '03': 8, '04': 2 };
  const numHouses = counts[type] || 5;
  const houses = Array.from({ length: Math.min(numHouses, 20) });

  return (
    <div className="relative aspect-[4/3] bg-forest-300/5 border border-forest-300/15 p-6 flex items-center justify-center">
      <div className="grid grid-cols-5 gap-3">
        {houses.map((_, i) => (
          <MiniHouse key={i} delay={i * 0.04} />
        ))}
      </div>
    </div>
  );
}

export default function ClusterModel() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Cluster Model"
            title="Build Locally. Operate Systematically."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-ink/60 font-body leading-relaxed">
            A cluster represents approximately five homes within a concentrated micro-location.
            Different acquisition and execution patterns suit different market contexts.
          </p>
        </Reveal>

        {/* Cluster types */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {clusterTypes.map((ct, i) => (
            <Reveal key={ct.type} delay={i * 0.1}>
              <div className="group bg-cream border border-ink/8 p-6 hover:border-forest-300/30 transition-colors duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs text-terracotta-200">Type {ct.type}</span>
                    <h4 className="font-display text-lg font-semibold text-ink mt-1">{ct.name}</h4>
                  </div>
                </div>
                <ClusterDiagram type={ct.type} index={i} />
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-ink/50 font-body flex-1">{ct.description}</p>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-forest-300 bg-forest-300/8 px-3 py-1.5">
                  {ct.count}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Qualifications */}
        <Reveal delay={0.3}>
          <div className="mt-16 bg-forest-300 p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cream/50 mb-3">Qualification Fundamentals</div>
                <h4 className="font-display text-xl font-semibold text-cream">
                  Plot criteria for cluster execution
                </h4>
                <p className="mt-3 text-sm text-cream/60 font-body leading-relaxed">
                  Reference minimum plot: approximately 30 × 40 ft where configuration permits.
                </p>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
                {clusterQualifications.map((q, i) => (
                  <motion.div
                    key={q}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-center gap-3 bg-forest-200/30 px-4 py-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-50 flex-shrink-0" />
                    <span className="text-sm text-cream/80 font-body">{q}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
