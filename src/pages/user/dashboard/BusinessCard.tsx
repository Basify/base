import { FcComboChart } from 'react-icons/fc';
import { BalanceContainer } from '../../../components/BalanceContainer';
import { CardContainer } from '../../../components/CardContainer';
import { useGetUserBusiness } from '../../../hooks/ReferralHooks';
import { weiToDecimals } from '../../../utils/utilFunctions';

function BusinessCard({ userAddress }: { userAddress: `0x${string}` }) {
  const userBusiness = useGetUserBusiness(userAddress);
  const userValueObject = [
    {
      name: 'Self Business',
      value: weiToDecimals(userBusiness?.data?.selfBusiness) ?? 0,
    },
    {
      name: 'Direct Business',
      value: weiToDecimals(userBusiness?.data?.directBusiness) ?? 0,
    },
    {
      name: 'Team Business',
      value: weiToDecimals(userBusiness?.data?.teamBusiness) ?? 0,
    },
    {
      name: 'Total Business',
      value: weiToDecimals(userBusiness?.data?.totalBusiness) ?? 0,
    },
  ];

  return (
    <CardContainer heading="Business" icon={FcComboChart}>
      {userValueObject.map((valueObject, key) => {
        return (
          <BalanceContainer
            heading={valueObject?.name}
            value={valueObject?.value}
            key={key}
          ></BalanceContainer>
        );
      })}
    </CardContainer>
  );
}

export default BusinessCard;
