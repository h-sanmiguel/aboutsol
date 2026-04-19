import { PinkLayout } from '../components/layout/PinkLayout';
import { Card } from '../components/common';
import { GALLERY_ITEMS, BIO_DATA } from '../constants/content';

export default function Gallery() {
  return (
    <PinkLayout navbarTitle={BIO_DATA.name}>
      <div className="space-y-12">
        <div className="text-center py-8 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            Your Moments 📸
          </h1>
          <p className="text-lg text-gray-600">
            The precious moments and memories I want to cherish forever with you
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="stagger-item">
              <Card className="overflow-hidden hover-lift">
                <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://via.placeholder.com/300?text=' +
                        encodeURIComponent(item.title);
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-600 mb-2">{item.description}</p>
                  )}
                  {item.date && (
                    <p className="text-sm text-gray-500">
                      📅 {new Date(item.date).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Empty State Helper */}
        {GALLERY_ITEMS.length === 0 && (
          <Card className="text-center py-12 animate-fade-in-up">
            <p className="text-gray-600 text-lg">
              Waiting for our photos together, baby. Soon this will be filled with all the beautiful moments we'll create. 💕
            </p>
          </Card>
        )}
      </div>
    </PinkLayout>
  );
}
