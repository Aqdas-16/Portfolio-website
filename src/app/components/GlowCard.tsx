import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hover?: boolean;
  gradient?: boolean;
  badge?: string;
}

export function GlowCard({ 
  children, 
  className = "", 
  glowColor = "#38BDF8", 
  hover = true,
  gradient = true,
  badge
}: GlowCardProps) {
  return (
    <motion.div
      className={`relative bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-xl border border-[#273142]/50 backdrop-blur-md overflow-hidden group ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={
        hover
          ? {
              y: -12,
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeOut" }
            }
          : {}
      }
    >
      {/* Multi-layer glow background */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        {/* Primary glow layer */}
        <div
          className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor}40 0%, transparent 70%)`,
          }}
        />
        
        {/* Secondary gradient overlay */}
        {gradient && (
          <div
            className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${glowColor}08 0%, transparent 100%)`,
            }}
          />
        )}

        {/* Dynamic border glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `conic-gradient(from 0deg, ${glowColor}30, transparent 50%, transparent)`,
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          border: `1px solid`,
          borderColor: glowColor,
          opacity: 0.3,
          background: `linear-gradient(135deg, ${glowColor}20 0%, transparent 100%)`,
        }}
      />

      {/* Enhanced border gradient on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${glowColor}30 0%, transparent 50%)`,
          padding: "1px",
          mask: `linear-gradient(to right, black 2px, transparent 2px), linear-gradient(to bottom, black 2px, transparent 2px)`,
          WebkitMask: `linear-gradient(to right, black 2px, transparent 2px), linear-gradient(to bottom, black 2px, transparent 2px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Optional badge */}
      {badge && (
        <motion.div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md z-20"
          style={{
            backgroundColor: `${glowColor}40`,
            border: `1px solid ${glowColor}60`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {badge}
        </motion.div>
      )}

      {/* Subtle corner accent */}
      <div
        className="absolute top-0 left-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${glowColor}60 0%, transparent 70%)`,
          filter: "blur(16px)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 100%, ${glowColor}40 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
}