import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBlock } from "@/components/ui/progress-block";
import { Link } from "wouter";
import { FaTwitter, FaTelegram } from "react-icons/fa";

export default function Home() {
  const features = [
    {
      title: "Deep Solana Integration",
      description: "Dive into the deepest parts of Solana development"
    },
    {
      title: "Balls Deep Analytics",
      description: "Get deep insights into your Solana applications"
    },
    {
      title: "Maximum Depth Tools",
      description: "Tools that go deeper than any other platform"
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Initial Thrust",
      description: "First deep dive into Solana's core features"
    },
    {
      phase: "Phase 2",
      title: "Going Deeper",
      description: "Expand deep into advanced Solana capabilities"
    },
    {
      phase: "Phase 3",
      title: "Maximum Penetration",
      description: "Achieve unprecedented depths in Solana development"
    },
    {
      phase: "Phase 4",
      title: "Deep State",
      description: "Maintain dominance at the deepest levels of Solana"
    }
  ];

  const progress = [
    {
      title: "Depth Achieved",
      value: 4,
      maxValue: 5,
      status: "completed" as const
    },
    {
      title: "Penetration Progress",
      value: 2,
      maxValue: 4,
      status: "pending" as const
    },
    {
      title: "Balls Deep Features",
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
          {'>'} going_deep_in_solana.sol
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
          BallsDeep
        </h1>
        <p className="text-lg mb-8 text-muted-foreground font-mono">
          <span className="text-primary">$</span> Going deeper than ever in Solana development
        </p>
        <Link href="/chat">
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-mono">
            {'>'} START_DIVING.sol
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
            <span className="text-primary">$</span> cat depth_report.sol
          </div>
          <h2 className="text-3xl font-bold">How Deep Are We?</h2>
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
            <span className="text-primary">$</span> cat depth_plan.sol
          </div>
          <h2 className="text-3xl font-bold">The Deep Protocol</h2>
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
          <span className="text-primary">$</span> ./go_deeper.sol
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">
                <span className="text-primary">&gt;</span> Ready to Go Deep?
              </h2>
              <p className="text-muted-foreground mb-6 font-mono">
                <span className="text-primary/60">$</span> Join us in exploring the deepest corners of Solana development. Let's dive deeper than ever before.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://x.com/soballsdeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors font-mono"
                >
                  <FaTwitter className="h-4 w-4" />
                  <span className="text-primary">$</span> Deep Updates
                </a>
                <a
                  href="https://t.me/+omtwFOy9BfViYWQx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors font-mono"
                >
                  <FaTelegram className="h-4 w-4" />
                  <span className="text-primary">$</span> Deep Community
                </a>
                <Link href="/chat">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors font-mono cursor-pointer">
                    <span className="text-primary">&gt;</span> Go Deeper
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