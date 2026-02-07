import { motion } from "motion/react";
import { GlowCard } from "./GlowCard";
import { useState } from "react";
import { ChevronDown, ChevronUp, FileText, ClipboardList, Search, BarChart, Lightbulb, Target } from "lucide-react";

export function CaseStudiesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Number of case studies to display
  const caseStudyCount = "1"; // e.g., "2" or "4"
  const caseStudiesToShow = parseInt(caseStudyCount) || 2;

  const sections = [
    { icon: FileText, label: "Business Problem" },
    { icon: ClipboardList, label: "Data Cleaning" },
    { icon: Search, label: "EDA Process" },
    { icon: BarChart, label: "Visual Findings" },
    { icon: Lightbulb, label: "Recommendations" },
    { icon: Target, label: "Outcome Summary" },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E5E7EB]">In-Depth </span>
            <span className="text-[#38BDF8]">Case Studies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] mx-auto mb-6" />
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Detailed analysis walkthroughs from problem to solution
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-6">
          {[...Array(caseStudiesToShow)].map((_, index) => {
            const num = index + 1;
            return (
              <GlowCard key={num} className="overflow-hidden">
                {/* Header */}
                <motion.button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-[#111827]/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center font-bold text-white">
                      {String(num).padStart(2, '0')}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#E5E7EB]">
                        {'Sales Data Performance Analysis — Sample'}
                      </h3>
                      <p className="text-sm text-[#9CA3AF] font-mono">Sample content — coming soon. Use this template to add your own case studies.</p>
                    </div>
                  </div>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#38BDF8]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#60A5FA]" />
                  )}
                </motion.button>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 space-y-6">
                    {sections.map((section, sectionIndex) => (
                      <motion.div
                        key={sectionIndex}
                        className="border border-[#374151] rounded-lg p-5 bg-[#111827]/30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: sectionIndex * 0.05 }}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-[#38BDF8]/10 rounded-lg">
                            <section.icon className="w-5 h-5 text-[#38BDF8]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-[#E5E7EB] mb-2">{section.label}</h4>
                            <p className="text-[#9CA3AF] text-sm">
                              {`{{CASE_STUDY_${num}_${section.label.toUpperCase().replace(/ /g, '_')}}}`}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* View Full Report Button */}
                    <div className="text-center">
                      <button
                        disabled
                        className="block w-full px-6 py-3 bg-[#374151] text-[#9CA3AF] rounded-lg font-medium cursor-not-allowed"
                        title="Report coming soon"
                      >
                        Full Report — Coming Soon
                      </button>
                    </div>
                  </div>
                </motion.div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
