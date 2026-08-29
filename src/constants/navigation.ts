import type { NavLink } from '@/types/navigation';

export const NAV_LINKS: NavLink[] = ['Home', 'Services', 'About', 'Gallery', 'Contact'];

export const NAV_LINK_HREFS: Record<string, string> = {
  Home: '#home',
  Services: '#gallery',
  About: '#about',
  Gallery: '#gallery',
  Contact: '#contact',
};

export const NAVBAR = {
  brandName1: 'Dental',
  brandName2: 'Health',
  tagline: 'quality healthcare',
  menuButton: 'Menu',
  menuAriaLabel: 'Toggle menu',
  emergencyLabel: 'Dental Emergency',
  appointmentButton: 'Book Appointment',
} as const;
