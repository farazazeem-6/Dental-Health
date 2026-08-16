import { useEffect, useState } from 'react';
import { css, cx } from '../../styled-system/css';
import { Button } from '../ui/Button';
import { NAV_LINKS, NAV_LINK_HREFS } from '../constants/navigation';

const hamburgerSpan = css({
  position: 'absolute',
  h: '0.5',
  w: '6',
  bg: 'brand.black',
  rounded: 'full',
  transition: 'all 0.3s cubic-bezier(0.76,0,0.24,1)',
});

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={css({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { base: '4', md: '6' },
          py: { base: '2', md: '3' },
          bg: 'surface.navBar',
          backdropFilter: 'blur(12px)',
        })}
      >
        <div className={css({ display: 'flex', flexDirection: 'column' })}>
          <span
            className={css({
              fontSize: { base: 'xl', md: '2xl' },
              fontWeight: 'extrabold',
              textTransform: 'uppercase',
              letterSpacing: 'tight',
              lineHeight: '1',
              color: 'brand.black',
            })}
          >
            Dental
          </span>
          <span
            className={css({
              fontSize: { base: 'xl', md: '2xl' },
              fontWeight: 'extrabold',
              textTransform: 'uppercase',
              letterSpacing: 'tight',
              lineHeight: '1',
              color: 'brand.black',
              mt: { base: '1', md: '1.5' },
            })}
          >
            Health
          </span>
          <span
            className={css({
              fontSize: { base: '8px', md: '9px' },
              fontWeight: 'medium',
              lineHeight: '1',
              color: 'brand.black',
              mt: { base: '1.5', md: '2' },
            })}
          >
            quality healthcare
          </span>
        </div>

        <div className={css({ display: { base: 'none', md: 'flex' }, alignItems: 'center', gap: '6' })}>
          <Button tone="outline" size="sm">
            Menu
          </Button>
          <span className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'brand.black' })}>
            Dental Emergency
          </span>
        </div>

        <button
          className={css({
            display: { base: 'flex', md: 'none' },
            w: '10',
            h: '10',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          })}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={cx(
              hamburgerSpan,
              css({ transform: menuOpen ? 'rotate(45deg) translateY(0)' : 'translateY(-8px)' }),
            )}
          />
          <span
            className={cx(
              hamburgerSpan,
              css({
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
              }),
            )}
          />
          <span
            className={cx(
              hamburgerSpan,
              css({ transform: menuOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(8px)' }),
            )}
          />
        </button>
      </nav>

      <div
        className={css({
          display: { base: 'block', md: 'none' },
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          pointerEvents: menuOpen ? 'auto' : 'none',
        })}
      >
        <div
          className={css({
            position: 'absolute',
            inset: 0,
            bg: 'surface.overlay',
            backdropFilter: 'blur(4px)',
            transition: 'opacity 0.5s',
            opacity: menuOpen ? 1 : 0,
          })}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={css({
            position: 'absolute',
            top: 0,
            right: 0,
            h: 'full',
            w: '85%',
            maxW: 'sm',
            bg: 'brand.white',
            boxShadow: '2xl',
            transition: 'transform 0.5s cubic-bezier(0.76,0,0.24,1)',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          })}
        >
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              h: 'full',
              px: '8',
              gap: '1',
            })}
          >
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={NAV_LINK_HREFS[link] ?? '#'}
                onClick={() => setMenuOpen(false)}
                className={css({
                  fontSize: '4xl',
                  fontWeight: 'bold',
                  color: 'brand.black',
                  transition: 'all 0.5s cubic-bezier(0.76,0,0.24,1)',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(32px)',
                  _hover: { color: 'neutral.500' },
                })}
                style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms' }}
              >
                {link}
              </a>
            ))}

            <div
              className={css({
                mt: '8',
                pt: '8',
                borderTop: '1px solid',
                borderColor: 'border.neutral',
                transition: 'all 0.5s cubic-bezier(0.76,0,0.24,1)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(32px)',
              })}
              style={{ transitionDelay: menuOpen ? '450ms' : '0ms' }}
            >
              <p className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'brand.black', mb: '4' })}>
                Dental Emergency
              </p>
              <Button tone="black" size="full">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
