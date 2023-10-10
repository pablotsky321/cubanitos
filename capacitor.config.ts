import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cubanitos.app',
  appName: 'cubanitos',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
