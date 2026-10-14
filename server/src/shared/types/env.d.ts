declare module NodeJS {
  interface ProcessEnv {
    PORT: number;
    MONGODB_URI: string;
    CLIENT_URL: string;
  }
}
