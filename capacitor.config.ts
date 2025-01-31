import { CapacitorConfig } from "@capacitor/cli";
import { config as loadEnv } from 'dotenv';

loadEnv();

const config: CapacitorConfig = {
  appId: "com.superapp.app",
  appName: "superapp",
  webDir: "dist",
  plugins: {
    SuperCapacitor: {
      key: process.env.PORTALS_KEY
    },
  },
};

export default config;