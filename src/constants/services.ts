import type { FeatureBar, Service, ServiceCatalogItem } from '@/types/service';

export const FEATURE_BARS: FeatureBar[] = [
  { id: 'advanced-dentistry', label: 'Advanced Dentistry' },
  { id: 'high-quality-equipment', label: 'High Quality Equipment' },
  { id: 'friendly-staff', label: 'Friendly Staff' },
];

export const SERVICES: Service[] = [
  {
    id: 'dental-veneers',
    name: 'Dental\nVeneers',
    price: '$850',
    duration: '90 min',
    number: '01',
    active: true,
  },
  {
    id: 'dental-crowns',
    name: 'Dental\nCrowns',
    price: '$650',
    duration: '60 min',
    number: '02',
    active: false,
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth\nWhitening',
    price: '$250',
    duration: '45 min',
    number: '03',
    active: false,
  },
  {
    id: 'dental-implants',
    name: 'Dental\nImplants',
    price: '$1,200',
    duration: '120 min',
    number: null,
    active: false,
  },
];

export const SERVICE_CATALOG: ServiceCatalogItem[] = [
  { id: 'general-checkup', name: 'General Checkup', price: '$80', duration: '30 min' },
  { id: 'teeth-cleaning', name: 'Teeth Cleaning', price: '$120', duration: '45 min' },
  { id: 'root-canal', name: 'Root Canal Therapy', price: '$950', duration: '90 min' },
  { id: 'braces-aligners', name: 'Braces & Aligners', price: '$3,500', duration: 'Ongoing' },
  { id: 'emergency-care', name: 'Emergency Care', price: '$150', duration: '24/7' },
  { id: 'pediatric-dentistry', name: 'Pediatric Dentistry', price: '$95', duration: '30 min' },
];
