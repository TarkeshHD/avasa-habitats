import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, HardHat, ShoppingBag, Headphones } from 'lucide-react';
import { factoryTeam, factoryInfrastructure } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

const iconMap: Record<string, React.ElementType> = {
  'Dealer / Business Principal': User,
  'City / Market Sales Lead': Users,
  'Sales Executives': Users,
  'Site Engineers': HardHat,
  'Procurement': ShoppingBag,
  'CRM / Customer Operations': Headphones,
};

function IsometricBuilding() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">
      {/* Ground */}
      <path d="M50 250 L200 170 L350 250 L200 330 Z" stroke="#121713" strokeWidth="1" strokeOpacity="0.1" fill="#DCCDA8" fillOpacity="0.2" />

      {/* Building base */}
      <path d="M120 200 L200 160 L280 200 L200 240 Z" fill="#294F3D" fillOpacity="0.1" stroke="#294F3D" strokeWidth="1" />
      <path d="M120 200 L120 140 L200 100 L200 160 Z" fill="#F4F0DF" stroke="#294F3D" strokeWidth="1" />
      <path d="M200 160 L200 100 L280 140 L280 200 Z" fill="#DCCDA8" stroke="#294F3D" strokeWidth="1" />

      {/* Second floor */}
      <path d="M120 140 L200 100 L280 140 L200 180 Z" fill="#294F3D" fillOpacity="0.05" stroke="#294F3D" strokeWidth="1" />
      <path d="M120 140 L120 90 L200 50 L200 100 Z" fill="#F4F0DF" stroke="#294F3D" strokeWidth="1" />
      <path d="M200 100 L200 50 L280 90 L280 140 Z" fill="#DCCDA8" fillOpacity="0.8" stroke="#294F3D" strokeWidth="1" />

      {/* Roof */}
      <path d="M120 90 L200 50 L280 90 L200 130 Z" fill="#294F3D" fillOpacity="0.15" stroke="#294F3D" strokeWidth="1" />

      {/* Windows on left face */}
      <rect x="135" y="110" width="20" height="20" fill="#294F3D" fillOpacity="0.2" stroke="#294F3D" strokeWidth="0.5" transform="skewY(30)" />
      <rect x="135" y="155" width="20" height="20" fill="#294F3D" fillOpacity="0.2" stroke="#294F3D" strokeWidth="0.5" transform="skewY(30)" />

      {/* Windows on right face */}
      <rect x="230" y="110" width="20" height="20" fill="#294F3D" fillOpacity="0.1" stroke="#294F3D" strokeWidth="0.5" transform="skewY(-30)" />
      <rect x="230" y="155" width="20" height="20" fill="#294F3D" fillOpacity="0.1" stroke="#294F3D" strokeWidth="0.5" transform="skewY(-30)" />

      {/* Door */}
      <rect x="185" y="210" width="15" height="25" fill="#B5573B" fillOpacity="0.3" stroke="#B5573B" strokeWidth="0.5" />

      {/* Label */}
      <text x="200" y="280" textAnchor="middle" fontSize="9" fill="#121713" fontFamily="monospace" opacity="0.3">LOCAL EXECUTION UNIT</text>
    </svg>
  );
}

export default function DecentralizedFactory() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Decentralized Factory"
            title="A Micro-Factory for Every Market."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-ink/60 font-body leading-relaxed">
            Local operating partners act as complete execution units supported by the central AVASA platform.
            A typical operating team of approximately 10–13 people targets 100–150 homes per mature execution unit annually.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Isometric building */}
          <Reveal>
            <div className="bg-cream border border-ink/8 p-8 lg:p-12">
              <IsometricBuilding />
              <div className="mt-6 grid grid-cols-2 gap-3">
                {factoryInfrastructure.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-body text-ink/60">
                    <span className="h-1 w-1 rounded-full bg-terracotta-200" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Team roles */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-4">Typical Local Team</div>
            <div className="space-y-2">
              {factoryTeam.map((member, i) => {
                const Icon = iconMap[member.role] || User;
                return (
                  <Reveal key={member.role} delay={i * 0.06}>
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full text-left flex items-start gap-4 p-4 border transition-all duration-300 ${
                        active === i ? 'bg-forest-300/8 border-forest-300' : 'bg-cream border-ink/8 hover:border-ink/20'
                      }`}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center flex-shrink-0 ${
                        active === i ? 'bg-forest-300 text-cream' : 'bg-ink/5 text-ink/50'
                      }`}>
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className={`font-display text-sm font-semibold ${active === i ? 'text-ink' : 'text-ink/70'}`}>
                          {member.role}
                        </h4>
                        <AnimatePresence>
                          {active === i && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-sm text-ink/50 font-body mt-1 overflow-hidden"
                            >
                              {member.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
