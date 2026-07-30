import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";

const heroPhotoUrl =
  "https://images.pexels.com/photos/6871900/pexels-photo-6871900.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const menuByCategory = {
  "Indian Favourites": [
    ["Shahi Paneer", "220"],
    ["Kadai Paneer", "250"],
    ["Paneer Butter Masala", "250"],
    ["Dal Makhani", "180"],
    ["Sanjha Chulla Special Paneer", "320"],
    ["Jeera Aloo", "180"],
  ],
  Snacks: [
    ["Paneer Tikka", "250"],
    ["Mushroom Tikka", "240"],
    ["Tandoori Salad", "240"],
    ["Veg Seekh Kebab", "250"],
    ["Cheese Seekh Kebab", "290"],
    ["Tandoori Platter", "550"],
  ],
  "Chinese Snacks": [
    ["French Fries", "140"],
    ["Spring Roll", "150"],
    ["Chilli Paneer", "200"],
    ["Manchurian", "250"],
    ["Cheese Noodles", "220"],
    ["Veg Sizzler", "520"],
  ],
  "Breakfast + Soups": [
    ["Aloo Parantha", "70"],
    ["Gobhi Parantha", "70"],
    ["Paneer Parantha", "90"],
    ["Veg Pakora", "140"],
    ["Veg Sweet Corn Soup", "100"],
    ["Tomato Soup", "100"],
  ],
};

const reviewHighlights = [
  "Family gathering friendly",
  "Cleanliness praised",
  "Reasonable pricing",
  "Strong menu variety",
  "Good highway stop",
  "Fast service in many reviews",
];

const guestVoices = [
  "Such a nice place to spend quality time with friends and family.",
  "Beautiful place serving good quality food. Perfect place for meals.",
  "Good food and service, nice atmosphere.",
  "A good stop on the way to Paonta Sahib with nice aloo and paneer paranthas.",
];

const services = [
  "Dine-in",
  "Drive-through",
  "No-contact delivery",
  "Takeaway",
  "Outdoor seating",
  "Private dining room",
  "Free Wi-Fi",
  "Wheelchair-accessible seating",
  "Plenty of parking",
  "Good for kids birthday",
];

