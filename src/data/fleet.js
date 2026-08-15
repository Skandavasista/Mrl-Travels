// src/data/fleet.js

import Innova1 from "../assets/Innova1.jpg";
import Innova2 from "../assets/Innova2.jpg";
import Innova3 from "../assets/Innova3.jpg";
import Innova4 from "../assets/Innova4.jpg";
import InnovaCrysta from "../assets/InnovaCrysta.jpg";

import EtiosBanner from "../assets/EtiosBanner.jpg";
import ErtigaBanner from "../assets/ErtigaBanner.jpg";
import MiniBusBanner from "../assets/MiniBusBanner.jpg";
import TT12Banner from "../assets/TT12Banner.jpg";
import TTLuxury9 from "../assets/TTLuxury9Banner.jpg";
import TTLuxury12 from "../assets/TTLuxury12Banner.jpg";
import Urbania16Banner from "../assets/Urbania16Banner.jpg";
import Urbania12 from "../assets/Urbania12.jpg";

import Etios1 from "../assets/Etios1.jpg";
import Etios2 from "../assets/Etios2.jpg";
import Etios3 from "../assets/Etios3.jpg";
import Etios4 from "../assets/Etios4.jpg";

import Ertiga1 from "../assets/Ertiga1.jpg";
import Ertiga2 from "../assets/Ertiga2.jpg";
import Ertiga3 from "../assets/Ertiga3.jpg";
import Ertiga4 from "../assets/Ertiga4.jpg";

import TTLux92 from "../assets/TTLux92.jpg";
import TTLux93 from "../assets/TTLux93.jpg";
import TTLux94 from "../assets/TTLux94.jpg";

import Van211 from "../assets/Van211.jpg";
import Van212 from "../assets/Van212.jpg";
import Van213 from "../assets/Van213.jpg";
import Van214 from "../assets/Van214.jpg";

import TTDel91 from "../assets/TTDel91.jpg";
import TTDel92 from "../assets/TTDel92.jpg";

import TTLux121 from "../assets/TTLux121.jpg";
import TTLux122 from "../assets/TTLux122.jpg";
import TTLux123 from "../assets/TTLux123.jpg";
import TTLux124 from "../assets/TTLux124.jpg";

import UrbaniaLux161 from "../assets/UrbaniaLux161.jpg";
import UrbaniaLux162 from "../assets/UrbaniaLux162.jpg";
import UrbaniaLux163 from "../assets/UrbaniaLux163.jpg";
import UrbaniaLux164 from "../assets/UrbaniaLux164.jpg";

import UrbaniaLux101 from "../assets/UrbaniaLux101.jpg";
import UrbaniaLux102 from "../assets/UrbaniaLux102.jpg";
import UrbaniaLux104 from "../assets/UrbaniaLux104.jpg";





