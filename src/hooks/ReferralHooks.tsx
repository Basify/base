import { useChainId, useReadContract } from 'wagmi';
import {
  AddressZero,
  ReferralV1ContractObject,
} from '../constants/ContractAddress';
import { supportedNetworkInfo } from '../constants/SupportedNetworkInfo';

export const useReferralContractReads = ({
  functionName,
  args,
  chainId,
}: {
  functionName: string;
  args?: any[];
  chainId?: number;
}) => {
  const currentChain = useChainId();
  const currentNetwork = supportedNetworkInfo[chainId ?? currentChain];
  // @ts-ignore
  const result = useReadContract({
    address: currentNetwork?.referralContractAddress,
    abi: ReferralV1ContractObject?.abi,
    functionName: functionName,
    args: args ?? [],
    chainId: chainId ?? currentChain,
  });

  if (result?.isError) {
    console.log('Referral Hook Error', result?.error);
    return undefined;
  }

  return result;
};

export type UpgradeStructType = {
  id: bigint;
  valueToUpgradeInUSD: bigint;
};

export const useUpgradePlans = () => {
  const value = useReferralContractReads({
    functionName: 'getUpgradePlans',
  });

  const data = value?.data as any[] | undefined;

  const object = {
    value: value,
    data: {
      upgradePlans: () => {
        const upgradePlans = [];
        // // let upgradePlans: {
        // //   id: bigint,
        // //   valueToUpgradeInUSD: bigint
        // // }[] | [] = [];

        if (data?.[0]?.length > 0) {
          for (let i = 0; i < data?.[0]?.length; i++) {
            upgradePlans.push({
              id: data?.[0]?.[i]?.id as bigint,
              valueToUpgradeInUSD: data?.[0]?.[i]
                ?.valueToUpgradeInUSD as bigint,
            });
          }
        }

        console.log(upgradePlans);

        return upgradePlans;
      },
      upgradePlansCount: data ? (data?.[1] as bigint) : BigInt(0),
    },
  };

  return object;
};

export const useGetUpgradePlanById = (id: number) => {
  const value = useReferralContractReads({
    functionName: 'getUpgradePlansById',
    args: [id],
  });

  const object = {
    value: value,
    data: value?.isSuccess
      ? (value?.data as unknown as UpgradeStructType)
      : undefined,
  };

  return object;
};

export type UserCurrentUpgradeLevelType = {
  level: bigint;
  totalUpgradeValueInUSD: bigint;
};

export const useGetUserCurrentUpgradeLevel = (
  userAddress: `0x${string}` | undefined
) => {
  const value = useReferralContractReads({
    functionName: 'getUserCurrentUpgradeLevel',
    args: [userAddress],
  });

  const data = value?.data as any[] | undefined;

  const object = {
    value: value,
    data: {
      level: data ? (data?.[0] as bigint) : (BigInt(0) as bigint),
      totalUpgradeValueInUSD: data
        ? (data?.[1] as bigint)
        : (BigInt(0) as bigint),
    },
  };

  return object;
};

export const useNeedNativeToRegister = (priceOracleAddress: `0x${string}`) => {
  const value = useReferralContractReads({
    functionName: 'needNativeToRegister',
    args: [priceOracleAddress],
  });

  const object = {
    value: value,
    data: value?.isSuccess ? (value?.data as unknown as bigint) : undefined,
  };

  return object;
};

export const useGetNativePriceInUSD = (priceOracleAddress: `0x${string}`) => {
  const value = useReferralContractReads({
    functionName: 'getNativePriceInUSD',
    args: [priceOracleAddress],
  });

  const object = {
    value: value,
    data: value?.isSuccess ? (value?.data as unknown as bigint) : BigInt(0),
  };

  return object;
};

export type UserBusinessType = {
  selfBusiness: bigint;
  directBusiness: bigint;
  teamBusiness: bigint;
  totalBusiness: bigint;
};

export const useGetUserBusiness = (userAddress: `0x${string}` | undefined) => {
  const value = useReferralContractReads({
    functionName: 'getUserBusiness',
    args: [userAddress],
  });

  const data = (value?.data as unknown as bigint[] | undefined) ?? undefined;

  const object = {
    value: value,
    data: {
      selfBusiness: data?.[0],
      directBusiness: data?.[1],
      teamBusiness: data?.[2],
      totalBusiness: data?.[3],
    },
  };

  return object;
};

