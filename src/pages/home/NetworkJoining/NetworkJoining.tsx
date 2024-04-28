import {
  Box,
  Center,
  Heading,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { HeadingComponent } from '../../../util/Ui';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { PageWrapper } from '../../../util/PageWrapper';
import { sepolia } from 'viem/chains';
import {
  liquidityGenerationFees,
  networkJoiningFees,
  projectDevelopmentFees,
  referralIncomeFees,
  weeklyRewardFees,
} from '../../../constants/SupportedNetworkInfo';

ChartJS.register(ArcElement, Tooltip, Legend);

export const NetworkJoining = () => {
  const chartBorderColor = useColorModeValue('white', '#1A202C');
  const data = {
    labels: [
      `${referralIncomeFees} | Referral Rewards`,
      `${projectDevelopmentFees} | Project Development`,
      `${liquidityGenerationFees} | Liquidity Generation`,
      `${weeklyRewardFees} | Weekly Rewards`,
    ],
    datasets: [
      {
        data: [60, 20, 16, 4],
        backgroundColor: ['cyan', 'pink', 'yellow', 'purple'],
        borderColor: chartBorderColor,
        borderWidth: 10,
        borderRadius: 10,
      },
    ],
  };
  return (
    <PageWrapper>
      <HeadingComponent
        heading="Benefits of joining"
        gradientHeading="NETWORK"
      ></HeadingComponent>
      <VStack boxSize={[400, 500, 600]}>
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                fullSize: true,
                labels: {
                  font: {
                    size: useBreakpointValue(
                      {
                        base: 17,
                        md: 20,
                      },
                      {
                        fallback: 'md',
                      }
                    ),
                  },
                },
              },
            },
            maintainAspectRatio: true,
          }}
        />
      </VStack>
      <VStack>
        <Heading>Network Joining Fee</Heading>
        <Heading
          fontSize="5xl"
          textAlign="center"
          bgGradient="linear(to-r, green.200, orange.500)"
          bgClip="text"
        >
          {networkJoiningFees} worth of {sepolia?.nativeCurrency?.symbol}
        </Heading>
      </VStack>
    </PageWrapper>
  );
};
