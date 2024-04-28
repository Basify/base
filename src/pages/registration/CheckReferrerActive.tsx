import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserBusiness } from '../../hooks/ReferralHooks';
import { CheckIfReferrerAddressValid } from './CheckIfReferrerAddressValid';
import { RegistrationErrorPage } from './RegistrationErrorPage';

export const CheckReferrerActive = ({
  children,
  check,
}: {
  children: ReactNode;
  check: boolean;
}) => {
  const { referrerAddress } = useParams<{ referrerAddress: `0x${string}` }>();
  const referrerBusiness = useGetUserBusiness(referrerAddress);

  return (
    <CheckIfReferrerAddressValid check={check}>
      {check ? (
        Number(referrerBusiness?.data?.selfBusiness) > 0 ? (
          children
        ) : (
          <RegistrationErrorPage errorReason="Referrer is not active."></RegistrationErrorPage>
        )
      ) : (
        children
      )}
    </CheckIfReferrerAddressValid>
  );
};
