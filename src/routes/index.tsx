import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroHenna from "@/assets/gallery/photo_35_2026-06-30_10-54-48.jpg";

const taglines = [
  "Where Every Hand Tells a Beautiful Story.",
  "Shaadi Ki Shuruaat, Khoobsurat Mehendi Ke Saath.",
  "Art That Lasts Beyond the Celebration.",
  "Designed to Make Your Big Day Beautiful.",
  "Beautiful Mehendi for Beautiful Memories"
];

const subheadings = [
  "Crafted with passion and precision, our mehendi designs add elegance, beauty, and lasting memories to your special day.",
  "Pyaar aur perfection ke saath banaye gaye hamare mehendi designs aapke special din ko aur bhi khoobsurat aur yaadgaar bana dete hain."
];
import artistPortrait from "@/assets/artist.png";

const galleryImagesData = import.meta.glob<{ default: string }>('../assets/gallery/*.jpg', { eager: true });
const galleryImages = Object.values(galleryImagesData).map((module) => module.default);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariam Mehendi Artist — Couture Bridal Mehndi" },
      {
        name: "description",
        content:
          "Bespoke bridal mehndi artistry. Mughal geometry meets modern minimalism. London-based, available for destination weddings worldwide.",
      },
      { property: "og:title", content: "Mariam Mehendi Artist — Couture Bridal Mehndi" },
      {
        property: "og:description",
        content:
          "Bespoke bridal mehndi artistry. Mughal geometry meets modern minimalism. London-based, available for destination weddings worldwide.",
      },
    ],
  }),
  component: Index,
});

const cities = ["Vaniyambadi", "Ambur", "Tirupathur", "Pernambut", "Omerabad", "Chennai", "Bangalore"];

const testimonials = [
  {
    quote:
      "Mariam's work is like calligraphy for the skin. The precision in her fine lines for my bridal set was breathtaking — every guest stopped to look.",
    name: "Anika Mehra",
    meta: "London Bride · June 2024",
  },
  {
    quote:
      "The stain was the deepest maroon I've ever seen. It lasted well into my honeymoon. Booking her was the easiest decision of the wedding.",
    name: "Sarah Al-Mansoori",
    meta: "Dubai Destination Wedding",
  },
  {
    quote:
      "She brought a quiet, ceremonial calm to my morning. The motifs she drew told my story — names, dates, the architecture of our first home.",
    name: "Priya Shah",
    meta: "Lake Como · 2023",
  },
];

const packages = [
  {
    title: "Bridal Mehendi",
    price: "₹1,999",
    travelCharges: "+ Travel charges depend on location",
    features: [
      "Traditional bridal mehendi up to elbows",
      "Feet up to ankles",
      "Complimentary consultation",
      "Premium organic henna"
    ],
    popular: true
  },
  {
    title: "Engagement Bride",
    price: "₹1,699",
    travelCharges: "+ Travel charges depend on location",
    features: [
      "Intricate bridal mehendi up to mid-arms",
      "Detailed feet up to mid-calf",
      "Custom portrait or skyline designs",
      "Complimentary trial & consultation"
    ],
    popular: false
  },
  {
    title: "Anniversary",
    price: "₹899",
    travelCharges: "+ Travel charges depend on location",
    features: [
      "Beautiful anniversary motifs",
      "Up to mid-arms design",
      "Personalized touch",
      "Quick & elegant application"
    ],
    popular: false
  },
  {
    title: "Arabic Mehendi",
    price: "₹199 onwards",
    travelCharges: "+ Travel charges depend on location",
    features: [
      "Elegant flowy Arabic designs",
      "Ideal for siders and guests",
      "Customizable coverage",
      "Perfect for any occasion"
    ],
    popular: false
  },
  {
    title: "Festival Mehendi",
    price: "₹299 onwards",
    travelCharges: "+ Travel charges depend on location",
    features: [
      "Festive motifs for Eid, Diwali, Karwa Chauth",
      "Traditional and modern fusion",
      "Quick application",
      "Group discounts available"
    ],
    popular: false
  },
  {
    title: "Custom Mehendi",
    price: "Custom",
    travelCharges: "+ Travel charges depend on location",
    features: [
      "Fully bespoke designs",
      "Portrait and story-based henna",
      "Destination bookings",
      "Contact us for a tailored quote"
    ],
    popular: false,
    customButton: "Contact Us"
  }
];

