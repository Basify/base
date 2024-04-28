import {
  Center,
  CenterProps,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Parallax } from 'react-scroll-parallax';

export const bgGradient = {
  heading: 'linear(to-r, red.500, yellow.500, green.500)',
};

export const HeadingComponent = ({
  heading,
  gradientHeading,
}: {
  heading: string;
  gradientHeading: string;
}) => {
  return (
    <VStack
      fontSize={['2xl', '3xl', '4xl', '5xl']}
      fontWeight={900}
      lineHeight={1}
    >
      <Text textAlign="center" color="twitter.400" fontWeight={100}>
        {heading}
      </Text>
      <Text
        fontSize={['4xl', '5xl', '6xl', '7xl']}
        // bgGradient={`linear(to-r, red.400, yellow.500, green.400)`}
        // bgClip="text"
        color={useColorModeValue('twitter.500', 'twitter.400')}
      >
        {gradientHeading}
      </Text>
    </VStack>
  );
};

export const CenterComponent = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CenterProps;
}) => {
  return (
    <Center
      p={5}
      borderRadius="50px"
      borderWidth={1}
      borderBottomWidth="thick"
      backdropFilter="blur(20px)"
      bgColor={useColorModeValue('whiteAlpha.900', 'gray.900')}
      _hover={{
        borderColor: 'skyblue',
      }}
      transition="border-color 0.5s"
      {...style}
    >
      {children}
    </Center>
  );
};
