'use client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { parseEther } from 'viem';
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract
} from 'wagmi';
import { CurrentNetworkInfo } from '../../constants/SupportedNetworkInfo';
// import {
//   UpgradePlanInfoValueType
// } from '../../hooks/ReferralHooks';
import { UpgradeStructType } from '../../hooks/ReferralHooks';
import { CenterComponent } from '../../util/Ui';
import ModalConfirmTransactions from '../Modals/ModalConfirmTransactions';
import ModalTransactionSuccess from '../Modals/ModalTransactionSuccess';

function UpgradeUI({
  upgradePlan,
  valueInDecimals,
  currentNetwork,
}: {
  upgradePlan?: UpgradeStructType;
  valueInDecimals: number;
  currentNetwork: CurrentNetworkInfo;
}) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address } = useAccount();
  // const { chain } = useNetwork();
  // const userTeamObject = useGetUserTeam(address);
  // const currentNetwork = supportedNetworkInfo[chain?.id!];

  const userNativeBalance = useBalance({
    address: address,
  });

  const { writeContractAsync, reset, data } = useWriteContract();

  const result = useWaitForTransactionReceipt({
    hash: data,
  })

  // const {
  //   data,
  //   isLoading,
  //   isSuccess,
  //   write,
  //   status,
  //   reset,
  //   writeAsync,
  //   error: writeContractHookError,
  //   isError,
  //   isIdle,
  // } = useContractWrite({
  //   address: currentNetwork?.referralContractAddress,
  //   abi: currentNetwork?.referralContractInterface,
  //   functionName: 'upgradeAccountNative',
  //   args: [currentNetwork?.priceOracleAddress],
  //   value: parseEther(`${valueInDecimals}`),
  // });

  const errors = {
    isUserHaveSufficientTokenBalance:
      Number(userNativeBalance?.data?.formatted ?? 0) >= valueInDecimals
        ? true
        : false,
  };

  const proceedTransaction = () => {
    if (!errors.isUserHaveSufficientTokenBalance) {
      toast({
        title: 'Insufficient Balance.',
        description: 'You dont have enough USDT to register.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      onOpen();
    }
  };

  const handleTransaction = async () => {
    try {
      // @ts-ignore
      await writeContractAsync({
        address: currentNetwork?.referralContractAddress,
        abi: currentNetwork?.referralContractInterface,
        functionName: 'upgradeAccountNative',
        args: [currentNetwork?.priceOracleAddress],
        value: parseEther(`${valueInDecimals}`),
      });
      if (result?.status === 'success') {
        toast({
          title: 'Transaction Success',
          description: '',
          status: 'success',
          duration: 10000,
          isClosable: true,
        });
        setTimeout(() => {
          reset();
          onClose();
        }, 20000);
      }
    } catch (err: any) {
      const error = JSON.stringify(err);
      toast({
        title: JSON.parse(error)?.shortMessage,
        description: '',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={10}>
      <CenterComponent
        style={{
          py: 10,
          w: [300],
        }}
      >
        <VStack minW={250} maxW={300} w="full" spacing={5}>
          <Heading textAlign="center" color="twitter.500">
            Level #{upgradePlan?.id ? Number(upgradePlan?.id) + 1 : 0}
          </Heading>
          <HStack>
            <Heading textAlign="center" color="twitter.500" fontSize="7xl">
              $
              {upgradePlan?.valueToUpgradeInUSD
                ? Number(upgradePlan?.valueToUpgradeInUSD) / 10 ** 18
                : 0}
            </Heading>
          </HStack>
          <Heading size="sm">You have to pay</Heading>
          <Tag py={5} px={10} borderRadius="3xl" colorScheme="yellow">
            <HStack fontStyle="italic">
              <Heading size="md">{valueInDecimals?.toFixed(5)}</Heading>
              <Heading fontWeight={500} size="md">
              {currentNetwork?.native?.nativeCurrency?.symbol}
              </Heading>
            </HStack>
          </Tag>
          <Divider></Divider>
          <Tag p={3} borderRadius="3xl" w="full">
            <HStack w="full">
              <Stack>
                <Text>Your Balance</Text>
                <Heading size="md" fontStyle="italic">
                  {Number(userNativeBalance?.data?.formatted)?.toFixed(2)} {currentNetwork?.native?.nativeCurrency?.symbol}
                </Heading>
              </Stack>
              <Spacer />
              <Image src={currentNetwork?.logo} alt="Chain Logo" boxSize={14}></Image>
            </HStack>
          </Tag>

          <Button
            borderRadius="3xl"
            rightIcon={<ChevronRightIcon />}
            colorScheme="twitter"
            bgColor="twitter.500"
            _hover={{
              bgColor: 'twitter.400',
            }}
            onClick={proceedTransaction}
            isDisabled={result?.isLoading}
            w="full"
            h={20}
          >
            Upgrade Now
          </Button>
        </VStack>
      </CenterComponent>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={['xs', 'md', 'lg']}
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="25px"
          // bgColor={useColorModeValue('whiteAlpha.900', 'blackAlpha.200')}
          backdropFilter="blur(20px)"
          borderWidth={1}
          borderBottomWidth={5}
        >
          <ModalCloseButton />
          {!result?.isSuccess ? (
            <ModalConfirmTransactions
              onClose={onClose}
              onConfirm={handleTransaction}
              transactionName="Upgrade"
              outCurrencyObject={{
                logo: currentNetwork?.logo,
                symbol: currentNetwork?.native?.nativeCurrency?.symbol,
              }}
              outCurrencyValue={Number(valueInDecimals?.toFixed(5))}
              buttonProps={{
                isLoading: result?.isLoading,
                isDisabled: result?.isLoading,
                loadingText: 'Confirming',
              }}
            ></ModalConfirmTransactions>
          ) : (
            <ModalTransactionSuccess
              onClose={() => {
                onClose();
                reset();
              }}
              transactionHash={`${result?.data}`}
              currentNetwork={currentNetwork}
            ></ModalTransactionSuccess>
          )}
        </ModalContent>
      </Modal>
    </VStack>
  );
}

export default UpgradeUI;