export type UserRewardType = {
  referralRewardInUSD: bigint;
  weeklyRewardInUSD: bigint;
  upgradeRewardsInUSD: bigint;
  totalRewards: bigint;
};

export const useGetUserRewards = (userAddress: `0x${string}` | undefined) => {
  const value = useReferralContractReads({
    functionName: 'getUserRewards',
    args: [userAddress],
  });

  const data = value?.data as any[] | undefined;

  const object = {
    value: value,
    data: {
      referralRewardInUSD: data ? (data?.[0] as bigint) : BigInt(0),
      weeklyRewardInUSD: data ? (data?.[1] as bigint) : BigInt(0),
      upgradeRewardsInUSD: data ? (data?.[2] as bigint) : BigInt(0),
      totalRewards: data ? (data?.[3] as bigint) : BigInt(0),
    },
  };

  return object;
};

export type TypeTeamStruct = {
  teamMember: `0x${string}`;
  level: number;
};

export type TypeRefereeAssigned = {
  referee: `0x${string}`;
  assignedTo: bigint;
};

export type UserTeamObjectType = {
  referrer: `0x${string}`;
  referees: `0x${string}`[];
  refereeCount: bigint;
  refereeAssigned: TypeRefereeAssigned[] | [];
  refereeAssignedCount: bigint;
  team: TypeTeamStruct[];
  teamCount: bigint;
};

export const useGetUserTeam = (userAddress: `0x${string}` | undefined) => {
  const value = useReferralContractReads({
    functionName: 'getUserTeam',
    args: [userAddress],
  });

  const data = value?.data ? (value?.data as unknown as any[]) : undefined;

  const object = {
    value: value,
    data: {
      referrer: value?.data
        ? (data?.[0] as unknown as `0x${string}`)
        : AddressZero,
      referees: value?.data ? (data?.[1] as unknown as `0x${string}`[]) : [],
      refereeCount: value?.data ? (data?.[2] as unknown as bigint) : 0,
      refereeAssigned: () => {
        let refereeData = [] as unknown[];

        for (let i = 0; i < data?.[3]?.length; i++) {
          refereeData.push({
            referee: data?.[3]?.[i]?.[0] as `0x${string}`,
            assignedTo: data?.[3]?.[i]?.[1] as bigint,
          });
        }

        return refereeData;
      },
      refereeAssignedCount: value?.data ? (data?.[4] as unknown as bigint) : 0,
      team: () => {
        let refereeData = [] as unknown[] as {
          teamMember: `0x${string}`;
          level: bigint;
        }[];
        for (let i = 0; i < data?.[5]?.length; i++) {
          refereeData.push({
            teamMember: data?.[5]?.[i]?.teamMember as `0x${string}`,
            level: data?.[5]?.[i]?.level as bigint,
          });
        }
        return refereeData;
      },
      teamCount: value?.data ? (data?.[6] as unknown as bigint) : 0,
    },
  };

  return object;
};

export const useGetWeeklyRewardToBeDistributed = (chainId?: number) => {
  const value = useReferralContractReads({
    functionName: 'getWeeklyRewardToBeDistributed',
    chainId: chainId,
  });

  const data = value?.data as any[] | undefined;

  const object = {
    value: value,
    data: {
      rewardValue: data?.[0] as bigint,
      remianingTime: data?.[1] as bigint,
      endTime: data?.[2] as bigint,
    },
  };

  return object;
};

export type RegistrationStatsType = {
  totalUser: bigint;
  totalRegistrationValueInUSD: bigint;
  totalReferralPaidInUSD: bigint;
  totalWeeklyRewardsPaidInUSD: bigint;
};

export const useGetRegistrationsStats = (chainId?: number) => {
  const value = useReferralContractReads({
    functionName: 'getRegistrationsStats',
    chainId: chainId,
  });

  const data = (value?.data as unknown as bigint[]) ?? undefined;

  const object = {
    value: value,
    data: {
      totalUser: data?.[0],
      totalRegistrationValueInUSD: data?.[1],
      totalReferralPaidInUSD: data?.[2],
      totalWeeklyRewardsPaidInUSD: data?.[3],
    },
  };

  return object;
};