const galleryPhotos = [
  {
    url: "https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    alt: "Traditional Indian thali with naan and paneer curry",
  },
  {
    url: "https://images.pexels.com/photos/31249593/pexels-photo-31249593.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    alt: "Indoor restaurant with warm evening dining atmosphere",
  },
  {
    url: "https://images.pexels.com/photos/6876621/pexels-photo-6876621.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    alt: "Restaurant seating and cozy table arrangement",
  },
  {
    url: "https://images.pexels.com/photos/12181619/pexels-photo-12181619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    alt: "Guests enjoying dinner at a lively restaurant",
  },
  {
    url: "https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    alt: "Serving a festive Indian thali meal",
  },
  {
    url: "https://images.pexels.com/photos/279768/pexels-photo-279768.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    alt: "Warmly lit restaurant interior with wooden seating",
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuByCategory>("Indian Favourites");
  const [reservationStatus, setReservationStatus] = useState("");
  const [freelanceStatus, setFreelanceStatus] = useState("");
  const [freelanceName, setFreelanceName] = useState("");
  const [freelanceNeed, setFreelanceNeed] = useState("Food Photography");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const freelanceLink = useMemo(() => {
    const text = `Hello Sanjha Chulla Team, I am ${freelanceName || "a local business owner"}. I want to discuss ${freelanceNeed} collaboration.`;
    return `https://wa.me/917027000068?text=${encodeURIComponent(text)}`;
  }, [freelanceName, freelanceNeed]);

  const onReserve = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const guests = formData.get("guests");
    setReservationStatus(`Table request saved for ${name} (${guests} guests). Please confirm on 070270 00068.`);
    event.currentTarget.reset();
  };

  const onFreelance = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFreelanceStatus("Freelance inquiry ready. Tap WhatsApp to send your details instantly.");
  };

  return (
    <div className="bg-[#fff8f0] pb-20 text-[#2a1609] md:pb-0">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-[#1f1008]/75 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 text-[#ffeed6] sm:px-6">
          <div>
            <p className="text-lg font-bold tracking-wide sm:text-xl">Sanjha Chulla</p>
            <p className="text-xs sm:text-sm">साँझा चुल्हा</p>
          </div>
          <div className="hidden items-center gap-3 text-sm font-medium sm:flex">
            <a className="rounded-full border border-[#ffd7aa]/40 px-4 py-2 transition hover:bg-[#ffd7aa]/20" href="tel:+917027000068">
              Call
            </a>
            <a
              className="rounded-full bg-[#ef7b24] px-4 py-2 text-white transition hover:bg-[#dc6512]"
              href="https://maps.google.com/?q=69VF+F5+Chhachhrauli,+Haryana"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28">
          <motion.img
            src={heroPhotoUrl}
            alt="Sanjha Chulla dining ambience"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.14 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1008]/90 via-[#1e1008]/72 to-[#1e1008]/58" />
          <motion.div
            className="relative mx-auto w-full max-w-6xl px-4 text-[#fff3e2] sm:px-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-sm tracking-[0.2em] text-[#ffd6a5] sm:text-base">CHHACHHRAULI, HARYANA</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] sm:text-5xl md:text-7xl">Sanjha Chulla</h1>
            <p className="mt-2 text-2xl font-semibold text-[#ffe6c8] sm:text-3xl">साँझा चुल्हा</p>
            <p className="mt-5 max-w-2xl text-base text-[#fff2e2] sm:text-lg md:text-xl">
              World-class highway dining for breakfast, lunch, dinner, and celebrations with pure vegetarian Punjabi taste, trusted value, and welcoming atmosphere.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="w-full rounded-full bg-[#ef7b24] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#dc6512] sm:w-auto" href="#reserve">
                Reserve A Table
              </a>
              <a className="w-full rounded-full border border-[#ffd7aa] px-6 py-3 text-center font-semibold transition hover:bg-[#ffd7aa]/10 sm:w-auto" href="#menu">
                Explore Menu
              </a>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Reputation Built On Real Guest Feedback</h2>
          <p className="mt-2 max-w-3xl text-[#714c2f]">
            Rated 4.0 from 1,162 reviews. Guests repeatedly mention cleanliness, ambience, family comfort, and value-for-money pricing.
          </p>
          <motion.div
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-lg text-[#3a220f]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            {reviewHighlights.map((point) => (
              <p key={point} className="border-b border-[#e8d1b6] pb-2">
                {point}
              </p>
            ))}
          </motion.div>
        </section>

        <section className="bg-[#fff2e0] py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold md:text-4xl">Gallery</h2>
            <p className="mt-2 max-w-3xl text-[#714c2f]">
              Real web photos that match the dining style, menu mood, and ambience expected by guests.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {galleryPhotos.map((photo, index) => (
                <motion.button
                  key={photo.url}
                  type="button"
                  className="relative h-36 overflow-hidden md:h-56"
                  onClick={() => setSelectedPhoto(index)}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <img src={photo.url} alt={photo.alt} className="h-full w-full object-cover transition duration-300 hover:scale-105" loading="lazy" />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="bg-[#2a1609] py-14 text-[#fff1df] md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold md:text-4xl">Menu Preview With Popular Price Range</h2>
            <p className="mt-2 max-w-2xl text-[#ffd7aa]">Designed from your shared menu details. Typical spend remains around Rs. 200-400 per person.</p>

            <div className="mt-8 rounded-2xl border border-[#5a3a25] bg-[#321b0c] p-4 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {(Object.keys(menuByCategory) as Array<keyof typeof menuByCategory>).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeCategory === category ? "bg-[#ef7b24] text-white" : "bg-[#4a2b17] text-[#ffe2bf] hover:bg-[#5a351d]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <motion.div
                key={activeCategory}
                className="mt-6 grid gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                {menuByCategory[activeCategory].map(([item, price]) => (
                  <div key={item} className="flex items-end justify-between border-b border-[#684630] pb-3">
                    <p className="text-base sm:text-lg">{item}</p>
                    <p className="text-base font-semibold text-[#ffd7aa]">Rs. {price}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Guest Voices</h2>
          <p className="mt-2 text-[#714c2f]">A balanced, transparent experience: mostly strong ambience and food value, with peak-hour service variation in some reviews.</p>
          <div className="mt-8 space-y-5">
            {guestVoices.map((line, index) => (
              <motion.blockquote
                key={line}
                className="border-l-4 border-[#ef7b24] pl-4 text-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                "{line}"
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section className="bg-[#fff2e0] py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold md:text-4xl">Comfort, Access, And Convenience</h2>
            <p className="mt-2 max-w-3xl text-[#714c2f]">Everything needed for families, tourists, and local groups, including accessibility, table service, and parking options.</p>
            <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
              {services.map((service, index) => (
                <motion.p
                  key={service}
                  className="border-b border-[#dfc4a2] pb-3 text-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  {service}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        <section id="reserve" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Reserve For Family Meals And Group Gatherings</h2>
          <p className="mt-2 max-w-3xl text-[#714c2f]">For birthdays, travel breaks, and dinner reservations. Submit details and confirm quickly on call.</p>
          <form onSubmit={onReserve} className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-xl shadow-[#3a1f0d]/10">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Name</span>
              <input name="name" required className="w-full rounded-lg border border-[#d7c2a8] px-3 py-2.5 text-base" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Phone</span>
              <input name="phone" required className="w-full rounded-lg border border-[#d7c2a8] px-3 py-2.5 text-base" placeholder="Your phone number" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Guests</span>
                <input name="guests" type="number" min={1} required className="w-full rounded-lg border border-[#d7c2a8] px-3 py-2.5 text-base" placeholder="4" />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Time</span>
                <input name="time" type="time" required className="w-full rounded-lg border border-[#d7c2a8] px-3 py-2.5 text-base" />
              </label>
            </div>
            <button type="submit" className="w-full rounded-full bg-[#ef7b24] px-5 py-3 font-semibold text-white transition hover:bg-[#dc6512]">
              Send Reservation Request
            </button>
            {reservationStatus ? <p className="text-sm text-[#1a7f37]">{reservationStatus}</p> : null}
          </form>
        </section>

        <section id="freelance" className="bg-[#2a1609] py-14 text-[#fff1df] md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold md:text-4xl">Freelance Collaboration Desk</h2>
            <p className="mt-2 max-w-3xl text-[#ffd7aa]">
              For creators and agencies: food photography, menu design, social content, and local campaign partnerships around Sanjha Chulla.
            </p>
            <form onSubmit={onFreelance} className="mt-8 grid gap-4 rounded-2xl bg-[#fff7eb] p-6 text-[#2a1609] shadow-xl shadow-black/20 md:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Your Name</span>
                <input
                  value={freelanceName}
                  onChange={(event) => setFreelanceName(event.target.value)}
                  required
                  className="w-full rounded-lg border border-[#d7c2a8] px-3 py-2.5 text-base"
                  placeholder="Freelancer or business name"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Project Type</span>
                <select
                  value={freelanceNeed}
                  onChange={(event) => setFreelanceNeed(event.target.value)}
                  className="w-full rounded-lg border border-[#d7c2a8] px-3 py-2.5 text-base"
                >
                  <option>Food Photography</option>
                  <option>Menu Design Freelance</option>
                  <option>Social Media Reels</option>
                  <option>Festival Catering Campaign</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="mb-1 block text-sm font-medium">Project Brief</span>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-lg border border-[#d7c2a8] px-3 py-2.5 text-base"
                  placeholder="Write timeline, deliverables, and expected output"
                />
              </label>
              <div className="flex flex-wrap items-center gap-3 md:col-span-2">
                <button type="submit" className="rounded-full bg-[#2a1609] px-5 py-3 font-semibold text-[#fff1df] transition hover:bg-[#472610]">
                  Save Inquiry
                </button>
                <a href={freelanceLink} target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-5 py-3 font-semibold text-[#103f23] transition hover:bg-[#18be56]">
                  Send on WhatsApp
                </a>
              </div>
              {freelanceStatus ? <p className="text-sm text-[#1a7f37] md:col-span-2">{freelanceStatus}</p> : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#1f1008] py-10 text-[#ffe5c1]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>Sanjha Chulla, Chhachhrauli, Haryana 135103 | Open till 11 PM</p>
          <p>Phone: 070270 00068 | Plus Code: 69VF+F5</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d9b48d] bg-[#fff3e3]/95 p-3 backdrop-blur sm:hidden">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-2 text-center text-sm font-semibold">
          <a href="tel:+917027000068" className="rounded-full border border-[#2f1707]/20 px-2 py-2 text-[#2f1707]">
            Call
          </a>
          <a href="#reserve" className="rounded-full bg-[#ef7b24] px-2 py-2 text-white">
            Reserve
          </a>
          <a
            href="https://maps.google.com/?q=69VF+F5+Chhachhrauli,+Haryana"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#2f1707]/20 px-2 py-2 text-[#2f1707]"
          >
            Route
          </a>
        </div>
      </div>

      {selectedPhoto !== null ? (
        <div className="fixed inset-0 z-[70] bg-black/90 p-4" onClick={() => setSelectedPhoto(null)}>
          <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-center">
            <img
              src={galleryPhotos[selectedPhoto].url}
              alt={galleryPhotos[selectedPhoto].alt}
              className="max-h-[86vh] w-full object-contain"
            />
          </div>
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-4 top-4 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white"
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}