import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Changelog() {
  const changes = [
    {
      version: "v0.1.0",
      date: "March 2024",
      changes: [
        "Initial release of Shevoki AI chatbot",
        "Basic Solana education features",
        "Cyberpunk terminal interface",
        "Mobile-responsive design"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Changelog</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        {changes.map((release, i) => (
          <Card key={i} className="border border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>{release.version}</CardTitle>
              <CardDescription>{release.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {release.changes.map((change, j) => (
                  <li key={j} className="text-muted-foreground">
                    {change}
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
