import { useGetUserTeam } from '../../../hooks/ReferralHooks';
import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import UserTeamTableComponent from './UserTeamTableComponent';

function UserTeamTable({ userAddress }: { userAddress: `0x${string}` }) {
  const userTeamObject = useGetUserTeam(userAddress);
  const userTeamCount = userTeamObject?.data?.teamCount;
  const userTeamAddress = userTeamObject?.data?.team();

  return (
    <TableContainer
      w="full"
      bgColor={useColorModeValue('white', 'gray.900')}
      borderRadius="50px"
      minH={150}
    >
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Level</Th>
            <Th>Address</Th>
            <Th isNumeric>Referred By</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userTeamObject?.data?.teamCount! > 0 ? (
            userTeamAddress?.map((TypeTeamStruct, key: number) => {
              return (
                <UserTeamTableComponent
                  key={key}
                  level={Number(TypeTeamStruct?.level)}
                  userAddress={TypeTeamStruct?.teamMember}
                ></UserTeamTableComponent>
              );
            })
          ) : (
            <Heading size="sm" color="red">
              No team
            </Heading>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default UserTeamTable;
