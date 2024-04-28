import {
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Stack
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import {
  BiLeftArrowAlt,
  BiRadioCircle,
  BiRightArrowAlt
} from 'react-icons/bi';
import Slider from 'react-slick';

export default function ReactSlickComponent({
  children,
}: {
  children: ReactNode;
}) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  return (
    <Flex
      overflow="hidden"
      w="full"
      direction="column"
      align="center"
      justify="center"
      backdropFilter="auto"
    >
      <Stack w={920} overflow="hidden" px={7} spacing={10}>
        <HStack w="full" spacing={0}>
          <Icon as={BiRadioCircle} boxSize={10}></Icon>
          <Divider />
          <Icon as={BiRadioCircle} boxSize={10}></Icon>
          <Divider />
          <Icon as={BiRadioCircle} boxSize={10}></Icon>
        </HStack>

        {/* <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
        <Slider
          dots={true}
          slidesToShow={3}
          ref={(slider: any) => setSlider(slider)}
          slidesToScroll={1}
          arrows={false}
          className="center"
          centerMode={true}
          centerPadding="-10px"
          swipeToSlide={true}
        >
          {children}
        </Slider>
      </Stack>
      <Center w="full" pt={10} maxW="5xl">
        {/* Left Button Icon */}
        <IconButton
          aria-label="left-arrow"
          bgColor="orange.500"
          colorScheme="orange"
          borderRadius="full"
          transform={'translate(0%, -50%)'}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Button Icon */}
        <Spacer />
        <IconButton
          aria-label="right-arrow"
          bgColor="orange.500"
          colorScheme="orange"
          borderRadius="full"
          transform={'translate(0%, -50%)'}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
      </Center>
    </Flex>
  );
}
