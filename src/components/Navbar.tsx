import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';

const EASE = [0.16, 1, 0.3, 1] as const;

function getCurrentPage(): 'home' | 'partners' {
  const hash = window.location.hash;
  if (hash.startsWith('#/partners')) return 'partners';
  return 'home';
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState<'home' | 'partners'>(getCurrentPage());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Track hash changes for page switching
  useEffect(() => {
    const onHash = () => {
      setPage(getCurrentPage());
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // On the partners page, the navbar should always be solid (no hero behind it)
  const transparentMode = page === 'home' && !scrolled;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // If it's a page link (starts with #/partners or #/), navigate
    if (href === '#/partners') {
      if (page !== 'partners') {
        window.location.hash = '/partners';
      }
      return;
    }
    if (href === '#/') {
      if (page !== 'home') {
        window.location.hash = '/';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    // In-page anchor links — if we're on the partners page, switch to home first
    if (page === 'partners' && href.startsWith('#/#')) {
      const sectionId = href.replace('#/#', '');
      window.location.hash = '/';
      // Wait for page to render, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
      return;
    }
    // On home page, scroll to section
    if (href.startsWith('#/#')) {
      const sectionId = href.replace('#/#', '');
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    // Direct hash links like #contact, #designs on home page
    if (href.startsWith('#') && !href.startsWith('#/')) {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: transparentMode ? 'rgba(244, 240, 223, 0)' : 'rgba(244, 240, 223, 0.85)',
          borderColor: transparentMode ? 'rgba(18, 23, 19, 0)' : 'rgba(18, 23, 19, 0.08)',
        }}
        transition={{ duration: 0.4, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#/"
            onClick={(e) => { e.preventDefault(); handleNavClick('#/'); }}
            className="group flex items-center gap-2.5"
            aria-label="AVASA Habitats home"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-sm border transition-colors duration-300 ${
                transparentMode
                  ? 'border-ivory/30 bg-ivory/10 text-ivory'
                  : 'border-ink/15 bg-ink/5 text-ink'
              }`}
            >
              <Building2 className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span
              className={`font-display text-base font-semibold tracking-[0.18em] transition-colors duration-300 ${
                transparentMode ? 'text-ivory' : 'text-ink'
              }`}
            >
              AVASA HABITATS
            </span>
          </a>

          {/* Center nav links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                (link.label === 'Partners' && page === 'partners') ||
                (link.label === 'Home' && page === 'home');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`group relative font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                      transparentMode ? 'text-ivory/85 hover:text-ivory' : 'text-ink/80 hover:text-ink'
                    } ${isActive ? (transparentMode ? 'text-ivory' : 'text-ink') : ''}`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                        transparentMode ? 'bg-ivory' : 'bg-terracotta-200'
                      } ${isActive ? 'w-full' : ''}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#/#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#/#contact'); }}
              className="hidden inline-flex items-center justify-center bg-terracotta-200 px-6 py-3 font-body text-sm font-medium tracking-wide text-cream shadow-lg shadow-terracotta-200/20 transition-all duration-300 hover:bg-terracotta-300 hover:shadow-xl hover:shadow-terracotta-200/30 lg:inline-flex"
            >
              Start Your Home
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`flex h-10 w-10 items-center justify-center transition-colors duration-300 lg:hidden ${
                transparentMode ? 'text-ivory' : 'text-ink'
              }`}
            >
              <Menu className="h-6 w-6" strokeWidth={1.75} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-ivory"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-display text-base font-semibold tracking-[0.18em] text-ink">
                AVASA HABITATS
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-terracotta-200"
              >
                <X className="h-6 w-6" strokeWidth={1.75} />
              </button>
            </div>

            <motion.ul
              className="flex flex-1 flex-col justify-center gap-2 px-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="group flex items-center justify-between border-b border-ink/10 py-4 font-display text-2xl font-medium text-ink transition-colors hover:text-terracotta-200"
                  >
                    {link.label}
                    <span className="h-px w-0 bg-terracotta-200 transition-all duration-300 group-hover:w-10" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
              className="px-6 pb-10"
            >
              <a
                href="#/#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#/#contact'); }}
                className="flex w-full items-center justify-center bg-terracotta-200 px-6 py-4 font-body text-sm font-medium tracking-wide text-cream transition-colors hover:bg-terracotta-300"
              >
                Start Your Home
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
