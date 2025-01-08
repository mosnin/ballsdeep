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
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Meet Shevoki
        </h1>
        <p className="text-lg mb-8 text-muted-foreground">
          Your AI companion for navigating the Solana ecosystem
        </p>
        <Link href="/chat">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Learning
          </Button>
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {features.map((feature, i) => (
          <Card key={i} className="border border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Roadmap</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <Card key={i} className="border border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">
                  <span className="text-primary">{phase.phase}</span> - {phase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
