import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { partnerBenefits } from '@/data/content';
import { IMAGES } from '@/data/images';
import { SectionHeading, Reveal } from '@/components/ui/primitives';

export default function PartnerNetwork() {
  return (
    <section id="partners" className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <SectionHeading
                label="Partner Network"
                title="Build With the AVASA Network"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-ink/60 font-body leading-relaxed max-w-lg">
                A standardized operating model for entrepreneurs and local execution partners
                who want to build a scalable residential construction business.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 grid sm:grid-cols-2 gap-2">
                {partnerBenefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3 py-2.5"
                  >
                    <span className="flex h-5 w-5 items-center justify-center bg-forest-300/10 flex-shrink-0">
                      <Check className="h-3 w-3 text-forest-300" strokeWidth={2} />
                    </span>
                    <span className="text-sm text-ink/70 font-body">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#/#contact"
                className="group mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-ink text-cream hover:bg-forest-300 transition-all duration-300"
              >
                Explore Partnership Opportunities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={IMAGES.meeting2}
                alt="Business partners in a planning meeting"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
