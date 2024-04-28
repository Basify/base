import { VStack, useColorModeValue } from '@chakra-ui/react';
import { jsNumberForAddress } from 'react-jazzicon';
import Jazzicon from 'react-jazzicon/dist/Jazzicon';
import SocialMediaIcons from '../../../components/SocialMediaIcons';
import { AddressActionButtons } from '../../AddressActionButtons';
import { ConnectWalletButton } from '../../ConnectWalletButton';
import NavUserMenu from '../NavUserMenu';
import { CenterComponent } from '../../../util/Ui';

function NavUser({
  userAddress,
  onClick,
}: {
  userAddress: string;
  onClick?: () => void;
}) {
  return (
    <VStack w="full" flex={1}>
      <CenterComponent>
        <VStack>
          <Jazzicon
            seed={jsNumberForAddress(`${1111}`)}
            diameter={50}
          ></Jazzicon>
          <ConnectWalletButton></ConnectWalletButton>
          <AddressActionButtons address=""></AddressActionButtons>
        </VStack>
      </CenterComponent>
      <CenterComponent
        style={{
          w: 'full',
          flex: 1,
        }}
      >
        <VStack>
          <NavUserMenu
            userAddress={userAddress}
            onClick={onClick}
          ></NavUserMenu>
        </VStack>
      </CenterComponent>
      <CenterComponent>
        <SocialMediaIcons />
      </CenterComponent>
    </VStack>
  );
}

export default NavUser;
