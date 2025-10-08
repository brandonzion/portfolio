export interface Performance {
  id: string;
  title: string;
  venue: string;
  date: string;
  role: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  setlist?: string[];
}

export const performances: Performance[] = [
  {
    id: "1",
    title: "Autumn in New York - Quartet Performance",
    venue: "Blue Note Jazz Club",
    date: "September 15, 2024",
    role: "Piano",
    description: "An evening of jazz standards featuring original arrangements of classic compositions. Led a quartet through an energetic set of bebop and cool jazz pieces.",
    imageUrl: "/images/performance1.jpg",
    setlist: ["Autumn in New York", "All the Things You Are", "My Funny Valentine", "Take Five"],
  },
  {
    id: "2",
    title: "Latin Jazz Fusion Night",
    venue: "Village Vanguard",
    date: "August 3, 2024",
    role: "Piano & Composer",
    description: "Premiered three original compositions blending Afro-Cuban rhythms with modern jazz harmony.",
    imageUrl: "/images/performance2.jpg",
    videoUrl: "https://youtube.com/watch?v=example",
    setlist: ["Montuno Moderne", "Clave Dreams", "Havana Nights"],
  },
  {
    id: "3",
    title: "Bebop Tribute Concert",
    venue: "Smalls Jazz Club",
    date: "July 20, 2024",
    role: "Piano",
    description: "A celebration of bebop pioneers featuring music of Charlie Parker, Dizzy Gillespie, and Thelonious Monk.",
    imageUrl: "/images/performance3.jpg",
    setlist: ["Anthropology", "A Night in Tunisia", "'Round Midnight", "Confirmation"],
  },
  {
    id: "4",
    title: "Jazz at Lincoln Center - Guest Artist",
    venue: "Dizzy's Club",
    date: "June 12, 2024",
    role: "Featured Pianist",
    description: "Guest performance with the resident ensemble, showcasing contemporary jazz interpretations of timeless melodies.",
    imageUrl: "/images/performance4.jpg",
  },
];

