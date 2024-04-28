import { utils } from 'ethers';
import { chains } from '../providers/ProviderWeb3Modal';

export const isChainSupported = (chainId: number) => {
  let i = 0;
  for (i; i < chains.length; i++) {
    if (chains[i].id === chainId) {
      return true;
    }
  }

  return false;
};

export const shortenAddress = (
  address: `0x${string}` | undefined,
  to?: number
): string => {
  if (address) {
    const defaultFormatter = to ?? 4;
    const string1 = address?.slice(0, defaultFormatter);
    const divider = '...';
    const string2 = address.slice(
      address.length - defaultFormatter,
      address.length
    );

    return `${string1}${divider}${string2}`;
  }

  return '0x000...000';
};

export const weiToDecimals = (
  valueInWei?: bigint,
  decimalsToFormat?: number,
  maxDecimalsToDisplay?: number
): number => {
  if (valueInWei) {
    const valueInDecimals = Number(valueInWei) / 10 ** (decimalsToFormat ?? 18);
    const formattedNumber = valueInDecimals.toFixed(maxDecimalsToDisplay ?? 2);
    return Number(formattedNumber.replace(/\.?0+$/, '')); // Removes trailing zeros
  }

  return 0;
};

export const nativeToUSD = (
  nativeValueInWei: bigint | undefined,
  nativePriceInUSD: bigint | undefined
): bigint => {
  let valueInDecimals = BigInt(0);

  if (nativeValueInWei && nativePriceInUSD) {
    valueInDecimals = BigInt(
      Number(nativeValueInWei * nativePriceInUSD) / 10 ** 18
    );
  }

  return valueInDecimals;
};

// export function formatNumberWithMaxDecimals(
//   value: bigint,
//   maxDecimals?: number
// ) {
//   const formattedNumber = Number(value).toFixed(maxDecimals ?? 2);
//   return formattedNumber.replace(/\.?0+$/, ''); // Removes trailing zeros
// }

export const isAddressValid = (address: string) => {
  if (!utils.isAddress(address)) {
    return false;
  }
  return true;
};

export const sliceTransactionHash = (transactionHash: string): string => {
  const prefix = transactionHash.slice(0, 4);
  const body = '...';
  const suffix = transactionHash.slice(-4);

  return `${prefix}${body}${suffix}`;
};

export function useGetRandomColor() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
