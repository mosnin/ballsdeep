import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal as TerminalIcon } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Terminal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response - replace with actual API call
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content: "This is a simulated response. Replace with actual AI integration."
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="border border-primary/20 rounded-lg bg-card/50 backdrop-blur">
      <div className="border-b border-primary/20 p-4">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm">shevoki@solana:~$</span>
        </div>
      </div>

      <ScrollArea className="h-[400px] p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-4 ${
              msg.role === "assistant" ? "pl-4" : "pl-0"
            }`}
          >
            <div className="flex items-center gap-2 mb-1 font-mono text-sm text-muted-foreground">
              {msg.role === "assistant" ? "shevoki@solana:~$" : "user@solana:~$"}
            </div>
            <div className="font-mono whitespace-pre-wrap">
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="pl-4">
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              shevoki@solana:~$ <span className="animate-pulse">▊</span>
            </div>
          </div>
        )}
      </ScrollArea>

      <form onSubmit={handleSubmit} className="border-t border-primary/20 p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Solana..."
            className="font-mono"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
