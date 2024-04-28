import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { projectName } from '../../../constants/SupportedNetworkInfo';

export const HeaderHeadingComponent = () => {
  const mainHeading = `POWERFUL CRYPTO REWARD NETWORK`;
  return (
    <Stack spacing={5} maxW="3xl">
      <Text
        // textAlign="center"
        fontSize={['5xl', '6xl', '7xl']}
        fontWeight={900}
        fontFamily="heading"
        lineHeight={1}
        color={useColorModeValue('twitter.500', 'twitter.400')}
        bgGradient="linear(to-r, twitter.500, yellow.500, pink.500)"
        bgClip="text"
      >
        {mainHeading}
      </Text>
      <Heading size="lg" lineHeight={1.2} maxW="2xl" fontWeight={100}>
        A fully #decentralised protocol that distributes rewards for joining the{' '}
        <Heading as="span" color="pink.500">
          {projectName}
        </Heading>
      </Heading>
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
          ENTER THE APP
        </Button>
      </Link>
    </Stack>
  );
};
