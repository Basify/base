import { useGetUserTeam } from '../../../hooks/ReferralHooks';
import { Tag, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { shortenAddress } from '../../../utils/utilFunctions';

function UserTeamTableComponent({
  level,
  userAddress,
}: {
  level: number;
  userAddress: `0x${string}`;
}) {
  const userTeamObject = useGetUserTeam(userAddress);
  return (
    <Tr>
      <Td>{Number(level)}</Td>
      <Td>
        <Tag size="lg" borderRadius="xl">
          {shortenAddress(userAddress)}
        </Tag>
      </Td>
      <Td isNumeric>
        <Tag size="lg" borderRadius="xl">
          {shortenAddress(userTeamObject?.data?.referrer!)}
        </Tag>
      </Td>
    </Tr>
  );
}

export default UserTeamTableComponent;
