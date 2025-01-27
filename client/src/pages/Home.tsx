import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBlock } from "@/components/ui/progress-block";
import { Link } from "wouter";
import { FaTwitter, FaTelegram } from "react-icons/fa";

export default function Home() {
  const features = [
    {
      title: "DeepSeek Integration",
      description: "Next-gen AI assistance for Solana development"
    },
    {
      title: "DeFi Power",
      description: "Build DeFi applications with unmatched depth and sophistication"
    },
    {
      title: "Full Stack Solana",
      description: "Your gateway to building advanced Solana applications"
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Initial Penetration",
      description: "Launch core DeepSeek AI development features"
    },
    {
      phase: "Phase 2",
      title: "Deep Expansion",
      description: "Scale platform capabilities and user base"
    },
    {
      phase: "Phase 3",
      title: "Maximum Depth",
      description: "Roll out premium features for power users"
    },
    {
      phase: "Phase 4",
      title: "Full Saturation",
      description: "Achieve complete AI-driven development dominance"
    }
  ];

  const progress = [
    {
      title: "DeepSeek Integration",
      value: 3,
      maxValue: 5,
      status: "completed" as const
    },
    {
      title: "Smart Contract Factory",
      value: 2,
      maxValue: 4,
      status: "pending" as const
    },
    {
      title: "DeFi Templates",
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
          {'>'} init_ballsdeep.sol
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
          BallsDeep
        </h1>
        <p className="text-lg mb-8 text-muted-foreground font-mono">
          <span className="text-primary">$</span> Going balls deep in Solana development with DeepSeek AI
        </p>
        <Link href="/chat">
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-mono">
            {'>'} START_DEEPSEEK.sol
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
            <span className="text-primary">$</span> cat depth_metrics.sol
          </div>
          <h2 className="text-3xl font-bold">Penetration Status</h2>
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
            <span className="text-primary">$</span> cat penetration_strategy.sol
          </div>
          <h2 className="text-3xl font-bold">The Deep Strategy</h2>
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
          <span className="text-primary">$</span> ./join_movement.sol
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">
                <span className="text-primary">&gt;</span> Go Deep With Us
              </h2>
              <p className="text-muted-foreground mb-6 font-mono">
                <span className="text-primary/60">$</span> Join the revolution in AI-powered Solana development. Let's go balls deep together.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://x.com/magaterminal_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors font-mono"
                >
                  <FaTwitter className="h-4 w-4" />
                  <span className="text-primary">$</span> Follow Updates
                </a>
                <a
                  href="https://t.me/magaterminal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors font-mono"
                >
                  <FaTelegram className="h-4 w-4" />
                  <span className="text-primary">$</span> Join Community
                </a>
                <Link href="/chat">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors font-mono cursor-pointer">
                    <span className="text-primary">&gt;</span> Start Building
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