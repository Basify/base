import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Flex,
  HStack,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { shortenAddress } from '@usedapp/core';
import { IconType } from 'react-icons';
import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { AddressActionButtons } from '../../../components/AddressActionButtons';
import { ColorModeSwitcher } from '../../../components/ColorModeSwitcher';
import { ConnectWalletButton } from '../../../components/ConnectWalletButton';
import SocialMediaIcons from '../../../components/SocialMediaIcons';
import NavUserMenu from '../NavUserMenu';

export const NavMenuDrawer = ({
  address,
  onClose,
}: {
  address: string | undefined;
  onClose: () => void;
}) => {
  const { colorMode } = useColorMode();
  const JazziconSize = useBreakpointValue([25, 30, 40]);
  const socialMediaIcons: IconType[] = [
    FaTwitter,
    FaTelegram,
    FaGithub,
    FaDiscord,
  ];
  const iconButtonIcon = useBreakpointValue([
    <ChevronDownIcon key={1} />,
    <ChevronDownIcon key={2} />,
    <ChevronRightIcon key={3} />,
  ]);
  return (
    <>
      <DrawerHeader>
        <HStack w="full">
          <Spacer />
          <IconButton
            aria-label="Menu Close Button"
            icon={iconButtonIcon}
            size="sm"
            onClick={onClose}
            rounded="full"
          />
        </HStack>
        {address ? (
          <HStack>
            <Jazzicon
              diameter={JazziconSize}
              seed={jsNumberForAddress(address)}
            ></Jazzicon>
            <Text fontWeight={400} fontSize={['sm', 'md']}>
              {shortenAddress(address)}
            </Text>
            <AddressActionButtons address={address} />
          </HStack>
        ) : (
          <Heading size="md" textAlign="center" py={5}>
            Please connect wallet to continue
          </Heading>
        )}
      </DrawerHeader>
      <DrawerBody>
        <Flex h="full" align="center" justify="center" w="full">
          {address ? (
            <NavUserMenu userAddress={address} onClick={onClose} />
          ) : (
            <Box onClick={onClose}>
              <ConnectWalletButton />
            </Box>
          )}
        </Flex>
      </DrawerBody>
      <DrawerFooter>
        <VStack w="full" spacing={5}>
          <HStack spacing={5}>
            <SocialMediaIcons />
          </HStack>
          <Divider />
          <HStack w="full">
            <Heading size="sm">
              {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </Heading>
            <Spacer />
            <ColorModeSwitcher />
          </HStack>
        </VStack>
      </DrawerFooter>
    </>
  );
};
