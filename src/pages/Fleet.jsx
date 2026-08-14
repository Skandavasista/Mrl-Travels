import { useState } from "react";
import VehicleCard from "../components/VehicleCard.jsx";
import { fleet, fleetTypes } from "../data/fleet.js";

export default function Fleet() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? fleet : fleet.filter((v) => v.type === filter);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <div>
          <p className="font-mono text-xs uppercase mb-2 text-nilgiri">Our Fleet</p>
          <h1 className="font-display font-semibold text-4xl">Pick your seat count, not just a car.</h1>
        </div>
        <div className="flex gap-2 flex-wrap">
          {fleetTypes.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full border border-ink ${
                filter === f ? "bg-ink text-paper" : "text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((v) => (
          <VehicleCard key={v.slug} vehicle={v} />
        ))}
      </div>
    </section>
  );
}
