import { Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import { Nav } from './components/Nav/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <Flex
    w="full"
    direction="column"
    bgColor={useColorModeValue('white', 'black')}
    // bgImage={'./appBg.png'}
    bgSize="cover"
  >
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
  </Flex>
);
