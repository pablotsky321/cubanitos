import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cubanitos.app',
  appName: 'cubanitos',
  webDir: 'www\browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
