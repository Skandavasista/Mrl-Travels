# MRL Travels — React Redesign

A multi-page React app (Vite + React Router + Tailwind) rebuilding mrltravels.in
around a "route strip" design language — since the business sells fixed routes
and seat-based vehicles, not generic listings.

## Run it

```bash
npm install
npm run dev
```

Then open the printed localhost URL. `npm run build` produces a production
build in `dist/`.

## Structure

```
src/
  components/    Header, Footer, RouteStrip (signature graphic),
                  VehicleCard, BookingForm — all reused across pages
  data/           fleet.js and routes.js — edit these to add/change
                  vehicles or tour packages, no JSX required
  pages/          Home, Packages, PackageDetail (dynamic /packages/:slug),
                  Fleet, VehicleDetail (dynamic /fleet/:slug),
                  EmployeeTransport, Contact
  App.jsx         Route table
  index.css       Tailwind + global resets
tailwind.config.js  Brand color/font tokens (ink, laterite, nilgiri, paper, amber)
```

## Design tokens

| Token       | Hex       | Use                                  |
|-------------|-----------|---------------------------------------|
| ink         | #1E2A22   | Dark sections, nav, footer text base  |
| laterite    | #A6472B   | Primary CTA, price highlight          |
| nilgiri     | #3F6B4A   | Secondary accent (tags, labels)       |
| paper       | #EDEEE6   | Light background                      |
| amber       | #D99A2B   | Sparing highlight (eyebrow text, dots)|

Fonts: **Fraunces** (display/headlines), **Work Sans** (body), **IBM Plex Mono**
(prices, distances, km markers — reads like highway signage/dashboard data).

## Next steps to make this production-ready

1. **Wire the booking form** (`src/components/BookingForm.jsx`) to a real
   endpoint — currently it only logs to console. Formspree, a serverless
   function, or your own backend all work.
2. **Replace icon placeholders with real photography** of the fleet and
   destinations — icons were used as stand-ins for images you don't have
   uploaded yet.
3. **Add more package/vehicle entries** by adding objects to
   `src/data/routes.js` / `src/data/fleet.js` — the detail pages are
   already dynamic and will pick them up automatically.
4. **Deploy**: `npm run build` then host `dist/` on Vercel, Netlify, or
   any static host.
