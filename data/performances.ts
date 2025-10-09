export interface Performance {
  id: string;
  title: string;
  venue: string;
  date: string;
  role: string;
  imageUrl?: string;
  videoUrl?: string;
  setlist?: string[];
}

export const performances: Performance[] = [
  {
    id: "1",
    title: "Brown Jazz Combo Concert",
    venue: "Fulton Hall",
    date: "October 22, 2024",
    role: "Piano",
    imageUrl: "/images/jazzcombo.png",
    videoUrl:
      "https://www.youtube.com/watch?v=vrAhRgB5y74&list=PLw0pLHFT40yvkugiPsdXllDMaV5e24buK&index=2&t=3070s",
    setlist: [
      "Remember - Hank Mobley",
      "Backstage Sally - Wayne Shorter",
      "Strollin' - Horace Silver",
      "Gibraltar - Freddie Hubbard",
    ],
  },
  {
    id: "2",
    title: "Newport Jazz Festival",
    venue: "Fort Adams State Park",
    date: "August 4-6, 2023",
    role: "Piano",
    imageUrl: "/images/newportjazz.webp",
    videoUrl:
      "https://whatsupnewp.com/2023/07/ri-high-school-students-to-perform-at-the-2023-newport-jazz-festival/#google_vignette",
    setlist: [
      "Giant Steps - John Coltrane",
      "Butch and Butch - Oliver Nelson",
      "Milestones - Miles Davis",
      "Cold Sweat - James Brown",
      "Alter Ego - James Williams",
      "Killer Joe - Benny Golson",
      "One By One - Art Blakey",
      "Terrestris - Tom Harrell",
      "Cantaloupe Island - Herbie Hancock",
    ],
  },
];

