import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  const features = [
    {
      title: "Onchain Education",
      description: "Learn about Solana blockchain mechanics, smart contracts, and DeFi concepts"
    },
    {
      title: "Wallet Setup",
      description: "Step-by-step guidance for setting up and securing your Solana wallet"
    },
    {
      title: "Trade Analysis",
      description: "Get insights on Solana trading patterns and market analysis"
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "App Prototype",
      description: "Launch core chat functionality and educational features"
    },
    {
      phase: "Phase 2",
      title: "$SHEVOKI Token",
      description: "Launch governance token and establish community fund"
    },
    {
      phase: "Phase 3",
      title: "Token Gating",
      description: "Implement exclusive features for token holders"
    },
    {
      phase: "Phase 4",
      title: "Autonomous Operation",
      description: "Transition to community-driven development and revenue model"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 font-mono">
        <div className="inline-block px-4 py-1 mb-4 text-sm border border-primary/20 rounded bg-primary/5 text-primary animate-pulse">
          {'>'} initializing shevoki_ai v0.1.0
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          ./meet_shevoki.sh
        </h1>
        <p className="text-lg mb-8 text-muted-foreground font-mono">
          <span className="text-primary">$</span> Your AI companion for navigating the Solana ecosystem
        </p>
        <Link href="/chat">
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-mono">
            {'>'} START_LEARNING.exe
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

      {/* Roadmap Section */}
      <section className="mb-16">
        <div className="text-center mb-8 font-mono">
          <div className="inline-block px-4 py-1 mb-4 text-sm border border-primary/20 rounded bg-primary/5">
            <span className="text-primary">$</span> cat roadmap.txt
          </div>
          <h2 className="text-3xl font-bold">System Upgrade Path</h2>
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
    </div>
  );
}