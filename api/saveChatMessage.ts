import { VercelRequest, VercelResponse } from '@vercel/node';
import { connectToDatabase, ChatMessage } from './mongodb';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userQuestion, botResponse } = req.body;

    if (!userQuestion || !botResponse) {
      return res.status(400).json({ error: 'Missing userQuestion or botResponse' });
    }

    const { db } = await connectToDatabase();

    const message: ChatMessage = {
      userQuestion,
      botResponse,
      timestamp: new Date(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || 'unknown',
    };

    const result = await db.collection('messages').insertOne(message);

    return res.status(200).json({
      success: true,
      messageId: result.insertedId,
      message: 'Message saved successfully',
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({ error: 'Failed to save message' });
  }
}
