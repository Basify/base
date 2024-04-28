import { CenterComponent, HeadingComponent } from '../../../util/Ui';
import {
  Container,
  Heading,
  Icon,
  Text,
  VStack,
  Wrap,
  Image,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsBox, BsShieldCheck } from 'react-icons/bs';
import { GiCubes, GiWineGlass } from 'react-icons/gi';
import { TbUserHeart } from 'react-icons/tb';
import { PageWrapper } from '../../../util/PageWrapper';
import { FaBookOpenReader } from 'react-icons/fa6';
import { Parallax } from 'react-scroll-parallax';

const TagComponent = ({
  icon,
  iconColor,
  heading,
}: {
  icon: IconType;
  iconColor: string;
  heading: string;
}) => {
  return (
    <CenterComponent
      style={{
        minW: 200,
      }}
    >
      <VStack w="full">
        <Icon as={icon} boxSize={14} color={iconColor}></Icon>
        <Heading size="sm">{heading}</Heading>
      </VStack>
    </CenterComponent>
  );
};

const tagObjectArray = [
  {
    heading: 'Transparent',
    icon: GiWineGlass,
    iconColor: 'pink.500',
  },
  {
    heading: 'Secured',
    icon: BsShieldCheck,
    iconColor: 'orange.500',
  },
  {
    heading: 'Open Source',
    icon: FaBookOpenReader,
    iconColor: 'purple.500',
  },
  {
    heading: 'Community Driven',
    icon: TbUserHeart,
    iconColor: 'teal.500',
  },
  {
    heading: 'Fully Decentralized',
    icon: BsBox,
    iconColor: 'yellow.500',
  },
];

export const PowerOfBlockchainComponent = () => {
  return (
    <PageWrapper
      style={{
        spacing: 10,
      }}
    >
      <HeadingComponent
        heading="Build with the power of"
        gradientHeading="BLOCKCHAIN"
      ></HeadingComponent>
      {/* <Icon
        as={GiCubes}
        boxSize={[270, 300]}
        opacity={useColorModeValue(0.75, 1)}
      ></Icon> */}
      <Container>
        <Text textAlign="center">
          Every logic & reward distribution written on secure smart contracts.
          All smart contracts are verified on block explorers & open source.
        </Text>
      </Container>
      <Wrap spacing={5} align="center" justify="center">
        {tagObjectArray.map((dataObject, key) => {
          return (
            <Parallax speed={-10 + key * 5} key={key}>
              <TagComponent
                heading={dataObject?.heading}
                icon={dataObject?.icon}
                iconColor={dataObject.iconColor}
              ></TagComponent>
            </Parallax>
          );
        })}
      </Wrap>
      <Image src={'./bgBlockchain.svg'} maxW={'4xl'}></Image>
    </PageWrapper>
  );
};
