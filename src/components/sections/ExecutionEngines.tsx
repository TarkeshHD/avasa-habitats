import { motion } from 'framer-motion';
import { executionEngines, executionFlow } from '@/data/content';
import { SectionHeading, Reveal, useReducedMotion } from '@/components/ui/primitives';

function Gear({
  size,
  teeth,
  speed,
  reverse,
  children,
}: {
  size: number;
  teeth: number;
  speed: number;
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const toothSize = size * 0.12;
  const teethEl = Array.from({ length: teeth }).map((_, i) => {
    const angle = (360 / teeth) * i;
    return (
      <rect
        key={i}
        x={size / 2 - toothSize / 2}
        y={-toothSize / 2}
        width={toothSize}
        height={toothSize}
        fill="currentColor"
        transform={`rotate(${angle} ${size / 2} 0)`}
      />
    );
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        animate={reduced ? undefined : { rotate: reverse ? -360 : 360 }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <g transform={`translate(0 ${size / 2})`}>
          {teethEl}
          <circle cx={size / 2} cy="0" r={size / 2 - toothSize / 2} fill="currentColor" />
          <circle cx={size / 2} cy="0" r={size / 4} fill="#121713" />
          <circle cx={size / 2} cy="0" r={size / 8} fill="currentColor" />
        </g>
      </motion.svg>
      {children && <div className="relative z-10 text-center">{children}</div>}
    </div>
  );
}

export default function ExecutionEngines() {
  return (
    <section id="engines" className="relative py-24 lg:py-32 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-sage-50" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-sage-50">Execution System</span>
          </div>
          <h2 className="text-section font-display font-semibold text-cream text-balance max-w-4xl">
            Three Engines. One Delivery System.
          </h2>
        </Reveal>

        {/* Gears */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8 lg:gap-4">
          {executionEngines.map((engine, i) => (
            <Reveal key={engine.number} delay={i * 0.15}>
              <div className="flex flex-col items-center text-center">
                <div className="text-sage-300/80 mb-6">
                  <Gear
                    size={i === 1 ? 160 : 130}
                    teeth={12}
                    speed={i === 1 ? 30 : 25}
                    reverse={i === 1}
                  />
                </div>
                <span className="font-mono text-xs text-cream/40 mb-2">Engine {engine.number}</span>
                <h3 className="font-display text-lg font-semibold text-cream mb-1">{engine.title}</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-sage-50 mb-4">{engine.subtitle}</p>
                <ul className="space-y-1.5">
                  {engine.items.map((item) => (
                    <li key={item} className="text-sm text-cream/60 font-body flex items-center justify-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-sage-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process flow */}
        <Reveal delay={0.3}>
          <div className="mt-20">
            <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-0">
              {executionFlow.map((step, i) => (
                <div key={step} className="flex items-center gap-2 lg:gap-0 flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex-1 bg-forest-300/15 border border-sage-50/20 px-4 py-4 text-center"
                  >
                    <span className="font-body text-sm text-cream/80">{step}</span>
                  </motion.div>
                  {i < executionFlow.length - 1 && (
                    <motion.div
                      className="flex items-center px-2 text-sage-50"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M0 6h18M14 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            {/* Animated particles */}
            <div className="relative mt-4 h-1 bg-forest-300/10 overflow-hidden">
              <motion.div
                className="absolute h-full w-12 bg-gradient-to-r from-transparent via-sage-50 to-transparent"
                animate={{ x: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
