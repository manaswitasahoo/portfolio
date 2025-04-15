import { track } from '@vercel/analytics';

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  track(eventName, properties);
};