import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBlock } from "@/components/ui/progress-block";
import { Link } from "wouter";

export default function Home() {
  const features = [
    {
      title: "America First Development",
      description: "Build great applications with patriotic AI assistance"
    },
    {
      title: "Freedom Factory",
      description: "Generate code that upholds American values and excellence"
    },
    {
      title: "Patriot Platform",
      description: "Your AI companion for making America code great again"
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Initial Deployment",
      description: "Launch core patriotic AI development features"
    },
    {
      phase: "Phase 2",
      title: "Platform Growth",
      description: "Expand capabilities for American developers"
    },
    {
      phase: "Phase 3",
      title: "Premium Features",
      description: "Roll out exclusive features for dedicated patriots"
    },
    {
      phase: "Phase 4",
      title: "Full Liberation",
      description: "Achieve complete AI-driven development freedom"
    }
  ];

  const progress = [
    {
      title: "Code Factory",
      value: 3,
      maxValue: 5,
      status: "completed" as const
    },
    {
      title: "Project Generation",
      value: 2,
      maxValue: 4,
      status: "pending" as const
    },
    {
      title: "AI Templates",
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
          {'>'} loading_maga_terminal.exe v1.0.0
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-white to-blue-600 text-transparent bg-clip-text">
          MAGA Terminal
        </h1>
        <p className="text-lg mb-8 text-muted-foreground font-mono">
          <span className="text-primary">$</span> Your patriotic AI coding companion. Let's make American code great again!
        </p>
        <Link href="/chat">
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-mono">
            {'>'} START_MAGA_TERMINAL.exe
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
            <span className="text-primary">$</span> cat platform_status.txt
          </div>
          <h2 className="text-3xl font-bold">Current Status</h2>
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
            <span className="text-primary">$</span> cat mission.txt
          </div>
          <h2 className="text-3xl font-bold">The Great Mission</h2>
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
          <span className="text-primary">$</span> ./join_patriots.sh
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">
                <span className="text-primary">&gt;</span> Join the Movement
              </h2>
              <p className="text-muted-foreground mb-6 font-mono">
                <span className="text-primary/60">$</span> Build the future of American software development. Start coding with AI that puts America first.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://x.com/maga_terminal"
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