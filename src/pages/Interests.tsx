import { PinkLayout } from '../components/layout/PinkLayout';
import { INTERESTS, BIO_DATA } from '../constants/content';
import { Card } from '../components/common';

export default function Interests() {
  const categories = ['hobby', 'food', 'music', 'movie', 'other'];

  return (
    <PinkLayout navbarTitle={BIO_DATA.name}>
      <div className="space-y-12">
        <div className="text-center py-8 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            Your Passions 🎨
          </h1>
          <p className="text-lg text-gray-600">
            These are the things that light up your world and make you so incredibly happy
          </p>
        </div>

        {/* Summary Card */}
        <div className="animate-slide-in-left">
          <Card className="bg-gradient-to-r from-pink-100 to-rose-100 hover-lift">
            <p className="text-center text-gray-700 text-lg">
              You have this beautiful way of finding joy in the smallest moments and loving what you do. Let me celebrate what you love, baby. ✨
            </p>
          </Card>
        </div>

        {/* All Interests Grid */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-pink-600 mb-8">All Your Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERESTS.map((interest) => (
              <div
                key={interest.id}
                className="stagger-item bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift border border-pink-100 hover:border-pink-300 overflow-hidden"
              >
                <div className="p-6 text-center">
                  <div className="text-6xl mb-3">{interest.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 min-h-12">
                    {interest.description}
                  </p>
                  <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {interest.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-10">
          {categories.map((category) => {
            const categoryInterests = INTERESTS.filter(
              (interest) => interest.category === category
            );
            if (categoryInterests.length === 0) return null;

            return (
              <div key={category} className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-pink-600 mb-6 capitalize">
                  {category === 'other' ? 'Other Interests' : `${category}s`}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryInterests.map((interest) => (
                    <div
                      key={interest.id}
                      className="stagger-item bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift border border-pink-100 hover:border-pink-300 overflow-hidden"
                    >
                      <div className="p-6 text-center">
                        <div className="text-6xl mb-3">{interest.icon}</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {interest.title}
                        </h3>
                        <p className="text-gray-600 text-sm min-h-12">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PinkLayout>
  );
}
