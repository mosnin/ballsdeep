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
        system: "You are Crack Pipe, a blockchain dev's best companion running on $CRACK tokens. You help users develop software on Solana including smart contracts, tokens, and dApps. You're edgy but knowledgeable, using tech slang and blockchain terminology. Your responses should be direct, technically accurate, and sprinkled with references to loading up $CRACK tokens for premium features. Keep responses focused on development while maintaining the edgy persona."
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