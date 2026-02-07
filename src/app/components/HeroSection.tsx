import { motion } from "motion/react";
import { ArrowRight, Code2, MapPin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Profile + Name */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-6 mb-8"
            >
              {/* Profile Image */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#38BDF8] shadow-lg shadow-[#38BDF8]/30">
                <img
                  src="/profile.jpeg"
                  alt="Aqdas Kawchali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#38BDF8]/20 to-transparent" />
              </div>

              {/* Name + Role */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#E5E7EB] to-[#9CA3AF] bg-clip-text text-transparent">
                  Aqdas<br />Kawchali
                </h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 mb-8"
            >
              <p className="text-lg text-[#38BDF8] font-semibold tracking-wide">
                Aspiring Data Analyst
              </p>
              <p className="text-[#9CA3AF] text-base font-light">
                Computer Engineering Student | Learning Data Analytics
              </p>
            </motion.div>
          </div>

          {/* Overview Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-xl mb-8">
              Learning to analyze data and uncover insights. Currently building fundamentals in Excel, SQL, Python, and Power BI. 
              Creating beginner-level projects to understand real-world analytics applications.
            </p>

            {/* Contact Details with Icons */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#9CA3AF] group">
                <Code2 className="w-5 h-5 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                <span>Learning: Excel • SQL • Python • Power BI</span>
              </div>

              <div className="flex items-center gap-3 text-[#9CA3AF] group">
                <MapPin className="w-5 h-5 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                <span>Mumbai, Maharashtra, India</span>
              </div>

              <div className="flex items-center gap-3 text-[#9CA3AF] group">
                <Mail className="w-5 h-5 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                <span>aqdaskawchali16@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] text-black rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-[#38BDF8]/30 hover:shadow-[#38BDF8]/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-[#38BDF8]/50 text-[#38BDF8] rounded-lg font-semibold backdrop-blur-md bg-[#38BDF8]/5 hover:bg-[#38BDF8]/10 hover:border-[#38BDF8] transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="bg-gradient-to-br from-[#111827]/60 to-[#0B0F14]/40 backdrop-blur-xl border border-[#38BDF8]/20 rounded-2xl p-8 shadow-xl shadow-[#38BDF8]/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#38BDF8]/10 rounded-lg">
                <Code2 className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <h3 className="text-2xl font-bold text-[#E5E7EB]">Analytics Stack</h3>
            </div>

            <div className="space-y-5">
              {[
                { label: "Excel", level: "Intermediate" },
                { label: "SQL", level: "Beginner" },
                { label: "Python", level: "Beginner" },
                { label: "Power BI", level: "Beginner" },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#0B0F14]/50 border border-[#273142]/50 hover:border-[#38BDF8]/30 transition-all"
                >
                  <span className="text-[#E5E7EB] font-medium">{skill.label}</span>
                  <span className="text-[#38BDF8] text-sm font-semibold px-3 py-1 bg-[#38BDF8]/10 rounded-full">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 pt-6 border-t border-[#38BDF8]/10"
            >
              <p className="text-sm text-[#9CA3AF] text-center">
                <span className="text-[#38BDF8] font-semibold">Actively learning</span> and will be building project soon..
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
