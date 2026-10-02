export type Artwork = {
  slug: string;
  title: string;
  category: string;
  year: string;
  medium: string;
  status: string;
  description: string;
  image?: string;
};

export const artworks: Artwork[] = [
  { slug: 'identity', title: 'IDENTITY', category: 'Mixed Media', year: '2026', medium: 'Mixed media on canvas', status: 'Available — Inquire', description: 'A study of identity, protection and the versions of ourselves we carry into the world.', image: '/art/identity.jpg' },
  { slug: 'who-used-to-care', title: 'WHO USED TO CARE', category: 'Contemporary', year: '2026', medium: 'Mixed media', status: 'Available — Inquire', description: 'A quiet reflection on memory, distance and the people whose care leaves a lasting mark.', image: '/art/who-used-to-care.jpg' },
  { slug: 'flame-of-desire', title: 'FLAME OF DESIRE', category: 'Figurative', year: '2026', medium: 'Acrylic and mixed media', status: 'Available — Inquire', description: 'A figurative work about longing, ambition and the energy that keeps a person moving.', image: '/art/flame-of-desire.jpg' },
  { slug: 'world-of-legacy', title: 'WORLD OF LEGACY', category: 'Corporate Portrait', year: '2026', medium: 'Portrait commission', status: 'Commission concept', description: 'A recognition concept for organisations honouring long-serving people and the legacy they leave behind.', image: '/art/world-of-legacy.jpg' },
  { slug: 'untitled-study-i', title: 'UNTITLED STUDY I', category: 'Pencil', year: '2026', medium: 'Graphite on paper', status: 'Available — Inquire', description: 'A detailed pencil study exploring expression, light and the human face.', image: '/art/untitled-study-i.jpg' },
  { slug: 'untitled-study-ii', title: 'UNTITLED STUDY II', category: 'Pencil', year: '2026', medium: 'Graphite on paper', status: 'Available — Inquire', description: 'A quiet study built around gesture, texture and observation.', image: '/art/untitled-study-ii.jpg' },
];

export function getArtwork(slug: string) { return artworks.find((artwork) => artwork.slug === slug); }
