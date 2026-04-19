import type { Interest } from '../../types';
import './InterestGrid.css';

interface InterestGridProps {
  interests: Interest[];
}

const InterestGridItem = ({ interest }: { interest: Interest }) => {
  return (
    <div className="interest-item bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center border border-pink-100 hover:border-pink-400">
      <div className="text-6xl mb-4">{interest.icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{interest.title}</h3>
      <p className="text-gray-600">{interest.description}</p>
      <div className="mt-3 inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
        {interest.category}
      </div>
    </div>
  );
};

export const InterestGrid = ({ interests }: InterestGridProps) => {
  return (
    <div className="interest-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {interests.map((interest) => (
        <InterestGridItem key={interest.id} interest={interest} />
      ))}
    </div>
  );
};
