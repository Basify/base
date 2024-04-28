import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Input,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react';
import {
  FcAssistant,
  FcConferenceCall,
  FcDown,
  FcReadingEbook,
  FcVoicePresentation,
} from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import UserTeamDisplayCard from '../../../components/UserTeamDisplayCard';
import { AddressZero } from '../../../constants/SupportedNetworkInfo';
import {
  useGetUserBusiness,
  useGetUserTeam,
} from '../../../hooks/ReferralHooks';
import UserTeamTable from './UserTeamTable';

function Team() {
  const { address } = useAccount();
  const { userAddress } = useParams<{
    userAddress: `0x${string}`;
  }>();
  const userBusiness = useGetUserBusiness(userAddress ?? address);
  const userTeamObject = useGetUserTeam(userAddress ?? address);
  const isUserActive = Number(userBusiness?.data?.selfBusiness) > 0 ? true : false;
  const websiteURL = `${window.origin}`;
  const userReferralLink = `${websiteURL}/#/registration/${address}`;
  const { hasCopied, onCopy } = useClipboard(userReferralLink);
  return (
    <VStack w="full" spacing={10}>
      <VStack>
        <HStack>
          <Icon as={FcConferenceCall} boxSize={10}></Icon>
          <Heading color="orange.500">Team</Heading>
        </HStack>
        <Divider></Divider>
      </VStack>
      <VStack>
        <Heading>Your referral link</Heading>
        <VStack>
          <Input
            defaultValue={
              isUserActive ? userReferralLink : 'User is not active'
            }
            borderRadius="xl"
            color={!isUserActive ? 'red' : ''}
            isReadOnly
          ></Input>
          <Button
            w="full"
            borderRadius="xl"
            onClick={onCopy}
            rightIcon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            isDisabled={!isUserActive}
          >
            {hasCopied ? 'Referral Link Copied' : 'Copy Referral Link'}
          </Button>
        </VStack>
      </VStack>
      <VStack>
        {userTeamObject?.data?.referrer !== AddressZero && (
          <VStack>
            <UserTeamDisplayCard
              address={userTeamObject?.data?.referrer}
              icon={FcReadingEbook}
              userType="Referrer"
            />
            <Icon as={FcDown} boxSize={10}></Icon>
          </VStack>
        )}

        <VStack>
          <UserTeamDisplayCard
            address={userAddress ?? address ?? AddressZero}
            icon={FcAssistant}
            userType="You"
          />
        </VStack>
        <Icon as={FcDown} boxSize={10}></Icon>
        {userTeamObject?.data?.refereeCount! > 0 ? (
          <Wrap w="full" justify="center" align="center">
            {userTeamObject?.data?.referees.map(
              (address: `0x${string}`, key: number) => {
                return (
                  <UserTeamDisplayCard
                    address={address}
                    icon={FcVoicePresentation}
                    userType="Referee"
                    key={key}
                  />
                );
              }
            )}
          </Wrap>
        ) : (
          <Heading size="md" textAlign="center" color="red">
            You have no team yet.
          </Heading>
        )}
      </VStack>
      {userTeamObject?.data?.refereeCount! > 0 && (
        <VStack w="full" spacing={10}>
          <Divider />
          <VStack>
            <Heading size="md" color="orange.500">
              All Team
            </Heading>
            <Divider />
          </VStack>
          <UserTeamTable userAddress={userAddress ?? address!} />
        </VStack>
      )}
    </VStack>
  );
}

export default Team;
