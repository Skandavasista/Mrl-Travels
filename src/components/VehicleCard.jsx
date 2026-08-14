import { Users, Fuel, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import VehicleArt from "./VehicleArt.jsx";

export default function VehicleCard({ vehicle }) {
  return (
    <Link
      to={`/fleet/${vehicle.slug}`}
      className="bg-white flex flex-col rounded overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="w-full overflow-hidden" style={{ aspectRatio: "240/100" }}>
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
        ) : (
          // fallback to the flat illustration if a photo hasn't been added yet
          <VehicleArt type={vehicle.type} />
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-mono text-ink/50">{vehicle.type}</span>
        </div>
        <h3 className="font-semibold mb-1">{vehicle.name}</h3>
        <div className="flex items-center gap-1 text-xs text-ink/70 mb-4">
          <Users size={13} /> Seats {vehicle.seats} &nbsp;•&nbsp; <Fuel size={13} /> Fuel included
        </div>
        <div className="mt-auto flex items-end justify-between font-mono">
          <div>
            <span className="text-xs text-ink/70">from</span>
            <div className="text-lg font-medium text-laterite">
              ₹{vehicle.price.toLocaleString("en-IN")}
            </div>
          </div>
          <ChevronRight size={18} />
        </div>
      </div>
    </Link>
  );
}