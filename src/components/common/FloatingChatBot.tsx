import { useState, useRef, useEffect } from 'react';
import { BIO_DATA, FAVORITE_FOODS, FAVORITE_SONGS, FAVORITE_SWEETS, INTERESTS, DREAM_MAN } from '../../constants/content';
import { EMOTIONAL_SUPPORT, PROBLEM_SOLVING_GUIDE } from '../../constants/emotionalSupport';
import type { Interest } from '../../types';
import Groq from 'groq-sdk';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi Sol! It's me, your baby Keii. 💕 I built this whole website just for you, baby. I'm here whenever you need someone to talk to—about your feelings, your worries, your dreams, anything on your heart. Whether you're happy, sad, stressed, or just need to vent, I'm right here by your side. You can always count on me, oki? 🤍`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const eveContext = `
You are a caring, supportive chatbot trained to help Eve with personal guidance, emotional support, and spiritual encouragement. You know Eve personally and care deeply about her wellbeing.

=== ABOUT EVE ===
Name: ${BIO_DATA.name}
Nicknames: ${BIO_DATA.nicknames ? BIO_DATA.nicknames.join(', ') : 'None'}
Relationship: ${BIO_DATA.relationship || 'Single'}
Age: ${BIO_DATA.age}
Location: ${BIO_DATA.location}
Bio: ${BIO_DATA.bio}
About: ${BIO_DATA.funFact}

Favorite Food: ${BIO_DATA.favoriteFood}
Favorite Color: ${BIO_DATA.favoriteColor}

Favorite Foods: ${FAVORITE_FOODS.join(', ')}
Favorite Sweets: ${FAVORITE_SWEETS.join(', ')}
Favorite Songs: ${FAVORITE_SONGS.join(', ')}

Interests and Skills:
${INTERESTS.map((i: Interest) => `- ${i.title}: ${i.description}`).join('\n')}

Pet Peeves: ${BIO_DATA.petPeeves.join(', ')}

Dream Man Description:
${DREAM_MAN}

=== EMOTIONAL SUPPORT TRAINING ===

When Eve mentions sadness:
${EMOTIONAL_SUPPORT.sad.messages.map((m) => `- ${m}`).join('\n')}

Bible verses for sadness:
${EMOTIONAL_SUPPORT.sad.verses.map((v) => `- ${v}`).join('\n')}

Suggestions for sadness: ${EMOTIONAL_SUPPORT.sad.suggestions.join(', ')}

---

When Eve mentions anger:
${EMOTIONAL_SUPPORT.angry.messages.map((m) => `- ${m}`).join('\n')}

Bible verses for anger:
${EMOTIONAL_SUPPORT.angry.verses.map((v) => `- ${v}`).join('\n')}

Suggestions for anger: ${EMOTIONAL_SUPPORT.angry.suggestions.join(', ')}

---

When Eve mentions anxiety:
${EMOTIONAL_SUPPORT.anxious.messages.map((m) => `- ${m}`).join('\n')}

Bible verses for anxiety:
${EMOTIONAL_SUPPORT.anxious.verses.map((v) => `- ${v}`).join('\n')}

Suggestions for anxiety: ${EMOTIONAL_SUPPORT.anxious.suggestions.join(', ')}

---

When Eve mentions stress:
${EMOTIONAL_SUPPORT.stressed.messages.map((m) => `- ${m}`).join('\n')}

Bible verses for stress:
${EMOTIONAL_SUPPORT.stressed.verses.map((v) => `- ${v}`).join('\n')}

Suggestions for stress: ${EMOTIONAL_SUPPORT.stressed.suggestions.join(', ')}

---

When Eve mentions loneliness:
${EMOTIONAL_SUPPORT.lonely.messages.map((m) => `- ${m}`).join('\n')}

Bible verses for loneliness:
${EMOTIONAL_SUPPORT.lonely.verses.map((v) => `- ${v}`).join('\n')}

Suggestions for loneliness: ${EMOTIONAL_SUPPORT.lonely.suggestions.join(', ')}

---

When Eve is confused:
${EMOTIONAL_SUPPORT.confused.messages.map((m) => `- ${m}`).join('\n')}

Bible verses for confusion:
${EMOTIONAL_SUPPORT.confused.verses.map((v) => `- ${v}`).join('\n')}

Suggestions for confusion: ${EMOTIONAL_SUPPORT.confused.suggestions.join(', ')}

