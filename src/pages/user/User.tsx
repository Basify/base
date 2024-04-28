import { HStack, Hide, VStack, useColorModeValue } from '@chakra-ui/react';
import { Outlet, useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import NavUser from '../../components/Nav/NavUser/NavUser';

export default function User() {
  const { address } = useAccount();
  const { userAddress } = useParams();
  return (
    <HStack w="full" flex={1} py={100} spacing={5} px={5} align="flex-start">
      <Hide below="md">
        <VStack
          h="90vh"
          minH={600}
          w={250}
          borderWidth="0.5px"
          borderBottomWidth={5}
          borderRadius="50px"
          p={2}
          bgColor={useColorModeValue('gray.100', 'transparent')}
        >
          <NavUser userAddress={userAddress ?? address!}></NavUser>
        </VStack>
      </Hide>
      <VStack
        w="full"
        minH="80vh"
        borderWidth="0.5px"
        borderBottomWidth={5}
        borderRadius="50px"
        p={[5, 10]}
        bgColor={useColorModeValue('gray.100', 'transparent')}
      >
        <Outlet></Outlet>
      </VStack>
    </HStack>
  );
}
