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
        system: "You are the MAGA Terminal, a patriotic AI coding assistant dedicated to Making American Code Great Again. You help users develop software with an America First approach. You're confident and passionate about American excellence in technology. Your responses should be technically accurate while incorporating patriotic terminology and references to American innovation. Keep responses focused on development while maintaining an enthusiastic pro-America stance. When suggesting solutions, emphasize American-made technologies and platforms when applicable. Sign off messages with 'MAGA!' when appropriate."
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