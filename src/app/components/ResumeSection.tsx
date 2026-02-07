import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCard } from "./GlowCard";
import { Download, FileText, Briefcase, GraduationCap, Award, ChevronDown, MapPin, Calendar } from "lucide-react";

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState("education");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const tabs = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  const education = [
    {
      id: 1,
      title: "Bachelor of Engineering – Computer Engineering",
      year: "2024 – 2028",
      organization: "AIKTC, New Panvel",
      location: "Panvel, India",
      description: "Pursuing undergraduate studies with focus on programming, databases, and data analytics fundamentals.",
      details: [
        "Learning Data related Skills, Informative.",
       
        "CGPA: 9.2"
      ]
    },
    {
      id: 2,
      title: "Data Analytics Learning Journey",
      year: "2026 – Ongoing",
      organization: "Self-Directed Learning + Online Platforms",
      location: "Remote",
      description: "Building foundational skills in Excel, SQL, Python, and Power BI to prepare for a data analyst career.",
      details: [
        "Completed: Excel Fundamentals, SQL Basics, Python Basics",
        "Currently Learning: SQL Advanced Queries, Python Libraries (Pandas, NumPy)",
        "Planned: Power BI Dashboards, Advanced Data Analysis"
      ]
    }
  ];

  const experience = [
    {
      id: 1,
      title: "Data Analytics Internship",
      year: "Coming Soon",
      organization: "Seeking Opportunities",
      location: "India",
      description: "Actively seeking an internship to apply and expand my data analytics knowledge in a professional environment.",
      details: [
        "Target: Companies focusing on data-driven decision making",
        "Skills to apply: Excel, SQL, Python, Power BI",
        "Willing to relocate or work remotely"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Learning Excel for Data Analysis",
      issuer: "Self-Paced Online Course",
      date: "In Progress",
      status: "In Progress",
      details: [
        "Mastering data cleaning, sorting, and pivot tables",
        "Building strong Excel foundations"
      ]
    },
    {
      id: 2,
      title: "SQL Fundamentals & Database Queries",
      issuer: "Self-Paced Online Course",
      date: "In Progress",
      status: "In Progress",
      details: [
        "Learning basic to intermediate SQL queries",
        "Understanding relational database concepts"
      ]
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      issuer: "Self-Paced Online Course",
      date: "Coming Soon",
      status: "Planned",
      details: [
        "Introduction to Python programming basics",
        "Exploring data manipulation and visualization libraries"
      ]
    }
  ];

  const renderContent = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {activeTab === "education" && education.map((item, idx) => (
            <TimelineCard key={item.id} item={item} index={idx} expanded={expandedItem === idx} onToggle={() => setExpandedItem(expandedItem === idx ? null : idx)} type="education" />
          ))}
          
          {activeTab === "experience" && experience.map((item, idx) => (
            <TimelineCard key={item.id} item={item} index={idx} expanded={expandedItem === idx} onToggle={() => setExpandedItem(expandedItem === idx ? null : idx)} type="experience" />
          ))}

          {activeTab === "certifications" && certifications.map((item, idx) => (
            <CertificationCard key={item.id} item={item} index={idx} expanded={expandedItem === idx} onToggle={() => setExpandedItem(expandedItem === idx ? null : idx)} />
          ))}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Professional </span>
            <span className="text-[#38BDF8]">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] mx-auto mb-6" />
          <p className="text-[#9CA3AF]">
            Comprehensive overview of my education, skills, and professional journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Resume Content */}
          <GlowCard className="lg:col-span-2 p-8">
            <div className="space-y-6">
              {/* Tabs */}
              <div className="flex gap-2 mb-8 border-b border-[#374151] overflow-x-auto pb-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                        activeTab === tab.id
                          ? "bg-[#38BDF8]/10 text-[#38BDF8] border-b-2 border-[#38BDF8]"
                          : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Content */}
              {renderContent()}
            </div>
          </GlowCard>

          {/* Sidebar - Resume Preview & Download */}
          <div className="space-y-6">
            <GlowCard className="p-6 sticky top-24">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#38BDF8]/10 rounded-lg">
                    <FileText className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#E5E7EB]">Resume</h3>
                </div>

                {/* Resume Preview */}
                <div className="bg-[#111827] border border-[#374151] rounded-lg p-4 aspect-[8.5/11] flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <FileText className="w-8 h-8 text-[#38BDF8] mx-auto opacity-50" />
                    <p className="text-xs text-[#9CA3AF]">PDF Preview</p>
                  </div>
                </div>

                {/* Download Button */}
                <motion.button
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#38BDF8]/50 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert("Resume download coming soon!")}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.button>

                {/* Stats */}
                <div className="space-y-3 pt-4 border-t border-[#374151]">
                  <div className="text-center">
                    <p className="text-xs text-[#9CA3AF]">Currently Learning</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, index, expanded, onToggle, type }: any) {
  const Icon = type === "education" ? GraduationCap : Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#111827]/50 border border-[#374151] rounded-lg overflow-hidden hover:border-[#38BDF8]/50 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-start justify-between gap-4 hover:bg-[#1F2937]/50 transition-colors text-left"
      >
        <div className="flex gap-4 flex-1">
          <div className="p-2 bg-[#38BDF8]/10 rounded-lg h-fit">
            <Icon className="w-5 h-5 text-[#38BDF8]" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-[#E5E7EB] mb-1">{item.title}</h4>
            <div className="flex items-center gap-4 flex-wrap text-sm text-[#9CA3AF]">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {item.year}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {item.location}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-[#9CA3AF]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#374151] bg-[#0B0F14]/50 px-4 py-4"
          >
            <p className="text-sm text-[#9CA3AF] mb-3">{item.description}</p>
            <span className="text-xs font-mono text-[#60A5FA] bg-[#38BDF8]/10 px-2 py-1 rounded">
              {item.organization}
            </span>
            {item.details && (
              <ul className="mt-4 space-y-2">
                {item.details.map((detail: string, i: number) => (
                  <li key={i} className="text-xs text-[#9CA3AF] flex gap-2">
                    <span className="text-[#38BDF8]">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CertificationCard({ item, index, expanded, onToggle }: any) {
  const statusColors: { [key: string]: string } = {
    "In Progress": "#F97316",
    "Planned": "#8B5CF6",
    "Completed": "#38BDF8"
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#111827]/50 border border-[#374151] rounded-lg overflow-hidden hover:border-[#38BDF8]/50 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-start justify-between gap-4 hover:bg-[#1F2937]/50 transition-colors text-left"
      >
        <div className="flex gap-4 flex-1">
          <div className="p-2 bg-[#38BDF8]/10 rounded-lg h-fit">
            <Award className="w-5 h-5 text-[#38BDF8]" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-[#E5E7EB] mb-2">{item.title}</h4>
            <div className="flex items-center gap-4 flex-wrap text-sm">
              <span className="text-[#9CA3AF]">{item.issuer}</span>
              <span
                className="text-xs font-mono px-2 py-1 rounded"
                style={{
                  color: statusColors[item.status],
                  backgroundColor: `${statusColors[item.status]}20`
                }}
              >
                {item.status}
              </span>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-[#9CA3AF]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#374151] bg-[#0B0F14]/50 px-4 py-4 space-y-3"
          >
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <Calendar className="w-4 h-4" />
              {item.date}
            </div>
            {item.details && (
              <ul className="space-y-2">
                {item.details.map((detail: string, i: number) => (
                  <li key={i} className="text-xs text-[#9CA3AF] flex gap-2">
                    <span className="text-[#38BDF8]">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
