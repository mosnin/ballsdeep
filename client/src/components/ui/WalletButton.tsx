import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

export const WalletButton: FC = () => {
  const { publicKey, connected, connecting, disconnect, select, wallets } = useWallet();
  const { toast } = useToast();

  const handleClick = async () => {
    try {
      if (connected) {
        disconnect();
      } else {
        // If there's only one wallet (Phantom), select it directly
        const phantomWallet = wallets.find(wallet => wallet.adapter.name === 'Phantom');
        if (phantomWallet) {
          select(phantomWallet.adapter.name);
        } else {
          toast({
            title: "Wallet Error",
            description: "Please install Phantom wallet",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Connection Error",
        description: error instanceof Error ? error.message : "Failed to connect wallet",
        variant: "destructive",
      });
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