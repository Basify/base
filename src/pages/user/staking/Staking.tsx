// 'use client';
// import { Divider, HStack, Heading, Icon, VStack, Wrap } from '@chakra-ui/react';
// import { FcConferenceCall } from 'react-icons/fc';
// import StakingInfoCard from '../../../components/StakingInfoCard/StakingInfoCard';
// import { useGetUserStakingIDs } from '../../../hooks/StakingHooks';
// import { useAccount } from 'wagmi';
// import { useParams } from 'react-router-dom';

// function Staking() {
//   const { address } = useAccount();
//   const { userAddress } = useParams<{ userAddress: `0x${string}` }>();
//   const userStakingIDs = useGetUserStakingIDs(
//     userAddress ? userAddress : address!
//   );
//   return (
//     <VStack w="full" spacing={10}>
//       <VStack>
//         <HStack>
//           <Icon as={FcConferenceCall} boxSize={10}></Icon>
//           <Heading color="orange.500">Staking</Heading>
//         </HStack>
//         <Divider></Divider>
//         <Wrap w="full" spacing={10} align="center" justify="center" p={5}>
//           {Number(userStakingIDs.data?.length) > 0 ? (
//             userStakingIDs.data?.map((stakingId: BigInt, key: number) => {
//               return (
//                 <StakingInfoCard
//                   stakingId={Number(stakingId)}
//                   key={key}
//                 ></StakingInfoCard>
//               );
//             })
//           ) : (
//             <Heading textAlign="center">You have no stakings.</Heading>
//           )}
//         </Wrap>
//       </VStack>
//     </VStack>
//   );
// }

// export default Staking;

import React from 'react'

export const Staking = () => {
  return (
    <div>Staking</div>
  )
}

