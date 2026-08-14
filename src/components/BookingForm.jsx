import { useState } from "react";
import { routes } from "../data/routes.js";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", destination: "", details: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to a real endpoint (e.g. Formspree, your own API, or an email service).
    console.log("Booking enquiry submitted:", form);
    setSent(true);
  }

  const fieldClass =
    "px-4 py-3 text-sm outline-none bg-inkSoft text-paper rounded-sm border border-paper/15 " +
    "placeholder:text-paper/40 transition-colors focus:border-amber focus:ring-1 focus:ring-amber/40";

  return (
    <div className="h-full rounded-xl border border-paper/10 bg-paper/[0.03] p-6 flex flex-col">
      <p className="font-mono text-xs tracking-[0.2em] uppercase mb-1 text-amber">
        Send an Enquiry
      </p>
      <p className="text-sm text-paper/60 mb-5">
        We usually reply within a few hours.
      </p>

      {sent ? (
        <div className="flex-1 flex items-center justify-center text-center text-sm text-paper/80">
          Thanks — we&apos;ve got your enquiry and will reply shortly with a quote.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={fieldClass}
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className={fieldClass}
          />
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            required
            className={fieldClass}
            style={{ color: form.destination ? "#F4F1EA" : "rgba(244,241,234,0.4)" }}
          >
            <option value="" style={{ color: "#111", backgroundColor: "#fff" }}>
              Select a destination
            </option>
            {routes.map((r) => (
              <option
                key={r.slug}
                value={r.name}
                style={{ color: "#111", backgroundColor: "#fff" }}
              >
                {r.name}
              </option>
            ))}
          </select>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="Tour details"
            rows={3}
            className={`${fieldClass} resize-none`}
          />
          <div className="flex-1" />
          <button
            type="submit"
            className="px-6 py-3 text-sm font-medium bg-laterite text-paper rounded-sm
                       transition-opacity hover:opacity-90 active:opacity-80"
          >
            Send Enquiry
          </button>
        </form>
      )}
    </div>
  );
}