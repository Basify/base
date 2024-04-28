import {
  Center,
  Icon,
  Stack,
  StackProps,
  Text,
  Tooltip
} from '@chakra-ui/react';
import { FaRoad } from 'react-icons/fa';
import {
  FcApprove,
  FcDoughnutChart,
  FcGoodDecision
} from 'react-icons/fc';
import { GoHome } from 'react-icons/go';
import { Link } from 'react-router-dom';

export function NavMenuFullLinks({ style }: { style?: StackProps }) {
  const menuObject = [
    {
      icon: GoHome,
      name: 'Home',
      link: '/',
    },
    {
      icon: FcApprove,
      name: 'What is CashX',
      link: `about-us`,
    },
    {
      icon: FcDoughnutChart,
      name: 'Tokenomics',
      link: `tokenomics`,
    },
    {
      icon: FaRoad,
      name: 'Roadmap',
      link: `roadmap`,
    },
    {
      icon: FcGoodDecision,
      name: 'Register',
      link: `/registration`,
    },
  ];
  return (
    <Stack
      align="center"
      justify="center"
      direction={'row'}
      spacing={10}
      px={5}
      {...style}
    >
      {menuObject.map((menuObject, key) => {
        return (
          <Tooltip
            key={key}
            label={menuObject?.name}
            borderRadius="xl"
            placement="bottom"
            fontSize="xl"
            hasArrow
          >
            <Link to={menuObject?.link} >
              <Stack
                direction={['column', 'column', 'column', 'row']}
                align="center"
                justify="Center"
              >
                <Center
                  p={1}
                  borderWidth="thick"
                  borderRadius="full"
                  boxSize={12}
                >
                  <Icon
                    as={menuObject?.icon}
                    boxSize={7}
                    color="twitter.500"
                  ></Icon>
                </Center>
                <Text
                  fontSize="sm"
                  fontWeight={500}
                  display={['block', 'block', 'block', 'none', 'block']}
                >
                  {menuObject?.name}
                </Text>
              </Stack>
            </Link>
          </Tooltip>
        );
      })}
    </Stack>
  );
}
