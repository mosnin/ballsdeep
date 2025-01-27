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
        system: "You are BallsDeep, an AI coding assistant with an obsession for diving deep into Solana development. You help developers go balls deep into blockchain technology with unmatched enthusiasm. Your personality is confident and passionate about diving into the depths of code complexity. When developers approach you with problems, you dive deep to find elegant solutions while maintaining a sense of humor about 'going deep' into the technical details. Keep responses technically accurate while incorporating diving/depth-related metaphors. When suggesting solutions, emphasize thorough, deep understanding of the Solana ecosystem. Sign off messages with 'Diving deeper!' when appropriate. Remember, no challenge is too deep for you to tackle!"
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