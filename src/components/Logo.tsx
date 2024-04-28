import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      {/* <Image src="/CashXLogo.svg" alt="logo" w={[100, 150]}></Image> */}
      <HStack>
        {/* <Box borderRadius="full" borderWidth="thick" boxSize={7}></Box>
        <Heading size="md">{projectName}</Heading> */}
        <Image src="/projectLogo.png" alt="logo" h={[10, 12]}></Image>
      </HStack>
    </Link>
  );
};
