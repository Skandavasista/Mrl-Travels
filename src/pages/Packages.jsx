import { useState } from "react";
import DestinationCard from "../components/DestinationCard.jsx";
import { routes } from "../data/routes.js";

const CATEGORIES = ["All", "Hills", "Wildlife", "Pilgrimage", "Weekend"];

export default function Packages() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? routes : routes.filter((r) => r.tag === filter);

  return (
    <>
      <section className="bg-ink text-paper py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase mb-2 text-amber">Tours &amp; Packages</p>
          <h1 className="font-display font-semibold text-4xl md:text-5xl max-w-2xl mb-4">
            All routes, one road out of Bengaluru.
          </h1>
          <p className="max-w-lg text-paper/70">
            Curated multi-day itineraries across South India's hill stations, wildlife
            corridors, and pilgrimage circuits — every one bookable with your own vehicle
            and driver.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full border border-ink ${
                filter === c ? "bg-ink text-paper" : "text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((route) => (
            <DestinationCard key={route.slug} route={route} />
          ))}
        </div>
      </section>
    </>
  );
}
