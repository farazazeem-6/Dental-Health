import { css } from '../../styled-system/css';
import { Button } from '../ui/Button';
import { CONTACT_DETAILS, OPENING_HOURS } from '../constants/contact';

const inputStyle = css({
  w: 'full',
  border: '1px solid',
  borderColor: 'border.neutral',
  rounded: 'xl',
  px: '4',
  py: '3',
  fontSize: 'sm',
  color: 'brand.black',
  bg: 'brand.white',
  _placeholder: { color: 'neutral.500' },
  _focus: { outline: 'none', borderColor: 'brand.black' },
});

export function ContactSection() {
  return (
    <section
      id="contact"
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
          Get In Touch
        </span>
        <h2
          className={css({
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 'bold',
            lineHeight: '0.95',
            color: 'brand.black',
          })}
        >
          Book Your Visit
        </h2>
      </div>

      <div
        className={css({
          maxW: '1400px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
          gap: { base: '4', md: '6' },
        })}
      >
        <div
          className={css({
            rounded: { base: 'xl', md: '2xl' },
            bg: 'surface.muted',
            p: { base: '6', md: '9' },
            display: 'flex',
            flexDirection: 'column',
            gap: '8',
          })}
        >
          <div>
            <h3 className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'brand.black', mb: '4' })}>
              Clinic Information
            </h3>
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '3' })}>
              {CONTACT_DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className={css({
                    display: 'grid',
                    gridTemplateColumns: '100px 1fr',
                    gap: '3',
                    fontSize: 'sm',
                  })}
                >
                  <span className={css({ color: 'neutral.500', fontWeight: 'semibold' })}>
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className={css({ color: 'brand.black', fontWeight: 'semibold', _hover: { color: 'neutral.500' } })}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className={css({ color: 'brand.black', fontWeight: 'semibold' })}>
                      {detail.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'brand.black', mb: '4' })}>
              Opening Hours
            </h3>
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '3' })}>
              {OPENING_HOURS.map((entry) => (
                <div
                  key={entry.day}
                  className={css({
                    display: 'grid',
                    gridTemplateColumns: '100px 1fr',
                    gap: '3',
                    fontSize: 'sm',
                  })}
                >
                  <span className={css({ color: 'neutral.500', fontWeight: 'semibold' })}>{entry.day}</span>
                  <span className={css({ color: 'brand.black', fontWeight: 'semibold' })}>{entry.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={css({
            rounded: { base: 'xl', md: '2xl' },
            bg: 'surface.subtle',
            p: { base: '6', md: '9' },
            display: 'flex',
            flexDirection: 'column',
            gap: '4',
          })}
        >
          <h3 className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'brand.black' })}>
            Send a Message
          </h3>
          <div className={css({ display: 'grid', gridTemplateColumns: { base: '1fr', sm: '1fr 1fr' }, gap: '4' })}>
            <input type="text" placeholder="Full Name" className={inputStyle} required />
            <input type="tel" placeholder="Phone Number" className={inputStyle} required />
          </div>
          <input type="email" placeholder="Email Address" className={inputStyle} required />
          <textarea placeholder="Tell us what you need" rows={4} className={inputStyle} />
          <Button tone="black" size="lg" type="submit" className={css({ alignSelf: 'flex-start' })}>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
