import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCard } from "./GlowCard";
import { Award, ExternalLink, Calendar, Building2, ChevronDown, CheckCircle, Clock, Target } from "lucide-react";

export function CertificationsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: "Data Analyst Job Simulation",
      issuer: "Forage",
      status: "Completed",
      date: "Issued: Jan 2025",
      skills: ["Excel Analysis", "Data Insights", "Reporting"],
      description: "Performed forensic analysis on business datasets, identified anomalies, and generated insight reports using Excel.",
      link: "https://drive.google.com/file/d/1nk99O2P1c2DXw7VE5ZuxhMfIftNGQS8U/view?usp=sharing",
      highlights: [
        "Analyzed business datasets for patterns and anomalies",
        "Generated professional insight reports",
        "Applied advanced Excel techniques",
        "Delivered actionable business recommendations"
      ]
    },
    {
      id: 2,
      title: "Excel for Data Analysis",
      issuer: "Self-Paced Online Courses",
      status: "In Progress",
      date: "Started: Jan 2026",
      skills: ["Formulas", "Pivot Tables", "Data Visualization"],
      description: "Learning advanced Excel techniques including data cleaning, pivot tables, VLOOKUP, and data visualization for analytics.",
      link: null,
      highlights: [
        "Mastering essential formulas and functions",
        "Creating professional pivot table reports",
        "Building dynamic dashboards",
        "Data cleaning and validation techniques"
      ]
    },
    {
      id: 3,
      title: "SQL for Data Analysis",
      issuer: "Self-Paced Online Courses",
      status: "In Progress",
      date: "Started: Jan 2026",
      skills: ["Queries", "Joins", "Data Retrieval"],
      description: "Learning SQL fundamentals and writing queries to extract, filter, and aggregate data from databases.",
      link: null,
      highlights: [
        "Writing SELECT queries and filtering data",
        "Understanding JOIN operations",
        "Aggregating data with GROUP BY",
        "Database basics and normalization"
      ]
    },
    {
      id: 4,
      title: "Python for Data Analysis",
      issuer: "Planned - Online Platforms",
      status: "Planned",
      date: "Expected: Q2 2026",
      skills: ["Python Basics", "Pandas", "Data Visualization"],
      description: "Planning to learn Python programming for data analysis including libraries like Pandas, NumPy, and Matplotlib.",
      link: null,
      highlights: [
        "Python programming fundamentals",
        "Working with Pandas for data manipulation",
        "NumPy for numerical computing",
        "Matplotlib and Seaborn for visualization"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return { bg: "#10B981", bgLight: "#10B98120", border: "#10B98150", text: "#10B981" };
      case "In Progress":
        return { bg: "#F97316", bgLight: "#F9731620", border: "#F9731650", text: "#F97316" };
      case "Planned":
        return { bg: "#8B5CF6", bgLight: "#8B5CF620", border: "#8B5CF650", text: "#8B5CF6" };
      default:
        return { bg: "#38BDF8", bgLight: "#38BDF820", border: "#38BDF850", text: "#38BDF8" };
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return CheckCircle;
      case "In Progress":
        return Clock;
      case "Planned":
        return Target;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Certifications & </span>
            <span className="text-[#38BDF8]">Learning Path</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] mx-auto mb-6" />
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Professional credentials and active learning journey in data analytics
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const statusColors = getStatusColor(cert.status);
            const StatusIcon = getStatusIcon(cert.status);

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full overflow-hidden">
                  <button
                    onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                    className="w-full text-left p-6 hover:bg-[#1F2937]/50 transition-colors"
                  >
                    <div className="space-y-4">
                      {/* Header with Icon and Status */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className="p-3 rounded-lg border"
                            style={{
                              backgroundColor: statusColors.bgLight,
                              borderColor: statusColors.border,
                            }}
                          >
                            <Award
                              className="w-6 h-6"
                              style={{ color: statusColors.text }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-[#E5E7EB] mb-2">
                              {cert.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                              <Building2 className="w-4 h-4" />
                              <span>{cert.issuer}</span>
                            </div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <motion.div
                          className="flex items-center gap-2 px-3 py-1 rounded-full border"
                          style={{
                            backgroundColor: statusColors.bgLight,
                            borderColor: statusColors.border,
                          }}
                        >
                          <StatusIcon
                            className="w-4 h-4"
                            style={{ color: statusColors.text }}
                          />
                          <span
                            className="text-xs font-mono font-semibold"
                            style={{ color: statusColors.text }}
                          >
                            {cert.status}
                          </span>
                        </motion.div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 p-3 bg-[#111827]/50 rounded-lg border border-[#374151]">
                        <Calendar className="w-4 h-4 text-[#60A5FA]" />
                        <span className="text-sm text-[#9CA3AF]">{cert.date}</span>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full border bg-[#38BDF8]/10"
                            style={{ borderColor: "#38BDF850", color: "#38BDF8" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#9CA3AF]">{cert.description}</p>

                      {/* Expand Indicator */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#374151]">
                        <span className="text-xs text-[#9CA3AF] font-mono">
                          {expandedId === cert.id ? "Less details" : "More details"}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedId === cert.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedId === cert.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-[#374151] bg-[#0B0F14]/50"
                      >
                        <div className="p-6 space-y-4">
                          {/* Highlights */}
                          <div>
                            <h4 className="text-sm font-semibold text-[#E5E7EB] mb-3">
                              Key Highlights
                            </h4>
                            <ul className="space-y-2">
                              {cert.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2 text-sm text-[#9CA3AF]"
                                >
                                  <span className="text-[#38BDF8] mt-1">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Link Button */}
                          {cert.link && (
                            <motion.a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 border border-[#38BDF8]/50 rounded-lg bg-[#38BDF8]/5 hover:bg-[#38BDF8]/10 transition-colors group/link mt-4"
                              whileHover={{ x: 4 }}
                            >
                              <span className="text-sm font-medium text-[#38BDF8]">
                                View Credential
                              </span>
                              <ExternalLink className="w-4 h-4 text-[#38BDF8] group-hover/link:translate-x-1 transition-transform" />
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Progress Summary */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlowCard className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#38BDF8] mb-2">1</div>
                <p className="text-sm text-[#9CA3AF]">Certifications Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F97316] mb-2">2</div>
                <p className="text-sm text-[#9CA3AF]">Currently Learning</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B5CF6] mb-2">1</div>
                <p className="text-sm text-[#9CA3AF]">Planned for Learning</p>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}