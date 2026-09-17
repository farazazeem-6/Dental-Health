import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { StarIcon } from "@/ui/StarIcon";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "@/constants/testimonials";
import { css } from "../../styled-system/css";

export function TestimonialsSection() {
  const { containerRef, getAnimStyle } = useStaggeredReveal(
    TESTIMONIALS.length,
  );
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [, setActiveIndex] = useState(0);

  // Build 6 cards from the available testimonials (repeat if needed)
  const items = Array.from({ length: 6 }, (_, i) => ({
    ...TESTIMONIALS[i % TESTIMONIALS.length],
    _dupIndex: i,
  }));

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((cur) => {
        const next = (cur + 1) % items.length;
        const track = trackRef.current;
        if (track) {
          const child = track.children[next] as HTMLElement | undefined;
          if (child) {
            track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
          }
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section
      ref={containerRef as RefObject<HTMLElement>}
      id="testimonials"
      className={css({
        w: "full",
        px: { base: "3", md: "5" },
        py: { base: "10", md: "16" },
        bg: "brand.white",
      })}
    >
      <div
        className={css({
          maxW: "1400px",
          mx: "auto",
          mb: { base: "8", md: "12" },
        })}
      >
        <span
          className={css({
            display: "block",
            fontSize: { base: "xs", md: "sm" },
            fontWeight: "semibold",
            color: "neutral.500",
            mb: "2",
          })}
        >
          {TESTIMONIALS_SECTION.sectionLabel}
        </span>
        <h2
          className={css({
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "bold",
            lineHeight: "0.95",
            color: "brand.black",
          })}
        >
          {TESTIMONIALS_SECTION.heading}
        </h2>
      </div>

      <div className={css({ maxW: "1400px", mx: "auto" })}>
        <div className={css({ overflow: "hidden" })}>
          <div
            ref={trackRef}
            className={css({
              display: "flex",
              gap: { base: "4", md: "6" },
              transition: "scroll-left 300ms",
              scrollSnapType: { base: "x mandatory", md: "x mandatory" },
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
            })}
          >
            {items.map((testimonial, index) => (
              <div
                key={`${testimonial.id ?? "t"}-${testimonial._dupIndex}`}
                className={css({
                  rounded: { base: "xl", md: "2xl" },
                  bg: "surface.muted",
                  p: { base: "6", md: "9" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "5",
                  flex: { base: "0 0 100%", md: "0 0 33.3333%" },
                  scrollSnapAlign: "start",
                })}
                style={getAnimStyle(index)}
              >
                <div className={css({ display: "flex", gap: "1" })}>
                  {Array.from({ length: testimonial.rating }).map(
                    (_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ),
                  )}
                </div>
                <p
                  className={css({
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "brand.black",
                    lineHeight: "1.5rem",
                    flex: "1",
                  })}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p
                    className={css({
                      fontSize: "sm",
                      fontWeight: "bold",
                      color: "brand.black",
                    })}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={css({
                      fontSize: "xs",
                      fontWeight: "semibold",
                      color: "neutral.500",
                    })}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
