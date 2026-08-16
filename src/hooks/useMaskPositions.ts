import { useEffect, useState, type RefObject } from 'react';

export interface MaskPosition {
  x: number;
  y: number;
  sw: number;
  sh: number;
}

export function useMaskPositions(
  sectionRef: RefObject<HTMLElement | null>,
  cardRefs: RefObject<(HTMLElement | null)[]>,
  count: number,
): { positions: MaskPosition[]; sectionHeight: number } {
  const [positions, setPositions] = useState<MaskPosition[]>(() =>
    Array.from({ length: count }, () => ({ x: 0, y: 0, sw: 0, sh: 0 })),
  );
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const compute = () => {
      const sectionRect = section.getBoundingClientRect();
      const sw = sectionRect.width;
      const sh = sectionRect.height;

      setSectionHeight((prev) => (prev === sh ? prev : sh));

      const next: MaskPosition[] = cardRefs.current.map((card) => {
        if (!card) return { x: 0, y: 0, sw, sh };
        const rect = card.getBoundingClientRect();
        return {
          x: rect.left - sectionRect.left,
          y: rect.top - sectionRect.top,
          sw,
          sh,
        };
      });

      setPositions((prev) => {
        const same =
          prev.length === next.length &&
          prev.every(
            (p, i) =>
              p.x === next[i].x &&
              p.y === next[i].y &&
              p.sw === next[i].sw &&
              p.sh === next[i].sh,
          );
        return same ? prev : next;
      });
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(section);

    return () => ro.disconnect();
  });

  return { positions, sectionHeight };
}