const instagramPosts = [
  {
    id: "Dfqp_0XS5Qq",
    type: "reel",
    caption: "Book us for your special occasions to make more beautiful 💌",
    url: "https://www.instagram.com/reel/Dfqp_0XS5Qq/"
  },
  {
    id: "Dfod3jvyKC8",
    type: "reel",
    caption: "Mehndi Tutorial 🌸🥀",
    url: "https://www.instagram.com/reel/Dfod3jvyKC8/"
  },
  {
    id: "DfkInuQyB8G",
    type: "reel",
    caption: "Thank you for choosing my work! 🤎 @dharchu_47",
    url: "https://www.instagram.com/reel/DfkInuQyB8G/"
  },
  {
    id: "DfgvWQpyvEm",
    type: "reel",
    caption: "Would you let me design your hands like this? 🤎",
    url: "https://www.instagram.com/reel/DfgvWQpyvEm/"
  },
  {
    id: "DfT6e3XSfUW",
    type: "reel",
    caption: "Henna dreams for her special day. 🌸",
    url: "https://www.instagram.com/reel/DfT6e3XSfUW/"
  },
  {
    id: "DfMWU2ikqjs",
    type: "post",
    caption: "Book us for your special occasions to make more beautiful 🥀✨",
    url: "https://www.instagram.com/p/DfMWU2ikqjs/"
  },
  {
    id: "DfMWGyKyHgv",
    type: "post",
    caption: "Intricate bridal palm motifs & symmetry 🌿",
    url: "https://www.instagram.com/p/DfMWGyKyHgv/"
  },
  {
    id: "DfMWGy4yjj4",
    type: "post",
    caption: "Classic floral mandala henna art 🌸",
    url: "https://www.instagram.com/p/DfMWGy4yjj4/"
  },
  {
    id: "DfMWG2gyyQ7",
    type: "post",
    caption: "Graceful bridal backhand detail ✨",
    url: "https://www.instagram.com/p/DfMWG2gyyQ7/"
  }
];

