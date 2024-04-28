import { FcScatterPlot } from 'react-icons/fc';
import { BalanceContainer } from '../../../components/BalanceContainer';
import { CardContainer } from '../../../components/CardContainer';
import { useGetUserRewards } from '../../../hooks/ReferralHooks';
import { weiToDecimals } from '../../../utils/utilFunctions';

export default function RewardsCard({
  userAddress,
}: {
  userAddress: `0x${string}`;
}) {
  const userRewardsObject = useGetUserRewards(userAddress);

  const userValueObject = [
    {
      name: 'Referral Rewards',
      value: weiToDecimals(userRewardsObject?.data?.referralRewardInUSD) ?? 0,
    },
    {
      name: 'Weekly Rewards',
      value: Number(userRewardsObject?.data?.weeklyRewardInUSD) ?? 0,
    },
    {
      name: 'Upgrade Rewards',
      value: Number(userRewardsObject?.data?.upgradeRewardsInUSD) ?? 0,
    },
  ];

  return (
    <CardContainer heading="Rewards" icon={FcScatterPlot}>
      {userValueObject?.map((valueObject, key) => {
        return (
          <BalanceContainer
            key={key}
            heading={valueObject?.name}
            value={valueObject?.value}
          ></BalanceContainer>
        );
      })}
    </CardContainer>
  );
}
