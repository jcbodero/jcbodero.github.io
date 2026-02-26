import mixpanel from 'mixpanel-browser';

// Se utiliza el prefijo NEXT_PUBLIC_ para que la variable sea accesible desde el cliente
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

const isProduction = process.env.NODE_ENV === 'production';

export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN || MIXPANEL_TOKEN === 'YOUR_MIXPANEL_TOKEN_HERE') {
    console.warn('Mixpanel Token no configurado o es el valor por defecto. Tracking desactivado.');
    return;
  }
  
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: !isProduction,
    track_pageview: true,
    persistence: 'localStorage',
  });
};

export const trackEvent = (eventName: string, props?: Record<string, any>) => {
  if (!MIXPANEL_TOKEN || MIXPANEL_TOKEN === 'YOUR_MIXPANEL_TOKEN_HERE') return;
  mixpanel.track(eventName, props);
};

export const trackLink = (url: string, linkName: string) => {
  trackEvent('Link Clicked', {
    url,
    name: linkName,
  });
};