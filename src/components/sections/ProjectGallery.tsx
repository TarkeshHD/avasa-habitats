import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryTabs } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = galleryTabs[activeTab];

  return (
    <section className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Project Gallery"
            title="From Plot to Completed Home."
          />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {galleryTabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 text-sm font-body font-medium tracking-wide transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-ink text-cream'
                    : 'bg-cream border border-ink/10 text-ink/60 hover:border-ink/30'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {tab.images.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`relative overflow-hidden group ${
                    i === 0 ? 'col-span-2 lg:row-span-2 aspect-square lg:aspect-auto' : 'aspect-square'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${tab.label} — image ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs text-ink/40 font-body">
            Photography shown is for illustration purposes and does not represent specific completed AVASA projects.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
