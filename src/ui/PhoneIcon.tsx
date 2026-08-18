import { cx } from '../../styled-system/css';

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={cx(className)}
    >
      <path
        d="M3 5.5C3 4.67157 3.67157 4 4.5 4H8L10 9L7.5 10.5C8.57096 12.9926 11.0074 15.429 13.5 16.5L15 14L20 16V19.5C20 20.3284 19.3284 21 18.5 21C10.4919 21 3 13.5081 3 5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
