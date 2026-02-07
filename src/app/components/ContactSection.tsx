import { motion } from "motion/react";
import {
  Linkedin,
  Github,
  Mail,
  Plane
} from "lucide-react";
import { Instagram } from "lucide-react";

export function ContactSection() {

  const contactCards = [
    {
      platform: "linkedin",
      label: "LinkedIn",
      icon: Linkedin,
      iconColor: "#0A66C2",
      linkKey: "https://www.linkedin.com/in/aqdas-kawchali-1b95b1351",
      usernameKey: "aqdas-kawchali-1b95b1351",
      boardingClass: "PROFESSIONAL",
      gate: "A1",
      seat: "12A",
      time: "09:45"
    },
    {
      platform: "github",
      label: "GitHub",
      icon: Github,
      iconColor: "#E5E7EB",
      linkKey: "https://github.com/Aqdas-16",
      usernameKey: "Aqdas-16",
      boardingClass: "DEVELOPER",
      gate: "B2",
      seat: "21C",
      time: "10:10"
    },
    {
      platform: "gmail",
      label: "Email",
      icon: Mail,
      iconColor: "#EA4335",
      linkKey: "mailto:aqdaskawchali16@gmail.com",
      usernameKey: "aqdaskawchali16@gmail.com",
      boardingClass: "DIRECT",
      gate: "C3",
      seat: "08F",
      time: "10:40"
    },
    {
      platform: "instagram",
      label: "Instagram",
      icon: Instagram,
      iconColor: "#E1306C",
      linkKey: "https://www.instagram.com/__aqdas__16",
      usernameKey: "__aqdas__16",
      boardingClass: "SOCIAL",
      gate: "E5",
      seat: "18B",
      time: "11:05"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Let's </span>
            <span className="text-[#38BDF8]">Connect</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] mx-auto mb-6" />

          <p className="text-[#9CA3AF]">
            Choose your boarding pass to connect
          </p>
        </motion.div>

        {/* PASSES */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {contactCards.map((card, index) => (

            <motion.a
              key={index}
              href={card.linkKey}
              target="_blank"
              className="relative group block"
              whileHover={{ y: -8, scale: 1.02 }}
            >

              <div className="
                relative bg-[#1F2937]
                rounded-lg overflow-hidden
                border border-[#38BDF8]/30
                shadow-[0_0_25px_rgba(56,189,248,0.15)]
                group-hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]
                transition-all duration-500
              ">

                {/* ROUTE STRIP TOP */}
                <div className="
                  absolute top-0 left-0 right-0
                  flex items-center
                  px-4 py-6
                  bg-transparent
                ">

                  <span className="text-[9px] font-bold font-mono text-[#38BDF8] w-8">BOM</span>

                  <svg className="flex-1 h-20" viewBox="0 0 350 80" preserveAspectRatio="none">
                    <defs>
                      <path
                        id="spiralPath"
                        d="M 0 45
                           L 45 45
                           Q 62.5 5 85 45
                           Q 107.5 75 130 45
                           L 350 45"
                      />
                    </defs>

                    {/* Spiral Route Path */}
                    <path
                      d="M 0 45
                         L 45 45
                         Q 62.5 5 85 45
                         Q 107.5 75 130 45
                         L 350 45"
                      stroke="#38BDF8"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6,4"
                      opacity="0.5"
                    />

                    {/* Animated Plane along spiral path */}
                    <g>
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                      >
                        <mpath href="#spiralPath" />
                        <text
                          fontSize="16"
                          fill="#38BDF8"
                          opacity="0.6"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          ✈️
                        </text>
                      </animateMotion>
                    </g>
                  </svg>

                  <span className="text-[9px] font-bold font-mono text-[#38BDF8] w-8 text-right">WEB</span>
                </div>

                {/* Plane logo */}

                {/* PERFORATED EDGE */}
                <div className="
                  absolute left-0 top-0 bottom-0
                  w-8 flex flex-col justify-around py-3
                  bg-[#38BDF810]
                ">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full mx-auto bg-[#38BDF8]"
                    />
                  ))}
                </div>

                {/* IMMIGRATION STAMP - CIRCULAR */}
                <motion.div
                  className="
                    absolute bottom-6 right-6
                    w-20 h-20
                    pointer-events-none
                  "
                  initial={{ scale: 0, rotate: -20 }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                  >
                    {/* Outer circle border */}
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2"
                      opacity="0.7"
                    />
                    
                    {/* Inner circle border */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1"
                      opacity="0.5"
                    />

                    {/* Circular text path - outer ring */}
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="none"
                      />
                    </defs>

                    <text
                      fontSize="8"
                      fontWeight="bold"
                      letterSpacing="1"
                      fill="#38BDF8"
                      opacity="0.8"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        APPROVED • DATA ANALYST •
                      </textPath>
                    </text>

                    {/* Center circle background */}
                    <circle
                      cx="50"
                      cy="50"
                      r="18"
                      fill="#38BDF8"
                      opacity="0.1"
                    />

                    {/* Checkmark in center */}
                    <text
                      x="50"
                      y="58"
                      textAnchor="middle"
                      fontSize="28"
                      fontWeight="bold"
                      fill="#38BDF8"
                      opacity="0.8"
                    >
                      ✓
                    </text>
                  </svg>
                </motion.div>

                {/* CONTENT */}
                <div className="pl-12 pr-6 pt-20 pb-6">

                  <div className="flex justify-between items-start gap-6">

                    {/* LEFT */}
                    <div>

                      {/* PLATFORM NAME BELOW ROUTE */}
                      <div className="mb-3">
                        <div className="text-[10px] text-[#9CA3AF] font-mono mb-1">
                          PLATFORM
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-lg font-bold text-[#38BDF8]">
                            {card.label}
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Plane
                              className="w-6 h-6 text-[#38BDF8]"
                              strokeWidth={2}
                            />
                          </motion.div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="text-[10px] text-[#9CA3AF] font-mono mb-1">
                          CONTACT
                        </div>

                        <div className="text-[11px] text-[#E5E7EB] font-mono break-all">
                          {card.usernameKey}
                        </div>
                      </div>

                      {/* FLIGHT INFO */}
                      <div className="grid grid-cols-3 gap-3 mb-3">

                        <div>
                          <div className="text-[9px] text-[#9CA3AF] font-mono">
                            GATE
                          </div>
                          <div className="text-[#E5E7EB] font-mono text-[11px]">
                            {card.gate}
                          </div>
                        </div>

                        <div>
                          <div className="text-[9px] text-[#9CA3AF] font-mono">
                            SEAT
                          </div>
                          <div className="text-[#E5E7EB] font-mono text-[11px]">
                            {card.seat}
                          </div>
                        </div>

                        <div>
                          <div className="text-[9px] text-[#9CA3AF] font-mono">
                            TIME
                          </div>
                          <div className="text-[#E5E7EB] font-mono text-[11px]">
                            {card.time}
                          </div>
                        </div>

                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#38BDF8] rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-[#38BDF8]">
                          Seeking Internships
                        </span>
                      </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-center gap-2">

                      <div className="p-3 rounded-lg bg-[#38BDF8]/10">
                        <card.icon
                          className="w-6 h-6"
                          style={{ color: card.iconColor }}
                        />
                      </div>

                      {/* QR */}
                      <div className="
                        w-16 h-16 bg-white p-1 rounded
                        border-2 border-[#38BDF8]/40
                        flex items-center justify-center
                      ">
                        <img
                          src={`/${card.platform}.png`}
                          className="w-14 h-14 object-contain"
                        />
                      </div>

                      <div className="text-[8px] text-[#9CA3AF] font-mono">
                        SCAN
                      </div>

                    </div>

                  </div>

                  {/* BARCODE */}
                  <div className="
                    border-t-2 border-dashed
                    mt-4 pt-3 border-[#38BDF8]/30
                  ">
                    <div className="flex gap-px h-8">
                      {[...Array(40)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1"
                          style={{
                            backgroundColor:
                              i % 2 === 0 ? "#38BDF8" : "transparent",
                            opacity: 0.5
                          }}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}
