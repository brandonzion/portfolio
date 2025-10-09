import { performances } from "@/data/performances";
import MusicClient from "@/app/music/MusicClient";

export default function MusicPage() {
  return <MusicClient performances={performances} />;
}

