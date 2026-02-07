import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCard } from "./GlowCard";
import { ExternalLink, Github, Database, BarChart3, Folder, Lightbulb, Clock, CheckCircle, ChevronRight } from "lucide-react";

export function ProjectsSection() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Sales Data Analysis Dashboard",
      status: "in-progress",
      statusLabel: "In Progress",
      category: "Data Analysis",
      description: "Analyzing sales data to identify revenue trends, product performance, and regional distribution.",
      problem: "Business needs insights into sales patterns, product performance, and regional trends to make data-driven decisions.",
      tech: ["Excel", "SQL", "Power BI"],
      dataset: "Superstore Sales Dataset (Kaggle)",
      objectives: [
        "Clean and prepare sales dataset using SQL",
        "Create interactive Power BI dashboard",
        "Identify key performance indicators",
        "Generate actionable business recommendations"
      ],
      timeline: "Q1 2026",
      impact: "Enable data-driven sales and inventory decision-making",
      skills: ["Data Analysis", "SQL", "Data Visualization", "Business Intelligence"]
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      status: "planned",
      statusLabel: "Planned",
      category: "Analytics",
      description: "Segmenting customers based on purchasing behavior and demographics for targeted marketing.",
      problem: "Understanding customer segments to tailor marketing strategies and improve customer retention.",
      tech: ["Python", "SQL", "Excel"],
      dataset: "E-commerce Customer Dataset",
      objectives: [
        "Extract and prepare customer data using SQL",
        "Perform clustering analysis in Python",
        "Create customer segmentation profiles",
        "Develop marketing recommendations per segment"
      ],
      timeline: "Q2 2026",
      impact: "Improve marketing effectiveness and customer retention rates",
      skills: ["Python", "Data Analysis", "Machine Learning Basics", "SQL"]
    },
    {
      id: 3,
      title: "Financial Performance Report",
      status: "planned",
      statusLabel: "Planned",
      category: "Finance Analytics",
      description: "Building comprehensive financial reports with YoY analysis and trend forecasting.",
      problem: "Need automated monthly financial reports with variance analysis and forecasting.",
      tech: ["Excel", "SQL", "Power BI"],
      dataset: "Fictional Company Financial Data",
      objectives: [
        "Design financial data schema in SQL",
        "Build Excel models for calculations",
        "Create Power BI reporting suite",
        "Implement automated data refresh pipeline"
      ],
      timeline: "Q2 2026",
      impact: "Provide timely financial insights for decision-making",
      skills: ["Excel Advanced", "SQL", "Financial Analysis", "BI Reporting"]
    },
    {
      id: 4,
      title: "Web Analytics Dashboard",
      status: "planned",
      statusLabel: "Planned",
      category: "Web Analytics",
      description: "Tracking and analyzing website user behavior, traffic sources, and conversion metrics.",
      problem: "Website owners need visibility into user behavior and conversion funnel performance.",
      tech: ["Python", "SQL", "JavaScript", "Power BI"],
      dataset: "Website Traffic & User Behavior Data",
      objectives: [
        "Design data collection schema",
        "Process and transform user data",
        "Build analytical dashboards",
        "Create conversion funnel analysis"
      ],
      timeline: "Q3 2026",
      impact: "Optimize user experience and increase conversion rates",
      skills: ["Python", "Data Engineering", "Analytics", "Web Analytics"]
    }
  ];

  const stats = [
    { label: "In Progress", value: projects.filter(p => p.status === "in-progress").length, color: "#F97316" },
    { label: "Planned", value: projects.filter(p => p.status === "planned").length, color: "#8B5CF6" },
    { label: "Total Projects", value: projects.length, color: "#38BDF8" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return { bg: "#10B98120", border: "#10B98150", text: "#10B981", icon: CheckCircle };
      case "in-progress":
        return { bg: "#F9731620", border: "#F9731650", text: "#F97316", icon: Clock };
      case "planned":
        return { bg: "#8B5CF620", border: "#8B5CF650", text: "#8B5CF6", icon: Lightbulb };
      default:
        return { bg: "#38BDF820", border: "#38BDF850", text: "#38BDF8", icon: Folder };
    }
  };

  const filteredProjects = filterStatus === "all" 
    ? projects 
    : projects.filter(p => p.status === filterStatus);

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const statusColors = getStatusColor(project.status);
    const StatusIcon = statusColors.icon;

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <GlowCard className="overflow-hidden h-full">
          <button
            onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            className="w-full text-left p-6 hover:bg-[#1F2937]/50 transition-colors"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="p-3 rounded-lg border"
                    style={{
                      backgroundColor: statusColors.bg,
                      borderColor: statusColors.border,
                    }}
                  >
                    <BarChart3 className="w-6 h-6" style={{ color: statusColors.text }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#E5E7EB] mb-2">{project.title}</h3>
                    <p className="text-sm text-[#9CA3AF]">{project.description}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 rounded-full border whitespace-nowrap"
                  style={{
                    backgroundColor: statusColors.bg,
                    borderColor: statusColors.border,
                  }}
                >
                  <StatusIcon className="w-4 h-4" style={{ color: statusColors.text }} />
                  <span className="text-xs font-mono font-semibold" style={{ color: statusColors.text }}>
                    {project.statusLabel}
                  </span>
                </motion.div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full border bg-[#38BDF8]/10"
                    style={{ borderColor: "#38BDF850", color: "#38BDF8" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                <Clock className="w-4 h-4 text-[#60A5FA]" />
                <span>Expected: {project.timeline}</span>
              </div>

              {/* Expand Button */}
              <div className="flex items-center justify-between pt-2 border-t border-[#374151]">
                <span className="text-xs text-[#9CA3AF] font-mono">
                  {expandedProject === project.id ? "Hide details" : "View details"}
                </span>
                <motion.div
                  animate={{ rotate: expandedProject === project.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
                </motion.div>
              </div>
            </div>
          </button>

          {/* Expanded Content */}
          <AnimatePresence>
            {expandedProject === project.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-[#374151] bg-[#0B0F14]/50"
              >
                <div className="p-6 space-y-4">
                  {/* Problem Statement */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#60A5FA] mb-2 uppercase">Problem Statement</h4>
                    <p className="text-sm text-[#9CA3AF]">{project.problem}</p>
                  </div>

                  {/* Dataset & Skills */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#60A5FA] mb-2 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Dataset
                      </h4>
                      <p className="text-sm text-[#9CA3AF]">{project.dataset}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#60A5FA] mb-2">Skills to Apply</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/50 rounded text-[#38BDF8]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Objectives */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#60A5FA] mb-2">Project Objectives</h4>
                    <ul className="space-y-1">
                      {project.objectives.map((obj, idx) => (
                        <li key={idx} className="text-sm text-[#9CA3AF] flex gap-2">
                          <span className="text-[#38BDF8]">→</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="p-4 bg-[#38BDF8]/5 border border-[#38BDF8]/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-[#38BDF8] mb-2">Expected Impact</h4>
                    <p className="text-sm text-[#9CA3AF]">{project.impact}</p>
                  </div>

                  {/* Status Info */}
                  <div className="p-3 bg-[#111827]/50 border border-[#374151] rounded-lg">
                    <p className="text-xs text-[#9CA3AF] font-mono text-center">
                      📌 {project.status === "in-progress" ? "Currently working on this project" : "This project is in planning phase"}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </GlowCard>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Project </span>
            <span className="text-[#38BDF8]">Pipeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] mx-auto mb-6" />
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Real-world data analytics projects showcasing my learning journey and skill development
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <GlowCard key={idx} className="p-6 text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <p className="text-sm text-[#9CA3AF]">{stat.label}</p>
            </GlowCard>
          ))}
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { id: "all", label: "All Projects" },
            { id: "in-progress", label: "In Progress" },
            { id: "planned", label: "Planned" }
          ].map(filter => (
            <motion.button
              key={filter.id}
              onClick={() => setFilterStatus(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filterStatus === filter.id
                  ? "bg-[#38BDF8] text-black"
                  : "border border-[#38BDF8]/30 text-[#9CA3AF] hover:text-[#38BDF8]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* Learning Path Info */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlowCard className="p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[#38BDF8]" />
                <h3 className="text-xl font-bold text-[#E5E7EB]">My Project Approach</h3>
              </div>
              <p className="text-[#9CA3AF] leading-relaxed">
                As a beginner in data analytics, I'm building my portfolio with real-world projects that apply my learning. Each project is designed to solve actual business problems and demonstrate practical skill application. I start with understanding the business problem, preparing data using SQL and Excel, performing analysis, and creating compelling visualizations in Power BI or Python. This approach helps me learn holistically while building a portfolio that showcases my analytical thinking and technical skills.
              </p>
              <div className="pt-4 border-t border-[#374151] grid md:grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#38BDF8]">📊</p>
                  <p className="text-sm text-[#9CA3AF] mt-2">Data-Driven</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#38BDF8]">🎯</p>
                  <p className="text-sm text-[#9CA3AF] mt-2">Goal-Oriented</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#38BDF8]">📈</p>
                  <p className="text-sm text-[#9CA3AF] mt-2">Impact-Focused</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
