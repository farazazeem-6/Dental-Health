import { useRef } from 'react';
import type { RefObject } from 'react';
import { css } from '../../styled-system/css';
import { MaskedCard } from '../ui/MaskedCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { useImageWidth } from '../hooks/useImageWidth';
import { useMaskPositions } from '../hooks/useMaskPositions';
import { useStaggeredReveal } from '../hooks/useStaggeredReveal';
import { HERO_IMAGE } from '../constants/images';
import { FEATURE_BARS } from '../constants/services';
import { HERO_FOCAL_X } from '../constants/animation';

const sectionStyle = css({
  h: '100vh',
  w: 'full',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  pt: '24',
  px: { base: '3', md: '5' },
  pb: { base: '1.5', md: '2' },
  gap: { base: '1.5', md: '2' },
});

const featureBarStyle = css({
  w: 'full',
  h: { base: '14', md: '20' },
  flexShrink: 0,
  rounded: { base: 'xl', md: '2xl' },
  overflow: 'hidden',
  position: 'relative',
});

const heroCardStyle = css({
  w: 'full',
  flex: '1',
  minH: '0',
  rounded: { base: 'xl', md: '2xl' },
  overflow: 'hidden',
  position: 'relative',
});

export function HeroSection() {
  const isMobile = useIsMobile();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { containerRef, getAnimStyle } = useStaggeredReveal(4);

  const { positions, sectionHeight } = useMaskPositions(containerRef, cardRefs, 4);
  const imageWidth = useImageWidth(HERO_IMAGE, sectionHeight);
  const focalX = isMobile ? HERO_FOCAL_X.mobile : HERO_FOCAL_X.desktop;

  return (
    <section ref={containerRef as RefObject<HTMLElement>} className={sectionStyle} id="home">
      {FEATURE_BARS.map((bar, i) => (
        <MaskedCard
          key={bar.id}
          cardRef={(el) => {
            cardRefs.current[i] = el;
          }}
          bgImage={HERO_IMAGE}
          position={positions[i] ?? { x: 0, y: 0, sw: 0, sh: 0 }}
          imageWidth={imageWidth}
          focalX={focalX}
          className={featureBarStyle}
          style={getAnimStyle(i)}
        >
          <span
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              h: 'full',
              color: 'brand.black',
              fontSize: { base: 'lg', md: '3xl' },
              fontWeight: 'bold',
              textAlign: 'center',
              position: 'relative',
              zIndex: 10,
            })}
          >
            {bar.label}
          </span>
        </MaskedCard>
      ))}

      <MaskedCard
        cardRef={(el) => {
          cardRefs.current[3] = el;
        }}
        bgImage={HERO_IMAGE}
        position={positions[3] ?? { x: 0, y: 0, sw: 0, sh: 0 }}
        imageWidth={imageWidth}
        focalX={focalX}
        className={heroCardStyle}
        style={getAnimStyle(3)}
      >
        <div
          className={css({
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            h: { base: '28', md: '40' },
            bgGradient: 'to-b',
            gradientFrom: 'surface.glassStrong',
            gradientTo: 'transparent',
            zIndex: 5,
          })}
        />

        <p
          className={css({
            position: 'absolute',
            top: { base: '4', md: '7' },
            left: { base: '4', md: '7' },
            color: 'brand.black',
            fontSize: { base: 'xs', md: 'base' },
            fontWeight: 'semibold',
            lineHeight: { base: '1.1rem', md: '1.5rem' },
            maxW: { base: '220px', md: '340px' },
            zIndex: 10,
          })}
        >
          We wish to provide professional dental services
          <br />
          that match the current technologies
        </p>

        <div
          className={css({
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            h: { base: '40', md: '64' },
            bgGradient: 'to-t',
            gradientFrom: 'surface.overlay',
            gradientTo: 'transparent',
            zIndex: 5,
          })}
        />

        <div
          className={css({
            position: 'absolute',
            bottom: { base: '5', md: '8' },
            left: { base: '3', md: '4' },
            zIndex: 10,
          })}
        >
          <span
            className={css({
              display: 'block',
              color: 'brand.black',
              fontSize: { base: 'xs', md: 'sm' },
              fontWeight: 'semibold',
              mb: { base: '1', md: '2' },
            })}
          >
            Trusted Dentist in West New York
          </span>
          <h1
            className={css({
              color: 'brand.black',
              fontSize: 'clamp(3rem, 11vw, 11rem)',
              fontWeight: 'bold',
              lineHeight: '0.79',
              letterSpacing: 'tight',
            })}
          >
            Dental
            <br />
            Care
          </h1>
        </div>

        <span
          className={css({
            position: 'absolute',
            bottom: { base: '6', md: '10' },
            right: { base: '4', md: '8' },
            color: 'brand.white',
            fontSize: { base: 'xs', md: 'sm' },
            fontWeight: 'semibold',
            zIndex: 10,
          })}
        >
          Free Consultation
        </span>
      </MaskedCard>
    </section>
  );
}
