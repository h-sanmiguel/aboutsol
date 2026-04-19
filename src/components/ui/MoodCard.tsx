import type { Mood } from '../../types';
import './MoodCard.css';

interface MoodCardProps {
  mood: Mood;
  isSelected?: boolean;
  onClick?: () => void;
}

export const MoodCard = ({ mood, isSelected = false, onClick }: MoodCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`mood-card ${isSelected ? 'selected' : ''} ${mood.color} transition-all duration-300 hover:scale-105 p-4 rounded-lg text-white shadow-md hover:shadow-lg cursor-pointer transform`}
    >
      <div className="text-4xl mb-2">{mood.emoji}</div>
      <div className="text-lg font-semibold">{mood.emotion}</div>
    </button>
  );
};

interface MoodMessageProps {
  mood: Mood;
}

export const MoodMessage = ({ mood }: MoodMessageProps) => {
  return (
    <div className={`mood-message mt-8 p-6 rounded-lg bg-white shadow-lg border-l-4 ${mood.color.replace('bg-', 'border-')}`}>
      <div className="flex items-start">
        <span className="text-5xl mr-4">{mood.emoji}</span>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{mood.emotion}</h3>
          <p className="text-gray-700 mb-4">{mood.message}</p>
          {mood.gifUrl && (
            <img 
              src={mood.gifUrl} 
              alt={mood.emotion} 
              className="rounded-lg mb-4 max-h-64 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
          <div className="flex gap-2 flex-wrap">
            {mood.playlistUrl && (
              <a
                href={mood.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition"
              >
                🎵 Listen to Playlist
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
