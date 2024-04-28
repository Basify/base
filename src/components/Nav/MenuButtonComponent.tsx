import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { NavMenuDrawer } from './Modals/NavMenuDrawer';

export default function MenuButtonComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address } = useAccount();
  const iconButtonIcon = useBreakpointValue([
    <ChevronDownIcon key={1} />,
    <ChevronDownIcon key={2} />,
    <ChevronLeftIcon key={3} />,
  ]);
  return (
    <>
      <IconButton
        aria-label="Menu Button"
        icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        size="sm"
        onClick={onOpen}
        rounded="full"
      />
      <Drawer
        isOpen={isOpen}
        placement={useBreakpointValue(['bottom', 'bottom', 'right'])}
        onClose={onClose}
        preserveScrollBarGap={true}
      >
        <DrawerOverlay />
        <DrawerContent
          borderTopRightRadius={['3xl', 0]}
          borderTopLeftRadius={['3xl']}
          borderBottomLeftRadius={[0, 0, '3xl']}
          bgColor={useColorModeValue('white', 'gray.900')}
          boxShadow="lg"
        >
          <NavMenuDrawer address={address} onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
}
