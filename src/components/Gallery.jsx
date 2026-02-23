import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

// Import your gallery data
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "../constants/index.js";

const slideDown = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function LuxuryGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const containerRef = useRef(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, filteredItems.length]);

  const goToPrev = () => {
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  };

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative min-h-screen py-32 px-6 overflow-hidden bg-transparent selection:bg-purple-500 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-purple-600" />
              <span className="text-purple-600 font-mono text-[10px] uppercase tracking-[0.5em]">
                Project Archive
              </span>
            </motion.div>

            <motion.h2
              variants={slideDown}
              initial="hidden"
              whileInView="visible"
              className="text-7xl md:text-9xl font-light tracking-tighter leading-none uppercase text-white"
            >
              The{" "}
              <span className="font-black italic text-neutral-800 hover:text-white transition-colors duration-700 uppercase">
                Experience
              </span>
            </motion.h2>
          </div>

          <nav className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-1 text-[10px] uppercase tracking-tighter transition-all border ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "text-zinc-500 border-zinc-800 hover:border-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </header>

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setSelectedIndex(idx)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/96 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-30 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/50 border border-white/20 text-white hover:bg-purple-900/70 hover:border-purple-500/60 transition-all duration-300 backdrop-blur-md shadow-2xl"
              aria-label="Close modal"
            >
              <X size={28} strokeWidth={2.5} />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/40 border border-white/15 text-white hover:bg-purple-900/60 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} strokeWidth={2.5} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/40 border border-white/15 text-white hover:bg-purple-900/60 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight size={32} strokeWidth={2.5} />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-1 flex items-center justify-center rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-b from-zinc-900/40 to-black/70 shadow-2xl backdrop-blur-sm">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[82vh] object-contain transition-transform duration-700"
                />
              </div>

              {/* Caption – company name added here */}
              <div className="mt-6 sm:mt-8 w-full max-w-3xl px-3 sm:px-0 text-center pointer-events-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-white">
                  {selectedItem.title}
                </h3>

                {/* Company name display */}
                <p className="mt-2 text-lg sm:text-xl font-light text-zinc-400 tracking-wide whitespace-normal break-words">
                  {selectedItem.company}
                </p>

                <div className="mt-4 flex items-center justify-center gap-6 text-sm uppercase tracking-widest font-mono text-purple-300/90">
                  <span>{selectedItem.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/70" />
                  <span>{selectedItem.year}</span>
                </div>

                {selectedItem.description ? (
                  <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-300/90 max-w-2xl mx-auto">
                    {selectedItem.description}
                  </p>
                ) : (
                  <p className="mt-5 text-sm italic text-zinc-600">
                    Walang description pa para dito
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({ item, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="break-inside-avoid group cursor-pointer relative"
    >
      <div className="relative overflow-hidden bg-zinc-900 aspect-[4/5]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105"
            loading="lazy"
          />
        </motion.div>

        <div className="absolute top-4 right-4 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white text-black p-2 rounded-full"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start border-t border-zinc-900 pt-4 group-hover:border-purple-500/50 transition-colors duration-300">
        <div>
          <h3 className="text-lg font-medium tracking-tight uppercase group-hover:text-purple-400 transition-colors text-white">
            {item.title}
          </h3>
          <p className="text-[10px] text-zinc-600 font-mono mt-1 uppercase tracking-widest">
            {item.category}
          </p>
        </div>
        <span className="text-[10px] font-mono text-zinc-700">
          / {item.id < 10 ? `0${item.id}` : item.id}
        </span>
      </div>
    </motion.div>
  );
}