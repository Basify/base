import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { NavMenuFullLinks } from './NavMenuFullLinks';
import SocialMediaIcons from '../SocialMediaIcons';
import { Logo } from '../Logo';
import { LogoFull } from '../LogoFull';

export const NavMenuFullDrawer = () => {
  const { isOpen, onOpen, onToggle } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Left Menu Button"
        icon={<ChevronRightIcon />}
        onClick={onToggle}
        size="sm"
        isRound
      ></IconButton>
      <Drawer isOpen={isOpen} onClose={onToggle} placement="left">
        <DrawerOverlay></DrawerOverlay>
        <DrawerContent
          borderRightRadius="50px"
          bgColor={useColorModeValue('white', 'gray.900')}
          maxW={250}
        >
          <DrawerHeader>
            <HStack spacing={5}>
              <IconButton
                aria-label="Drawer Close Button"
                onClick={onToggle}
                icon={<ChevronLeftIcon />}
                size="sm"
                isRound
              ></IconButton>
              <Logo />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack py={5}>
              <NavMenuFullLinks
                style={{
                  direction: 'column',
                  onClick: onToggle,
                }}
              />
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <VStack w="full" spacing={5}>
              <Divider></Divider>
              <SocialMediaIcons />
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
