import { useState, useEffect } from 'react';
import { Card } from '../components/common';

interface ChatMessage {
  _id?: string;
  userQuestion: string;
  botResponse: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

export default function Admin() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/getChatMessages?key=${adminKey}`);

      if (!response.ok) {
        throw new Error('Invalid admin key');
      }

      const data = await response.json();
      setMessages(data.messages || []);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white p-8">
        <div className="max-w-md mx-auto mt-20">
          <Card className="bg-white shadow-lg">
            <h1 className="text-3xl font-bold text-pink-600 mb-6">Admin Panel</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Key
                </label>
                <input
                  type="password"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  placeholder="Enter admin key"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Login'}
              </button>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600">Chatbot Messages</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <p className="text-gray-700">
            Total Messages: <span className="font-bold text-pink-600">{messages.length}</span>
          </p>
        </div>

        <div className="space-y-6">
          {messages.length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-gray-500 text-lg">No messages yet</p>
            </Card>
          ) : (
            messages.map((msg, index) => (
              <Card key={msg._id || index} className="hover-lift">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-500">
                    {new Date(msg.timestamp).toLocaleString()}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">❓ User Question:</h3>
                  <p className="text-gray-800 bg-gray-50 p-3 rounded">{msg.userQuestion}</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">💬 Bot Response:</h3>
                  <p className="text-gray-800 bg-pink-50 p-3 rounded">{msg.botResponse}</p>
                </div>

                {msg.ip && (
                  <p className="text-xs text-gray-500">IP: {msg.ip}</p>
                )}
              </Card>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const json = JSON.stringify(messages, null, 2);
              const blob = new Blob([json], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `messages-${new Date().toISOString()}.json`;
              a.click();
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Download as JSON
          </button>
        </div>
      </div>
    </div>
  );
}
