import type { BioData, Mood, Interest, GalleryItem } from '../types';

// Bio Data - Edit this with her information
export const BIO_DATA: BioData = {
  name: "Solea",
  nicknames: ["Jaja", "Eve"],
  bio: "Hi! I'm Jaja 💕 Welcome to my world!",
  relationship: "In a relationship with Keii 💕",
  age: 22,
  birthday: "February 21, 2004",
  location: "Cagayan de Oro",
  favoriteFood: "Chicken Adobo",
  petPeeves: [
    "Slow walkers in front of you who refuse to give way",
    "People who lack basic hygiene",
    "When someone cancels plans last minute after you're already all dressed up",
    "Loud eaters or people who chew with sound effects",
    "Being left on seen for hours without a reply",
    "People who borrow things and never return them—or return them broken",
    "Fake friends who only reach out when they need something",
    "Being interrupted while telling a story",
    "People who don't know how to say thank you"
  ],
  favoriteColor: "Pink",
  funFact: "You love reading books, singing, playing piano, and discovering new music. You dream of someone who feels like home without trying too hard 🏡",
  website: "",
  social: {
    instagram: "",
    twitter: "",
    tiktok: "",
    email: "",
  },
};

// Mood Data - Messages from Keii for when Solea feels different emotions
export const MOODS: Mood[] = [
  {
    id: "happy",
    emotion: "Happy",
    emoji: "😊",
    message: "I'm so happy that you're happy, baby. Your smile is everything to me, and seeing you like this makes my heart so full. Keep being that amazing version of yourself because you're absolutely incredible. You deserve all the good things the world has to offer. Let me celebrate this moment with you. 💕",
    color: "bg-pink-400",
    gifUrl: "https://media.giphy.com/media/g9GUusdUZsief/giphy.gif",
  },
  {
    id: "sad",
    emotion: "Sad",
    emoji: "😢",
    message: "If you ever feel sad and lonely, don't ever hesitate to call me, oki? I will be your kakampi through everything. Your pain matters to me, and I want you to know that you don't have to face this alone. Your peace and state of mind is what matters most to me, baby. You're too precious for me to ignore your tears. 💕",
    color: "bg-blue-400",
    gifUrl: "https://media.giphy.com/media/Ry1MOAeAYXinkxN4Xl/giphy.gif",
  },
  {
    id: "stressed",
    emotion: "Stressed",
    emoji: "😰",
    message: "You've proven yourself too much already, baby. I see how strong and independent you are, and honestly it amazes me every single day. But I need you to know that it's okay to let go of some weight and rest. If things feel heavy right now, take a break—you deserve it. I'm here for you, always. 💪",
    color: "bg-orange-400",
    gifUrl: "https://media.giphy.com/media/3o85xIO33l7RlmLjIQ/giphy.gif",
  },
  {
    id: "bored",
    emotion: "Bored",
    emoji: "😑",
    message: "Why don't you do something that makes you happy right now, baby? Read that book you love, sit at the piano and play your favorite song, or listen to the music that makes your soul dance. Life is too short to feel bored and empty. You deserve to enjoy every single moment and fill it with things that bring you joy. 🎵",
    color: "bg-purple-400",
    gifUrl: "https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif",
  },
  {
    id: "tired",
    emotion: "Tired",
    emoji: "😴",
    message: "Rest, baby. Your body needs it and that's completely okay. I want you to take care of yourself because you are precious to me, and I can't bear to see you exhausted. There's absolutely nothing wrong with resting and taking a break when you need it. You've done enough for today. Let yourself sleep and recharge. 💤",
    color: "bg-indigo-400",
    gifUrl: "https://media.giphy.com/media/l0IypeKl9NJhPXtZm/giphy.gif",
  },
  {
    id: "confused",
    emotion: "Confused",
    emoji: "🤔",
    message: "It's okay not to have all the answers right now, baby. Life can be confusing and overwhelming sometimes, and that's completely normal. Take your time to think things through without rushing yourself. And remember, I'm always here to listen to you and help you figure things out together. You don't have to be lost alone. 💭",
    color: "bg-yellow-400",
    gifUrl: "https://media.giphy.com/media/3ohzdKdb4ikCZjXeBi/giphy.gif",
  },
];

// Interests/Hobbies
export const INTERESTS: Interest[] = [
  {
    id: "reading",
    title: "Reading",
    description: "Books and e-books - getting lost in stories",
    icon: "📚",
    category: "hobby",
  },
  {
    id: "singing",
    title: "Singing",
    description: "Expressing myself through music and melodies",
    icon: "🎤",
    category: "music",
  },
  {
    id: "music",
    title: "Music",
    description: "Listening to all kinds of music - especially JB 🎵",
    icon: "🎵",
    category: "music",
  },
  {
    id: "piano",
    title: "Piano",
    description: "Playing and composing on the keys",
    icon: "🎹",
    category: "hobby",
  },
  {
    id: "camping",
    title: "Camping",
    description: "Connecting with nature under the stars",
    icon: "⛺",
    category: "hobby",
  },
  {
    id: "travel",
    title: "Travel",
    description: "Exploring new places and cultures",
    icon: "✈️",
    category: "hobby",
  },
  {
    id: "chocolate",
    title: "Chocolate",
    description: "My favorite sweet indulgence",
    icon: "🍫",
    category: "food",
  },
  {
    id: "cakes",
    title: "Cakes",
    description: "Any kind of cake makes me happy!",
    icon: "🍰",
    category: "food",
  },
];

// Favorite Foods
export const FAVORITE_FOODS = [
  "Okra 🥬",
  "Eggplant 🍆",
  "Chicken Adobo 🍗",
  "Sinigang 🍲",
];

// Favorite Sweets
export const FAVORITE_SWEETS = [
  "Chocolates 🍫",
  "Cakes (any kind!) 🍰",
];

// Favorite Songs
export const FAVORITE_SONGS = [
  "One Love - JB 🎵",
  "Die In Your Arms - JB 🎵",
  "All JB Songs 🎵",
  "Passenger Seat 🎵",
];

// Dream Man Description
export const DREAM_MAN = `My boyfriend is Keii 💕 He's someone who is a man of God. Someone who feels like home without trying too hard. Gentle with my feelings, patient with my silence, and consistent even on my worst days. He shows me he loves me in the small quiet ways. And he respects my growth, supports my dreams, and never makes me feel like I'm too much or not enough. He's everything I dreamed of and so much more. 💕`;

// Gallery Items
export const GALLERY_ITEMS: GalleryItem[] = [];
