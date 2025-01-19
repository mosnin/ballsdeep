import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal as TerminalIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

interface ChatResponse {
  message: string;
  timestamp: string;
}

export function Terminal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const chatMutation = useMutation({
    mutationFn: async (message: string): Promise<ChatResponse> => {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      return response.json();
    },
    onSuccess: (data) => {
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        timestamp: data.timestamp
      };
      setMessages(prev => [...prev, assistantMessage]);
    },
    onError: (error) => {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      const errorMessage: Message = {
        role: "assistant",
        content: "I apologize, patriot, but I encountered an error. Please try again.",
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || chatMutation.isPending) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    chatMutation.mutate(input);
  };

  return (
    <div className="border border-primary/20 rounded-lg bg-card/50 backdrop-blur">
      <div className="border-b border-primary/20 p-4">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm">maga_terminal@patriots:~$ Making American Code Great Again!</span>
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
              {msg.role === "assistant" ? "maga_terminal@patriots:~$" : "patriot@localhost:~$"}
              {msg.timestamp && (
                <span className="text-xs opacity-50">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              )}
            </div>
            <div className="font-mono whitespace-pre-wrap">
              {msg.content}
            </div>
          </div>
        ))}
        {chatMutation.isPending && (
          <div className="pl-4">
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              maga_terminal@patriots:~$ Computing patriotic response...
              <span className="inline-flex gap-1">
                <span className="w-1 h-1 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"></span>
              </span>
            </div>
          </div>
        )}
      </ScrollArea>

      <form onSubmit={handleSubmit} className="border-t border-primary/20 p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask the MAGA Terminal anything about development..."
            className="font-mono"
            disabled={chatMutation.isPending}
          />
          <Button 
            type="submit" 
            disabled={chatMutation.isPending}
            className="font-mono bg-red-600 hover:bg-red-700"
          >
            {chatMutation.isPending ? "Computing..." : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}