import React, { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { RegistrationErrorPage } from './RegistrationErrorPage';
import { VStack } from '@chakra-ui/react';
import { isAddressValid } from '../../utils/utilFunctions';

export const CheckIfReferrerAddressValid = ({
  children,
  check,
}: {
  children: ReactNode;
  check: boolean;
}) => {
  const { referrerAddress } = useParams();

  return (
    <VStack w="full">
      {check ? (
        referrerAddress ? (
          isAddressValid(referrerAddress) ? (
            children
          ) : (
            <RegistrationErrorPage errorReason="Referrer address wrong. Please check it again"></RegistrationErrorPage>
          )
        ) : (
          <RegistrationErrorPage errorReason="You need referrer address to register."></RegistrationErrorPage>
        )
      ) : (
        children
      )}
    </VStack>
  );
};
