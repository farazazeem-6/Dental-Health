import { css } from "../../styled-system/css";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/constants/contact";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={css({
        w: "full",
        bg: "surface.footer",
        color: "brand.white",
        px: { base: "3", md: "5" },
        pt: { base: "10", md: "14" },
        pb: { base: "4", md: "6" },
      })}
    >
      <div
        className={css({
          maxW: "1400px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: { base: "8", md: "6" },
          pb: { base: "8", md: "12" },
        })}
      >
        <div className={css({ gridColumn: { base: "span 2", md: "span 1" } })}>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              mb: "3",
              gap: "2",
            })}
          >
            <span
              className={css({
                fontSize: "xl",
                fontWeight: "extrabold",
                textTransform: "uppercase",
                lineHeight: "1",
              })}
            >
              Dental
            </span>
            <span
              className={css({
                fontSize: "xl",
                fontWeight: "extrabold",
                textTransform: "uppercase",
                lineHeight: "1",
                mt: "-1",
              })}
            >
              Health
            </span>
          </div>
          <p
            className={css({
              fontSize: "sm",
              color: "neutral.500",
              mb: "5",
              maxW: "220px",
            })}
          >
            Trusted, modern dental care in the heart of West New York.
          </p>
          <div className={css({ display: "flex", gap: "3" })}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={css({
                  rounded: "full",
                  padding: "10px",
                  border: "1px solid",
                  borderColor: "border.glassLight",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "xs",
                  fontWeight: "semibold",
                  _hover: { bg: "brand.white", color: "brand.black" },
                })}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4
              className={css({
                fontSize: "sm",
                fontWeight: "bold",
                mb: "4",
                textTransform: "uppercase",
                letterSpacing: "wide",
              })}
            >
              {column.title}
            </h4>
            <ul
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "2.5",
              })}
            >
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={css({
                      fontSize: "sm",
                      color: "neutral.500",
                      _hover: { color: "brand.white" },
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className={css({
          maxW: "1400px",
          mx: "auto",
          pt: "6",
          borderTop: "1px solid",
          borderColor: "border.glassLight",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "3",
        })}
      >
        <span className={css({ fontSize: "xs", color: "neutral.500" })}>
          © {year} Dental Health. All rights reserved.
        </span>
        <div className={css({ display: "flex", gap: "5" })}>
          <a
            href="#privacy"
            className={css({
              fontSize: "xs",
              color: "neutral.500",
              _hover: { color: "brand.white" },
            })}
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className={css({
              fontSize: "xs",
              color: "neutral.500",
              _hover: { color: "brand.white" },
            })}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
