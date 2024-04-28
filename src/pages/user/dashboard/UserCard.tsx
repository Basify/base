import { Divider, Heading } from '@chakra-ui/react';
import React from 'react';
import { CardContainer } from '../../../components/CardContainer';
import { RiUser6Fill } from 'react-icons/ri';
import {
  useGetUserCurrentUpgradeLevel,
  useGetUserRewards,
} from '../../../hooks/ReferralHooks';
import { weiToDecimals } from '../../../utils/utilFunctions';

export const UserCard = ({ userAddress }: { userAddress: `0x${string}` }) => {
  const userRewards = useGetUserRewards(userAddress);
  const userLevelToUpgrade = useGetUserCurrentUpgradeLevel(userAddress);
  return (
    <CardContainer heading="Hey Welcome!" icon={RiUser6Fill}>
      <Heading textAlign="center">You have earned</Heading>
      <Heading fontSize="5xl" color="twitter.500">
        ${weiToDecimals(userRewards?.data?.totalRewards) ?? 0}
      </Heading>
      <Divider></Divider>
      <Heading>Level</Heading>
      <Heading>{Number(userLevelToUpgrade?.data?.level) + 1}</Heading>
    </CardContainer>
  );
};
