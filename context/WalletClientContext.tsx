import { ReactNode, createContext } from 'react';
import { WagmiConfig, createConfig, configureChains, sepolia } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

import ConnectWalletModal from '@/components/ConnectWalletModal';

const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY;
const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

// Configure chains & providers with the Infura provider.
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [infuraProvider({ apiKey: INFURA_API_KEY }), publicProvider()],
);

// Set up wagmi config
// Use Metamask, Coinbase Wallet, WalletConnect and injected connectors
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: WALLETCONNECT_PROJECT_ID,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

interface WalletClientProviderValue {
  address: string;
}

const defaultValue: WalletClientProviderValue = {
  address: '',
};

const WalletClientContext = createContext<WalletClientProviderValue>(defaultValue);

export function WalletClientProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      {children}
      <ConnectWalletModal />
    </WagmiConfig>
  );
}

export default WalletClientContext;
