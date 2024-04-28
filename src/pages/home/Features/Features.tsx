import React from 'react';
import { useGetRegistrationsStats } from '../../../hooks/ReferralHooks';
import { AiOutlineFire } from 'react-icons/ai';
import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi';
import { CiTimer } from 'react-icons/ci';
import {
  Card,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { CenterComponent } from '../../../util/Ui';
import { PageWrapper } from '../../../util/PageWrapper';
import {
  FcClock,
  FcConferenceCall,
  FcExternal,
  FcFeedIn,
} from 'react-icons/fc';
import { Parallax } from 'react-scroll-parallax';

export const Features = () => {
  const featuresArray = [
    {
      heading: 'Community Spreading Rewards',
      subHeading: 'All reward straight in your wallet.',
      icon: FcConferenceCall,
    },
    {
      heading: 'Upgrade Rewards',
      subHeading:
        'You receive full amount of upgrade fees when your friend upgrades.',
      icon: FcExternal,
    },
    {
      heading: 'Liquidity Generation',
      subHeading: '5 USD of every registration goes to liquidity.',
      icon: FcFeedIn,
    },
    {
      heading: 'Weekly Rewards',
      subHeading:
        'A random user is selected every week to give some percentage of total registration value of 7 days.',
      icon: FcClock,
    },
  ];
  return (
    <PageWrapper>
      <Wrap w="full" p={5} justify="center" align="center" spacing={5}>
        {featuresArray.map((valuesObject, key) => {
          return (
            <Parallax speed={-10 + key * 10} key={key}>
              <CenterComponent
                key={key}
                style={{
                  maxW: 250,
                  minH: 400,
                }}
              >
                <VStack>
                  <Icon as={valuesObject?.icon} boxSize={20}></Icon>
                  <Heading
                    size="lg"
                    textAlign="center"
                    color="twitter.500"
                    fontWeight={500}
                  >
                    {valuesObject?.heading}
                  </Heading>
                  <Text textAlign="center" fontWeight={100}>
                    {valuesObject?.subHeading}
                  </Text>
                </VStack>
              </CenterComponent>
            </Parallax>
          );
        })}
      </Wrap>
    </PageWrapper>
  );
};
