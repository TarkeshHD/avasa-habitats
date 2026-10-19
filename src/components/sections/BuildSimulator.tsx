import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check, AlertCircle } from 'lucide-react';
import { simulatorOptions } from '@/data/content';
import { SectionHeading, Reveal, Disclaimer } from '@/components/ui/primitives';

const stages = [
  { name: 'Planning', baseDays: 15, color: 'bg-sage-300' },
  { name: 'Approvals', baseDays: 15, color: 'bg-forest-300' },
  { name: 'Structure', baseDays: 7, color: 'bg-terracotta-200' },
  { name: 'Finishing', baseDays: 21, color: 'bg-clay-200' },
  { name: 'QC', baseDays: 3, color: 'bg-sage-400' },
  { name: 'Handover', baseDays: 2, color: 'bg-forest-400' },
];

export default function BuildSimulator() {
  const [plotReadiness, setPlotReadiness] = useState('ready');
  const [collection, setCollection] = useState('nele');
  const [configuration, setConfiguration] = useState('contemporary');
  const [approval, setApproval] = useState('approved');

  const plotAdd = simulatorOptions.plotReadiness.find((p) => p.id === plotReadiness)?.days ?? 0;
  const approvalAdd = simulatorOptions.approval.find((a) => a.id === approval)?.days ?? 0;
  const totalDays = stages.reduce((sum, s) => sum + s.baseDays, 0) + plotAdd + approvalAdd;

  // Build a day-by-day calendar
  let dayCursor = 1;
  const stageSegments = stages.map((s) => {
    const segment = { ...s, start: dayCursor, end: dayCursor + s.baseDays - 1 };
    dayCursor += s.baseDays;
    return segment;
  });
  // Insert plot readiness at the start and approvals after planning
  if (plotAdd > 0) {
    stageSegments.unshift({ name: 'Plot Prep', baseDays: plotAdd, color: 'bg-ink/40', start: 1, end: plotAdd });
    stageSegments.forEach((s, i) => { if (i > 0) { s.start += plotAdd; s.end += plotAdd; } });
  }

  return (
    <section className="relative py-24 lg:py-32 bg-forest-300/5">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Interactive Tool"
            title="60-Day Build Simulator"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-ink/60 font-body leading-relaxed">
            Select your project parameters to see an indicative project sequence. The simulator
            adjusts based on your plot readiness and approval status.
          </p>
        </Reveal>

        {/* Selectors */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <Reveal>
            <SelectorGroup
              label="Plot Readiness"
              options={simulatorOptions.plotReadiness.map((p) => ({ id: p.id, label: p.label }))}
              value={plotReadiness}
              onChange={setPlotReadiness}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <SelectorGroup
              label="Home Collection"
              options={simulatorOptions.collection.map((c) => ({ id: c.id, label: c.label }))}
              value={collection}
              onChange={setCollection}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SelectorGroup
              label="Configuration"
              options={simulatorOptions.configuration.map((c) => ({ id: c.id, label: c.label }))}
              value={configuration}
              onChange={setConfiguration}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <SelectorGroup
              label="Approval Readiness"
              options={simulatorOptions.approval.map((a) => ({ id: a.id, label: a.label }))}
              value={approval}
              onChange={setApproval}
            />
          </Reveal>
        </div>

        {/* Results */}
        <Reveal delay={0.2}>
          <div className="mt-12 bg-cream border border-ink/8 p-6 lg:p-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-forest-300" strokeWidth={1.5} />
                <h4 className="font-display text-lg font-semibold text-ink">Project Journey</h4>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono uppercase text-ink/40">Indicative Total</div>
                <div className="font-display text-2xl font-bold text-ink">{totalDays} days</div>
              </div>
            </div>

            {/* Visual calendar bar */}
            <div className="flex h-12 overflow-hidden border border-ink/10">
              {stageSegments.map((seg, i) => {
                const widthPct = (seg.baseDays / totalDays) * 100;
                return (
                  <motion.div
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: `${widthPct}%` }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`${seg.color} flex items-center justify-center overflow-hidden`}
                    title={`${seg.name}: Day ${seg.start}–${seg.end}`}
                  >
                    <span className="text-[10px] font-body text-cream/90 whitespace-nowrap px-1">
                      {seg.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Day labels */}
            <div className="mt-2 flex justify-between text-[10px] font-mono text-ink/30">
              <span>Day 1</span>
              <span>Day {Math.round(totalDays / 2)}</span>
              <span>Day {totalDays}</span>
            </div>

            {/* Stage list */}
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {stageSegments.map((seg, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-ivory border border-ink/8">
                  <span className={`h-3 w-3 ${seg.color} flex-shrink-0`} />
                  <div>
                    <div className="text-sm font-body font-medium text-ink">{seg.name}</div>
                    <div className="text-xs font-mono text-ink/40">Day {seg.start}–{seg.end}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-2 p-4 bg-terracotta-200/5 border-l-2 border-terracotta-200">
              <AlertCircle className="h-4 w-4 text-terracotta-200 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-xs text-ink/60 font-body leading-relaxed">
                Indicative project sequence — final schedule confirmed after site assessment and approval review.
              </p>
            </div>
          </div>
        </Reveal>

        <Disclaimer>
          This simulator provides an indicative timeline only. Actual project duration depends on approvals, weather, site conditions, scope and other project factors.
        </Disclaimer>
      </div>
    </section>
  );
}

function SelectorGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-3">{label}</div>
      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`w-full text-left flex items-center gap-3 p-3 border transition-all duration-300 ${
              value === opt.id
                ? 'border-forest-300 bg-forest-300/5'
                : 'border-ink/10 bg-cream hover:border-ink/25'
            }`}
          >
            <span className={`flex h-4 w-4 items-center justify-center flex-shrink-0 border ${
              value === opt.id ? 'border-forest-300 bg-forest-300' : 'border-ink/20'
            }`}>
              {value === opt.id && <Check className="h-3 w-3 text-cream" strokeWidth={2} />}
            </span>
            <span className={`text-sm font-body ${value === opt.id ? 'text-ink' : 'text-ink/60'}`}>
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
