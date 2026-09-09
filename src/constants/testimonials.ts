import type { Testimonial } from '@/types/testimonial';

export const TESTIMONIALS_SECTION = {
  sectionLabel: 'Patient Stories',
  heading: 'What Our Patients Say',
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'maria-santos',
    quote:
      'The team made my whole family feel at ease. My veneers look completely natural and the results exceeded what I expected.',
    name: 'Maria Santos',
    role: 'Veneers Patient',
    rating: 5,
  },
  {
    id: 'james-park',
    quote:
      'From the consultation to the follow-up, everything was handled with care. My implant procedure was smooth and pain-free.',
    name: 'James Park',
    role: 'Implant Patient',
    rating: 5,
  },
  {
    id: 'aisha-khan',
    quote:
      'I used to dread dentist visits. This office changed that completely — friendly staff and genuinely modern equipment.',
    name: 'Aisha Khan',
    role: 'Whitening Patient',
    rating: 5,
  },
];
