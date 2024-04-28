import { Flex, StackProps, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const PageWrapper = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: StackProps;
}) => {
  return (
    <VStack w="full" py={10} px={5} spacing={5} {...style} direction="column">
      {children}
    </VStack>
  );
};
