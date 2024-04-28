import { Button, Image } from '@chakra-ui/react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
// import { useWeb3Modal } from '@web3modal/react';

function SwitchNetworkButton() {
  const { open, close } = useWeb3Modal();
  return (
    <Button
      leftIcon={
        <Image
          src={"./walletIcons/walletConnect.svg"}
          alt="Wallet Connect Logo"
          width={30}
        ></Image>
      }
      borderRadius="full"
      onClick={async () => {
        await open({
          view: 'Networks',
        });
      }}
    >
      Switch Network
    </Button>
  );
}

export default SwitchNetworkButton;
