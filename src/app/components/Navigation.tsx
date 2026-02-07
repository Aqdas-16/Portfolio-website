import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Case Studies", link: "#case-studies" },
    { label: "Certifications", link: "#certifications" },
    { label: "Blog", link: "#blog" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-gradient-to-b from-[#000A15]/80 to-[#0B0F14]/60 border-b border-[#38BDF8]/10 shadow-xl">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — BRAND BLOCK */}
        <motion.a
          href="#"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Avatar */}
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center border-2 border-[#38BDF8] font-bold text-white text-sm shadow-lg shadow-[#38BDF8]/50"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.7)",
            }}
            transition={{ duration: 0.3 }}
          >
            AK
          </motion.div>

          {/* Name */}
          <div>
            <span className="text-white font-bold text-lg tracking-wider block">
              Aqdas Kawchali
            </span>
            <span className="text-[#38BDF8] font-semibold text-xs tracking-widest">
              PORTFOLIO
            </span>
          </div>
        </motion.a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1 bg-[#0B0F14]/40 rounded-full px-2 py-1 border border-[#38BDF8]/20">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="text-[#9CA3AF] text-sm font-medium px-4 py-2 rounded-full relative transition-colors duration-300 hover:text-[#E5E7EB]"
              whileHover={{ backgroundColor: "rgba(56, 189, 248, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-[#0B0F14]/95 backdrop-blur-xl border-t border-[#38BDF8]/10"
        >
          <div className="flex flex-col items-center gap-6 py-8">

            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-[#9CA3AF] text-lg font-medium hover:text-white transition"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}

          </div>
        </motion.div>
      )}
    </nav>
  );
}