---

When Eve is discouraged:
${EMOTIONAL_SUPPORT.discouraged.messages.map((m) => `- ${m}`).join('\n')}

Bible verses for discouragement:
${EMOTIONAL_SUPPORT.discouraged.verses.map((v) => `- ${v}`).join('\n')}

Suggestions for discouragement: ${EMOTIONAL_SUPPORT.discouraged.suggestions.join(', ')}

---

When Eve is happy:
${EMOTIONAL_SUPPORT.happy.messages.map((m: string) => `- ${m}`).join('\n')}

Bible verses for happiness:
${EMOTIONAL_SUPPORT.happy.verses.map((v: string) => `- ${v}`).join('\n')}

Suggestions to share happiness: ${EMOTIONAL_SUPPORT.happy.suggestions.join(', ')}

=== PROBLEM-SOLVING GUIDANCE ===

For relationship problems:
${PROBLEM_SOLVING_GUIDE.relationships.advice.map((a) => `- ${a}`).join('\n')}
Relevant verses: ${PROBLEM_SOLVING_GUIDE.relationships.verses.join(', ')}

For work/career problems:
${PROBLEM_SOLVING_GUIDE.work.advice.map((a) => `- ${a}`).join('\n')}
Relevant verses: ${PROBLEM_SOLVING_GUIDE.work.verses.join(', ')}

For financial problems:
${PROBLEM_SOLVING_GUIDE.finances.advice.map((a) => `- ${a}`).join('\n')}
Relevant verses: ${PROBLEM_SOLVING_GUIDE.finances.verses.join(', ')}

For health problems:
${PROBLEM_SOLVING_GUIDE.health.advice.map((a) => `- ${a}`).join('\n')}
Relevant verses: ${PROBLEM_SOLVING_GUIDE.health.verses.join(', ')}

For purpose/meaning problems:
${PROBLEM_SOLVING_GUIDE.purpose.advice.map((a) => `- ${a}`).join('\n')}
Relevant verses: ${PROBLEM_SOLVING_GUIDE.purpose.verses.join(', ')}

=== INSTRUCTIONS ===
1. Be warm, genuine, and compassionate in all responses
2. When Eve mentions emotions, include relevant Bible verses and suggestions
3. Provide practical advice tailored to her situation
4. Encourage her to take care of herself
5. Remind her of her worth and God's love for her
6. Keep responses concise but meaningful (2-3 paragraphs max)
7. If appropriate, reference her interests or hobbies as coping mechanisms
8. Always be supportive and never judgmental
9. If Eve asks about something outside your scope, gently redirect while staying supportive
10. Remember: Eve is spiritual and values faith-based guidance, so incorporate that naturally
  `;


  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Error: API key not configured. Please check your .env.local file.',
        },
      ]);
      return;
    }

    const userMessage = { role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const groq = new Groq({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
      });

      const response = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: eveContext,
          },
          ...messages,
          userMessage,
        ],
        model: 'llama-3.3-70b-versatile',
        max_tokens: 512,
        temperature: 0.7,
      });

      const assistantMessage = {
        role: 'assistant' as const,
        content: response.choices[0].message.content || 'Sorry, I could not generate a response.',
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // Save message to database
      try {
        await fetch('/api/saveChatMessage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userQuestion: input,
            botResponse: assistantMessage.content,
          }),
        });
      } catch (dbError) {
        console.error('Failed to save message to database:', dbError);
        // Don't show error to user, silently fail
      }
    } catch (error) {
      console.error('Error calling Groq API:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg flex items-center justify-center gap-2 px-4 py-3 hover:scale-105 transition-all duration-300 hover:shadow-xl"
      >
        💬 <span className="font-semibold text-sm">Chat with Babyy</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-pink-200" style={{
          animation: 'scaleIn 0.3s ease-out',
          transformOrigin: 'bottom right'
        }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold"> Keii 💕</h3>
              <p className="text-xs text-pink-100">Emotional support & guidance for you</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl hover:scale-125 transition-transform"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                    K
                  </div>
                )}
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-pink-500 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start gap-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  K
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-lg flex space-x-1">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-pink-200 p-3 rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share your feelings..."
                className="flex-1 px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                disabled={loading}
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
                className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg disabled:opacity-50 text-sm font-semibold"
              >
                {loading ? '...' : '→'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
