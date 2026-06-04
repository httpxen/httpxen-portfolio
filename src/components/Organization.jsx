import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa";
import { CODESMITH_MEMBERS, TECH_TAGS } from "../constants/index.js"; 
import logo from "../assets/CodeSmith.png"; 

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

// Helper function to convert hex color to rgb
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "100, 100, 100";
};

const Organization = () => {
  return (
    <section className="pb-32 px-6 lg:px-24">
      {/* Section Label + Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="pt-24 pb-16 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium mb-3">
          Affiliation
        </p>
        <h2 className="text-5xl font-bold text-white tracking-tight leading-none">
          My Organization
        </h2>
        <div className="mx-auto mt-5 w-12 h-[2px] bg-yellow-400/80 rounded-full" />
      </motion.div>

      <div className="flex flex-col items-center gap-16">
        <div className="w-full max-w-3xl flex flex-col gap-16">

          {/* ORG CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #141414 0%, #0f0f0f 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 32px 64px rgba(0,0,0,0.5)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start gap-7 p-8 sm:p-10">

              {/* Logo */}
              <div className="flex-shrink-0 w-[72px] h-[72px] rounded-xl overflow-hidden">
                <img
                  src={logo}
                  alt="CodeSmith Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    CodeSmith Development
                  </h3>
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest"
                    style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80" }}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    Active
                  </span>
                </div>

                <p className="text-sm text-neutral-500 tracking-wide">FiveM Development Team</p>

                <a href="https://codesmithdev.netlify.app/" target="_blank" rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-yellow-400/80 hover:text-yellow-300 text-xs font-medium transition-colors group">
                  <FaGlobe className="text-[10px]" />
                  codesmithdev.netlify.app
                  <FaExternalLinkAlt className="text-[9px] opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <div className="mx-10 h-[1px]" style={{ background: "rgba(255,255,255,0.05)" }} />

            {/* Description */}
            <div className="px-10 py-7">
              <p className="text-neutral-400 text-sm leading-[1.85] max-w-xl">
                Part of <span className="text-yellow-400 font-semibold">CodeSmith Development</span> — 
                a specialized team building custom{" "}
                <span className="text-neutral-200">FiveM</span> scripts, full-stack tools, 
                and performance-optimized community experiences.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="px-10 pb-7 flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold tracking-wide rounded-md"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {[
                { label: "Specialization", value: "FiveM", color: "#eab308" },
                { label: "Team Status", value: "Active", color: "#22c55e" },
                { label: "My Role", value: "Developer", color: "#60a5fa" },
              ].map(({ label, value, color }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-6 gap-1"
                  style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                >
                  <span className="text-lg font-bold tracking-tight" style={{ color }}>
                    {value}
                  </span>
                  <span className="text-[11px] text-neutral-600 uppercase tracking-widest">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TEAM SECTION */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-medium">
                Developers
              </span>
              <div className="flex-1 h-[1px]" style={{ background: "rgba(255,255,255,0.05)" }} />
              <span className="text-[11px] text-neutral-600">{CODESMITH_MEMBERS.length} members</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CODESMITH_MEMBERS.map((member, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative rounded-xl overflow-hidden group cursor-default"
                  style={{ height: "130px", border: `1px solid rgba(${hexToRgb(member.color)}, 0.45)`,boxShadow: `0 0 12px rgba(${hexToRgb(member.color)}, 0.12)`,}}
                >
                  {/* ==================== BANNER SUPPORT (Video + GIF + Image) ==================== */}
                  <div className="absolute inset-0 overflow-hidden">
                    {member.banner.endsWith('.mp4') || member.banner.endsWith('.webm') ? (
                      /* VIDEO */
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      >
                        <source src={member.banner} type="video/mp4" />
                      </video>
                    ) : member.banner.endsWith('.gif') ? (
                      /* GIF */
                      <img
                        src={member.banner}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      /* STATIC IMAGE */
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${member.banner})` }}
                      />
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />

                  <div className="absolute inset-[5px] rounded-lg pointer-events-none"
                    style={{ border: "1px dashed rgba(255,255,255,0.12)" }} />

                  <div className="relative z-10 h-full flex items-center gap-4 px-6">
                    {/* Profile Image */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-2xl overflow-hidden ring-offset-2 ring-offset-[#0a0a0a]"
                      style={{
                        boxShadow: `0 0 0 2px ${member.color}`,
                      }}
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-white font-bold text-base tracking-[0.15em] uppercase leading-none">
                        {member.name}
                      </span>
                      
                      {/* Role Badge */}
                      <span 
                        className="inline-block px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm"
                        style={{
                          background: `rgba(${hexToRgb(member.color)}, 0.15)`,
                          border: `1px solid rgba(${hexToRgb(member.color)}, 0.35)`,
                          color: member.color,
                        }}
                      >
                        {member.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;