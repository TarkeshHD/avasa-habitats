import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { configSteps } from '@/data/content';
import { SectionHeading, Reveal, Disclaimer } from '@/components/ui/primitives';

const facadeStyles: Record<string, { bg: string; accent: string; label: string }> = {
  contemporary: { bg: 'from-sand to-ivory', accent: '#DCCDA8', label: 'Contemporary' },
  modern: { bg: 'from-ink-100 to-ink-200', accent: '#3A4038', label: 'Modern' },
  minimal: { bg: 'from-cream to-sand/50', accent: '#FFFDF7', label: 'Minimal' },
};

export default function DesignConfigurator() {
  const [plan, setPlan] = useState('A');
  const [facade, setFacade] = useState('contemporary');
  const [orientation, setOrientation] = useState('01');

  const selectedPlan = configSteps.plan.find((p) => p.id === plan)!;
  const selectedFacade = configSteps.facade.find((f) => f.id === facade)!;
  const selectedOrientation = configSteps.orientation.find((o) => o.id === orientation)!;
  const style = facadeStyles[facade];

  return (
    <section id="designs" className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Design System"
            title="18 Configurations. One Standardized System."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-lg text-ink/70">
            <span className="px-4 py-2 bg-forest-300/8 text-forest-300">3 Orientations</span>
            <span className="text-ink/30">×</span>
            <span className="px-4 py-2 bg-forest-300/8 text-forest-300">2 Floor Plans</span>
            <span className="text-ink/30">×</span>
            <span className="px-4 py-2 bg-forest-300/8 text-forest-300">3 Facade Languages</span>
            <ArrowRight className="h-5 w-5 text-ink/30" />
            <span className="px-4 py-2 bg-terracotta-200/10 text-terracotta-200 font-semibold">18 Configurations</span>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <div className={`relative aspect-[4/5] bg-gradient-to-b ${style.bg} border border-ink/8 overflow-hidden`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${plan}-${facade}-${orientation}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-end justify-center pb-8"
                  >
                    {/* Architectural house preview */}
                    <svg viewBox="0 0 200 240" className="w-3/4 h-auto" fill="none">
                      {/* Roof */}
                      <path
                        d={plan === 'A' ? 'M30 100 L100 40 L170 100' : 'M25 90 L100 35 L175 90'}
                        stroke={style.accent === '#FFFDF7' ? '#121713' : '#121713'}
                        strokeWidth="2"
                        fill={facade === 'minimal' ? 'none' : style.accent}
                        fillOpacity="0.3"
                      />
                      {/* Body */}
                      <rect
                        x={plan === 'A' ? '40' : '35'}
                        y="100"
                        width={plan === 'A' ? '120' : '130'}
                        height={plan === 'A' ? '120' : '130'}
                        stroke="#121713"
                        strokeWidth="2"
                        fill={style.accent}
                        fillOpacity="0.15"
                      />
                      {/* Windows — vary by facade */}
                      {facade === 'contemporary' && (
                        <>
                          <rect x="55" y="120" width="30" height="40" stroke="#121713" strokeWidth="1.5" fillOpacity="0" />
                          <rect x="115" y="120" width="30" height="40" stroke="#121713" strokeWidth="1.5" fillOpacity="0" />
                          <rect x="55" y="175" width="90" height="20" stroke="#121713" strokeWidth="1.5" fillOpacity="0" />
                        </>
                      )}
                      {facade === 'modern' && (
                        <>
                          <rect x="50" y="115" width="40" height="50" stroke="#121713" strokeWidth="1.5" fill="#121713" fillOpacity="0.1" />
                          <rect x="110" y="115" width="50" height="50" stroke="#121713" strokeWidth="1.5" fill="#121713" fillOpacity="0.1" />
                          <line x1="40" y1="180" x2="160" y2="180" stroke="#121713" strokeWidth="1.5" />
                          <rect x="60" y="185" width="25" height="25" stroke="#121713" strokeWidth="1" />
                          <rect x="115" y="185" width="25" height="25" stroke="#121713" strokeWidth="1" />
                        </>
                      )}
                      {facade === 'minimal' && (
                        <>
                          <line x1="40" y1="130" x2="160" y2="130" stroke="#121713" strokeWidth="1" />
                          <line x1="40" y1="170" x2="160" y2="170" stroke="#121713" strokeWidth="1" />
                          <rect x="70" y="140" width="60" height="20" stroke="#121713" strokeWidth="1" fillOpacity="0" />
                          <rect x="80" y="190" width="40" height="30" stroke="#121713" strokeWidth="1.5" fillOpacity="0" />
                        </>
                      )}
                      {/* Orientation indicator */}
                      <circle cx="100" cy="20" r="3" fill="#B5573B" />
                      <text x="100" y="15" textAnchor="middle" fontSize="8" fill="#121713" fontFamily="monospace">
                        {orientation === '01' ? 'N' : orientation === '02' ? 'E' : 'S'}
                      </text>
                    </svg>
                  </motion.div>
                </AnimatePresence>

                {/* Grid overlay */}
                <div className="absolute inset-0 blueprint-grid opacity-30" />

                {/* Info badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink/40">Preview</span>
                  <span className="font-display text-sm font-semibold text-ink">
                    {selectedPlan.name} · {selectedFacade.name} · {selectedOrientation.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Selectors */}
          <div className="lg:col-span-3 space-y-10">
            {/* Step 1 — Plan */}
            <Reveal delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-7 w-7 items-center justify-center bg-ink text-cream font-mono text-xs">1</span>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Choose Plan</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {configSteps.plan.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPlan(p.id)}
                      className={`text-left p-5 border transition-all duration-300 ${
                        plan === p.id
                          ? 'border-forest-300 bg-forest-300/5'
                          : 'border-ink/10 hover:border-ink/30 bg-cream'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-semibold text-ink">{p.name}</span>
                        {plan === p.id && <Check className="h-4 w-4 text-forest-300" />}
                      </div>
                      <p className="text-xs text-ink/50 font-body">{p.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Step 2 — Facade */}
            <Reveal delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-7 w-7 items-center justify-center bg-ink text-cream font-mono text-xs">2</span>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Choose Facade Style</h4>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {configSteps.facade.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFacade(f.id)}
                      className={`text-left p-5 border transition-all duration-300 ${
                        facade === f.id
                          ? 'border-forest-300 bg-forest-300/5'
                          : 'border-ink/10 hover:border-ink/30 bg-cream'
                      }`}
                    >
                      <span className="font-display font-semibold text-ink block mb-1">{f.name}</span>
                      <p className="text-xs text-ink/50 font-body">{f.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Step 3 — Orientation */}
            <Reveal delay={0.25}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-7 w-7 items-center justify-center bg-ink text-cream font-mono text-xs">3</span>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Choose Orientation</h4>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {configSteps.orientation.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => setOrientation(o.id)}
                      className={`text-left p-5 border transition-all duration-300 ${
                        orientation === o.id
                          ? 'border-forest-300 bg-forest-300/5'
                          : 'border-ink/10 hover:border-ink/30 bg-cream'
                      }`}
                    >
                      <span className="font-display font-semibold text-ink block">{o.name}</span>
                      <p className="text-xs text-ink/50 font-body mt-1">{o.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <Disclaimer>
              Configurations can be adapted to project requirements while maintaining a standardized construction framework.
            </Disclaimer>
          </div>
        </div>
      </div>
    </section>
  );
}
