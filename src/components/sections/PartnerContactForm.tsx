import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

const PARTNER_WHATSAPP_NUMBER = '918861674174';

function buildPartnerWhatsAppLink(data: Record<string, string>): string {
  const lines = [
    'Hello AVASA Habitats, I am interested in a partnership opportunity.',
    '',
    `First Name: ${data.firstName || '—'}`,
    `Last Name: ${data.lastName || '—'}`,
    `Email: ${data.email || '—'}`,
    `Phone: ${data.phone || '—'}`,
    `Description: ${data.description || '—'}`,
  ];
  const message = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${PARTNER_WHATSAPP_NUMBER}?text=${message}`;
}

const fields = [
  { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Your first name', required: true, half: true },
  { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Your last name', required: true, half: true },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@gmail.com', required: true, half: false },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Your phone number', required: true, half: false },
  { id: 'description', label: 'Description', type: 'textarea', placeholder: 'Tell us about your business, market and interest in partnering with AVASA...', required: true, half: false },
];

export default function PartnerContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (id: string, value: string) => setFormData((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = () => {
    setSubmitted(true);
    const waLink = buildPartnerWhatsAppLink(formData);
    window.open(waLink, '_blank');
  };

  return (
    <section id="partner-contact" className="relative py-24 lg:py-32 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-5" />
      <div className="relative mx-auto max-w-2xl px-6 lg:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-sage-50" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-sage-50">Partner Enquiry</span>
          </div>
          <h2 className="text-section font-display font-semibold text-cream text-balance">
            Become an AVASA Partner
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-cream/60 font-body leading-relaxed">
            Share your details and our team will connect with you to explore partnership opportunities.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 bg-cream border border-cream/10 p-6 lg:p-10">
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
                    Your details have been prepared. Click below to send them directly to our
                    partnerships team via WhatsApp and we'll get back to you.
                  </p>
                  <a
                    href={buildPartnerWhatsAppLink(formData)}
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
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-5">
                    {/* First row: first name + last name */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {fields.slice(0, 2).map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-2">
                            {field.label}
                            {field.required && <span className="text-terracotta-200 ml-1">*</span>}
                          </label>
                          <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ''}
                            onChange={(e) => update(field.id, e.target.value)}
                            className="w-full bg-ivory border border-ink/10 px-4 py-3 text-sm font-body text-ink focus:border-forest-300 outline-none transition-colors"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Remaining fields */}
                    {fields.slice(2).map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-2">
                          {field.label}
                          {field.required && <span className="text-terracotta-200 ml-1">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            id={field.id}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ''}
                            onChange={(e) => update(field.id, e.target.value)}
                            rows={5}
                            className="w-full bg-ivory border border-ink/10 px-4 py-3 text-sm font-body text-ink focus:border-forest-300 outline-none transition-colors resize-none"
                          />
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

                    <div className="pt-4">
                      <button
                        onClick={handleSubmit}
                        className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium bg-terracotta-200 text-cream hover:bg-terracotta-300 shadow-lg transition-all"
                      >
                        <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                        Submit & Send on WhatsApp
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
