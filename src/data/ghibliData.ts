
export interface GhibliImage {
  id: number;
  title: string;
  imageUrl: string;
  film: string;
  description: string;
  year: number;
  category: 'landscape' | 'character' | 'creature' | 'vehicle';
}

export const ghibliImages: GhibliImage[] = [
  {
    id: 1,
    title: "Castle in the Sky",
    imageUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
    film: "Castle in the Sky",
    description: "The floating castle of Laputa surrounded by clouds",
    year: 1986,
    category: "landscape"
  },
  {
    id: 2,
    title: "Totoro's Forest",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    film: "My Neighbor Totoro",
    description: "The magical forest where Totoro lives",
    year: 1988,
    category: "landscape"
  },
  {
    id: 3,
    title: "Spirit Bathhouse",
    imageUrl: "https://images.unsplash.com/photo-1516866165897-3a3a24126303",
    film: "Spirited Away",
    description: "The mysterious bathhouse where spirits come to relax",
    year: 2001,
    category: "landscape"
  },
  {
    id: 4,
    title: "Howl's Moving Castle",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    film: "Howl's Moving Castle",
    description: "The mechanical castle that roams the wasteland",
    year: 2004,
    category: "vehicle"
  },
  {
    id: 5,
    title: "Ponyo on the Cliff",
    imageUrl: "https://images.unsplash.com/photo-1493847242172-d46053a1f671",
    film: "Ponyo",
    description: "Serene coastal views from Ponyo's adventure",
    year: 2008,
    category: "landscape"
  },
  {
    id: 6,
    title: "Princess Mononoke Forest",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    film: "Princess Mononoke",
    description: "The ancient forest protected by the forest spirits",
    year: 1997,
    category: "landscape"
  },
  {
    id: 7,
    title: "Kiki's Delivery Service",
    imageUrl: "https://images.unsplash.com/photo-1477414956199-7dafc86a4962",
    film: "Kiki's Delivery Service",
    description: "The coastal town where Kiki begins her witch training",
    year: 1989,
    category: "landscape"
  },
  {
    id: 8,
    title: "The Wind Rises",
    imageUrl: "https://images.unsplash.com/photo-1534171472159-edb6d1e0a850",
    film: "The Wind Rises",
    description: "Beautiful skies that inspired Jiro's aircraft designs",
    year: 2013,
    category: "landscape"
  },
  {
    id: 9,
    title: "The Secret World of Arrietty",
    imageUrl: "https://images.unsplash.com/photo-1530968033775-2c92736b131e",
    film: "The Secret World of Arrietty",
    description: "The garden seen from a borrower's perspective",
    year: 2010,
    category: "landscape"
  },
  {
    id: 10,
    title: "When Marnie Was There",
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    film: "When Marnie Was There",
    description: "The mysterious mansion across the marsh",
    year: 2014,
    category: "landscape"
  },
  {
    id: 11,
    title: "Tales from Earthsea",
    imageUrl: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7",
    film: "Tales from Earthsea",
    description: "The vast fantastical landscapes of Earthsea",
    year: 2006,
    category: "landscape"
  },
  {
    id: 12,
    title: "Ocean Waves",
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    film: "Ocean Waves",
    description: "The sea that connects the protagonists' lives",
    year: 1993,
    category: "landscape"
  }
];