export const fleet = [
  {
    slug: "swift-dzire",
    name: "Maruti Swift Dzire",
    seats: 4,
    luggage: 2,
    price: 1099,
    type: "Sedan",
    // images: [swiftDzire],
    pricing: [
      { slab: "4hrs 40Kms", price: 1099 },
      { slab: "8hrs 80Kms", price: 1899 },
      { slab: "12hrs 100Kms", price: 2599 },
      { slab: "Out Station / Kms", price: 13 },
      { slab: "Driver Bata", price: 300 },
      { slab: "After Hrs Driver Bata", price: 300 },
      { slab: "Extra Per Kms", price: 13 },
      { slab: "Extra Per Hours", price: 150 },
    ],
    description:
      "The Swift Dzire is our most-booked sedan for airport transfers and short city trips — compact, fuel-efficient, and quick through Bangalore traffic. Comes with a professional driver, fuel, and all tolls included.",
  },
  {
    slug: "toyota-etios",
    name: "Toyota Etios",
    seats: 4,
    luggage: 2,
    price: 1300,
    type: "Sedan",
    image : EtiosBanner,
    images: [Etios1,Etios2,Etios3,Etios4],
    pricing: [
      { slab: "4hrs 40Kms", price: 1300 },
      { slab: "8hrs 80Kms", price: 2199 },
      { slab: "12hrs 100Kms", price: 2999 },
      { slab: "Out Station / Kms", price: 14 },
      { slab: "Driver Bata", price: 350 },
      { slab: "After Hrs Driver Bata", price: 350 },
      { slab: "Extra Per Kms", price: 14 },
      { slab: "Extra Per Hours", price: 160 },
    ],
    features: [
      "Compact, sleek sedan built for Bangalore roads",
      "Controlled air conditioning",
      "GPS tracking with Wi-Fi on board",
      "Spacious leg room and large boot space",
      "Comfortably fits a family of 4 or a small group",
    ],
    description:
      "A roomier, smoother ride than the Dzire — good pick for longer local trips or when your group needs a bit more legroom without stepping up to an SUV. Built with smooth suspension and strong road grip for Bangalore's roads.",
    content: [
      {
        heading: "Why MRL Travels for Toyota Etios",
        body: "The Toyota Etios is one of our highest-booked sedans — a compact, well-built car with classy interiors and a smooth ride, whether you need a quick airport drop or a full day of local sightseeing. Booking is simple: pick the Etios, block your date and destination, check availability, and you're confirmed — no back-and-forth calls needed. Billing is fully transparent, with no hidden charges added after the fact.",
      },
      {
        heading: "Airport Transfers",
        body: "For a swift, efficient airport pickup or drop, the Etios is a strong option — solo, as a family of four, or with a couple of colleagues. It offers comfortable seating with good leg room and a boot space that easily fits a large trolley bag plus two medium suitcases. Note: pricing here isn't comparable to one-way local taxi services like Ola or Uber, since this covers a full block of hours/kms rather than a single point-to-point ride.",
      },
      {
        heading: "Outstation Tours",
        body: "The Etios is built to handle Indian roads comfortably over longer distances, with smooth suspension and solid road grip. Drivers are trained to handle varying weather and terrain, and are known for being courteous and knowledgeable about local sightseeing spots — useful on long destination drives where you want a few good stops along the way.",
      },
      {
        heading: "All-Inclusive, No Hidden Charges",
        body: "The quoted price is the only amount you pay. It includes the driver fee, parking charges during sightseeing stops, toll charges for the full journey, and inter-state check-post and road tax costs — all bundled into one transparent fare.",
      },
    ],
    contact: {
      phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
      email: "info2mrltravels@gmail.com",
    },
  },
  {
    slug: "innova-hycross",
    name: "Innova Hycross",
    seats: 6,
    luggage: 4,
    price: 2499,
    type: "SUV",
    // images: [innovaHycross],
    pricing: [
      { slab: "4hrs 40Kms", price: 2499 },
      { slab: "8hrs 80Kms", price: 3999 },
      { slab: "12hrs 100Kms", price: 5799 },
      { slab: "Out Station / Kms", price: 22 },
      { slab: "Driver Bata", price: 400 },
      { slab: "After Hrs Driver Bata", price: 400 },
      { slab: "Extra Per Kms", price: 22 },
      { slab: "Extra Per Hours", price: 250 },
    ],
    description:
      "The newest addition to our fleet — captain seats, a hybrid engine, and a plush cabin built for premium corporate travel and family outstation trips.",
  },
  {
  slug: "innova-crysta",
  name: "Innova Crysta",
  seats: 7,
  smallBags: 4,
  bigBags: 5,
  price: 2199,
  type: "SUV",
  image : InnovaCrysta,
  images: [Innova1,Innova2,Innova3,Innova4],
  pricing: [
    { slab: "4hrs 40Kms", price: 2199 },
    { slab: "8hrs 80Kms", price: 3499 },
    { slab: "12hrs 100Kms", price: 5199 },
    { slab: "Out Station / Kms", price: 20 },
    { slab: "Driver Bata", price: 400 },
    { slab: "After Hrs Driver Bata", price: 400 },
    { slab: "Extra Per Kms", price: 20 },
    { slab: "Extra Per Hours", price: 250 },
  ],
  features: [
    "Air bags on all seats, power windows, ABS",
    "Automatic climate control",
    "Premium leather seating",
    "Surround sound & entertainment system",
    "~300 litre boot space",
  ],
  description:
    "Innova Crysta at MRL Travels, Bangalore promises the most affordable, luxurious & comfortable travel experience — for local and outstation tours, corporate team outings, and more. Guaranteed lowest rates, easy online booking, no hidden charges.",
  content: [
    {
      heading: "Why MRL Travels for Innova Crysta",
      body: "For almost 20 years, MRL Travels has served customers across the country — not just satisfied, but delighted with the service. Booking is simple: choose Innova Crysta, block your journey date and destination, check availability, and you're done — no more calling and waiting for confirmation. Billing is fully transparent: what you see is what you pay, with no hidden charges or extra bills.",
    },
    {
      heading: "Airport Transfers",
      body: "Innova Crysta is rated among the highest-booked vehicles for airport transfers in Bangalore, known for punctuality and customer loyalty. MRL Travels offers 24-hour airport transfers with door pickup & drop, and hassle-free online booking with transparent billing. The SUV comfortably seats 7+1 passengers — ideal for mid-sized families and corporate teams travelling together instead of booking multiple cabs. With a boot space of roughly 300 litres, it easily fits 3 large suitcases plus several travel bags. Note: pricing here isn't comparable to one-way local taxi services like Ola or Uber, since this covers a full block of hours/kms.",
    },
    {
      heading: "Outstation Tours",
      body: "MRL Travels focuses on the lowest price without compromising quality, reliability, or safety — important for long-distance getaways. The Innova Crysta comes equipped with airbags on all seats, power windows, and an anti-locking brake system, along with automatic climate control for a smooth ride. Premium leather seating offers lounge-like comfort, and a surround sound & entertainment system keeps passengers engaged throughout the journey — built for families or teams travelling together.",
    },

    {
      heading: "All-Inclusive, No Hidden Charges",
      body: "The quoted price is the only amount you pay — nothing more during the journey. This includes the driver fee (with drivers trained to handle all weather conditions and terrains), parking fees during sightseeing stops, toll charges throughout the trip, and interstate check-post/road tax costs. Everything is bundled into one transparent fare.",
    },
    {
      heading: "Monthly & Long-Term Rental",
      body: "MRL Travels offers an exclusive monthly or long-term lease option for doctors, business owners, and overseas clients — ideal for professionals attending conferences or business summits, or clients working on extended projects in Bangalore. Rather than booking a new cab each week and dealing with different agencies and drivers, this option lets you keep the same Innova Crysta and the same driver for the full duration, subject to availability — with stable pricing and consistent, courteous service throughout.",
    },
  ],
  contact: {
    phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
    email: "info2mrltravels@gmail.com",
  },
},
  {
    slug: "ertiga",
    name: "Ertiga",
    seats: 7,
    luggage: 3,
    price: 1400,
    type: "SUV",
    image: ErtigaBanner,
    images: [Ertiga1,Ertiga2,Ertiga3,Ertiga4],
    pricing: [
      { slab: "4hrs 40Kms", price: 1400 },
      { slab: "8hrs 80Kms", price: 2600 },
      { slab: "Out Station / Kms", price: 16 },
      { slab: "Driver Bata", price: 400 },
      { slab: "After Hrs Driver Bata", price: 400 },
      { slab: "Extra Per Kms", price: 16 },
      { slab: "Extra Per Hours", price: 200 },
    ],
    features: [
      "Seats up to 7 passengers comfortably",
      "Spacious, family-friendly cabin",
      "Carrier provision for additional luggage",
      "Well-suited for both city trips and long outstation drives",
    ],
    description:
      "A practical 7-seater for family trips and small group outstation travel, balancing comfort and running cost better than a full-size SUV. Known for reliability, with a spacious cabin built for families and longer journeys.",
    content: [
      {
        heading: "Why MRL Travels for Ertiga",
        body: "The Maruti Ertiga is well known for reliability and offers a safe, comfortable, and trouble-free ride for trips in and around Bangalore as well as longer outstation journeys. You can start your booking online to check pricing and availability for daily or weekly rentals, or call in with any questions.",
      },
      {
        heading: "Outstation Travel",
        body: "Rent the Ertiga for outstation trips from Bangalore with economical, high-running-km packages built for longer travel needs.",
      },
      {
        heading: "Intercity Travel",
        body: "Whether it's local sightseeing, a railway station transfer, or a business meeting, the Ertiga comfortably seats up to 7 passengers — a solid fit for families and longer trips alike.",
      },
      {
        heading: "Airport Transfers",
        body: "Pickup from the airport or drop-off, including round trips, offered at a straightforward price. Every vehicle has provision for carriers to handle additional luggage.",
      },
    ],
    contact: {
      phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
      email: "info2mrltravels@gmail.com",
    },
  },
  {
    slug: "tempo-traveller-luxury-9",
    name: "Tempo Traveller Luxury (9 Seater)",
    seats: 9,
    luggage: 9,
    price: 3999,
    type: "Van",
    image : TTLuxury9,
    images: [TTLux92,TTLux93,TTLux94],
    pricing: [
      { slab: "4hrs 40Kms", price: 3999 },
      { slab: "8hrs 80Kms", price: 5499 },
      { slab: "12hrs 100Kms", price: 8299 },
      { slab: "Out Station / Kms", price: 32 },
      { slab: "Driver Bata", price: 600 },
      { slab: "After Hrs Driver Bata", price: 600 },
      { slab: "Extra Per Kms", price: 32 },
      { slab: "Extra Per Hours", price: 400 },
    ],
    features: [
      "1+1 luxury seating with large cushioned, push-back recliners",
      "Surround sound system with LED screens",
      "Central air-cooling with strong wheel suspension",
      "GPS navigation, Wi-Fi, and charging points on board",
      "Enclosed, spacious roof luggage compartment",
    ],
    description:
      "A classy, sophisticated luxury van built for comfort — well suited for family outstation tours, weekend getaways, office team outings, wedding rentals, and business conferences.",
    content: [
      {
        heading: "Why MRL Travels for Tempo Traveller Luxury 9 Seater",
        body: "Family tour or corporate outing, price and comfort shouldn't have to be a trade-off. Our all-inclusive rates on the Luxury Tempo Traveller are among the lowest for this class of vehicle in Bangalore, without cutting corners on comfort or sophistication.",
      },
      {
        heading: "Luxury, Hi-Tech Fittings",
        body: "This is a step up from a standard Tempo Traveller — a clean, hygienic, late-model 1+1 luxury van with large cushioned seats and push-back recliners for a relaxing ride. The custom fittings are done by Josh Fittings, a leading name in vehicle customization in India, and the last row features extra-long seats designed for passengers who want more room to rest.",
      },
      {
        heading: "Comfort & Entertainment On Board",
        body: "Spacious legroom and headroom throughout, a high-end surround sound system with LED screens, a central air-cooling system, and strong wheel suspension for a smooth ride. GPS navigation, Wi-Fi, charging points, and first-aid equipment come standard — plus an enclosed, spacious roof luggage compartment so bags never eat into passenger space.",
      },
      {
        heading: "Well-Groomed, Professional Drivers",
        body: "Drivers for the Luxury Tempo Traveller are specially trained and well-groomed, experienced with elite clientele, and known for being courteous and well-educated.",
      },
      {
        heading: "All-Inclusive, No Hidden Charges",
        body: "The quoted price is the only amount you pay — nothing more during the journey. It includes the driver fee, parking charges during sightseeing stops, toll charges for the full route, inter-state check-post costs, and road tax, all bundled into one transparent fare.",
      },
    ],
    contact: {
      phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
      email: "info2mrltravels@gmail.com",
    },
  },
  {
    slug: "mini-bus-21",
    name: "Mini Bus 21 Seater (AC)",
    seats: 21,
    luggage: 15,
    price: 5000,
    type: "Bus",
    image : MiniBusBanner,

    images: [Van211,Van212,Van213,Van214],
    pricing: [
      { slab: "4hrs 40Kms", price: 5000 },
      { slab: "8hrs 80Kms", price: 7500 },
      { slab: "12hrs 100Kms", price: 9500 },
      { slab: "Out Station / Kms", price: 40 },
      { slab: "Driver Bata", price: 700 },
      { slab: "After Hrs Driver Bata", price: 700 },
      { slab: "Extra Per Kms", price: 40 },
      { slab: "Extra Per Hours", price: 500 },
    ],
    features: [
      "Cushioned recliner seating throughout",
      "Centralized cooling system",
      "Surround sound system with LED screen",
      "Charging points and reading lamps at every aisle",
      "Curtains and an onboard safety aid box",
    ],
    description:
      "AC mini bus built for larger corporate groups, school trips, and wedding parties who need everyone travelling together — a deluxe, customized coach for 21+ passengers with good headroom and legroom throughout.",
    content: [
      {
        heading: "Why MRL Travels for Mini Bus 21 Seater AC",
        body: "Backed by almost 20 years of service in Bangalore, our 21 Seater Minibus AC is customized for comfort and luxury with high-end safety standards, at all-inclusive rates that stay competitive against other minibus rentals in the city.",
      },
      {
        heading: "Built for Large Groups",
        body: "A strong fit for large family outings, outstation tours, office team trips, weddings and other functions, business conferences and seminars, college and school excursions, and religious events — anywhere a bigger group needs to travel together comfortably.",
      },
      {
        heading: "Comfort & Amenities On Board",
        body: "Classy exteriors with spacious interiors, cushioned recliner seats, a centralized cooling system, and a surround sound system with an LED screen. Every aisle has charging points and a reading lamp, plus curtains and a safety aid box on board.",
      },
      {
        heading: "All-Inclusive, No Hidden Charges",
        body: "The quoted price is the only amount you pay — nothing more during the journey. It includes the driver fee, parking charges during sightseeing stops, toll charges for the full route, inter-state check-post costs, and road tax, all bundled into one transparent fare.",
      },
    ],
    contact: {
      phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
      email: "info2mrltravels@gmail.com",
    },
  },
   {
    slug: "tempo-traveller-deluxe-12",
    name: "Tempo Traveller Deluxe 12 Seater",
    seats: 11,
    luggage: 10,
    price: 2999,
    type: "Van",
    image : TT12Banner,
    images: [TTDel91,TTDel92],
    pricing: [
      { slab: "4hrs 40Kms", price: 2999 },
      { slab: "8hrs 80Kms", price: 4499 },
      { slab: "12hrs 100Kms", price: 6999 },
      { slab: "Out Station / Kms", price: 25 },
      { slab: "Driver Bata", price: 600 },
      { slab: "After Hrs Driver Bata", price: 600 },
      { slab: "Extra Per Kms", price: 25 },
      { slab: "Extra Per Hours", price: 320 },
    ],
    features: [
      "Sturdy exterior with spacious, classy interiors",
      "Push-back seats with centralized cooling",
      "Hi-tech sound system and video screens",
      "Ample legroom and headroom for the full trip",
    ],
    description:
      "Extra headroom and luxury pushback seating for mid-sized groups travelling outstation in comfort — one of our highest-booked vehicles for weddings, office outings, and family getaways where everyone wants to travel together in one vehicle.",
    content: [
      {
        heading: "Why MRL Travels for Tempo Traveller Deluxe",
        body: "Our Tempo Traveller Deluxe 12 Seater is one of our most-booked vehicles, backed by 20 years of service across Bangalore. It's a well-maintained, clean, and hygienic option for groups who'd rather travel together in one vehicle than split across 2-3 separate cars.",
      },
      {
        heading: "Built for Comfortable Group Travel",
        body: "A sturdy exterior with spacious, classy interiors, ample legroom and headroom, and push-back seats paired with a centralized cooling system. Every vehicle comes equipped with a hi-tech sound system and video screens for a more enjoyable ride. It's a strong fit for weekend family getaways, local sightseeing, office team outings, outstation family tours, pilgrimages, college picnics, business conferences, or ferrying guests at a wedding.",
      },
      {
        heading: "Professional, Experienced Drivers",
        body: "Drivers are trained to handle all weather conditions and terrain across the country, and are known for being courteous and well-mannered throughout the journey.",
      },
      {
        heading: "All-Inclusive, No Hidden Charges",
        body: "The quoted price is the only amount you pay — nothing more during the journey. It includes the driver fee, parking charges during sightseeing stops, toll charges for the full route, inter-state check-post costs, and road tax, all bundled into one transparent fare.",
      },
    ],
    contact: {
      phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
      email: "info2mrltravels@gmail.com",
    },
  },
  {
  slug: "tempo-traveller-luxury-12",
  name: "Tempo Traveller Luxury 12 Seater",
  seats: 12,
  luggage: 10,
  price: 7000,
  type: "Van",
  image: TTLuxury12,
  images: [TTLux121,TTLux122,TTLux123,TTLux124],
  pricing: [
    { slab: "8hrs 80Kms", price: 7000 },
    { slab: "Out Station / Kms", price: 40 },
    { slab: "Driver Bata", price: 700 },
    { slab: "After Hrs Driver Bata", price: 700 },
    { slab: "Extra Per Kms", price: 40 },
    { slab: "Extra Per Hours", price: 400 },
  ],
  features: [
    "High-end leather seating with personal climate control",
    "Entertainment systems with AUX, Bluetooth, CD & USB support",
    "High-sound music systems with top-notch speakers",
    "Air conditioning and charging points for all passengers",
  ],
  description:
    "Making beautiful memories and unforgettable experiences as you travel in luxury with your family and friends — a private, intimate vehicle for groups who want a premium experience for business trips, family holidays, or special events.",
  content: [
    {
      heading: "Why MRL Travels for Tempo Traveller Luxury 12 Seater",
      body: "Travel in comfort with MRL Travels' 12 Seater Tempo Traveller, especially for journeys out of Bangalore. Backed by 20 years of service, we focus on making your entire journey relaxed and stress-free from start to finish.",
    },
    {
      heading: "High-End Comfort & Privacy",
      body: "Luxury 12-seater vehicles come with high-end leather seating, personal climate control, entertainment systems, Wi-Fi access, and cutting-edge audio systems. Travelling in a private vehicle also means you get a personal, intimate journey with your own family or group, without sharing the ride with strangers.",
    },
    {
      heading: "Built for Group Travel & Flexibility",
      body: "A luxury 12-seater is ideal for group travel occasions like business trips, family holidays, or special events. Having a private vehicle lets you set your own itinerary and travel to multiple locations at your own pace.",
    },
    {
      heading: "Skilled Chauffeur Assistance",
      body: "Our chauffeurs bring local knowledge, experience, and training, handling navigation, traffic, and parking so your trip stays secure, comfortable, and stress-free.",
    },
    {
      heading: "All-Inclusive, No Hidden Charges",
      body: "The quoted price is the only amount you pay — nothing more during the journey. It includes the driver fee, parking charges during sightseeing stops, toll charges for the full route, inter-state check-post costs, and road tax, all bundled into one transparent fare.",
    },
  ],
  contact: {
    phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
    email: "info2mrltravels@gmail.com",
  },
},
 {
  slug: "urbania-16d",
  name: "Urbania 16+D (AC)",
  seats: 16,
  luggage: 12,
  price: 7500,
  type: "Van",
  image: Urbania16Banner,
  images: [UrbaniaLux161,UrbaniaLux162,UrbaniaLux163,UrbaniaLux164],
  pricing: [
    { slab: "8hrs 80Kms", price: 7500 },
    { slab: "12hrs 100Kms", price: 11000 },
    { slab: "Out Station / Kms", price: 45 },
    { slab: "Driver Bata", price: 700 },
    { slab: "After Hrs Driver Bata", price: 700 },
    { slab: "Extra Per Kms", price: 45 },
    { slab: "Extra Per Hours", price: 500 },
  ],
  features: [
    "Individual AC vents with best-in-segment cabin & standing space",
    "Reclining seats with individual reading lamps and USB ports",
    "Sealed panoramic windows for a captivating outside view",
    "Hi-end surround sound system for premium entertainment",
    "World-class safety: Hill Hold Assist, ABS, ventilated disc brakes",
  ],
  description:
    "A state-of-the-art commuting experience for local & outstation tours and corporate team outings — MRL Travels is the first travel company in India to own a Force Urbania 16 Seater, guaranteeing the lowest rates with easy online booking and no hidden charges.",
  content: [
    {
      heading: "Why MRL Travels for Force Urbania Rental",
      body: "MRL Travels is the first travel company in India to own a Force Urbania 16 Seater. Built for sheer comfort, it's a perfect combination of dynamics and elegance, with muscular, spectacular exteriors that make a powerful impression wherever you go.",
    },
    {
      heading: "Top-End Comfort Features",
      body: "Individual AC vents, best-in-segment cabin and standing space, reclining seats with individual reading lamps and USB ports, and large sealed panoramic windows come together for a genuinely captivating ride for you and your passengers.",
    },
    {
      heading: "World-Class Safety & Climate Control",
      body: "Urbania is first-in-segment to comply with crash, rollover, and pedestrian safety regulations, backed by Hill Hold Assist, ABS, and wheel ventilated disc brakes. An air-conditioning and air quality control system automatically adjusts to external and internal conditions, and a hi-end surround sound system rounds out the experience.",
    },
    {
      heading: "Built for Every Occasion",
      body: "Ideal for an important corporate conference or seminar where you and your clients travel in luxury, and equally suited to weddings, family getaways, vacations with friends, or office team outings — whether it's a long-awaited outstation tour or a local rental.",
    },
    {
      heading: "Easy Booking, No Hidden Charges",
      body: "For the past 20 years, MRL Travels has served customers across the country with end-to-end value-added service. Just access the website, block the date and destination, and check availability — no need to call and wait for confirmation. Billing is fully transparent: what you see is what you pay, with all-inclusive lowest rates and no hidden charges or extra bills.",
    },
  ],
  contact: {
    phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
    email: "info2mrltravels@gmail.com",
  },
},
 {
  slug: "urbania-luxury-12d",
  name: "Urbania Luxury 12+D (AC)",
  seats: 12,
  luggage: 10,
  price: 8000,
  type: "Van",
  image: Urbania12,
  
  images: [UrbaniaLux101,UrbaniaLux102,UrbaniaLux104],
  pricing: [
    { slab: "8hrs 80Kms", price: 8000 },
    { slab: "Out Station / Kms", price: 60 },
    { slab: "Driver Bata", price: 700 },
    { slab: "After Hrs Driver Bata", price: 700 },
    { slab: "Extra Per Kms", price: 60 },
    { slab: "Extra Per Hours", price: 500 },
  ],
  features: [
    "Individual AC vents with best-in-segment cabin & standing space",
    "Reclining seats with individual reading lamps and USB ports",
    "Sealed panoramic windows for a captivating outside view",
    "Hi-end surround sound system for premium entertainment",
    "World-class safety: Hill Hold Assist, ABS, ventilated disc brakes",
  ],
  description:
    "A state-of-the-art commuting experience for local & outstation tours and corporate team outings — MRL Travels is the first travel company in India to own a Force Urbania, guaranteeing the lowest rates with easy online booking and no hidden charges.",
  content: [
    {
      heading: "Why MRL Travels for Force Urbania Rental",
      body: "MRL Travels is the first travel company in India to own a Force Urbania. Built for sheer comfort, it's a perfect combination of dynamics and elegance, with muscular, spectacular exteriors that make a powerful impression wherever you go.",
    },
    {
      heading: "Top-End Comfort Features",
      body: "Individual AC vents, best-in-segment cabin and standing space, reclining seats with individual reading lamps and USB ports, and large sealed panoramic windows come together for a genuinely captivating ride for you and your passengers.",
    },
    {
      heading: "World-Class Safety & Climate Control",
      body: "Urbania is first-in-segment to comply with crash, rollover, and pedestrian safety regulations, backed by Hill Hold Assist, ABS, and wheel ventilated disc brakes. An air-conditioning and air quality control system automatically adjusts to external and internal conditions, and a hi-end surround sound system rounds out the experience.",
    },
    {
      heading: "Built for Every Occasion",
      body: "Ideal for an important corporate conference or seminar where you and your clients travel in luxury, and equally suited to weddings, family getaways, vacations with friends, or office team outings — whether it's a long-awaited outstation tour or a local rental.",
    },
    {
      heading: "Easy Booking, No Hidden Charges",
      body: "For the past 20 years, MRL Travels has served customers across the country with end-to-end value-added service. Just access the website, block the date and destination, and check availability — no need to call and wait for confirmation. Billing is fully transparent: what you see is what you pay, with all-inclusive lowest rates and no hidden charges or extra bills.",
    },
  ],
  contact: {
    phones: ["+91 9900744836", "+91 8123671422", "+91 8031528770"],
    email: "info2mrltravels@gmail.com",
  },
},
];

export const fleetTypes = ["All", "Sedan", "SUV", "Van", "Bus"];