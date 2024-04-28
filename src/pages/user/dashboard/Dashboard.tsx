'use client';
import { Divider, HStack, Heading, Icon, VStack, Wrap } from '@chakra-ui/react';
import { FcAreaChart } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
// import LimitCard from '../../../components/LimitCard';
import BalanceCard from './BalanceCard';
import BusinessCard from './BusinessCard';
import RewardsCard from './RewardsCard';
import TeamCard from './TeamCard';
import { UserCard } from './UserCard';

function Dashboard() {
  const { userAddress } = useParams<{ userAddress: `0x${string}` }>();
  const { address } = useAccount();
  return (
    <VStack w="full" direction="column" gap={10}>
      <VStack>
        <HStack>
          <Icon as={FcAreaChart} boxSize={10}></Icon>
          <Heading color="orange.500">Dashboard</Heading>
        </HStack>
        <Divider></Divider>
      </VStack>
      <Wrap w="full" justify="center" spacing={5}>
        <UserCard userAddress={userAddress ? userAddress : address!}></UserCard>
        {/* <LimitCard
          userAddress={userAddress ? userAddress : address!}
        ></LimitCard> */}
        <BalanceCard
          userAddress={userAddress ? userAddress : address!}
        ></BalanceCard>
        <BusinessCard
          userAddress={userAddress ? userAddress : address!}
        ></BusinessCard>
        <RewardsCard
          userAddress={userAddress ? userAddress : address!}
        ></RewardsCard>
        <TeamCard userAddress={userAddress ? userAddress : address!} />
      </Wrap>
    </VStack>
  );
}

export default Dashboard;
