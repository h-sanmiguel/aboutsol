import { PinkLayout } from '../components/layout/PinkLayout';
import { BIO_DATA, FAVORITE_FOODS, FAVORITE_SWEETS, FAVORITE_SONGS, DREAM_MAN } from '../constants/content';
import { Card } from '../components/common';

export default function Home() {
  return (
    <PinkLayout navbarTitle={BIO_DATA.name}>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center py-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">
            About You, Sol 💕
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I created this website as my tribute to you. Here's everything that makes you so beautifully, wonderfully you.
          </p>
        </div>

        {/* Bio Card */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-slide-in-left">
            <Card className="bg-gradient-to-br from-pink-100 to-pink-50 hover-lift">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">💭 About Sol</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Your Name:</strong> {BIO_DATA.name}</p>
                {BIO_DATA.nicknames && BIO_DATA.nicknames.length > 0 && (
                  <p><strong>Your Nicknames:</strong> {BIO_DATA.nicknames.join(', ')}</p>
                )}
                {BIO_DATA.birthday && <p><strong>Your Birthday:</strong> {BIO_DATA.birthday}</p>}
                {BIO_DATA.age && <p><strong>Your Age:</strong> {BIO_DATA.age}</p>}
                {BIO_DATA.location && <p><strong>Your Home:</strong> {BIO_DATA.location}</p>}
                <p><strong>Your Favorite Food:</strong> {BIO_DATA.favoriteFood}</p>
                <p><strong>Your Favorite Color:</strong> {BIO_DATA.favoriteColor}</p>
              </div>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <Card className="bg-gradient-to-br from-rose-100 to-pink-50 hover-lift">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">✨ Fun Facts About Sol</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {BIO_DATA.funFact}
              </p>
            </Card>
          </div>
        </div>

        {/* Pet Peeves */}
        {BIO_DATA.petPeeves.length > 0 && (
          <div className="animate-fade-in-up">
            <Card className="hover-lift">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">🚩 Things That Bother You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {BIO_DATA.petPeeves.map((peeve, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-100 to-red-50 p-4 rounded-lg text-gray-700 border border-red-200 stagger-item hover-glow">
                    {peeve}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Favorite Foods */}
        {FAVORITE_FOODS.length > 0 && (
          <div className="animate-fade-in-up">
            <Card className="hover-lift">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">🍽️ Your Favorite Foods</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {FAVORITE_FOODS.map((food, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-lg text-center font-semibold text-gray-700 border border-orange-200 stagger-item hover-glow">
                    {food}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Favorite Sweets */}
        {FAVORITE_SWEETS.length > 0 && (
          <div className="animate-fade-in-up">
            <Card className="hover-lift">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">🍫 Your Favorite Sweets</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {FAVORITE_SWEETS.map((sweet, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-100 to-purple-50 p-3 rounded-lg text-center font-semibold text-gray-700 border border-purple-200 stagger-item hover-glow">
                    {sweet}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Favorite Songs */}
        {FAVORITE_SONGS.length > 0 && (
          <div className="animate-fade-in-up">
            <Card className="hover-lift">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">🎵 Your Favorite Songs</h2>
              <ul className="space-y-2">
                {FAVORITE_SONGS.map((song, index) => (
                  <li key={index} className="flex items-center p-2 rounded-lg hover:bg-pink-50 transition stagger-item">
                    <span className="text-pink-600 mr-3 animate-bounce-slow">♪</span>
                    <span className="text-gray-700">{song}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* Dream Man */}
        <div className="animate-fade-in-up">
          <Card className="bg-gradient-to-br from-red-100 to-pink-100 border-2 border-red-300 hover-lift">
            <h2 className="text-2xl font-bold text-red-600 mb-4">💑 Your Dream Man</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Baby, this is what you've told me you want in a man. This is how I want to be for you. {DREAM_MAN}
            </p>
          </Card>
        </div>
      </div>
    </PinkLayout>
  );
}
