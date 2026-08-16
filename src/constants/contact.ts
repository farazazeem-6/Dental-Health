import type {
  ContactDetail,
  FooterColumn,
  OpeningHour,
  SocialLink,
} from '../types/contact';
import { NAV_LINKS, NAV_LINK_HREFS } from './navigation';
import { SERVICE_CATALOG } from './services';

export const CONTACT_DETAILS: ContactDetail[] = [
  { label: 'Phone', value: '(201) 555-0142', href: 'tel:+12015550142' },
  { label: 'Email', value: 'hello@dentalhealth.example', href: 'mailto:hello@dentalhealth.example' },
  { label: 'Address', value: '128 Bergenline Ave, West New York, NJ 07093' },
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 3:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: '#social-instagram' },
  { label: 'Facebook', href: '#social-facebook' },
  { label: 'LinkedIn', href: '#social-linkedin' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: NAV_LINKS.map((link) => ({ label: link, href: NAV_LINK_HREFS[link] ?? '#' })),
  },
  {
    title: 'Services',
    links: SERVICE_CATALOG.map((item) => ({ label: item.name, href: '#services' })),
  },
  {
    title: 'Contact',
    links: CONTACT_DETAILS.map((detail) => ({
      label: detail.value,
      href: detail.href ?? '#contact',
    })),
  },
];
