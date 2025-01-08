import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';

export const WalletButton: FC = () => {
  const { publicKey, connected, connecting, connect, disconnect } = useWallet();

  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <Button 
      variant="outline" 
      onClick={handleClick}
      disabled={connecting}
      className="font-mono"
    >
      {connecting ? (
        "Connecting..."
      ) : connected ? (
        `${publicKey?.toString().slice(0, 4)}...${publicKey?.toString().slice(-4)}`
      ) : (
        "Connect Wallet"
      )}
    </Button>
  );
};