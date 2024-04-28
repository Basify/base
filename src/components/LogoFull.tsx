import { Box, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { projectName } from '../constants/SupportedNetworkInfo';

export const LogoFull = () => {
  return (
    <Link to="/">
      <HStack spacing={2} cursor="pointer">
        {/* <Image src="/CashXLogo.svg" alt="logo" w={150}></Image> */}
        <Box borderRadius="full" borderWidth="thick" boxSize={7}></Box>
        <Heading size="md">{projectName}</Heading>
      </HStack>
    </Link>
  );
};