function Index() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const [subheadingIndex, setSubheadingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [inquiryPackage, setInquiryPackage] = useState<string | null>(null);

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inquiryPackage) return;

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    const text = `Hi Mariam Mehendi Artist,\n\nI would like to inquire about the *${inquiryPackage}* package.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}`;
    const waNumber = "919360508648";
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    window.open(waLink, "_blank");
    setInquiryPackage(null);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [instagramFilter, setInstagramFilter] = useState<"all" | "reel" | "post">("all");

  const filteredInstagramPosts = instagramPosts.filter((post) => {
    if (instagramFilter === "all") return true;
    return post.type === instagramFilter;
  });

  const [galleryPage, setGalleryPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const imagesPerPage = 9;
  const totalGalleryPages = Math.ceil(galleryImages.length / imagesPerPage);

  const currentGalleryImages = galleryImages.slice(
    (galleryPage - 1) * imagesPerPage,
    galleryPage * imagesPerPage
  );

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % galleryImages.length : null);
  const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);

  useEffect(() => {
    const currentSubheading = subheadings[subheadingIndex];
    let typingSpeed = 5;

    if (isDeleting) {
      typingSpeed = 5;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentSubheading) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setSubheadingIndex((prev) => (prev + 1) % subheadings.length);
      } else {
        const nextText = isDeleting
          ? currentSubheading.substring(0, typedText.length - 1)
          : currentSubheading.substring(0, typedText.length + 1);
        setTypedText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, subheadingIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 500); // fade out duration
    }, 4000); // display duration
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds?.process();
      } else {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
          (window as any).instgrm?.Embeds?.process();
        };
        document.body.appendChild(script);
      }
    }
  }, [instagramFilter]);

  return (
    <div className="bg-maroon-deep text-ivory font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 lg:px-20 py-5 border-b border-gold/10 bg-maroon-deep/85 backdrop-blur-md">
        <a href="#top" className="font-display italic text-2xl tracking-tighter">
          Mariam
        </a>
        <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-medium text-ivory-muted">
          <a href="#craft" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#cities" className="hover:text-gold transition-colors">Service Areas</a>
          <a href="#gallery" className="hover:text-gold transition-colors">My Work</a>
          <a href="#testimonials" className="hover:text-gold transition-colors">Reviews</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <a href="#reels" className="hover:text-gold transition-colors">Reels</a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#pricing"
            className="hidden md:block rounded-xl px-5 py-2.5 border border-gold/40 text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-deep transition-all duration-300"
          >
            Reserve Your Date
          </a>
          <button
            className="lg:hidden text-ivory hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-maroon-deep/95 backdrop-blur-lg flex flex-col items-center justify-center p-6">
          <button
            className="absolute top-6 right-6 text-ivory hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="flex flex-col gap-8 text-center text-lg uppercase tracking-[0.25em] font-medium text-ivory">
            <a href="#craft" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">Services</a>
            <a href="#cities" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">Service Areas</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">My Work</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">Reviews</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">Pricing</a>
            <a href="#reels" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors">Reels</a>

            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 border border-gold/40 text-[10px] hover:bg-gold hover:text-maroon-deep transition-all duration-300 rounded-xl"
            >
              Reserve Your Date
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        id="top"
        className="relative min-h-[92vh] flex flex-col justify-center px-6 lg:px-20 py-4 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-25 lg:opacity-40 pointer-events-none">
          <img
            src={heroHenna}
            alt="Intricate bridal mehndi henna pattern on a hand"
            width={1280}
            height={1600}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep via-maroon-deep/70 to-transparent lg:from-maroon-deep lg:via-maroon-deep/50" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <header className="space-y-6 animate-reveal min-h-[160px] md:min-h-[200px] lg:min-h-[260px]">
            <h1 className={`text-4xl hagrid md:text-6xl lg:text-7xl font-display leading-[1.1] text-balance transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {taglines[taglineIndex]}
            </h1>
          </header>

          <p className="md:mt-10 poppins max-w-md text-ivory-muted leading-relaxed animate-reveal [animation-delay:200ms] min-h-[100px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <div className="mt-6 flex flex-wrap gap-10 items-end animate-reveal [animation-delay:400ms]">
            <div className="space-y-1">
              <p className="dm-sans text-[12px] uppercase tracking-widest text-gold-muted">EXPERIENCE</p>
              <p className="text-xl">4+ Years</p>
            </div>
            <div className="space-y-1">
              <p className="dm-sans text-[12px] uppercase tracking-widest text-gold-muted">SPECIALITY</p>
              <p className="text-xl">Bridal • Arabic • Floral</p>
            </div>
            <div className="space-y-1">
              <p className="dm-sans text-[12px] uppercase tracking-widest text-gold-muted">SATISFIED CLIENTS</p>
              <p className="text-xl">500+ Happy Clients</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-reveal [animation-delay:600ms] poppins w-full">
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center px-8 py-4 bg-gold text-maroon-deep text-[14px] uppercase tracking-[0.25em] font-semibold hover:bg-ivory transition-colors rounded-2xl"
            >
              Book Your Mehendi
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto text-center px-8 py-4 border border-gold/30 text-[14px] uppercase tracking-[0.25em] hover:border-gold transition-colors rounded-2xl"
            >
              Explore Designs
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="craft"
        className="px-6 lg:px-20 py-32 border-t border-gold/10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <div className="relative">
          <img
            src={artistPortrait}
            alt="Portrait of Mariam, founder of Mariam Mehendi Artist"
            width={1080}
            height={1350}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="space-y-8 poppins">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-display tracking-tight bg-gold text-maroon-deep p-1 rounded-lg">About the Artist</h2>
          </div>

          <h2 className="text-4xl md:text-5xl font-display leading-tight hagrid">
            Creating beautiful mehendi for life's most precious moments.
          </h2>

          <p className="text-lg leading-relaxed text-ivory-muted">
            At <strong>Mariam Mehendi</strong>, we believe mehendi is more than just an art it's a timeless tradition that celebrates love, joy, and new beginnings. Every design is thoughtfully handcrafted to complement your personality and make your special day even more memorable.
          </p>

          <p className="text-ivory-muted/75 leading-relaxed">
            Using premium natural henna and intricate detailing, we specialize in Bridal, Arabic, Floral and Contemporary mehendi designs. Our goal is to create elegant patterns that leave a rich stain and unforgettable memories.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/10 dm-sans">
            <div>
              <p className="font-display text-3xl text-gold">4+</p>
              <p className="text-[10px] md:text-[14px] uppercase tracking-widest text-ivory-muted mt-1">
                Years Experience
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-gold">500+</p>
              <p className="text-[10px] md:text-[14px] uppercase tracking-widest text-ivory-muted mt-1">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-gold">100%</p>
              <p className="text-[10px] md:text-[14px] uppercase tracking-widest text-ivory-muted mt-1">
                Natural Henna
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services bento */}
      <section id="services" className="px-6 lg:px-20 py-32 bg-maroon-core/30">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-display tracking-tight bg-gold text-maroon-deep p-1 rounded-lg">Our Offerings</h2>
          <p className="font-mono text-[10px] uppercase tracking-widest text-gold">Services (01—04)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Bridal Mehndi", desc: "Intricate and traditional designs tailored for your big day." },
            { title: "Siders Mehndi", desc: "Elegant patterns for bridesmaids and family members." },
            { title: "Custom Mehndi", desc: "Bespoke designs reflecting your personal story." },
            { title: "Engagement Mehndi", desc: "Subtle and graceful patterns for your engagement." },
            { title: "Baby Shower Mehndi", desc: "Beautiful artistry to celebrate new beginnings." },
            { title: "Parties Mehndi", desc: "Chic designs for sangeet and celebratory gatherings." },
            { title: "Anniversary Mehndi", desc: "Commemorate your love with timeless henna art." },
            { title: "Festival Mehndi", desc: "Festive motifs for Eid, Diwali, and Karwa Chauth." },
          ].map((service, index) => (
            <article key={service.title} className="bg-maroon-core/80 p-8 rounded-xl border border-gold/10 hover:border-gold/40 hover:bg-maroon-core hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between min-h-[240px] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-700" />
              <div className="relative z-10">
                <span className="font-mono text-[10px] text-gold block mb-4">0{index + 1}.</span>
                <h3 className="text-2xl md:text-3xl font-display group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-ivory-muted mt-4 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cities Marquee */}
      <section id="cities" className="py-24 md:py-32 border-y border-gold/10 overflow-hidden flex flex-col justify-center bg-maroon-core/30">
        <div className="mb-16 px-6 lg:px-20 flex flex-col md:flex-row  items-center justify-center gap-6">
          <h2 className="text-5xl md:text-6xl font-display tracking-tight bg-gold text-maroon-deep p-1 rounded-lg">Service Areas</h2>
        </div>

        <div className="relative w-full flex overflow-hidden whitespace-nowrap py-12 border-y border-gold/5 bg-maroon-core/50">
          <div className="animate-marquee flex items-center whitespace-nowrap w-max hover:[animation-play-state:paused]">
            {[...cities, ...cities, ...cities, ...cities].map((city, i) => (
              <div key={`${city}-${i}`} className="flex items-center">
                <span className={`text-4xl md:text-8xl lg:text-[7rem] font-display hover:text-gold transition-colors duration-500 cursor-default px-8`}>
                  {city}
                </span>
                <span className="text-gold opacity-30 text-3xl md:text-5xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 lg:px-20 bg-maroon-core border-t border-gold/10">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display bg-gold text-maroon-deep p-1 rounded-lg inline-block px-4">My Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {currentGalleryImages.map((src, i) => {
            const globalIndex = (galleryPage - 1) * imagesPerPage + i;
            return (
              <div
                key={globalIndex}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => openLightbox(globalIndex)}
              >
                <div className="absolute inset-0 bg-maroon-deep/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={src}
                  alt={`Gallery image ${globalIndex + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalGalleryPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            {/* Previous */}
            <button
              onClick={() => {
                setGalleryPage((p) => Math.max(1, p - 1));
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              disabled={galleryPage === 1}
              className="px-4 py-2 rounded-full border border-gold/30 text-sm font-medium text-gold hover:bg-gold hover:text-black transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {Array.from({ length: totalGalleryPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setGalleryPage(page);
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-10 h-10 rounded-full text-sm font-semibold transition ${galleryPage === page
                    ? "bg-gold text-black"
                    : "border border-gold/30 text-gold hover:bg-gold hover:text-black"
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => {
                setGalleryPage((p) => Math.min(totalGalleryPages, p + 1));
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              disabled={galleryPage === totalGalleryPages}
              className="px-4 py-2 rounded-full border border-gold/30 text-sm font-medium text-gold hover:bg-gold hover:text-black transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-maroon-deep/95 backdrop-blur-md">
          <div className="absolute inset-0 cursor-pointer" onClick={closeLightbox} />

          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] text-ivory hover:text-gold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-10 z-[110] text-ivory hover:text-gold transition-colors bg-maroon-core/50 p-2 rounded-full backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <img
            src={galleryImages[lightboxIndex]}
            alt="Preview"
            className="max-h-[85vh] max-w-[90vw] object-contain relative z-[105] shadow-2xl border border-gold/10"
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-10 z-[110] text-ivory hover:text-gold transition-colors bg-maroon-core/50 p-2 rounded-full backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div className="absolute bottom-6 font-mono text-[10px] uppercase tracking-widest text-gold-muted z-[110]">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section id="testimonials" className="px-6 lg:px-20 py-24 border-y border-gold/10 bg-maroon-deep">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display bg-gold text-maroon-deep p-1 rounded-lg inline-block px-4">Client Love</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className="group border border-gold/10 p-8 md:p-10 rounded-2xl bg-maroon-core hover:border-gold/30 transition-all flex flex-col justify-between"
            >
              <p className="text-lg italic leading-relaxed mb-10 font-display text-ivory-muted group-hover:text-ivory transition-colors">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold text-left">
                — {t.name} <br />
                <span className="text-gold-muted/50 block mt-2">{t.meta}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Pricing & Packages */}
      <section id="pricing" className="px-6 lg:px-20 py-32 bg-maroon-core/30">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Investment</p>
          <h2 className="text-4xl md:text-5xl font-display bg-gold text-maroon-deep p-1 rounded-lg inline-block px-4">Our Packages</h2>
          <p className="text-ivory-muted mt-6 max-w-md mx-auto poppins">
            Thoughtfully curated packages designed for your special moments. Bespoke combinations available upon request.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={pkg.title}
              className={`relative bg-maroon-core border ${pkg.popular ? 'border-gold shadow-[0_0_40px_rgba(213,123,57,0.1)]' : 'border-gold/10'} p-10 flex flex-col h-full rounded-2xl hover:-translate-y-2 transition-transform duration-500`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-maroon-deep font-mono text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8 border-b border-gold/10 pb-8 text-center pt-2">
                <h3 className="text-2xl font-display mb-4 text-ivory">{pkg.title}</h3>
                <div className="flex flex-col items-center justify-center gap-1 mb-2 hagrid">
                  {pkg.oldPrice && (
                    <div className="flex items-center gap-3">
                      <span className="text-xl text-gold/50 line-through dm-sans">{pkg.oldPrice}</span>
                      {pkg.discount && (
                        <span className="text-[10px] bg-red-900/40 text-red-400 px-2 py-1 rounded-sm tracking-wider poppins font-bold">
                          {pkg.discount}
                        </span>
                      )}
                    </div>
                  )}
                  <span className="text-4xl text-gold dm-sans">{pkg.price}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-10 poppins">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-ivory-muted">
                    <span className="text-gold shrink-0 mt-0.5">✦</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setInquiryPackage(pkg.title)}
                className={`block text-center w-full mt-auto py-4 text-[11px] uppercase tracking-[0.25em] font-semibold transition-colors rounded-xl poppins ${pkg.popular
                  ? 'bg-gold text-maroon-deep hover:bg-ivory'
                  : 'border border-gold/30 hover:border-gold hover:bg-gold/5 text-ivory'
                  }`}
              >
                {pkg.customButton || "Inquire Now"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Reels & Posts */}
      <section id="reels" className="px-6 lg:px-20 py-28 border-t border-gold/10 bg-maroon-deep">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Live on Instagram</p>
          <h2 className="text-4xl md:text-5xl font-display bg-gold text-maroon-deep p-1 rounded-lg inline-block px-4">
            Reels & Artistry
          </h2>
          <p className="text-ivory-muted mt-5 max-w-lg mx-auto poppins text-sm md:text-base leading-relaxed">
            Watch real bridal transformations, detailed application tutorials, and fresh henna inspiration from our Instagram feed.
          </p>

          {/* Profile Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-maroon-core/80 border border-gold/20 px-6 py-4 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                <div className="w-full h-full bg-maroon-deep rounded-full flex items-center justify-center text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <a
                  href="https://www.instagram.com/mariam_mehndi_artist_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg text-ivory hover:text-gold transition-colors font-semibold flex items-center gap-1.5"
                >
                  @mariam_mehndi_artist_
                  <span className="text-xs text-gold/70 font-mono">↗</span>
                </a>
                <p className="text-xs text-ivory-muted poppins">MARIAM HENNA ARTIST • 98+ Posts</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/mariam_mehndi_artist_/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:ml-4 px-5 py-2.5 bg-gold text-maroon-deep text-xs font-semibold rounded-full uppercase tracking-wider hover:bg-ivory transition-colors poppins"
            >
              Follow on Instagram
            </a>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-10 p-1 bg-maroon-core/60 border border-gold/15 rounded-full">
            <button
              onClick={() => setInstagramFilter("all")}
              className={`px-5 py-2 rounded-full text-xs font-medium transition ${instagramFilter === "all"
                ? "bg-gold text-maroon-deep font-semibold"
                : "text-ivory-muted hover:text-gold"
                }`}
            >
              All (9)
            </button>
            <button
              onClick={() => setInstagramFilter("reel")}
              className={`px-5 py-2 rounded-full text-xs font-medium transition flex items-center gap-1.5 ${instagramFilter === "reel"
                ? "bg-gold text-maroon-deep font-semibold"
                : "text-ivory-muted hover:text-gold"
                }`}
            >
              <span>▶</span> Reels (5)
            </button>
            <button
              onClick={() => setInstagramFilter("post")}
              className={`px-5 py-2 rounded-full text-xs font-medium transition ${instagramFilter === "post"
                ? "bg-gold text-maroon-deep font-semibold"
                : "text-ivory-muted hover:text-gold"
                }`}
            >
              Photos (4)
            </button>
          </div>
        </div>

        {/* 9 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredInstagramPosts.map((post) => (
            <div
              key={post.id}
              className="bg-maroon-core border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/40 shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="px-5 py-3.5 border-b border-gold/10 flex items-center justify-between bg-maroon-core/90">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded">
                    {post.type === "reel" ? "▶ Reel" : "✦ Post"}
                  </span>
                  <span className="text-xs text-ivory-muted poppins truncate max-w-[180px]">
                    @mariam_mehndi_artist_
                  </span>
                </div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-gold hover:text-ivory transition-colors flex items-center gap-1"
                >
                  View ↗
                </a>
              </div>

              {/* Playable Instagram Embed */}
              <div className="relative w-full aspect-[9/14] sm:h-[520px] bg-maroon-deep flex items-center justify-center overflow-hidden">
                <iframe
                  src={post.type === "reel"
                    ? `https://www.instagram.com/reel/${post.id}/embed/`
                    : `https://www.instagram.com/p/${post.id}/embed/`}
                  className="w-full h-full border-0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={post.caption || `Instagram ${post.type} ${post.id}`}
                  loading="lazy"
                />
              </div>

              {post.caption && (
                <div className="p-4 border-t border-gold/10 bg-maroon-core/70 text-xs text-ivory-muted poppins line-clamp-2">
                  {post.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/mariam_mehndi_artist_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-gold/40 text-gold hover:bg-gold hover:text-maroon-deep transition-all duration-300 text-xs uppercase tracking-[0.2em] font-semibold poppins"
          >
            <span>See More on Instagram (@mariam_mehndi_artist_)</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-maroon-core px-6 lg:px-20 py-20 border-t border-gold/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-display italic">Mariam</h2>
            <p className="text-ivory-muted max-w-xs leading-relaxed">
              Modern heritage henna for the contemporary bride. Bespoke commissions by appointment only.
            </p>
          </div>
          <div className="md:text-right space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Contact</p>
            <a
              href="mailto:mehendibymariam@ilahtech.in"
              className="block text-xl md:text-2xl hover:text-gold transition-colors"
            >
              mehendibymariam@ilahtech.in
            </a>
            <p className="text-ivory-muted text-lg md:text-xl">+91 936050 8648</p>
            <div className="flex md:justify-end gap-8 text-[10px] uppercase tracking-[0.25em] pt-2">
              <a href="https://www.instagram.com/mariam_mehndi_artist_" className="hover:text-gold transition-colors">Instagram</a>
              <a href="https://wa.me/919360508648" className="hover:text-gold transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between gap-3 font-mono text-[12px] uppercase tracking-[0.25em] text-gold-muted">
          <p>© {new Date().getFullYear()} Mariam Mehendi Artist</p>
          <a href="https://ilahtech.in" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors poppins">Designed by Ilah Technologies</a>
        </div>
      </footer>

      {/* Inquiry Popup */}
      {inquiryPackage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-maroon-deep/90 backdrop-blur-md p-4">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setInquiryPackage(null)} />

          <div className="relative z-[210] bg-maroon-core border border-gold/20 p-8 md:p-12 rounded-2xl w-full max-w-md shadow-2xl">
            <button
              onClick={() => setInquiryPackage(null)}
              className="absolute top-4 right-4 text-gold-muted hover:text-gold transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="mb-8 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Inquiry</p>
              <h3 className="text-2xl font-display text-ivory">Package Details</h3>
              <p className="text-sm text-ivory-muted mt-2 poppins">Please provide your details for the <span className="text-gold font-bold">{inquiryPackage}</span> package.</p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-5 poppins">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gold-muted mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-maroon-deep/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gold-muted mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-maroon-deep/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your WhatsApp Number"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-xs uppercase tracking-widest text-gold-muted mb-2">Address / Location *</label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  className="w-full bg-maroon-deep/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Event location or your address"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-maroon-deep hover:bg-ivory transition-colors py-4 rounded-xl text-[11px] uppercase tracking-[0.25em] font-bold mt-4"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
