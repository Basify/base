import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Icon,
  Tag,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsFillCalendar2HeartFill, BsFire } from 'react-icons/bs';
import { FaChartLine } from 'react-icons/fa';
import { MdGroups3 } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../../../util/PageWrapper';
import { CenterComponent, HeadingComponent } from '../../../util/Ui';
import { Parallax } from 'react-scroll-parallax';

const BoxComponent = ({
  icon,
  iconColor,
  heading,
  value,
  text,
}: {
  icon: IconType;
  iconColor: string;
  heading: string;
  value: number;
  text: string;
}) => {
  return (
    <CenterComponent
      style={{
        w: 250,
        h: 400,
      }}
    >
      <VStack w="full" spacing={5}>
        <Icon as={icon} boxSize={16} color={iconColor}></Icon>
        <Tag colorScheme="blue" fontWeight={900}>
          {heading}
        </Tag>
        <Heading color="twitter.500" size="lg" fontWeight={900}>
          {value}%
        </Heading>
        <Heading size="sm" textAlign="center" fontWeight={100}>
          {text}
        </Heading>
      </VStack>
    </CenterComponent>
  );
};

const features = [
  {
    heading: 'Earn Upto',
    icon: MdGroups3,
    iconColor: 'pink.500',
    text: 'Community Spreading Rewards.',
    value: 60,
  },
  {
    heading: 'Levels',
    icon: FaChartLine,
    iconColor: 'yellow.500',
    text: 'Full fees of upgrading value.',
    value: 100,
  },
  {
    heading: 'Liquidity Pool',
    icon: BsFire,
    iconColor: 'green.500',
    text: '5 USD to liquidity of every registration.',
    value: 20,
  },
  {
    heading: 'Weekly Rewards',
    icon: BsFillCalendar2HeartFill,
    iconColor: 'orange.500',
    text: '4% of weekly total registration valuen to a random user.',
    value: 4,
  },
];

export const PlanDiscriptionComponent = () => {
  return (
    <PageWrapper>
      <HeadingComponent
        heading="A protocol made for"
        gradientHeading="EVERYONE"
      ></HeadingComponent>
      <Wrap
        spacing={5}
        align="center"
        justify="center"
        p={5}
        borderRadius="50px"
      >
        {features.map((featuresBbject, key) => {
          return (
            <Parallax speed={-10 + key * 10} key={key}>
              <BoxComponent {...featuresBbject}></BoxComponent>
            </Parallax>
          );
        })}
      </Wrap>
      <Box maxW={500} minW={250} w="full" px={10}>
        <Link to="/registration">
          <Button
            w={[250, 300, 400]}
            h={16}
            borderRadius={20}
            rightIcon={<ChevronRightIcon />}
            zIndex={1}
            borderBottomWidth="thick"
            variant="outline"
            fontWeight={900}
            colorScheme="twitter"
          >
            PARTICIPATE NOW
          </Button>
        </Link>
      </Box>
    </PageWrapper>
  );
};
