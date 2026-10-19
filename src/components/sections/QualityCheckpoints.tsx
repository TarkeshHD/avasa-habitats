import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { qualityCheckpoints } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

function HouseCutaway({ activeStage }: { activeStage: number }) {
  const stages = [
    { fill: '#B5573B', fillOpacity: 0.15 }, // Foundation
    { fill: '#294F3D', fillOpacity: 0.2 },  // Structure
    { fill: '#67836C', fillOpacity: 0.2 },  // Finishing
    { fill: '#CF7453', fillOpacity: 0.2 },  // Pre-handover
  ];

  return (
    <svg viewBox="0 0 300 280" className="w-full h-auto max-w-md mx-auto" fill="none">
      {/* Ground */}
      <line x1="20" y1="240" x2="280" y2="240" stroke="#121713" strokeWidth="1.5" />
      <line x1="20" y1="245" x2="280" y2="245" stroke="#121713" strokeWidth="0.5" strokeOpacity="0.3" />

      {/* Foundation — highlighted at stage 0 */}
      <motion.rect
        x="60" y="225" width="180" height="15"
        fill={activeStage === 0 ? stages[0].fill : '#DCCDA8'}
        fillOpacity={activeStage === 0 ? stages[0].fillOpacity : 0.3}
        stroke="#121713" strokeWidth="1"
        animate={{ opacity: activeStage === 0 ? 1 : 0.4 }}
      />

      {/* Structure walls — highlighted at stage 1 */}
      <motion.rect
        x="70" y="120" width="160" height="105"
        fill={activeStage === 1 ? stages[1].fill : '#DCCDA8'}
        fillOpacity={activeStage === 1 ? stages[1].fillOpacity : 0.2}
        stroke="#121713" strokeWidth="1"
        animate={{ opacity: activeStage === 1 ? 1 : 0.4 }}
      />

      {/* Roof */}
      <path d="M50 125 L150 55 L250 125" stroke="#121713" strokeWidth="1.5" fill="#DCCDA8" fillOpacity="0.3" />

      {/* Interior finishing — highlighted at stage 2 */}
      <motion.g animate={{ opacity: activeStage === 2 ? 1 : 0.3 }}>
        <rect x="80" y="140" width="60" height="40" stroke="#121713" strokeWidth="0.8" fill={activeStage === 2 ? stages[2].fill : 'none'} fillOpacity={stages[2].fillOpacity} />
        <rect x="160" y="140" width="60" height="40" stroke="#121713" strokeWidth="0.8" fill={activeStage === 2 ? stages[2].fill : 'none'} fillOpacity={stages[2].fillOpacity} />
        <line x1="150" y1="140" x2="150" y2="225" stroke="#121713" strokeWidth="0.5" strokeOpacity="0.3" />
      </motion.g>

      {/* Pre-handover — highlighted at stage 3 */}
      <motion.g animate={{ opacity: activeStage === 3 ? 1 : 0.3 }}>
        <rect x="85" y="145" width="50" height="30" fill={stages[3].fill} fillOpacity={stages[3].fillOpacity} stroke="#121713" strokeWidth="0.5" />
        <rect x="165" y="145" width="50" height="30" fill={stages[3].fill} fillOpacity={stages[3].fillOpacity} stroke="#121713" strokeWidth="0.5" />
        <rect x="135" y="190" width="30" height="35" fill={stages[3].fill} fillOpacity={stages[3].fillOpacity} stroke="#121713" strokeWidth="0.5" />
      </motion.g>

      {/* Labels */}
      <text x="150" y="250" textAnchor="middle" fontSize="8" fill="#121713" fontFamily="monospace" opacity="0.4">CUTAWAY VIEW</text>
    </svg>
  );
}

export default function QualityCheckpoints() {
  const [active, setActive] = useState(0);

  return (
    <section id="quality" className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Quality Control"
            title="Quality Isn't Inspected at the End. It's Built Into the Process."
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Left — checkpoint list */}
          <div className="space-y-3">
            {qualityCheckpoints.map((qc, i) => (
              <Reveal key={qc.number} delay={i * 0.08}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-6 border transition-all duration-300 ${
                    active === i
                      ? 'bg-forest-300/8 border-forest-300'
                      : 'bg-cream border-ink/8 hover:border-ink/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`font-display text-2xl font-bold ${active === i ? 'text-forest-300' : 'text-ink/20'}`}>
                      {qc.number}
                    </span>
                    <div className="flex-1">
                      <h4 className={`font-display text-base font-semibold ${active === i ? 'text-ink' : 'text-ink/70'}`}>
                        {qc.title}
                      </h4>
                      <p className="text-xs font-mono uppercase tracking-wider text-terracotta-200 mt-1 mb-3">
                        Target: {qc.target}
                      </p>
                      <AnimatePresence>
                        {active === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-wrap gap-2">
                              {qc.verify.map((v) => (
                                <span key={v} className="text-xs font-body text-forest-300 bg-forest-300/10 px-3 py-1">
                                  {v}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Right — house cutaway */}
          <Reveal delay={0.2}>
            <div className="sticky top-28">
              <div className="bg-cream border border-ink/8 p-8 lg:p-12">
                <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-6 text-center">
                  Interactive House Cutaway
                </div>
                <HouseCutaway activeStage={active} />
                <div className="mt-6 text-center">
                  <p className="text-sm text-ink/50 font-body">
                    Select a checkpoint to see which part of the home is inspected at each stage.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
