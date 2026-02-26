import mixpanel from 'mixpanel-browser';

// Reemplaza con tu token real de Mixpanel cuando lo tengas
const MIXPANEL_TOKEN = 'YOUR_MIXPANEL_TOKEN';

const isProduction = process.env.NODE_ENV === 'production';

export const initMixpanel = () => {
  if (MIXPANEL_TOKEN === 'YOUR_MIXPANEL_TOKEN') {
    console.warn('Mixpanel Token no configurado. Tracking desactivado.');
    return;
  }
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: !isProduction,
    track_pageview: true,
    persistence: 'localStorage',
  });
};

export const trackEvent = (eventName: string, props?: Record<string, any>) => {
  if (MIXPANEL_TOKEN === 'YOUR_MIXPANEL_TOKEN') return;
  mixpanel.track(eventName, props);
};

export const trackLink = (url: string, linkName: string) => {
  trackEvent('Link Clicked', {
    url,
    name: linkName,
  });
};
