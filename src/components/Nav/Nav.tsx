'use client';
import {
  Box,
  HStack,
  Heading,
  Hide,
  Show,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { ConnectWalletButton } from '../ConnectWalletButton';
import { Logo } from '../Logo';
import MenuButtonComponent from './MenuButtonComponent';
import { NavMenuFullLinks } from './NavMenuFullLinks';
import { NavMenuFullDrawer } from './NavMenuFullDrawer';
import { projectName } from '../../constants/SupportedNetworkInfo';

export const Nav = () => {
  return (
    <HStack
      w="full"
      align="center"
      justify="center"
      borderBottomRadius="3xl"
      // bgColor={useColorModeValue('gray.50', 'gray.900')}
      position="fixed"
      top={0}
      zIndex={1111}
      backdropFilter="auto"
      backdropBlur={'20px'}
      transition={'background-color 300ms linear'}
      px={[2, 3, 5]}
      py={5}
    >
      <HStack w="full">
        {/* <Show below="lg">
          <NavMenuFullDrawer />
        </Show> */}
        <Logo></Logo>

        <Spacer />
        {/* <Hide below="lg">
          <NavMenuFullLinks />
        </Hide> */}
        <ConnectWalletButton showJazzicon={true}></ConnectWalletButton>
        <MenuButtonComponent />
      </HStack>
    </HStack>
  );
};
