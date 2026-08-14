/* Real destination photography, keyed by specific place name.
   Nandi Hills uses the photo you already have wired up via src/assets.
   For every other place, drop a file into public/images/destinations/
   using the exact filename listed below and it'll show up automatically
   — no other code changes needed. */

import { useState } from "react";
import nandhihill from "../assets/nandhihill.png";
import coorg from "../assets/coorg.png";
import bngooty from "../assets/bngmysandooty.png";
import bnmyswayanad from "../assets/bngmyswaynad.png";
import kodaikanal from "../assets/mysootykod.png";
import tirupathi from "../assets/tirupathi.png";
import shirdi from "../assets/shirdi.png";
import mantralaya from "../assets/mantralayabng.png";
import alappey from "../assets/alappey.png";
import rameshwaramkanya from "../assets/rameshwaramkanya.png";

const PHOTOS = {
  "Nandi Hills": nandhihill,
  "Coorg": coorg,
  "Ooty": bngooty,
  "Wayanad": bnmyswayanad,
  "Kodaikanal": kodaikanal,
  Munnar: "/images/destinations/munnar.jpg",
  Thekkady: "/images/destinations/thekkady.jpg",
  "alleppey": alappey,
  "Tirupati": tirupathi,
  Madurai: "/images/destinations/madurai.jpg",
  "kanyakumari": rameshwaramkanya,
  Kanyakumari: "/images/destinations/kanyakumari.jpg",
  Mantralaya: mantralaya,
  Shirdi: shirdi,
  "Gokarna Beach": "/images/destinations/gokarna-beach.jpg",
};

export default function DestinationArt({ place }) {
  const [imgFailed, setImgFailed] = useState(false);
  const photo = PHOTOS[place];

  if (!photo || imgFailed) {
    // No path on file yet, or the file at that path 404'd — show a plain
    // placeholder instead of a broken-image icon until the real photo
    // is dropped in.
    return (
      <div className="w-full h-full flex items-center justify-center bg-paperDeep text-ink/50 text-xs font-medium uppercase tracking-wide">
        {place || "Photo coming soon"}
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <img
        src={photo}
        alt={place}
        className="w-full h-full object-cover"
        onError={() => setImgFailed(true)}
      />
    </div>
  );
}
