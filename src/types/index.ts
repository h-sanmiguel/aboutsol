// Mood-related types
export interface Mood {
  id: string;
  emotion: string;
  emoji: string;
  message: string;
  color: string;
  gifUrl?: string;
  playlistUrl?: string;
}

// Interest-related types
export interface Interest {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  category: 'hobby' | 'food' | 'movie' | 'music' | 'other';
}

// Bio/Profile types
export interface BioData {
  name: string;
  bio: string;
  age?: number;
  birthday?: string;
  location?: string;
  favoriteFood: string;
  petPeeves: string[];
  favoriteColor: string;
  funFact: string;
  website?: string;
  social?: {
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    email?: string;
  };
}

// Gallery item types
export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  date?: string;
}
