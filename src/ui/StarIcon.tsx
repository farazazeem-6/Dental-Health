import { css, cx } from '../../styled-system/css';

const starStyle = css({ color: 'brand.black' });

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={cx(starStyle, className)}
    >
      <path d="M8 0l2.163 5.279 5.837.375-4.412 3.83L13.021 15 8 11.877 2.979 15l1.433-5.516L0 5.654l5.837-.375L8 0z" />
    </svg>
  );
}
