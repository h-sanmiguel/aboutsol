import { useState } from 'react';
import { PinkLayout } from '../components/layout/PinkLayout';
import { MoodMessage } from '../components/ui/MoodCard';
import { MOODS, BIO_DATA } from '../constants/content';

export default function Moods() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const selectedMoodData = MOODS.find((m) => m.id === selectedMood);

  return (
    <PinkLayout navbarTitle={BIO_DATA.name}>
      <div className="space-y-12">
        <div className="text-center py-8 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            How are you feeling today? 💭
          </h1>
          <p className="text-lg text-gray-600">
            Tell me what you're feeling, baby. I'm here for you in every emotion. 💕
          </p>
        </div>

        {/* Mood Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MOODS.map((mood) => (
            <div key={mood.id} className="stagger-item">
              <button
                onClick={() => setSelectedMood(mood.id)}
                className={`mood-card ${mood.color} w-full p-4 rounded-lg transition-all duration-300 hover:scale-110 text-white shadow-md hover:shadow-lg transform cursor-pointer ${
                  selectedMood === mood.id ? 'ring-4 ring-white scale-105' : ''
                }`}
              >
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <div className="text-lg font-semibold">{mood.emotion}</div>
              </button>
            </div>
          ))}
        </div>

        {/* Mood Message */}
        {selectedMoodData && (
          <div className="animate-scale-in">
            <MoodMessage mood={selectedMoodData} />
          </div>
        )}
      </div>
    </PinkLayout>
  );
}
