import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Users, Briefcase, Luggage, Phone, Mail, Check } from "lucide-react";
import BookingForm from "../components/BookingForm.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import VehicleArt from "../components/VehicleArt.jsx";
import { fleet } from "../data/fleet.js";

export default function VehicleDetail() {
  const { slug } = useParams();
  const vehicle = fleet.find((v) => v.slug === slug);

  // Scroll to top whenever the vehicle page changes (e.g. clicking
  // "Other Fleet" while already on a /fleet/:slug page).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!vehicle) return <Navigate to="/fleet" replace />;

  return (
    <>
      {/* HERO */}
      <section className="bg-paper text-ink py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Link to="/fleet" className="text-xs font-mono text-ink/50 hover:text-ink">
              ← All Vehicles
            </Link>

            <p className="font-mono text-xs uppercase mt-4 mb-2 text-nilgiri">
              {vehicle.type}
            </p>

            <h1 className="font-display font-semibold text-4xl mb-5">
              {vehicle.name}
            </h1>

            <div className="flex gap-8 mb-6">
              <div className="flex flex-col items-center gap-1.5">
                <div className="border border-nilgiri rounded p-2.5 text-nilgiri">
                  <Users size={20} />
                </div>
                <span className="font-mono text-sm">{vehicle.seats}</span>
              </div>

              {vehicle.smallBags != null && (
                <div className="flex flex-col items-center gap-1.5">
                  <div className="border border-nilgiri rounded p-2.5 text-nilgiri">
                    <Briefcase size={20} />
                  </div>
                  <span className="font-mono text-sm">{vehicle.smallBags}</span>
                </div>
              )}

              {vehicle.bigBags != null && (
                <div className="flex flex-col items-center gap-1.5">
                  <div className="border border-nilgiri rounded p-2.5 text-nilgiri">
                    <Luggage size={20} />
                  </div>
                  <span className="font-mono text-sm">{vehicle.bigBags}</span>
                </div>
              )}
            </div>

            {vehicle.description && (
              <p className="text-sm text-ink/70 leading-relaxed mb-6 max-w-md">
                {vehicle.description}
              </p>
            )}

            <div className="font-mono mb-6">
              <span className="text-xs text-ink/50">Starting from</span>
              <div className="text-3xl text-laterite">
                ₹{vehicle.price.toLocaleString("en-IN")}
              </div>
            </div>

            <a
              href={
                vehicle.contact
                  ? `tel:${vehicle.contact.phones[0].replace(/\s/g, "")}`
                  : "#"
              }
              className="inline-flex items-center gap-2 bg-laterite text-paper px-6 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Phone size={16} /> Enquire Now
            </a>
          </div>

          <ImageCarousel
            images={vehicle.images}
            type={vehicle.type}
            alt={vehicle.name}
          />
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      {vehicle.features && vehicle.features.length > 0 && (
        <section className="bg-paperDeep/40 py-12 px-6 border-t border-b border-ink/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-semibold text-xl mb-5">
              What's Included
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {vehicle.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-ink/80"
                >
                  <Check size={16} className="text-nilgiri mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ABOUT + OTHER FLEET SIDEBAR (mirrors PackageDetail's overview + Other Packages layout) */}
      {vehicle.content && vehicle.content.length > 0 && (
        <section className="bg-paper py-16 px-6 border-b border-paperDeep">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 flex flex-col gap-10">
              <div>
                <p className="font-mono text-xs uppercase mb-2 text-laterite">
                  About This Vehicle
                </p>
                <h2 className="font-display font-semibold text-3xl mb-2">
                  {vehicle.name}
                </h2>
              </div>
              {vehicle.content.map((block) => (
                <div key={block.heading}>
                  <h3 className="font-display font-semibold text-xl mb-3 text-nilgiri">
                    {block.heading}
                  </h3>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>

            <aside>
              <p className="font-mono text-xs uppercase tracking-wide text-laterite mb-4">
                Other Fleet
              </p>
              <div className="flex flex-col gap-4">
                {fleet
                  .filter((v) => v.slug !== vehicle.slug)
                  .map((v) => (
                    <Link
                      key={v.slug}
                      to={`/fleet/${v.slug}`}
                      className="flex gap-3 items-center group"
                    >
                      <div className="w-16 h-16 rounded-md overflow-hidden shrink-0 bg-paperDeep">
                        {v.images && v.images.length > 0 ? (
                          <img
                            src={v.images[0]}
                            alt={v.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <VehicleArt type={v.type} />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-display font-semibold text-sm leading-snug group-hover:text-laterite transition-colors truncate">
                          {v.name}
                        </p>
                        <p className="font-mono text-[11px] text-ink/50 mt-0.5">
                          Seats {v.seats}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </aside>
          </div>
        </section>
      )}

      {/* PRICING TABLE */}
      {vehicle.pricing && (
        <section className="bg-paperDeep/40 py-12 px-4 border-b border-paperDeep">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-semibold text-2xl mb-6">
              Hour / Kms Slab Pricing
            </h2>
            <div className="overflow-hidden rounded border border-ink/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-nilgiri text-paper text-left font-mono text-xs uppercase">
                    <th className="px-4 py-3">Hour/Kms Slab</th>
                    <th className="px-4 py-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicle.pricing.map((row, i) => (
                    <tr
                      key={row.slab}
                      className={i % 2 === 0 ? "bg-white" : "bg-paperDeep/40"}
                    >
                      <td className="px-4 py-3 text-ink/80">{row.slab}</td>
                      <td className="px-4 py-3 font-mono text-laterite font-medium">
                        ₹{row.price.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink/50 mt-3">
              All prices include driver, fuel, tolls, and parking. No hidden
              charges.
            </p>
          </div>
        </section>
      )}

      {/* BOOKING CTA */}
      <section className="bg-ink text-paper py-16 px-6 border-t border-paper/10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-semibold text-2xl mb-4">
              Book the {vehicle.name}
            </h2>
            <p className="text-sm text-paper/70 mb-6">
              Share your route and travel dates — we'll confirm availability
              and the final quote.
            </p>

            {vehicle.contact && (
              <div className="space-y-2 text-sm text-paper/70">
                {vehicle.contact.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 hover:text-amber"
                  >
                    <Phone size={14} /> {p}
                  </a>
                ))}
                <a
                  href={`mailto:${vehicle.contact.email}`}
                  className="flex items-center gap-2 hover:text-amber"
                >
                  <Mail size={14} /> {vehicle.contact.email}
                </a>
              </div>
            )}
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
