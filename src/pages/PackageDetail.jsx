import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import RouteStrip from "../components/RouteStrip.jsx";
import BookingForm from "../components/BookingForm.jsx";
import DestinationArt from "../components/DestinationArt.jsx";
import PlaceThumb from "../components/PlaceThumb.jsx";
import { routes } from "../data/routes.js";
import { useEffect } from "react";


export default function PackageDetail() {
  const { slug } = useParams();
  const route = routes.find((r) => r.slug === slug);

    useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!route) return <Navigate to="/packages" replace />;

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[380px]">
        <DestinationArt place={route.place} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

        <div className="absolute inset-0 flex flex-col justify-between px-6 py-6">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-xs font-mono text-paper/80 hover:text-paper w-fit"
          >
            <ArrowLeft size={14} /> All Packages
          </Link>

          <div className="max-w-6xl mx-auto w-full">
            <span className="inline-block px-3 py-1 text-[11px] font-mono uppercase tracking-wide bg-laterite text-paper rounded-full mb-4">
              {route.tag}
            </span>
            <h1 className="font-display font-semibold text-3xl md:text-5xl text-paper mb-3 max-w-2xl">
              {route.name}
            </h1>
            <p className="text-paper/80 max-w-xl mb-5">{route.summary}</p>
            <div className="flex gap-6 font-mono text-sm text-paper/90">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} /> {route.km}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={15} /> {route.days}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Route strip */}
      <section className="bg-paper py-10 px-6 border-b border-paperDeep">
        <div className="max-w-6xl mx-auto">
          <RouteStrip stops={route.stops} />
        </div>
      </section>

      {/* Destination overview */}
      {route.overview && route.overview.length > 0 && (
        <section className="bg-paper py-16 px-6 border-b border-paperDeep">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 flex flex-col gap-10">
              {route.overview.map((o) => (
                <div key={o.place}>
                  <h2 className="font-display font-semibold text-2xl mb-3">{o.place}</h2>
                  <p className="text-ink/70 text-sm leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>

            <aside>
              <p className="font-mono text-xs uppercase tracking-wide text-laterite mb-4">
                Other Packages
              </p>
              <div className="flex flex-col gap-4">
                {routes
                  .filter((r) => r.slug !== route.slug)
                  // .slice(0, 5)
                  .map((r) => (
                    <Link
                      key={r.slug}
                      to={`/packages/${r.slug}`}
                      className="flex gap-3 items-center group"
                    >
                      <div className="w-16 h-16 rounded-md overflow-hidden shrink-0">
                        <DestinationArt place={r.place} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display font-semibold text-sm leading-snug group-hover:text-laterite transition-colors truncate">
                          {r.name}
                        </p>
                        <p className="font-mono text-[11px] text-ink/50 mt-0.5">{r.days}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </aside>
          </div>
        </section>
      )}

      {/* Itinerary */}
      {route.itinerary && route.itinerary.length > 0 && (
        <section className="bg-paper py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase mb-2 text-laterite">Day by Day</p>
            <h2 className="font-display font-semibold text-3xl mb-10">Itinerary</h2>

            <div className="relative pl-12">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-paperDeep" />
              {route.itinerary.map((day) => (
                <div key={day.day} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-laterite text-paper flex items-center justify-center font-mono text-xs font-bold">
                    {day.day}
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-amber mb-1">
                    Day {day.day}
                  </p>
                  <h3 className="font-display font-semibold text-xl mb-2 leading-snug">
                    {day.title}
                  </h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{day.desc}</p>
                  {day.places && day.places.length > 0 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                      {day.places.map((p) => (
                        <PlaceThumb key={p} name={p} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="bg-ink text-paper py-16 px-6 border-t border-paper/10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-semibold text-2xl mb-4">Ready to book this route?</h2>
            <p className="text-sm text-paper/70">
              Tell us your travel dates and headcount — we'll match a vehicle from the fleet and quote you directly.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
