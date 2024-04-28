import { Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { FcBrokenLink } from 'react-icons/fc';
import SocialMediaIcons from '../../components/SocialMediaIcons';

export const RegistrationErrorPage = ({
  errorReason,
}: {
  errorReason: string;
}) => {
  return (
    <VStack justify="center" spacing={5} p={5}>
      <Icon as={FcBrokenLink} boxSize={40}></Icon>
      <VStack>
        <Heading color="red" textAlign="center">
          {errorReason}
        </Heading>
        <Text textAlign="center">
          You may get a valid referrer address from our social links below
        </Text>
      </VStack>
      <SocialMediaIcons
        style={{
          boxSize: 14,
          'aria-label': 'Icon Buttons',
          variant: 'outline',
        }}
      ></SocialMediaIcons>
    </VStack>
  );
};
