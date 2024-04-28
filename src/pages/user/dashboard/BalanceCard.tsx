import { BalanceContainer } from '../../../components/BalanceContainer';
import { CardContainer } from '../../../components/CardContainer';
import {
  AddressZero,
  supportedNetworkInfo,
} from '../../../constants/SupportedNetworkInfo';
import { IoIosWallet } from 'react-icons/io';
import { useBalance, useChainId } from 'wagmi';

export default function BalanceCard({
  userAddress,
}: {
  userAddress: `0x${string}`;
}) {
  const chain = useChainId()
  // const { chain } = useNetwork();
  const currentNetwork = supportedNetworkInfo[chain];
  const { data: userNativeBalance } = useBalance({
    address: userAddress ?? AddressZero,
  });

  const useValueObject = [
    {
      name: `${userNativeBalance?.symbol} Balance`,
      value: Number(Number(userNativeBalance?.formatted).toFixed(3)),
      symbol: userNativeBalance?.symbol,
      showIcon: false,
      icons: [currentNetwork?.logo],
    },
  ];
  return (
    <CardContainer heading="Balances" icon={IoIosWallet}>
      {useValueObject.map((valueObject, key) => {
        return (
          <BalanceContainer
            heading={valueObject?.name}
            value={valueObject?.value}
            key={key}
            currencySymbol={valueObject.symbol}
            icons={valueObject.icons}
          ></BalanceContainer>
        );
      })}
    </CardContainer>
  );
}
