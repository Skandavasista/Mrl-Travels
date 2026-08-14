import { Users, ShieldCheck, Clock, Radar, Receipt, Percent, Truck, UserCog, TrendingUp, HeartHandshake } from "lucide-react";
import BookingForm from "../components/BookingForm.jsx";
import heroImg from "../assets/EmployeeTransportation1.png";

const points = [
  { icon: Clock, title: "On-time pickups", desc: "Fixed schedules across shifts, tracked routes, no last-minute surprises." },
  { icon: ShieldCheck, title: "Vetted drivers", desc: "Background-checked drivers who know Bengaluru's tech corridors." },
  { icon: Users, title: "Scales with headcount", desc: "From a handful of employees to full-fleet contracts." },
];

const commitments = [
  {
    icon: HeartHandshake,
    title: "A pledge to every business",
    desc: "Our Employee Transportation service is a pledge to offer businesses and their employees a seamless, safe, and reliable transportation solution. Our service caters to a wide range of industries, recognizing that employee transportation is a vital component of daily operations.",
  },
  {
    icon: TrendingUp,
    title: "Productivity, without the commute stress",
    desc: "Our team is dedicated to meticulously planning and executing employee travel logistics, ensuring that workers can commute to and from their workplaces with ease and efficiency. This commitment helps organizations optimize their workforce's productivity, reduce absenteeism, and enhance overall job satisfaction.",
  },
  {
    icon: ShieldCheck,
    title: "Safety, always the top priority",
    desc: "We maintain a fleet of well-maintained vehicles and employ skilled, professional drivers who prioritize the well-being of passengers. Timeliness, reliability, and the comfort of our passengers are at the forefront of our service.",
  },
  {
    icon: Users,
    title: "A trusted, hassle-free partner",
    desc: "By choosing our Employee Transportation service, businesses can focus on their core operations while leaving the travel management to us — a comprehensive, hassle-free solution that contributes to cost savings, reduced environmental impact, and a positive corporate image.",
  },
];

const features = [
  { icon: Radar, title: "GPRS Tracking System", desc: "Tracking system in every vehicle." },
  { icon: Receipt, title: "Monthly Billing", desc: "Monthly billing on actual KMs used by the client." },
  { icon: Percent, title: "Discounts", desc: "Discounts on toll and cantonment charges." },
  { icon: Truck, title: "Deployment", desc: "Deployment of a back-up vehicle at short notice." },
  { icon: UserCog, title: "Dedicated Supervisor", desc: "Dedicated supervisor at the client's location for all kinds of support." },
];

export default function EmployeeTransport() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-paper py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono text-xs uppercase mb-2 text-amber">Services</p>
            <h1 className="font-display font-semibold text-4xl max-w-xl mb-4">
              Our Employee Transportation Services
            </h1>
            <p className="text-amber italic mb-6">
              "Traveling with Confidence, Working with Ease."
            </p>
            <p className="max-w-md text-paper/75 text-sm leading-relaxed">
              Daily employee transportation contracts for offices across Bengaluru — sedans for small teams,
              tempo travellers and buses for full shifts.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-paper/10">
            <img
              src={heroImg}
              alt="Employee transportation bus interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-6">
        {points.map((p) => (
          <div key={p.title} className="p-5 border border-paperDeep rounded">
            <p.icon size={22} className="text-laterite" />
            <h3 className="mt-4 font-semibold text-sm">{p.title}</h3>
            <p className="text-xs mt-1 text-ink/70">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* Full description */}
      <section className="bg-paper py-16 px-6 border-t border-paperDeep">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-wide text-laterite mb-2">Our Commitment</p>
          <h2 className="font-display font-semibold text-3xl mb-4 max-w-lg">
            Efficient transportation is a key ingredient for a thriving workforce.
          </h2>
          <p className="text-sm text-ink/60 max-w-2xl mb-10">
            Our goal is to be a trusted partner in ensuring employees reach their workplaces without any
            transportation-related concerns.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {commitments.map((c) => (
              <div key={c.title} className="flex gap-4 p-6 border border-paperDeep rounded-lg bg-ink/[0.02]">
                <c.icon size={22} className="text-laterite shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-sm mb-2">{c.title}</h3>
                  <p className="text-xs text-ink/70 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="bg-paper py-16 px-6 border-t border-paperDeep">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-wide text-laterite mb-2">Why Choose Us</p>
          <h2 className="font-display font-semibold text-3xl mb-10">
            Built for reliable daily commutes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-5 border border-paperDeep rounded-lg bg-ink/[0.02]">
                <f.icon size={22} className="text-laterite" />
                <h3 className="mt-4 font-semibold text-sm">{f.title}</h3>
                <p className="text-xs mt-1 text-ink/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-ink text-paper py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-semibold text-2xl mb-4">Get a transport contract quote</h2>
            <p className="text-sm text-paper/70">
              Tell us your headcount, shift timings, and pickup zones.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}