import { ChakraProvider } from '@chakra-ui/react';

const ProviderChakra = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ProviderChakra;
