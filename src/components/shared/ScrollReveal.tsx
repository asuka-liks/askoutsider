import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
}

export default function ScrollReveal({ children, threshold = 0.15, className = '' }: ScrollRevealProps) {
  const { ref, revealed } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${revealed ? ' revealed' : ''}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  );
}