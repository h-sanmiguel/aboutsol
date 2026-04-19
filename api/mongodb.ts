import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(mongoUri);

  await client.connect();
  const db = client.db('aboutsol');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export interface ChatMessage {
  _id?: string;
  userQuestion: string;
  botResponse: string;
  timestamp: Date;
  userAgent?: string;
  ip?: string;
}
