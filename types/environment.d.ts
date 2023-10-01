export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_INFURA_API_KEY: string;
      NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: string;
    }
  }
}
