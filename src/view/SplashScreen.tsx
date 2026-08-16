import { useEffect, useState } from 'react';
import { css } from '../../styled-system/css';
import {
  SPLASH_STEP_MS,
  SPLASH_STEPS,
  SPLASH_EXIT_DELAY_MS,
  SPLASH_COMPLETE_DELAY_MS,
} from '../constants/animation';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setCount(step);
      if (step >= SPLASH_STEPS) {
        clearInterval(interval);
        setTimeout(() => setExiting(true), SPLASH_EXIT_DELAY_MS);
        setTimeout(() => onComplete(), SPLASH_COMPLETE_DELAY_MS);
      }
    }, SPLASH_STEP_MS);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={css({
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        bg: 'brand.white',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        transition: 'opacity 0.7s',
        opacity: exiting ? 0 : 1,
      })}
    >
      <span
        className={css({
          fontSize: { base: '7xl', md: '9xl' },
          fontWeight: 'bold',
          fontVariantNumeric: 'tabular-nums',
          p: { base: '6', md: '10' },
          lineHeight: '1',
          color: 'brand.black',
        })}
      >
        {count}
      </span>
    </div>
  );
}
