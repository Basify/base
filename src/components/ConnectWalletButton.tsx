import { Button, Image, useBreakpointValue } from '@chakra-ui/react';
import { shortenAddress } from '@usedapp/core';
// import { useWeb3Modal } from '@web3modal/react';
import { jsNumberForAddress } from 'react-jazzicon';
import Jazzicon from 'react-jazzicon/dist/Jazzicon';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export const ConnectWalletButton = ({
  showJazzicon,
  userAddress,
}: {
  showJazzicon?: boolean;
  userAddress?: string;
}) => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const conectWalletText = useBreakpointValue([
    'Connect',
    'Connect',
    'Connect Wallet',
  ]);

  return (
    <Button
      onClick={async () => {
        await open();
      }}
      leftIcon={
        address ? (
          showJazzicon ? (
            <Jazzicon seed={jsNumberForAddress(`${address}`)}></Jazzicon>
          ) : (
            <></>
          )
        ) : (
          <Image
            src={'./walletIcons/walletConnect.svg'}
            alt="Wallet Connect Icon"
            width={22}
          ></Image>
        )
      }
      variant="solid"
      borderRadius="xl"
      size={['sm', 'md']}
    >
      {address ? shortenAddress(userAddress ?? address) : 'Connect Wallet'}
    </Button>
  );
};
