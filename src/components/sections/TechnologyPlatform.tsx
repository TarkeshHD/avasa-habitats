import { motion } from 'framer-motion';
import { dashboardFeatures } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

function DashboardMockup() {
  return (
    <div className="bg-ink rounded-none border border-ink-100 overflow-hidden shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-cream/10">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-terracotta-200/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-sand/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-sage-300/60" />
        </div>
        <span className="ml-3 font-mono text-[10px] text-cream/40 uppercase tracking-wider">AVASA Project Dashboard</span>
      </div>

      <div className="grid grid-cols-12 gap-px bg-cream/5">
        {/* Sidebar */}
        <div className="col-span-3 bg-ink p-4 space-y-3">
          {['Overview', 'Projects', 'Materials', 'Quality', 'Schedule', 'Documents'].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2 px-3 py-2 text-xs font-body ${
                i === 0 ? 'bg-forest-300/20 text-sage-50' : 'text-cream/40'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="col-span-9 bg-ink p-5 space-y-4">
          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Active Projects', value: '24', trend: '+3' },
              { label: 'On Schedule', value: '89%', trend: '+2%' },
              { label: 'QC Pass Rate', value: '96%', trend: '+1%' },
              { label: 'Avg. Day', value: '52', trend: '-4' },
            ].map((stat) => (
              <div key={stat.label} className="bg-cream/5 p-3">
                <div className="text-[9px] font-mono uppercase text-cream/30">{stat.label}</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-lg font-semibold text-cream">{stat.value}</span>
                  <span className="text-[10px] text-sage-50">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Project progress bars */}
          <div className="bg-cream/5 p-4">
            <div className="text-[10px] font-mono uppercase text-cream/40 mb-3">Project Progress</div>
            <div className="space-y-3">
              {[
                { name: 'Project A · Cluster 03', progress: 85, stage: 'Finishing' },
                { name: 'Project B · Cluster 07', progress: 62, stage: 'Structure' },
                { name: 'Project C · Cluster 12', progress: 40, stage: 'Approvals' },
                { name: 'Project D · Cluster 15', progress: 95, stage: 'Handover' },
              ].map((proj, i) => (
                <div key={proj.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-cream/60 font-body">{proj.name}</span>
                    <span className="text-[10px] text-cream/40 font-mono">{proj.stage}</span>
                  </div>
                  <div className="h-1.5 bg-cream/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-forest-300 to-sage-50"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${proj.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone timeline */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-cream/5 p-4">
              <div className="text-[10px] font-mono uppercase text-cream/40 mb-3">Milestones</div>
              <div className="space-y-2">
                {[
                  { label: 'Foundation', status: 'done' },
                  { label: 'Structure', status: 'done' },
                  { label: 'Finishing', status: 'active' },
                  { label: 'Handover', status: 'pending' },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        m.status === 'done' ? 'bg-sage-50' : m.status === 'active' ? 'bg-terracotta-200' : 'bg-cream/20'
                      }`}
                    />
                    <span className={`text-[10px] font-body ${m.status === 'pending' ? 'text-cream/30' : 'text-cream/60'}`}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream/5 p-4">
              <div className="text-[10px] font-mono uppercase text-cream/40 mb-3">Quality Status</div>
              <div className="flex items-center justify-center h-20">
                <div className="relative h-16 w-16">
                  <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,253,247,0.1)" strokeWidth="3" />
                    <motion.circle
                      cx="18" cy="18" r="15" fill="none" stroke="#67836C" strokeWidth="3"
                      strokeDasharray="94.2"
                      initial={{ strokeDashoffset: 94.2 }}
                      whileInView={{ strokeDashoffset: 94.2 - (94.2 * 0.96) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-cream">96%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechnologyPlatform() {
  return (
    <section className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <SectionHeading
                label="Technology Platform"
                title="Every Home. Visible Through One System."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-ink/60 font-body leading-relaxed max-w-lg">
                A central technology platform gives complete visibility into every project — from
                construction milestones and material tracking to quality status and customer communication.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 grid sm:grid-cols-2 gap-2">
                {dashboardFeatures.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-ivory border border-ink/8"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-forest-300 flex-shrink-0" />
                    <span className="text-sm text-ink/70 font-body">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <DashboardMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
