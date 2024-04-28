'use client';
import { VStack, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Header';
import { PlanDiscriptionComponent } from './PlanDiscriptionComponent/PlanDiscriptionComponent';
import { PowerOfBlockchainComponent } from './PowerOfBlockchainComponent/PowerOfBlockchainComponent';
import { SupportedChainComponent } from './SupportedChainComponent';
import { TokenDistribution } from './TokenDistribution/TokenDistribution';
import WeeklyReward from './WeeklyReward/WeeklyReward';
import { RegistrationStats } from './RegistrationStats/RegistrationStats';
import { AboutUs } from './AboutUs/AboutUs';
import { Tokenomics } from './Tokenomics/Tokenomics';
import { Roadmap } from './Roadmap/Roadmap';
import { Features } from './Features/Features';
import { NetworkJoining } from './NetworkJoining/NetworkJoining';

export const Home = () => {
  return (
    <VStack w="full" minH={'100vh'} pt={20} overflow="hidden">
      <Header />
      <RegistrationStats />
      <WeeklyReward />
      <SupportedChainComponent />
      <PlanDiscriptionComponent />
      <AboutUs />
      <Features />
      <NetworkJoining/>
      <Tokenomics />
      <Roadmap />
      {/* <TokenDistribution /> */}
      <PowerOfBlockchainComponent />
    </VStack>
  );
};
