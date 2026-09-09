import type { RefObject } from 'react';
import { css } from '../../styled-system/css';
import { StarIcon } from '@/ui/StarIcon';
import { useStaggeredReveal } from '@/hooks/useStaggeredReveal';
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/constants/testimonials';

export function TestimonialsSection() {
  const { containerRef, getAnimStyle } = useStaggeredReveal(TESTIMONIALS.length);

  return (
    <section
      ref={containerRef as RefObject<HTMLElement>}
      id="testimonials"
      className={css({
        w: 'full',
        px: { base: '3', md: '5' },
        py: { base: '10', md: '16' },
        bg: 'brand.white',
      })}
    >
      <div
        className={css({
          maxW: '1400px',
          mx: 'auto',
          mb: { base: '8', md: '12' },
        })}
      >
        <span
          className={css({
            display: 'block',
            fontSize: { base: 'xs', md: 'sm' },
            fontWeight: 'semibold',
            color: 'neutral.500',
            mb: '2',
          })}
        >
          {TESTIMONIALS_SECTION.sectionLabel}
        </span>
        <h2
          className={css({
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 'bold',
            lineHeight: '0.95',
            color: 'brand.black',
          })}
        >
          {TESTIMONIALS_SECTION.heading}
        </h2>
      </div>

      <div
        className={css({
          maxW: '1400px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
          gap: { base: '4', md: '6' },
        })}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={css({
              rounded: { base: 'xl', md: '2xl' },
              bg: 'surface.muted',
              p: { base: '6', md: '9' },
              display: 'flex',
              flexDirection: 'column',
              gap: '5',
            })}
            style={getAnimStyle(index)}
          >
            <div className={css({ display: 'flex', gap: '1' })}>
              {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                <StarIcon key={starIndex} />
              ))}
            </div>
            <p
              className={css({
                fontSize: 'sm',
                fontWeight: 'medium',
                color: 'brand.black',
                lineHeight: '1.5rem',
                flex: '1',
              })}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <p className={css({ fontSize: 'sm', fontWeight: 'bold', color: 'brand.black' })}>
                {testimonial.name}
              </p>
              <p className={css({ fontSize: 'xs', fontWeight: 'semibold', color: 'neutral.500' })}>
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
