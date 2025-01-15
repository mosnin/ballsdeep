import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBlock } from "@/components/ui/progress-block";
import { Link } from "wouter";

export default function Home() {
  const features = [
    {
      title: "Solana Dev Boost",
      description: "Load up the Crack Pipe with $CRACK and get blazing fast smart contract solutions"
    },
    {
      title: "Token Factory",
      description: "Mainline some $CRACK to generate battle-tested token contracts instantly"
    },
    {
      title: "dApp Wizardry",
      description: "Get high on productivity with AI-powered Solana dApp development"
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Initial Hit",
      description: "Deploy core AI development features and get users hooked"
    },
    {
      phase: "Phase 2",
      title: "$CRACK Token",
      description: "Launch the most addictive utility token on Solana"
    },
    {
      phase: "Phase 3",
      title: "Premium Stash",
      description: "Roll out exclusive features for heavy $CRACK holders"
    },
    {
      phase: "Phase 4",
      title: "Pure Uncut",
      description: "Transition to fully autonomous AI-driven development"
    }
  ];

  const progress = [
    {
      title: "Smart Contract Factory",
      value: 3,
      maxValue: 5,
      status: "completed" as const
    },
    {
      title: "Token Generation",
      value: 2,
      maxValue: 4,
      status: "pending" as const
    },
    {
      title: "dApp Templates",
      value: 0,
      maxValue: 3,
      status: "locked" as const
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 font-mono">
        <div className="inline-block px-4 py-1 mb-4 text-sm border border-primary/20 rounded bg-primary/5 text-primary animate-pulse">
          {'>'} loading_crack_pipe.exe v0.1.0
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          ./cracked.dev
        </h1>
        <p className="text-lg mb-8 text-muted-foreground font-mono">
          <span className="text-primary">$</span> Your AI-powered coding companion. Load up some $CRACK and let's build
        </p>
        <Link href="/chat">
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-mono">
            {'>'} LOAD_CRACK_PIPE.exe
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {features.map((feature, i) => (
          <Card key={i} className="border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl font-mono">
                <span className="text-primary">$</span> {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-mono">
                <span className="text-primary/60">&gt;</span> {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Progress Section */}
      <section className="mb-16">
        <div className="text-center mb-8 font-mono">
          <div className="inline-block px-4 py-1 mb-4 text-sm border border-primary/20 rounded bg-primary/5">
            <span className="text-primary">$</span> cat development_high.txt
          </div>
          <h2 className="text-3xl font-bold">Current Stash</h2>
        </div>
        <Card className="border border-primary/20 bg-card/50 backdrop-blur">
          <CardContent className="p-8 space-y-6">
            {progress.map((item, i) => (
              <ProgressBlock
                key={i}
                title={item.title}
                value={item.value}
                maxValue={item.maxValue}
                status={item.status}
              />
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Roadmap Section */}
      <section className="mb-16">
        <div className="text-center mb-8 font-mono">
          <div className="inline-block px-4 py-1 mb-4 text-sm border border-primary/20 rounded bg-primary/5">
            <span className="text-primary">$</span> cat roadmap.txt
          </div>
          <h2 className="text-3xl font-bold">The Master Plan</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <Card key={i} className="border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg font-mono">
                  <span className="text-primary">&gt;</span> {phase.phase} - {phase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-mono">
                  <span className="text-primary/60">$</span> {phase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="text-center mb-16">
        <div className="inline-block px-4 py-1 mb-4 text-sm border border-primary/20 rounded bg-primary/5 font-mono">
          <span className="text-primary">$</span> ./join_crack_house.sh
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">
                <span className="text-primary">&gt;</span> Join the Crack House
              </h2>
              <p className="text-muted-foreground mb-6 font-mono">
                <span className="text-primary/60">$</span> Get addicted to building the future of Solana. Load up your pipe with $CRACK tokens and start coding like a beast.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://x.com/wasabi_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors font-mono"
                >
                  <span className="text-primary">$</span> Follow Updates
                </a>
                <Link href="/chat">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors font-mono cursor-pointer">
                    <span className="text-primary">&gt;</span> Start Coding
                  </span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}