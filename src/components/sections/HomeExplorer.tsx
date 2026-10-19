import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BedDouble, Bath, Building2, Maximize, X, ArrowRight } from 'lucide-react';
import { homeCatalogue, collections } from '@/data/content';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

type HomeItem = (typeof homeCatalogue)[0];

const layoutOptions = ['2 BHK', '3 BHK', 'Duplex'];
const facadeOptions = ['Contemporary', 'Modern', 'Minimal'];
const budgetRanges = [
  { id: 'all', label: 'All Budgets', min: 0, max: Infinity },
  { id: 'under70', label: 'Under ₹70L', min: 0, max: 70 },
  { id: '70-90', label: '₹70–90L', min: 70, max: 90 },
  { id: '90+', label: '₹90L+', min: 90, max: Infinity },
];

export default function HomeExplorer() {
  const [filterCollection, setFilterCollection] = useState('all');
  const [filterLayout, setFilterLayout] = useState('all');
  const [filterFacade, setFilterFacade] = useState('all');
  const [filterBudget, setFilterBudget] = useState('all');
  const [selected, setSelected] = useState<HomeItem | null>(null);

  const filtered = useMemo(() => {
    const budgetRange = budgetRanges.find((b) => b.id === filterBudget)!;
    return homeCatalogue.filter((home) => {
      if (filterCollection !== 'all' && home.collection.toLowerCase() !== filterCollection) return false;
      if (filterLayout !== 'all' && home.layout !== filterLayout) return false;
      if (filterFacade !== 'all' && home.facade !== filterFacade) return false;
      const priceNum = parseInt(home.price.replace(/[^\d]/g, ''));
      if (priceNum < budgetRange.min || priceNum > budgetRange.max) return false;
      return true;
    });
  }, [filterCollection, filterLayout, filterFacade, filterBudget]);

  const collectionOptions = [
    { id: 'all', label: 'All Collections' },
    { id: 'nele', label: 'Nele' },
    { id: 'nivasa', label: 'Nivasa' },
    { id: 'nilaya', label: 'Nilaya' },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Home Explorer"
            title="Explore the Standardized Catalogue"
          />
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FilterDropdown label="Collection" options={collectionOptions} value={filterCollection} onChange={setFilterCollection} />
            <FilterDropdown label="Layout" options={[{ id: 'all', label: 'All Layouts' }, ...layoutOptions.map((l) => ({ id: l, label: l }))]} value={filterLayout} onChange={setFilterLayout} />
            <FilterDropdown label="Facade" options={[{ id: 'all', label: 'All Facades' }, ...facadeOptions.map((f) => ({ id: f, label: f }))]} value={filterFacade} onChange={setFilterFacade} />
            <FilterDropdown label="Budget" options={budgetRanges.map((b) => ({ id: b.id, label: b.label }))} value={filterBudget} onChange={setFilterBudget} />
          </div>
        </Reveal>

        {/* Results */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((home) => (
              <motion.div
                key={home.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-cream border border-ink/8 overflow-hidden cursor-pointer hover:border-forest-300/30 transition-colors"
                onClick={() => setSelected(home)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={home.image} alt={`${home.collection} ${home.layout} ${home.facade}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-ink/70 backdrop-blur-sm text-cream text-xs font-mono px-3 py-1">{home.collection}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-terracotta-200/90 text-cream text-xs font-mono px-3 py-1">{home.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-base font-semibold text-ink mb-1">{home.layout} · {home.facade}</h4>
                  <div className="flex items-center gap-3 text-xs text-ink/40 font-body mb-3">
                    <span className="flex items-center gap-1"><Maximize className="h-3 w-3" /> {home.area}</span>
                    <span className="flex items-center gap-1"><BedDouble className="h-3 w-3" /> {home.bedrooms}</span>
                    <span className="flex items-center gap-1"><Bath className="h-3 w-3" /> {home.bathrooms}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {home.features.slice(0, 2).map((f) => (
                      <span key={f} className="text-[10px] font-body text-forest-300 bg-forest-300/8 px-2 py-0.5">{f}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink/40 font-body py-12">No homes match your filters. Try adjusting your selection.</p>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img src={selected.image} alt={selected.id} className="h-full w-full object-cover" />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center bg-ink/40 text-cream hover:bg-ink/60 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-6 lg:p-8 overflow-y-auto">
                  <span className="text-xs font-mono uppercase tracking-wider text-terracotta-200">{selected.collection}</span>
                  <h3 className="font-display text-2xl font-bold text-ink mt-1 mb-4">{selected.layout} · {selected.facade}</h3>

                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { icon: BedDouble, label: 'Beds', value: selected.bedrooms },
                      { icon: Bath, label: 'Baths', value: selected.bathrooms },
                      { icon: Building2, label: 'Floors', value: selected.floors },
                      { icon: Maximize, label: 'Area', value: selected.area },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-2 bg-cream border border-ink/8">
                        <s.icon className="h-4 w-4 mx-auto mb-1 text-ink/40" strokeWidth={1.5} />
                        <div className="font-display text-xs font-semibold text-ink">{s.value}</div>
                        <div className="text-[9px] font-mono uppercase text-ink/30">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-sm mb-6">
                    <Row label="Facade" value={selected.facade} />
                    <Row label="Methodology" value={selected.methodology} />
                    <Row label="Budget Range" value={selected.budget} />
                    <Row label="Indicative Price" value={selected.price} />
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-ink/40 mb-2">Key Features</div>
                    <ul className="space-y-1.5">
                      {selected.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-ink/60 font-body">
                          <span className="h-1 w-1 mt-2 rounded-full bg-forest-300" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-body text-ink/70 bg-cream border border-ink/15 hover:border-ink/30 transition-colors">
                      View Floor Plan
                    </button>
                    <a href="#contact" onClick={() => setSelected(null)} className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-cream bg-terracotta-200 hover:bg-terracotta-300 transition-colors">
                      Request Consultation
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FilterDropdown({ label, options, value, onChange }: { label: string; options: { id: string; label: string }[]; value: string; onChange: (v: string) => void; }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-ink/40 mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-cream border border-ink/10 px-4 py-2.5 text-sm font-body text-ink focus:border-forest-300 outline-none transition-colors"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-ink/8 pb-2">
      <span className="text-xs font-mono uppercase tracking-wider text-ink/40">{label}</span>
      <span className="text-sm text-ink/70 font-body">{value}</span>
    </div>
  );
}
