import { Building2 } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#/' },
  { label: 'Designs', href: '#/#designs' },
  { label: '60-Day Process', href: '#/#timeline' },
  { label: 'Quality', href: '#/#quality' },
  { label: 'About', href: '#/#about' },
  { label: 'Partners', href: '#/partners' },
  { label: 'Contact', href: '#/#contact' },
  { label: 'Privacy', href: '#/' },
  { label: 'Terms', href: '#/' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center border border-cream/20">
                <Building2 className="h-5 w-5 text-cream" strokeWidth={1.75} />
              </span>
              <span className="font-display text-base font-semibold tracking-[0.18em] text-cream">
                AVASA HABITATS
              </span>
            </div>
            <p className="text-sm text-cream/50 font-body leading-relaxed max-w-xs">
              Engineering a better way to build independent homes.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cream/30 mb-4">Navigate</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream font-body transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cream/30 mb-4">Get Started</div>
            <p className="text-sm text-cream/50 font-body leading-relaxed mb-4">
              Start your home journey with a standardized, technology-enabled construction system.
            </p>
            <a
              href="#/#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-terracotta-200 text-cream hover:bg-terracotta-300 transition-colors"
            >
              Start Your Home
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30 font-body">
            © {new Date().getFullYear()} AVASA Habitats. All rights reserved.
          </p>
          <p className="text-xs text-cream/30 font-body">
            Indicative pricing only. Final pricing varies by location, specifications and project conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
