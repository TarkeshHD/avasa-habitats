import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BedDouble, Bath, Building2, Maximize, ArrowRight } from 'lucide-react';
import { collections } from '@/data/content';
import { SectionHeading, Reveal, Disclaimer } from '@/components/ui/primitives';

const accentMap: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  nele: { text: 'text-sage-300', bg: 'bg-sage-300/10', border: 'border-sage-300', dot: 'bg-sage-300' },
  nivasa: { text: 'text-forest-300', bg: 'bg-forest-300/10', border: 'border-forest-300', dot: 'bg-forest-300' },
  nilaya: { text: 'text-terracotta-200', bg: 'bg-terracotta-200/10', border: 'border-terracotta-200', dot: 'bg-terracotta-200' },
};

export default function CollectionExplorer() {
  const [active, setActive] = useState(0);
  const col = collections[active];
  const accent = accentMap[col.id];

  return (
    <section className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Collections"
            title="Three Collections. Built for Different Stages of Ownership."
          />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex gap-2 border-b border-ink/10">
            {collections.map((c, i) => {
              const a = accentMap[c.id];
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={`relative px-6 py-4 font-display text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    active === i ? a.text : 'text-ink/40 hover:text-ink/70'
                  }`}
                >
                  {c.name}
                  {active === i && (
                    <motion.div
                      layoutId="collection-tab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${a.dot}`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Content */}
        <div className="mt-10 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={col.id}
                src={col.image}
                alt={`${col.name} — ${col.tagline} exterior`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className={`inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider ${accent.bg} ${accent.text}`}>
                {col.position}
              </span>
            </div>
          </div>

          {/* Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={col.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <h3 className="font-display text-3xl font-bold text-ink mb-2">{col.name}</h3>
              <p className="text-ink/50 font-body mb-6">{col.config}</p>

              {/* Price */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className={`p-4 ${accent.bg} border-l-2 ${accent.border}`}>
                  <div className="text-xs font-mono uppercase text-ink/40 mb-1">Starting around</div>
                  <div className={`font-display text-2xl font-bold ${accent.text}`}>{col.priceStart}*</div>
                </div>
                <div className={`p-4 ${accent.bg} border-l-2 ${accent.border}`}>
                  <div className="text-xs font-mono uppercase text-ink/40 mb-1">Indicative rate</div>
                  <div className={`font-display text-2xl font-bold ${accent.text}`}>{col.pricePerSqFt}/sq ft*</div>
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  { icon: BedDouble, label: 'Beds', value: col.bedrooms },
                  { icon: Bath, label: 'Baths', value: col.bathrooms },
                  { icon: Building2, label: 'Floors', value: col.floors },
                  { icon: Maximize, label: 'Area', value: col.area },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 bg-ivory border border-ink/8">
                    <s.icon className="h-4 w-4 mx-auto mb-1 text-ink/40" strokeWidth={1.5} />
                    <div className="font-display text-sm font-semibold text-ink">{s.value}</div>
                    <div className="text-[10px] font-mono uppercase text-ink/40">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Ideal for */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-3">Ideal for</div>
                <div className="flex flex-wrap gap-2">
                  {col.idealFor.map((item) => (
                    <span key={item} className="text-xs font-body text-ink/70 bg-ivory border border-ink/8 px-3 py-1.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-3">Characteristics</div>
                <div className="flex flex-wrap gap-2">
                  {col.characteristics.map((c) => (
                    <span key={c} className={`text-xs font-body ${accent.text} ${accent.bg} px-3 py-1.5`}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-3">Key features</div>
                <ul className="space-y-2">
                  {col.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink/70 font-body">
                      <span className={`h-1 w-1 mt-2 rounded-full ${accent.dot}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`group inline-flex items-center gap-2 self-start px-7 py-3.5 text-sm font-medium ${accent.bg} ${accent.text} hover:bg-ink hover:text-cream transition-all duration-300`}
              >
                Explore {col.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        <Disclaimer>
          Indicative pricing only. Final pricing varies based on location, plot conditions, specifications, taxes and selected configuration.
        </Disclaimer>
      </div>
    </section>
  );
}
