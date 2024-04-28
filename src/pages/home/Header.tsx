'use client';
import { Box, Flex, Stack, VStack, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import HeaderImage from '../../components/HeaderImage';
import Particles from '../../components/Particles';
import { HeaderHeadingComponent } from './HeaderHeadingComponent/HeaderHeadingComponent';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

export const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = -(clientY / innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };
  return (
    <Flex
      w="full"
      direction="column"
      gap={[150, 100, 50, 0]}
      // overflow="hidden"
      // maxH="100vh"
      // pt={50}
      maxW={1500}
      px={5}
    >
      <Stack
        w="full"
        // minH="100vh"
        py={[50]}
        direction={['column', 'column', 'column', 'row']}
        justify="center"
        align="center"
        spacing={[20, 20, 20, 0]}
      >
        <Parallax speed={-20}>
          <Stack w="full" px={[5, 10]} minH="40vh">
            <HeaderHeadingComponent />
          </Stack>
        </Parallax>
        <MotionFlex
          w="full"
          maxW={500}
          h="max-content"
          // minW={600}
          // maxW={1200}
          // zIndex={1}
          // justifySelf="flex-end"
          // alignSelf="flex-end"
          // initial={{
          //   y: -200,
          //   x: 200,
          // }}
          animate={{
            y: [10, 0, 10],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          // boxSize={[350, 400, 500, 600]}
          // bgColor="red"
          align="flex-start"
        >
          <HeaderImage></HeaderImage>
        </MotionFlex>
      </Stack>
      {/* <Particles></Particles> */}
      {/* <ParallaxProvider>
        <Parallax speed={-30}>
          <Stack w="full" px={[5, 10]} minH="40vh">
            <HeaderHeadingComponent />
          </Stack>
        </Parallax>
      </ParallaxProvider>
      <MotionFlex
        w="full"
        minW={600}
        maxW={1200}
        // zIndex={1}
        justifySelf="flex-end"
        alignSelf="flex-end"
        initial={{
          y: -200,
          x: 200,
        }}
        animate={{
          y: [10, 0, 10],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <HeaderImage></HeaderImage>
      </MotionFlex> */}
    </Flex>
  );
};
