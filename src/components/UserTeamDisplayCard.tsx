import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Tag
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AddressZero } from '../constants/SupportedNetworkInfo';
import { AddressActionButtons } from './AddressActionButtons';
import { CardContainer } from './CardContainer';
import { shortenAddress } from '../utils/utilFunctions';

function UserTeamDisplayCard({
  userType,
  icon,
  address,
}: {
  userType: string;
  icon: IconType;
  address: `0x${string}` | undefined;
}) {
  return (
    <CardContainer heading={userType} icon={icon}>
      <Tag size="lg" borderRadius="xl" colorScheme="green">
        {shortenAddress(address ?? AddressZero)}
      </Tag>
      <AddressActionButtons
        address={address ?? AddressZero}
      ></AddressActionButtons>
      <Button
        borderRadius="xl"
        rightIcon={<ExternalLinkIcon />}
        as="a"
        href={`#/user/team/${address}`}
        target="_blank"
      >
        View Account Stats
      </Button>
    </CardContainer>
  );
}

export default UserTeamDisplayCard;
