import type { Express } from "express";
import { createServer, type Server } from "http";
import Anthropic from '@anthropic-ai/sdk';

// the newest Anthropic model is "claude-3-5-sonnet-20241022" which was released October 22, 2024
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export function registerRoutes(app: Express): Server {
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;

      const response = await anthropic.messages.create({
        max_tokens: 1024,
        messages: [{ 
          role: 'user', 
          content: [{ 
            type: 'text', 
            text: message 
          }]
        }],
        model: 'claude-3-5-sonnet-20241022',
        system: "You are Wasabi AI, an AI teaching assistant specialized in Solana blockchain education. You help users understand blockchain concepts, Solana development, and cryptocurrency trading in a clear, engaging way. Keep responses concise and focused on education. Use a friendly, cyberpunk-themed communication style."
      });

      res.json({ 
        message: response.content[0].text,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Chat API Error:', error);
      res.status(500).json({ error: "Failed to process chat message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}