import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, motion, type Variants } from 'framer-motion';

// Reduced motion detection
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

// Animated number counter
export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const reduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      if (reduced) {
        motionValue.set(value);
      } else {
        motionValue.set(value);
      }
    }
  }, [inView, value, motionValue, reduced]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        const display = value >= 1000 ? Math.round(latest).toLocaleString() : Math.round(latest);
        ref.current.textContent = `${display}${suffix}`;
      }
    });
  }, [spring, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// Section reveal wrapper
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// Section heading component
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <div className="h-px w-8 bg-forest-300" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-forest-300">
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  className = '',
}: {
  label?: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="text-section font-display font-semibold text-ink text-balance max-w-4xl">
        {title}
      </h2>
    </div>
  );
}

// Disclaimer text
export function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-ink/50 font-body leading-relaxed mt-4 max-w-2xl">
      {children}
    </p>
  );
}

// Magnetic button hover effect (simple)
export function MagneticButton({
  children,
  className = '',
  onClick,
  variant = 'primary',
  href,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-none';
  const variants = {
    primary: 'bg-terracotta-200 text-cream hover:bg-terracotta-300 shadow-lg hover:shadow-xl',
    secondary:
      'bg-transparent border border-ink/20 text-ink hover:bg-ink hover:text-ivory',
    ghost: 'bg-forest-300 text-cream hover:bg-forest-400',
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
