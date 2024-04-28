import { CheckIcon, CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Link, useClipboard } from '@chakra-ui/react';
import { useChainId, useChains } from 'wagmi';
import { supportedNetworkInfo } from '../constants/SupportedNetworkInfo';
// import { useNetwork } from 'wagmi';

export const AddressActionButtons = ({ address }: { address: string }) => {
  const { onCopy, hasCopied } = useClipboard(address);
  const chainId = useChainId();
  const currentNetwork = supportedNetworkInfo[chainId];

  return (
    <HStack>
      <IconButton
        aria-label="Address copy button"
        icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
        onClick={onCopy}
        size="sm"
        borderRadius="xl"
      ></IconButton>
      <Link
        href={`${currentNetwork?.native?.blockExplorers?.default.url}/address/${address}`}
        target="_blank"
      >
        <IconButton
          aria-label="Open in explorer button"
          icon={<ExternalLinkIcon />}
          size="sm"
          borderRadius="xl"
        ></IconButton>
      </Link>
    </HStack>
  );
};
