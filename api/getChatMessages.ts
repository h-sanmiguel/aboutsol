import { VercelRequest, VercelResponse } from '@vercel/node';
import { connectToDatabase } from './mongodb';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Basic security check - you should add proper authentication later
  const adminKey = req.query.key;
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { db } = await connectToDatabase();

    const messages = await db
      .collection('messages')
      .find({})
      .sort({ timestamp: -1 })
      .limit(100)
      .toArray();

    return res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error('Error retrieving messages:', error);
    return res.status(500).json({ error: 'Failed to retrieve messages' });
  }
}
