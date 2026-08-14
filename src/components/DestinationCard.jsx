import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import DestinationArt from "./DestinationArt.jsx";

export default function DestinationCard({ route }) {
  return (
    <Link
      to={`/packages/${route.slug}`}
      className="bg-white rounded overflow-hidden flex flex-col group hover:shadow-lg transition-shadow"
    >
      <div className="relative h-44">
        <DestinationArt place={route.place} />
        <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-mono uppercase tracking-wide bg-ink/85 text-paper rounded-full">
          {route.tag}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg mb-2 leading-snug">{route.name}</h3>
        <p className="text-sm text-ink/70 mb-4 flex-1">{route.summary}</p>
        <div className="flex items-center justify-between text-xs font-mono text-ink/60 border-t border-paperDeep pt-3">
          <span className="flex items-center gap-1">
            <MapPin size={13} /> {route.km}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={13} /> {route.days}
          </span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-laterite" />
        </div>
      </div>
    </Link>
  );
}