export type ToastTone = 'success' | 'error';

export interface ToastState {
  message: string;
  tone: ToastTone;
}
