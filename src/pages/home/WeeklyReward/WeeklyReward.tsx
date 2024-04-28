'use client';
import { HStack, Heading, VStack } from '@chakra-ui/react';
// import { useNetwork } from 'wagmi';
import { sepolia } from 'viem/chains';
import { Counter } from '../../../components/Counter';
import {
  useGetNativePriceInUSD,
  useGetWeeklyRewardToBeDistributed,
} from '../../../hooks/ReferralHooks';
import { PageWrapper } from '../../../util/PageWrapper';
import { HeadingComponent } from '../../../util/Ui';
import { nativeToUSD, weiToDecimals } from '../../../utils/utilFunctions';
import { supportedNetworkInfo } from '../../../constants/SupportedNetworkInfo';

function WeeklyReward() {
  const weeklyRewardsToBeDistributed = useGetWeeklyRewardToBeDistributed(
    sepolia?.id
  );

  const currentNetwork = supportedNetworkInfo[sepolia?.id];

  const nativePriceInUSD = useGetNativePriceInUSD(
    currentNetwork?.priceOracleAddress!
  )?.data as unknown as bigint;

  return (
    <PageWrapper>
      <HeadingComponent
        heading="Weekly Rewards to be"
        gradientHeading="DISTRIBUTED"
      ></HeadingComponent>
      <VStack>
        <HStack>
          <Heading>
            {weiToDecimals(
              nativeToUSD(
                weeklyRewardsToBeDistributed?.data?.rewardValue,
                nativePriceInUSD
              ),
              18,
              3
            )}
          </Heading>
          <Heading color="orange.500">USDT</Heading>
        </HStack>
      </VStack>
      <VStack>
        <Heading>Remaining Time</Heading>
        <Counter
          timeinseconds={Number(weeklyRewardsToBeDistributed?.data?.endTime)}
        ></Counter>
      </VStack>
    </PageWrapper>
  );
}

export default WeeklyReward;
