import { useEffect, useState } from 'react';

export function useImageWidth(src: string, sectionHeight: number): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!src || !sectionHeight) return;
    const img = new Image();
    img.onload = () => {
      const renderWidth = img.naturalWidth * (sectionHeight / img.naturalHeight);
      setWidth(renderWidth);
    };
    img.src = src;
  }, [src, sectionHeight]);

  return width;
}
