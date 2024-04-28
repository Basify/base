import { FcConferenceCall } from 'react-icons/fc';
import { BalanceContainer } from '../../../components/BalanceContainer';
import { CardContainer } from '../../../components/CardContainer';
import { useGetUserTeam } from '../../../hooks/ReferralHooks';

function TeamCard({ userAddress }: { userAddress: `0x${string}` }) {
  const userTeamObject = useGetUserTeam(userAddress);
  const userValueObject = [
    {
      name: 'Direct Team',
      value: userTeamObject?.data?.refereeCount ?? 0,
    },
    {
      name: 'Team Assigned',
      value: userTeamObject?.data?.refereeAssignedCount ?? 0,
    },
    {
      name: 'Total Team',
      value: userTeamObject?.data?.teamCount ?? 0,
    },
  ];

  return (
    <CardContainer heading="Team" icon={FcConferenceCall}>
      {userValueObject.map((valueObject, key) => {
        return (
          <BalanceContainer
            heading={valueObject?.name}
            value={Number(valueObject?.value)}
            key={key}
            showIcon={false}
          ></BalanceContainer>
        );
      })}
    </CardContainer>
  );
}

export default TeamCard;
