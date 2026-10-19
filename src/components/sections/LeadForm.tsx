import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

const WHATSAPP_NUMBER = '918792152953';

function buildWhatsAppLink(formData: Record<string, string>): string {
  const lines = [
    'Hello AVASA Habitats, I would like to schedule a consultation.',
    '',
    `Name: ${formData.name || '—'}`,
    `Phone: ${formData.phone || '—'}`,
    `Email: ${formData.email || '—'}`,
    `City/Region: ${formData.city || '—'}`,
    `Plot Dimensions: ${formData.dimensions || '—'}`,
    `Plot Ownership: ${formData.ownership || '—'}`,
    `Preferred Collection: ${formData.collection || '—'}`,
    `Budget: ${formData.budget || '—'}`,
    `Construction Start: ${formData.timeline || '—'}`,
  ];
  const message = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

const steps = [
  {
    label: 'About You',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
      { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Your phone number', required: true },
      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Your email', required: true },
    ],
  },
  {
    label: 'Your Plot',
    fields: [
      { id: 'city', label: 'City / Region', type: 'text', placeholder: 'Your city or region', required: true },
      { id: 'dimensions', label: 'Plot Dimensions', type: 'text', placeholder: 'e.g. 30 × 40 ft', required: false },
      { id: 'ownership', label: 'Plot Ownership', type: 'select', options: ['Owned', 'Family owned', 'Planning to purchase'], required: true },
    ],
  },
  {
    label: 'Your Home',
    fields: [
      { id: 'collection', label: 'Preferred Collection', type: 'select', options: ['Nele', 'Nivasa', 'Nilaya', 'Not sure'], required: true },
      { id: 'budget', label: 'Expected Budget', type: 'text', placeholder: 'e.g. ₹60–80L', required: false },
      { id: 'timeline', label: 'Expected Construction Start', type: 'select', options: ['Immediately', 'Within 3 months', '3–6 months', '6–12 months', 'Exploring'], required: true },
    ],
  },
  {
    label: 'Review',
    fields: [],
  },
];

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (id: string, value: string) => setFormData((prev) => ({ ...prev, [id]: value }));
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    setSubmitted(true);
    const waLink = buildWhatsAppLink(formData);
    window.open(waLink, '_blank');
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            label="Build With AVASA"
            title="Start Your Home Journey"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 bg-cream border border-ink/8 p-6 lg:p-10">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-ink/40">
                  Step {step + 1} of {steps.length}
                </span>
                <span className="text-xs font-mono text-forest-300">{steps[step].label}</span>
              </div>
              <div className="h-1 bg-ink/10 overflow-hidden">
                <motion.div
                  className="h-full bg-forest-300"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              {/* Step dots */}
              <div className="mt-4 flex justify-between">
                {steps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setStep(i)}
                    className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                      i === step ? 'bg-forest-300' : i < step ? 'bg-forest-300/50' : 'bg-ink/10'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="flex h-16 w-16 mx-auto items-center justify-center bg-forest-300/10 mb-6">
                    <Check className="h-8 w-8 text-forest-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">Thank You</h3>
                  <p className="text-sm text-ink/55 font-body max-w-md mx-auto mb-6">
                    Your details have been prepared. Click below to send them directly to our team via WhatsApp
                    and we'll get back to you to schedule your consultation.
                  </p>
                  <a
                    href={buildWhatsAppLink(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-lg transition-all"
                  >
                    <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                    Send on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {step < 3 ? (
                    <div className="space-y-5">
                      {steps[step].fields.map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-2">
                            {field.label}
                            {field.required && <span className="text-terracotta-200 ml-1">*</span>}
                          </label>
                          {field.type === 'select' ? (
                            <select
                              id={field.id}
                              value={formData[field.id] || ''}
                              onChange={(e) => update(field.id, e.target.value)}
                              className="w-full bg-ivory border border-ink/10 px-4 py-3 text-sm font-body text-ink focus:border-forest-300 outline-none transition-colors"
                            >
                              <option value="">Select an option</option>
                              {field.options?.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              id={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              value={formData[field.id] || ''}
                              onChange={(e) => update(field.id, e.target.value)}
                              className="w-full bg-ivory border border-ink/10 px-4 py-3 text-sm font-body text-ink focus:border-forest-300 outline-none transition-colors"
                            />
                          )}
                        </div>
                      ))}

                      <div className="flex justify-between pt-4">
                        <button
                          onClick={back}
                          disabled={step === 0}
                          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-body text-ink/50 disabled:opacity-30 hover:text-ink transition-colors"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </button>
                        <button
                          onClick={next}
                          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium bg-ink text-cream hover:bg-forest-300 transition-colors"
                        >
                          Continue
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Review & submit */
                    <div>
                      <p className="text-sm text-ink/60 font-body mb-6">
                        Review your details and schedule your consultation.
                      </p>
                      <div className="space-y-3 mb-8">
                        {Object.entries(formData).map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b border-ink/8 pb-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-ink/40">{key}</span>
                            <span className="text-sm text-ink/70 font-body">{value || '—'}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <button
                          onClick={back}
                          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-body text-ink/50 hover:text-ink transition-colors"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </button>
                        <button
                          onClick={handleSubmit}
                          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-terracotta-200 text-cream hover:bg-terracotta-300 shadow-lg transition-all"
                        >
                          Schedule My Consultation
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
