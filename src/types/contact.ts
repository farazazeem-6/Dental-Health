export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}
