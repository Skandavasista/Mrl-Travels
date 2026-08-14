import { Link } from "react-router-dom";
import {
  ArrowRight,
  Car,
  Compass,
  Mountain,
  Users,
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
import RouteStrip from "../components/RouteStrip.jsx";
import VehicleCard from "../components/VehicleCard.jsx";
import DestinationCard from "../components/DestinationCard.jsx";
import BookingForm from "../components/BookingForm.jsx";
import { fleet } from "../data/fleet.js";
import { routes } from "../data/routes.js";
import naturepic from "../assets/naturepic.jpg";
import nandhihill from "../assets/nandhihill.png";



const heroStops = [
  { name: "Bengaluru", km: "0 km" },
  { name: "Mysuru", km: "145 km" },
  { name: "Coorg", km: "252 km" },
  { name: "Ooty", km: "290 km" },
  { name: "Wayanad", km: "270 km" },
];

const services = [
  { name: "Car Rental", desc: "Unlock your journey, on wheels.", icon: Car },
  { name: "Airport Taxi", desc: "Airport travel made effortless.", icon: Compass },
  { name: "Tour Holidays", desc: "Exploring together, creating memories.", icon: Mountain },
  { name: "Employee Transport", desc: "Making staff transport effortless.", icon: Users },
];

const stats = [
  { value: "12+", label: "Curated tour routes across South India" },
  { value: "10", label: "Vehicle types, from sedans to 21-seater buses" },
  { value: "560+", label: "Km covered on our longest circuit route" },
];

const testimonials = [
  {
    name: "Ramesh K.",
    trip: "Mysuru – Coorg, family trip",
    quote: "Driver knew every ghat turn and the itinerary matched exactly what we booked.",
  },
  {
    name: "Ananya S.",
    trip: "Employee transport, 40-seat contract",
    quote: "Punctual pickups every single shift for six months straight. Zero complaints from the team.",
  },
  {
    name: "Farhan M.",
    trip: "Bengaluru – Tirupathi pilgrimage",
    quote: "Booked the Innova a day before travel and it was ready on time, clean, and comfortable.",
  },
];

const aboutPoints = [
  "Local Tour Packages",
  "Family Tour Packages",
  "North/South India Tour",
  "Pilgrimage Packages",
  "Car Rental",
  "Employee Transportation",
];

const contact = {
  address: "No. 157/158, 5th Cross, Vishweshwaraiah Layout, Kammagondana Halli, Bangalore - 560 015",
  phones: ["+91 9900744836", "8123671422", "8031528770"],
  email: "info2mrltravels@gmail.com",
};

const gallery = [
  {nandhihill},
  "https://mrltravels.in/img/Mysore-Coorg.jpg",
  "https://mrltravels.in/img/Ooty-Coorg.jpg",
  "https://mrltravels.in/img/Thekkady-Alleppey.jpg",
  "https://mrltravels.in/img/Wayanad.jpg",
  "https://mrltravels.in/img/Kodaikanal.jpg",
];

const footerLinks = ["About Us", "Contact Us", "Terms & Condition", "FAQs & Help"];
const footerBottomLinks = ["Home", "Tour Packages", "Terms & Condition", "FQAs"];
const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      {/* <section className="bg-ink text-paper pt-12 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase mb-4 text-amber tracking-wider">
            Bengaluru → Anywhere the road goes
          </p>
          <h1 className="font-display font-semibold leading-tight text-4xl md:text-6xl max-w-2xl mb-6">
            Every trip is a route worth remembering.
          </h1>
          <p className="max-w-md mb-8 text-paper/75">
            Tempo travellers, sedans, and buses — booked by the seat, priced by the kilometre,
            driven by people who know every ghat road out of Bengaluru.
          </p>
          <div className="flex gap-4 mb-14">
            <Link to="/packages" className="px-6 py-3 text-sm font-medium flex items-center gap-2 bg-laterite rounded-sm">
              Plan a Route <ArrowRight size={16} />
            </Link>
            <Link to="/fleet" className="px-6 py-3 text-sm font-medium border border-paper/30 rounded-sm">
              View Fleet
            </Link>
          </div>
          <RouteStrip stops={heroStops} dark />
        </div>
      </section> */}

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="font-mono text-xs uppercase mb-2 text-laterite tracking-wider">About Us</p>
            <h2 className="font-display font-semibold text-3xl mb-5">
              Welcome to <span className="text-laterite">MRL Travels</span>
            </h2>
            <p className="text-ink/80 mb-4">Your passport to unforgettable journeys and extraordinary experiences.</p>
            <p className="text-sm text-ink/70 mb-6 leading-relaxed">
              At MRL Tours and Travels, we believe that travel is not just about reaching a
              destination; it's about the transformative journey along the way. We are dedicated
              to curating exceptional travel adventures that leave a lasting imprint on your life.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {aboutPoints.map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm font-medium">
                  <ArrowRight size={14} className="text-laterite flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded overflow-hidden border border-paperDeep aspect-[4/3]">
            <img
              src={naturepic}
              alt="MRL Travels"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="border-t border-paperDeep pt-8 space-y-4">
          <p className="text-sm text-ink/70 leading-relaxed">
            Its strong positioning and expertise has helped M/S MRL TRAVELS in a very short time
            to establish its #1 credentials in Bangalore. More importantly it is the emphasis on
            blending global norms with understanding of local needs that has helped us achieve
            market leadership in a short span of time. Operating out of every key Bangalore city
            the advantage extends to its entire range of products – with Chauffeur Drive for the
            Employee transport &amp; Corporate.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed">
            Whether you are traveling for business or pleasure, you can be assured of quality cars
            and a wide range of services that make M/S MRL TRAVELS your first choice of car
            rental. This helps you save time, save money, and keeps your travel arrangements
            simple with M/S MRL TRAVELS. It all starts with confidence — the confidence of knowing
            that your car rental needs are being handled by a company that caters to your needs
            and provides the quality of service you deserve.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.name} className="p-5 border border-paperDeep rounded">
              <s.icon size={22} className="text-laterite" />
              <h3 className="mt-4 font-semibold text-sm">{s.name}</h3>
              <p className="text-xs mt-1 text-ink/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      

 <section className="bg-ink text-paper pt-12 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase mb-4 text-amber tracking-wider">
            Bengaluru → Anywhere the road goes
          </p>
          <h1 className="font-display font-semibold leading-tight text-4xl md:text-6xl max-w-2xl mb-6">
            Every trip is a route worth remembering.
          </h1>
          <p className="max-w-md mb-8 text-paper/75">
            Tempo travellers, sedans, and buses — booked by the seat, priced by the kilometre,
            driven by people who know every ghat road out of Bengaluru.
          </p>
          <div className="flex gap-4 mb-14">
            <Link to="/packages" className="px-6 py-3 text-sm font-medium flex items-center gap-2 bg-laterite rounded-sm">
              Plan a Route <ArrowRight size={16} />
            </Link>
            <Link to="/fleet" className="px-6 py-3 text-sm font-medium border border-paper/30 rounded-sm">
              View Fleet
            </Link>
          </div>
          <RouteStrip stops={heroStops} dark />
        </div>
      </section>


      {/* FLEET PREVIEW */}
      <section className="bg-paperDeep py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-mono text-xs uppercase mb-2 text-nilgiri">Our Fleet</p>
              <h2 className="font-display font-semibold text-3xl">Pick your seat count, not just a car.</h2>
            </div>
            <Link to="/fleet" className="text-sm font-medium flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fleet.slice(0, 6).map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase mb-2 text-laterite">Popular Routes</p>
            <h2 className="font-display font-semibold text-3xl">Where the road wants to take you.</h2>
          </div>
          <Link to="/packages" className="text-sm font-medium flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.slice(0, 3).map((r) => (
            <DestinationCard key={r.slug} route={r} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-paperDeep py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-semibold text-4xl text-laterite mb-1">{s.value}</div>
              <div className="text-sm text-ink/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-mono text-xs uppercase mb-2 text-nilgiri">What Travellers Say</p>
        <h2 className="font-display font-semibold text-3xl mb-10">Miles of trust, in their own words.</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 bg-white rounded border border-paperDeep">
              <p className="text-sm text-ink/80 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-ink/60">{t.trip}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="bg-ink text-paper py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-xs uppercase mb-2 text-amber">Get Started</p>
            <h2 className="font-display font-semibold text-3xl mb-4">
              Tell us the destination. We'll handle the road.
            </h2>
            <p className="text-sm text-paper/70">
              Send your route, dates, and headcount — we'll reply with a vehicle and a quote,
              not a sales call.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display font-semibold text-xl mb-4">MRL Travels</h3>
            <ul className="space-y-2 text-sm text-paper/70">
              {footerLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-paper transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xl mb-4">Contact</h3>
            <p className="flex items-start gap-2 text-sm text-paper/70 mb-3">
              <MapPin size={15} className="flex-shrink-0 mt-0.5 text-amber" />
              {contact.address}
            </p>
            <p className="flex items-center gap-2 text-sm text-paper/70 mb-3">
              <Phone size={15} className="flex-shrink-0 text-amber" />
              {contact.phones.join(", ")}
            </p>
            <p className="flex items-center gap-2 text-sm text-paper/70">
              <Mail size={15} className="flex-shrink-0 text-amber" />
              {contact.email}
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xl mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {gallery.map((g, i) => (
                <div key={i} className="aspect-square rounded overflow-hidden border border-paper/15">
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xl mb-4">About Us</h3>
            <p className="text-sm text-paper/70 leading-relaxed">
              At MRL Tours and Travels, we believe that travel is not just about reaching a
              destination; it's about the transformative journey along the way. We are dedicated
              to curating exceptional travel adventures that leave a lasting imprint on your life.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full border border-paper/25 flex items-center justify-center hover:bg-paper/10 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-paper/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/60">
          <span>© MRL Travels, All Right Reserved.</span>
          <div className="flex gap-6">
            {footerBottomLinks.map((l) => (
              <a key={l} href="#" className="hover:text-paper transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}