import { track } from '@vercel/analytics';

// Define a more specific type for analytics properties
type AnalyticsEventProperties = Record<string, string | number | boolean | null>;

export const trackEvent = (eventName: string, properties?: AnalyticsEventProperties) => {
  track(eventName, properties);
};