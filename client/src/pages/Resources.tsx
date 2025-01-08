import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Module {
  title: string;
  topics: string[];
  status?: "locked" | "in-progress" | "completed";
}

export default function Resources() {
  const modules: Module[] = [
    {
      title: "1. Blockchain Basics",
      topics: [
        "Understanding blockchain technology",
        "Digital wallets",
        "Transaction mechanics",
        "Consensus mechanisms"
      ],
      status: "completed"
    },
    {
      title: "2. Understanding Solana",
      topics: [
        "Proof-of-stake mechanism",
        "Scalability features",
        "Speed advantages",
        "Network architecture"
      ],
      status: "in-progress"
    },
    {
      title: "3. Wallet Setup",
      topics: [
        "Creating a Solana wallet",
        "Phantom wallet setup",
        "Solflare installation",
        "Funding your wallet"
      ],
      status: "in-progress"
    },
    {
      title: "4. Solscan Explorer",
      topics: [
        "Navigating Solscan interface",
        "Tracking transactions",
        "Token analytics",
        "Network statistics"
      ]
    },
    {
      title: "5. SPL Tokens",
      topics: [
        "SPL token standard",
        "Differences from native SOL",
        "Token creation process",
        "Token management"
      ]
    },
    {
      title: "6. Meme Coins",
      topics: [
        "Popular Solana meme coins",
        "Community evaluation",
        "Use case analysis",
        "Risk assessment"
      ]
    },
    {
      title: "7. Community Engagement",
      topics: [
        "Discord communities",
        "Twitter/X ecosystem",
        "Community guidelines",
        "Network building"
      ]
    },
    {
      title: "8. DEX Trading",
      topics: [
        "Using Raydium DEX",
        "Orca trading interface",
        "Liquidity pools",
        "Swap mechanics"
      ]
    },
    {
      title: "9. Solana dApps",
      topics: [
        "Popular dApp ecosystem",
        "Wallet connections",
        "Transaction approval",
        "dApp interactions"
      ]
    },
    {
      title: "10. Security",
      topics: [
        "Wallet security best practices",
        "Scam prevention",
        "Phishing awareness",
        "Safe trading habits"
      ]
    },
    {
      title: "11. Tokenomics",
      topics: [
        "Supply mechanics",
        "Demand factors",
        "Utility analysis",
        "Burn mechanisms"
      ]
    },
    {
      title: "12. Market Intelligence",
      topics: [
        "News tracking",
        "Trend analysis",
        "Market indicators",
        "Community signals"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-primary">$</span> Solana Crash Course
        </h1>
        <p className="text-lg text-muted-foreground font-mono">
          Your comprehensive guide to the Solana ecosystem
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, i) => (
          <Card 
            key={i}
            className={`
              border border-primary/20 
              bg-card/50 backdrop-blur 
              hover:border-primary/40 
              transition-colors
              ${module.status === 'locked' ? 'opacity-50' : ''}
            `}
          >
            <CardHeader>
              <CardTitle className="text-lg font-mono flex items-center gap-2">
                <span className="text-primary">$</span>
                {module.title}
                {module.status === 'completed' && (
                  <span className="px-1.5 py-0.5 text-xs bg-primary/20 text-primary rounded">
                    Completed
                  </span>
                )}
                {module.status === 'in-progress' && (
                  <span className="px-1.5 py-0.5 text-xs bg-primary/10 text-primary rounded animate-pulse">
                    In Progress
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {module.topics.map((topic, j) => (
                  <li key={j} className="text-sm text-muted-foreground font-mono">
                    <span className="text-primary/60">&gt;</span> {topic}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
