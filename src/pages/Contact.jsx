import { Phone, Mail, MapPin } from "lucide-react";
import BookingForm from "../components/BookingForm.jsx";

const PHONES = ["+91 99007 44836", "+91 81236 71422", "+91 80315 28770"];

export default function Contact() {
  return (
    <section className="bg-ink text-paper py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Left column */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3 text-amber">
            Get in Touch
          </p>
          <h1 className="font-display font-semibold text-4xl leading-tight mb-4">
            Tell us the destination.
            <br />
            We&apos;ll handle the road.
          </h1>
          <p className="text-sm text-paper/60 mb-8 max-w-sm">
            Send your route, dates, and headcount — we&apos;ll reply with a vehicle and a quote.
          </p>

          {/* Info card: fixed icon column keeps every line's text baseline aligned */}
          <div className="rounded-xl border border-paper/10 bg-paper/[0.03] p-6 space-y-5">
            <div className="grid grid-cols-[20px_1fr] gap-x-3">
              <Phone size={16} className="text-amber mt-0.5" />
              <div className="flex flex-col gap-1 text-sm text-paper/80">
                {PHONES.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/\s/g, "")}`}
                    className="hover:text-amber transition-colors w-fit"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-[20px_1fr] gap-x-3 items-center">
              <Mail size={16} className="text-amber" />
              <a
                href="mailto:info2mrltravels@gmail.com"
                className="text-sm text-paper/80 hover:text-amber transition-colors w-fit"
              >
                info2mrltravels@gmail.com
              </a>
            </div>

            <div className="grid grid-cols-[20px_1fr] gap-x-3">
              <MapPin size={16} className="text-amber mt-0.5" />
              <span className="text-sm text-paper/80 leading-relaxed">
                No. 157/158, 5th Cross, Vishweshwaraiah Layout,
                <br />
                Kammagondana Halli, Bengaluru &ndash; 560015
              </span>
            </div>
          </div>

          {/* Map — same border radius / palette as the info card above it */}
          <div className="mt-4 rounded-xl overflow-hidden border border-paper/10">
            <iframe
              title="MRL Travels location"
              src="https://www.google.com/maps?q=No.+157/158,+5th+Cross,+Vishweshwaraiah+Layout,+Kammagondana+Halli,+Bangalore+560015&output=embed"
              width="100%"
              height="150"
              style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="md:pt-[52px]">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}