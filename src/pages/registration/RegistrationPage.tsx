import { Divider, HStack, Heading, Icon, VStack } from '@chakra-ui/react';
import { FcGoodDecision } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { useAccount, useChainId } from 'wagmi';
import RegistrationUI from '../../components/RegistrationUI/RegistrationUI';
import UpgradeUI from '../../components/UpgradeUi/UpgradeUi';
import {
  registrationAmountInDecimals,
  supportedNetworkInfo,
} from '../../constants/SupportedNetworkInfo';
import {
  UserBusinessType,
  useGetUserBusiness,
  useGetUserCurrentUpgradeLevel,
  useGetNativePriceInUSD,
  useUpgradePlans,
} from '../../hooks/ReferralHooks';
import { CheckReferrerActive } from './CheckReferrerActive';
import { weiToDecimals } from '../../utils/utilFunctions';

export default function RegistrationPage() {
  const chainId = useChainId();
  const currentNetwork = supportedNetworkInfo[chainId];
  const { address } = useAccount();
  const { referrerAddress } = useParams<{ referrerAddress: `0x${string}` }>();
  const userBusinessObject = useGetUserBusiness(address);
  const userBusiness = userBusinessObject?.data as unknown as UserBusinessType;

  const userLevelToUpgrade = useGetUserCurrentUpgradeLevel(address);
  const nativePriceInUSD = useGetNativePriceInUSD(
    currentNetwork?.priceOracleAddress!
  )?.data as unknown as bigint;
  const upgradePlansObject = useUpgradePlans();
  const upgradePlans = upgradePlansObject?.data?.upgradePlans();
  const upgradePlansCount = upgradePlansObject?.data?.upgradePlansCount;

  // const valueToRegister = nativePriceInUSD
  //   ? (50 / (Number(nativePriceInUSD) / 10 ** 18))?.toFixed(4)
  //   : 0;

  console.log(
    `weiToDecimals(
    upgradePlans[Number(userLevelToUpgrade?.data?.level) ?? 0]
      .valueToUpgradeInUSD ?? 0, 18, 7
  ),`,
    weiToDecimals(
      upgradePlans[Number(userLevelToUpgrade?.data?.level) ?? 0]
        ?.valueToUpgradeInUSD ?? 0,
      18,
      7
    )
  );

  const getValueToRegisterNativeDecimals = (
    valueToRegisterUSDDecimals: number,
    nativePriceInUSD: bigint | undefined
  ): number => {
    let valueInDecimals = 0;

    if (nativePriceInUSD) {
      valueInDecimals =
        valueToRegisterUSDDecimals / weiToDecimals(nativePriceInUSD, 18, 4);
    }

    return valueInDecimals;
  };

  return (
    <CheckReferrerActive
      check={(userBusiness?.selfBusiness ?? 0) > 0 ? false : true}
    >
      <VStack spacing={10} py={100} minH={'100vh'}>
        <VStack>
          <HStack>
            <Icon as={FcGoodDecision} boxSize={10}></Icon>
            <Heading color="orange.500">
              {Number(userBusiness.selfBusiness ?? 0) === 0
                ? 'Register'
                : 'Upgrade'}
            </Heading>
          </HStack>
          <Divider />
        </VStack>
        {Number(userBusiness.selfBusiness ?? 0) === 0 ? (
          <RegistrationUI
            referrerAddress={referrerAddress}
            valueInDecimals={getValueToRegisterNativeDecimals(
              registrationAmountInDecimals,
              nativePriceInUSD
            )}
            currentNetwork={currentNetwork}
          ></RegistrationUI>
        ) : (
          <UpgradeUI
            upgradePlan={
              upgradePlans[Number(userLevelToUpgrade?.data?.level) ?? 0]
            }
            valueInDecimals={
              upgradePlansObject?.data
                ? getValueToRegisterNativeDecimals(
                    weiToDecimals(
                      upgradePlans[Number(userLevelToUpgrade?.data?.level) ?? 0]
                        ?.valueToUpgradeInUSD ?? 0,
                      18,
                      7
                    ),
                    nativePriceInUSD
                  )
                : 0
            }
            currentNetwork={currentNetwork}
          ></UpgradeUI>
        )}
        ;
      </VStack>
    </CheckReferrerActive>
  );
}
