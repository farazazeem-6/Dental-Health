import { css } from '../../styled-system/css';
import { CheckCircleIcon } from '@/ui/CheckCircleIcon';
import type { ToastState } from '@/types/toast';

interface ToastProps {
  toast: ToastState;
  onDismiss: () => void;
}

export function Toast({ toast, onDismiss }: ToastProps) {
  return (
    <div
      role="status"
      className={css({
        position: 'fixed',
        bottom: { base: '4', md: '6' },
        right: { base: '4', md: '6' },
        left: { base: '4', md: 'auto' },
        zIndex: 100,
        bg: 'surface.footer',
        color: 'brand.white',
        rounded: { base: 'xl', md: '2xl' },
        px: { base: '4', md: '5' },
        py: { base: '3', md: '4' },
        display: 'flex',
        alignItems: 'center',
        gap: '3',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.24)',
      })}
    >
      <CheckCircleIcon
        className={css({ color: toast.tone === 'success' ? 'feedback.success' : 'feedback.error', flexShrink: 0 })}
      />
      <span className={css({ fontSize: 'sm', fontWeight: 'semibold' })}>{toast.message}</span>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss notification"
        className={css({
          ml: '2',
          fontSize: 'xs',
          fontWeight: 'bold',
          color: 'neutral.500',
          _hover: { color: 'brand.white' },
        })}
      >
        ✕
      </button>
    </div>
  );
}
