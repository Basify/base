'use client';
import { VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useAccount, useChainId } from 'wagmi';
import { isChainSupported } from '../../utils/utilFunctions';
import NoWalletComponent from './NoWalletComponent';
import UnSupportedNetworkComponent from './UnSupportedNetworkComponent';

function ProtectedRoute({ children }: { children: ReactNode }) {
  // const { chain } = useNetwork();
  const { address } = useAccount();
  const chainId = useChainId();

  return (
    <VStack w="full" minH="100vh" justify="center">
      {!address ? (
        <NoWalletComponent />
      ) : !isChainSupported(chainId) ? (
        <UnSupportedNetworkComponent />
      ) : (
        children
      )}
    </VStack>
  );
}

export default ProtectedRoute;
