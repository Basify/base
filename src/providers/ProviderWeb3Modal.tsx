import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { bsc, bscTestnet, sepolia } from 'wagmi/chains';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '917957bfeeac66e121fa351993c28562';

// 2. Create wagmiConfig
const metadata = {
  name: 'BASIFY',
  description: 'Web3 Reward Distribution Protocol.',
  url: 'https://basefy.network', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const chains = [bsc, sepolia] as const;

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // @ts-ignore
  // ...wagmiOptions, // Optional - Override createConfig parameters
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export function ProviderWeb3Modal({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
