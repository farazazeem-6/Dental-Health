import type { RefObject } from 'react';
import { css } from '../../styled-system/css';
import { ArrowIcon } from '@/ui/ArrowIcon';
import { Button } from '@/ui/Button';
import { useStaggeredReveal } from '@/hooks/useStaggeredReveal';
import { SECTION3_IMG1, SECTION3_IMG2, SECTION3_BG } from '@/constants/images';
import { IMPLANT_SECTION } from '@/constants/implant';

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

export function ImplantSection() {
  const { containerRef, getAnimStyle } = useStaggeredReveal(4);

  return (
    <section ref={containerRef as RefObject<HTMLElement>} className={sectionStyle} id="about">
      <div
        className={css({
          flex: '1',
          minH: '0',
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
          gap: { base: '1.5', md: '2' },
        })}
      >
        <div className={css({ display: 'flex', flexDirection: 'column', gap: { base: '1.5', md: '2' } })}>
          <div
            className={css({
              rounded: { base: 'xl', md: '2xl' },
              bg: 'surface.muted',
              p: { base: '5', md: '7' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: '1.2',
              minH: { base: '180px', md: '0' },
            })}
            style={getAnimStyle(0)}
          >
            <h2
              className={css({
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontWeight: 'bold',
                lineHeight: '0.95',
                color: 'brand.black',
              })}
            >
              {IMPLANT_SECTION.heading1}
              <br />
              {IMPLANT_SECTION.heading2}
            </h2>
            <div>
              <p
                className={css({
                  fontSize: { base: 'xs', md: 'sm' },
                  fontWeight: 'semibold',
                  color: 'brand.black',
                  mb: { base: '1.5', md: '2' },
                })}
              >
                {IMPLANT_SECTION.featureTitle}
              </p>
              <p
                className={css({
                  fontSize: { base: 'xs', md: 'sm' },
                  fontWeight: 'medium',
                  color: 'neutral.500',
                  lineHeight: { base: '1rem', md: '1.375rem' },
                  maxW: { base: 'full', md: '340px' },
                })}
              >
                {IMPLANT_SECTION.featureDescription}
              </p>
            </div>
          </div>

          <div
            className={css({
              display: 'flex',
              gap: { base: '1.5', md: '2' },
              flex: '1',
              minH: { base: '140px', md: '0' },
            })}
            style={getAnimStyle(1)}
          >
            <div className={css({ flex: '1', rounded: { base: 'xl', md: '2xl' }, overflow: 'hidden' })}>
              <img
                src={SECTION3_IMG1}
                alt={IMPLANT_SECTION.imageAlt1}
                className={css({ w: 'full', h: 'full', objectFit: 'cover' })}
              />
            </div>
            <div className={css({ flex: '1', rounded: { base: 'xl', md: '2xl' }, overflow: 'hidden' })}>
              <img
                src={SECTION3_IMG2}
                alt={IMPLANT_SECTION.imageAlt2}
                className={css({ w: 'full', h: 'full', objectFit: 'cover' })}
              />
            </div>
          </div>

          <div
            className={css({
              rounded: { base: 'xl', md: '2xl' },
              bg: 'surface.subtle',
              p: { base: '5', md: '7' },
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flex: '0.8',
              minH: { base: '160px', md: '0' },
            })}
            style={getAnimStyle(2)}
          >
            <div>
              <p
                className={css({
                  fontSize: { base: 'xs', md: 'sm' },
                  fontWeight: 'semibold',
                  color: 'brand.black',
                  mb: { base: '2', md: '3' },
                })}
              >
                {IMPLANT_SECTION.consultationLabel}
              </p>
              <h3
                className={css({
                  fontSize: { base: 'xl', md: '3xl' },
                  fontWeight: 'bold',
                  color: 'brand.black',
                  lineHeight: { base: '1.5rem', md: '2rem' },
                })}
              >
                {IMPLANT_SECTION.serviceHeading1}
                <br />
                {IMPLANT_SECTION.serviceHeading2}
                <br />
                {IMPLANT_SECTION.serviceHeading3}
              </h3>
            </div>
            <Button tone="white" size="lg">
              {IMPLANT_SECTION.bookButton}
            </Button>
          </div>
        </div>

        <div
          className={css({
            rounded: { base: 'xl', md: '2xl' },
            overflow: 'hidden',
            position: 'relative',
            minH: { base: '350px', md: '0' },
          })}
          style={getAnimStyle(3)}
        >
          <img
            src={SECTION3_BG}
            alt={IMPLANT_SECTION.imageAlt3}
            className={css({ w: 'full', h: 'full', objectFit: 'cover', objectPosition: 'top' })}
          />

          <div
            className={css({
              position: 'absolute',
              bottom: { base: '3', md: '5' },
              left: { base: '3', md: '5' },
              right: { base: '3', md: '5' },
              display: 'flex',
              gap: { base: '1.5', md: '2' },
            })}
          >
            <div
              className={css({
                flex: '1',
                bg: 'brand.white',
                rounded: { base: 'xl', md: '2xl' },
                p: { base: '3', md: '5' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                h: { base: '36', md: '52' },
              })}
            >
              <h4 className={css({ fontSize: { base: 'lg', md: '2xl' }, fontWeight: 'bold', lineHeight: { base: '1.25rem', md: '1.75rem' }, color: 'brand.black' })}>
                {IMPLANT_SECTION.card1Title}
              </h4>
              <span
                className={css({
                  alignSelf: 'flex-end',
                  w: { base: '9', md: '12' },
                  h: { base: '9', md: '12' },
                  rounded: 'full',
                  border: '1px solid',
                  borderColor: 'brand.black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}
              >
                <ArrowIcon />
              </span>
            </div>

            <div
              className={css({
                flex: '1',
                bg: 'surface.glass',
                backdropFilter: 'blur(24px)',
                rounded: { base: 'xl', md: '2xl' },
                p: { base: '3', md: '5' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                h: { base: '36', md: '52' },
              })}
            >
              <h4 className={css({ color: 'brand.white', fontSize: { base: 'lg', md: '2xl' }, fontWeight: 'bold', lineHeight: { base: '1.25rem', md: '1.75rem' } })}>
                {IMPLANT_SECTION.card2Title}
              </h4>
              <span
                className={css({
                  alignSelf: 'flex-end',
                  w: { base: '9', md: '12' },
                  h: { base: '9', md: '12' },
                  rounded: 'full',
                  border: '1px solid',
                  borderColor: 'brand.white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}
              >
                <ArrowIcon className={css({ color: 'brand.white' })} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
