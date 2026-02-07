import { motion } from "motion/react";
import { Linkedin, Github, Mail, Instagram, ArrowUpRight, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Resume", href: "#resume" },
  ];

  const resourceLinks = [
    { name: "GitHub Projects", href: "https://github.com/Aqdas-16" },
    { name: "LinkedIn Profile", href: "https://www.linkedin.com/in/aqdas-kawchali-1b95b1351" },
    { name: "Email Contact", href: "mailto:aqdaskawchali16@gmail.com" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/aqdas-kawchali-1b95b1351", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Aqdas-16", label: "GitHub" },
    { icon: Mail, href: "mailto:aqdaskawchali16@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/__aqdas__16", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#0B0F14] mt-32">
      {/* Top divider */}
      <div className="border-t border-[#1F2937]" />

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Description - 5 cols */}
          <motion.div
            className="md:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-[#E5E7EB]">
                Aqdas Kawchali
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed max-w-sm">
                Aspiring data analyst learning to transform raw data into actionable insights. Computer Engineering student building fundamentals in analytics and data-driven problem solving.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <a
                href="mailto:aqdaskawchali16@gmail.com"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#38BDF8] transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">aqdaskawchali16@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-[#9CA3AF]">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Based in India</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#E5E7EB] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <motion.a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors flex items-center gap-2 group text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#E5E7EB] mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors flex items-center gap-2 group text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Social Links Section */}
        <motion.div
          className="mb-12 pb-12 border-b border-[#1F2937]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#E5E7EB] mb-6">
            Follow
          </h4>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-[#1F2937] bg-[#111827]/50 text-[#9CA3AF] hover:border-[#38BDF8] hover:text-[#38BDF8] hover:bg-[#38BDF8]/5 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-[#9CA3AF] text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p>© {currentYear} Aqdas Kawchali. All rights reserved.</p>
            <div className="hidden md:flex items-center gap-6">
                <a href="#" className="hover:text-[#38BDF8] transition-colors">Sitemap</a>
                <a href="#contact" className="hover:text-[#38BDF8] transition-colors">Contact</a>
              </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] tracking-tight uppercase opacity-50">
              Designed & Built by Aqdas Kawchali
            </p>
          </div>
        </motion.div>

        {/* Mobile Bottom Links */}
        <motion.div
          className="md:hidden flex flex-col gap-4 mt-8 pt-8 border-t border-[#1F2937] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors text-xs">Sitemap</a>
          <a href="#contact" className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors text-xs">Contact</a>
        </motion.div>
      </div>

      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />
    </footer>
  );
}