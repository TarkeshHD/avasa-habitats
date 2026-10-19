import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timelineStages } from '@/data/content';
import { SectionHeading, Reveal, Disclaimer } from '@/components/ui/primitives';

export default function ProductionTimeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const dayProgress = useTransform(scrollYProgress, [0, 1], [1, 60]);

  return (
    <section id="timeline" ref={ref} className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Production System"
            title="From Plot to Handover. A 60-Day Production System."
          />
        </Reveal>

        {/* Day counter */}
        <Reveal delay={0.1}>
          <div className="mt-8 inline-flex items-center gap-4 bg-ink px-6 py-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">Day</span>
            <motion.span className="font-display text-2xl font-bold text-cream">
              <motion.span>{dayProgress}</motion.span>
            </motion.span>
            <span className="font-display text-lg text-cream/40">→ 60</span>
          </div>
        </Reveal>

        {/* Desktop timeline */}
        <div className="mt-16 hidden lg:block">
          {/* Progress line */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-ink/10" />
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-terracotta-200"
              style={{ width: lineWidth }}
            />
            <div className="relative flex justify-between">
              {timelineStages.map((stage, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-ink border-2 border-ivory z-10" />
                  <span className="mt-3 font-mono text-xs text-ink/40">Stage {stage.stage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stage cards */}
          <div className="grid grid-cols-5 gap-4">
            {timelineStages.map((stage, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-cream border border-ink/8 overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={stage.image} alt={stage.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-terracotta-200 mb-2">
                      {stage.days}
                    </div>
                    <h4 className="font-display text-sm font-semibold text-ink mb-3">{stage.title}</h4>
                    <ul className="space-y-1.5">
                      {stage.items.map((item) => (
                        <li key={item} className="text-xs text-ink/50 font-body leading-relaxed flex items-start gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-forest-300 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {stage.note && (
                      <p className="mt-3 text-[10px] text-forest-300 bg-forest-300/8 p-2 font-body italic leading-relaxed">
                        {stage.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="mt-12 lg:hidden space-y-6">
          {timelineStages.map((stage, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-terracotta-200 z-10" />
                  {i < timelineStages.length - 1 && <div className="w-px flex-1 bg-ink/10 mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="bg-cream border border-ink/8 overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={stage.image} alt={stage.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-terracotta-200 mb-2">
                        Stage {stage.stage} · {stage.days}
                      </div>
                      <h4 className="font-display text-base font-semibold text-ink mb-3">{stage.title}</h4>
                      <ul className="space-y-1.5">
                        {stage.items.map((item) => (
                          <li key={item} className="text-xs text-ink/50 font-body flex items-start gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-forest-300 mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {stage.note && (
                        <p className="mt-3 text-[10px] text-forest-300 bg-forest-300/8 p-2 font-body italic">
                          {stage.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Disclaimer>
          Schedule is dependent on approval status, weather, site readiness, scope and other project conditions.
        </Disclaimer>
      </div>
    </section>
  );
}
