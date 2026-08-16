import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { REVEAL_THRESHOLD, REVEAL_STAGGER_MS } from '../constants/animation';

export function useStaggeredReveal(_count: number, threshold = REVEAL_THRESHOLD) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getAnimStyle = useCallback(
    (index: number): CSSProperties => ({
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * REVEAL_STAGGER_MS}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * REVEAL_STAGGER_MS}ms`,
    }),
    [visible],
  );

  return { containerRef, getAnimStyle };
}
