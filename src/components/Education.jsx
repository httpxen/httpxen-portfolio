import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  PlayCircle,
} from "lucide-react";

const YOUTUBE_EMBED_SRC = "https://www.youtube.com/embed/5ytIAJuJpZA";

const FACEBOOK_VIDEO_URL =
  "https://www.facebook.com/LetranCalambaOfficial/videos/1536132478188312/";

const LazyEmbed = ({ src, title }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div
      ref={ref}
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
    >
      {inView ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-neutral-700">
          <PlayCircle size={40} strokeWidth={1} />
        </div>
      )}
    </div>
  );
};

const LocalVideoEmbed = ({ src, sourceUrl, sourceLabel, title }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "200px" });

  const handleLoadedMetadata = (e) => {
    // Seek a hair forward so the browser paints a real frame as the poster
    // instead of a blank black box, without needing a separate image asset.
    e.currentTarget.currentTime = 0.5;
  };

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
        {inView && (
          <video
            src={src}
            title={title}
            controls
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>

      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 self-start text-xs font-medium text-yellow-400 transition-colors duration-300 hover:text-yellow-300"
        >
          {sourceLabel}
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      )}
    </div>
  );
};

const Education = () => {
  const mediaRef = useRef(null);

  const mediaInView = useInView(mediaRef, {
    once: true,
    margin: "200px",
  });

  const [campusError, setCampusError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
      aria-label="Education"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>

            {/* Section label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-yellow-400" />

              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-yellow-400">
                Education
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl font-poppins text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Where the journey
              <br />

              <span className="text-neutral-500">
                began.
              </span>
            </h2>
          </div>

          {/* Header description */}
          <p className="max-w-sm text-sm leading-7 text-neutral-500 md:text-right">
            Where my journey in technology, software development,
            and web development began.
          </p>
        </motion.div>

        {/* Cinematic Campus */}
        <motion.div
          ref={mediaRef}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="relative h-[420px] overflow-hidden rounded-[28px] sm:h-[520px] lg:h-[610px]">

            {/* Campus Video / Image */}
            {!campusError ? (
              mediaInView ? (
                <video
                  src="/letran-tour.mp4"
                  poster="/letran-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  onError={() => setCampusError(true)}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.025]"
                />
              ) : (
                <img
                  src="/letran-poster.jpg"
                  alt="Colegio de San Juan de Letran Calamba"
                  onError={() => setCampusError(true)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                <GraduationCap
                  size={56}
                  strokeWidth={1}
                  className="text-neutral-700"
                />
              </div>
            )}

            {/* Image overlays */}
            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5" />

            {/* Letran Logo */}
            <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/30 p-2.5 backdrop-blur-xl sm:left-9 sm:top-9 sm:h-20 sm:w-20">
              {!logoError ? (
                <img
                  src="/letran-logo.png"
                  alt="Letran Calamba logo"
                  onError={() => setLogoError(true)}
                  className="h-full w-full object-contain"
                />
              ) : (
                <GraduationCap
                  size={30}
                  className="text-yellow-400"
                />
              )}
            </div>

            {/* Location */}
            <div className="absolute right-6 top-7 hidden items-center gap-2 sm:flex sm:right-9 sm:top-10">
              <MapPin
                size={14}
                className="text-yellow-400"
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                Calamba City, Laguna
              </span>
            </div>

            {/* Text Inside Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9 lg:p-12">

              {/* Alma Mater label */}
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-yellow-400">
                Alma Mater
              </p>

              {/* School name */}
              <h3 className="max-w-5xl font-poppins text-[2.2rem] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Colegio de San Juan
                <br />

                de{" "}

                <span className="text-blue-500">
                  Letran
                </span>

                <span className="text-red-500">
                  {" "}
                  Calamba
                </span>
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="grid gap-8 border-b border-white/[0.08] py-10 lg:grid-cols-[1.2fr_0.8fr]"
        >

          {/* Degree */}
          <div>

            {/* Degree label */}
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.3em] text-yellow-400">
              Degree
            </p>

            {/* Degree name */}
            <h4 className="font-poppins text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Bachelor of Science in
              <br />

              {/* Purple based on IT / SCST identity */}
              <span className="text-[#A66BBE]">
                Information Technology
              </span>
            </h4>
          </div>

          {/* Short Story */}
          <div className="flex flex-col justify-between gap-7">

            <p className="max-w-lg text-sm leading-7 text-neutral-400">
              Letran Calamba gave me the environment to explore,
              build, fail, learn, and eventually turn my interest
              in technology into something I could create with.
            </p>

            {/* Education metadata */}
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">

              {/* Graduation */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-yellow-400">
                  Graduation
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Class of 2026
                </p>
              </div>

              {/* Divider */}
              <span className="hidden h-8 w-px bg-white/10 sm:block" />

              {/* Campus */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-yellow-400">
                  Campus
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Calamba, Laguna
                </p>
              </div>

              {/* Divider */}
              <span className="hidden h-8 w-px bg-white/10 sm:block" />

              {/* Visit School */}
              <a
                href="https://www.letran-calamba.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition-colors duration-300 hover:text-yellow-300"
              >
                Visit school

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Commencement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="pt-10"
        >
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-yellow-400">
            Commencement Highlights
          </p>

          <div className="grid gap-6 sm:grid-cols-2 sm:items-start">
            <LazyEmbed
              src={YOUTUBE_EMBED_SRC}
              title="Letran Calamba: Collegiate and Graduate School Commencement Exercises Highlights 2026"
            />
            <LocalVideoEmbed
              src="/arriba-letran.mp4"
              sourceUrl={FACEBOOK_VIDEO_URL}
              sourceLabel="Watch full video on Facebook"
              title="Arriba Letran"
            />
          </div>
        </motion.div>

        {/* Footer Detail */}
        <div className="mt-10 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            <span className="text-blue-500">Patria</span>
            {" · "}
            <span className="text-neutral-300">Deus</span>
            {" · "}
            <span className="text-red-500">Letran</span>
          </p>

          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400">
            2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
