import { useRef } from 'react';
import type { RefObject } from 'react';
import { css } from '../../styled-system/css';
import { MaskedCard } from '@/ui/MaskedCard';
import { Button } from '@/ui/Button';
import { PhoneIcon } from '@/ui/PhoneIcon';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useImageWidth } from '@/hooks/useImageWidth';
import { useMaskPositions } from '@/hooks/useMaskPositions';
import { useStaggeredReveal } from '@/hooks/useStaggeredReveal';
import { SECTION2_IMAGE } from '@/constants/images';
import { SERVICES } from '@/constants/services';
import { GALLERY_FOCAL_X } from '@/constants/animation';

const sectionStyle = css({
  minH: '100vh',
  h: { md: '100vh' },
  w: 'full',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  pt: { base: '1.5', md: '2' },
  px: { base: '3', md: '5' },
  pb: { base: '1.5', md: '2' },
  gap: { base: '1.5', md: '2' },
});

export function GallerySection() {
  const isMobile = useIsMobile();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { containerRef, getAnimStyle } = useStaggeredReveal(4);

  const { positions, sectionHeight } = useMaskPositions(containerRef, cardRefs, 4);
  const imageWidth = useImageWidth(SECTION2_IMAGE, sectionHeight);
  const focalX = isMobile ? GALLERY_FOCAL_X.mobile : GALLERY_FOCAL_X.desktop;

  return (
    <section ref={containerRef as RefObject<HTMLElement>} className={sectionStyle} id="gallery">
      <div
        className={css({
          flex: '1',
          minH: '0',
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
          gridTemplateRows: { base: 'auto auto auto auto', md: '1fr 1fr 0.8fr' },
          gap: { base: '1.5', md: '2' },
        })}
      >
        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[0] = el;
          }}
          bgImage={SECTION2_IMAGE}
          position={positions[0] ?? { x: 0, y: 0, sw: 0, sh: 0 }}
          imageWidth={imageWidth}
          focalX={focalX}
          className={css({
            rounded: { base: 'xl', md: '2xl' },
            overflow: 'hidden',
            position: 'relative',
            minH: { base: '160px', md: '0' },
          })}
          style={getAnimStyle(0)}
        >
          <h3
            className={css({
              position: 'absolute',
              top: { base: '4', md: '6' },
              left: { base: '5', md: '7' },
              color: { base: 'brand.white', md: 'brand.black' },
              fontSize: { base: '2xl', md: '3xl' },
              fontWeight: 'bold',
              zIndex: 10,
            })}
          >
            Smile Gallery
          </h3>
          <span
            className={css({
              position: 'absolute',
              bottom: { base: '4', md: '6' },
              left: { base: '5', md: '7' },
              color: { base: 'brand.white', md: 'brand.black' },
              fontSize: { base: 'xs', md: 'sm' },
              fontWeight: 'semibold',
              zIndex: 10,
            })}
          >
            Our cosmetic dental work
          </span>
        </MaskedCard>

        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[1] = el;
          }}
          bgImage={SECTION2_IMAGE}
          position={positions[1] ?? { x: 0, y: 0, sw: 0, sh: 0 }}
          imageWidth={imageWidth}
          focalX={focalX}
          className={css({
            gridRow: { md: 'span 2' },
            rounded: { base: 'xl', md: '2xl' },
            overflow: 'hidden',
            position: 'relative',
            minH: { base: '200px', md: '0' },
          })}
          style={getAnimStyle(1)}
        >
          <p
            className={css({
              position: 'absolute',
              bottom: { base: '16', md: '20' },
              left: { base: '5', md: '7' },
              color: 'brand.white',
              fontSize: { base: 'xs', md: 'sm' },
              fontWeight: 'semibold',
              lineHeight: { base: '1rem', md: '1.25rem' },
              zIndex: 10,
            })}
          >
            If you want a gorgeous smile,
            <br />
            call us to ask about a smile makeover.
          </p>
          <div
            className={css({
              position: 'absolute',
              bottom: { base: '4', md: '6' },
              right: { base: '4', md: '6' },
              zIndex: 10,
            })}
          >
            <Button
              tone="white"
              size="lg"
              className={css({ display: 'inline-flex', alignItems: 'center', gap: '2' })}
            >
              <PhoneIcon />
              Call Us
            </Button>
          </div>
        </MaskedCard>

        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[2] = el;
          }}
          bgImage={SECTION2_IMAGE}
          position={positions[2] ?? { x: 0, y: 0, sw: 0, sh: 0 }}
          imageWidth={imageWidth}
          focalX={focalX}
          className={css({
            rounded: { base: 'xl', md: '2xl' },
            overflow: 'hidden',
            position: 'relative',
            minH: { base: '160px', md: '0' },
          })}
          style={getAnimStyle(2)}
        >
          <h3
            className={css({
              position: 'absolute',
              top: { base: '4', md: '6' },
              left: { base: '5', md: '7' },
              color: { base: 'brand.white', md: 'brand.black' },
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 'bold',
              lineHeight: '0.9',
              zIndex: 10,
            })}
          >
            Smile
            <br />
            makeover
          </h3>
        </MaskedCard>

        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[3] = el;
          }}
          bgImage={SECTION2_IMAGE}
          position={positions[3] ?? { x: 0, y: 0, sw: 0, sh: 0 }}
          imageWidth={imageWidth}
          focalX={focalX}
          className={css({
            gridColumn: { base: 'span 1', md: 'span 2' },
            rounded: { base: 'xl', md: '2xl' },
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            minH: { base: '0', md: '0' },
          })}
          style={getAnimStyle(3)}
        >
          <div
            className={css({
              position: 'relative',
              w: 'full',
              flex: '1',
              zIndex: 10,
              display: 'flex',
              flexWrap: { base: 'wrap', md: 'nowrap' },
              alignContent: 'flex-start',
              gap: { base: '1.5', md: '2' },
              p: { base: '2', md: '3' },
            })}
          >
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className={css({
                  flex: '1',
                  minW: { base: 'calc(50% - 4px)', md: '0' },
                  minH: { base: '140px', md: '0' },
                  rounded: { base: 'xl', md: '2xl' },
                  p: { base: '3', md: '4' },
                  display: 'flex',
                  flexDirection: 'column',
                  bg: svc.active ? 'surface.glassStrong' : 'surface.glass',
                  backdropFilter: svc.active ? 'blur(12px)' : 'blur(24px)',
                })}
              >
                <div>
                  <h3
                    className={css({
                      fontSize: { base: 'xl', md: '2xl' },
                      fontWeight: 'bold',
                      lineHeight: '1.05',
                      whiteSpace: 'pre-line',
                      color: svc.active ? 'brand.black' : 'brand.white',
                    })}
                  >
                    {svc.name}
                  </h3>
                  <p
                    className={css({
                      mt: '2',
                      fontSize: { base: '2xs', md: 'xs' },
                      fontWeight: 'semibold',
                      color: svc.active ? 'neutral.500' : 'surface.glassStrong',
                    })}
                  >
                    {svc.price} · {svc.duration}
                  </p>
                </div>
                {svc.number && (
                  <span
                    className={css({
                      alignSelf: 'flex-end',
                      flexShrink: 0,
                      mt: 'auto',
                      w: { base: '8', md: '9' },
                      h: { base: '8', md: '9' },
                      rounded: 'full',
                      border: '1px solid',
                      borderColor: svc.active ? 'brand.black' : 'brand.white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: { base: 'xs', md: 'sm' },
                      fontWeight: 'semibold',
                      color: svc.active ? 'brand.black' : 'brand.white',
                    })}
                  >
                    {svc.number}
                  </span>
                )}
              </div>
            ))}
          </div>
        </MaskedCard>
      </div>
    </section>
  );
}
