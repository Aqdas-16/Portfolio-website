import { motion } from "motion/react";
import { GlowCard } from "./GlowCard";
import { Github, GitBranch, BookOpen, Award, ExternalLink } from "lucide-react";

export function ContributionsSection() {
  const learningMilestones = [
    { title: "Python Fundamentals", status: "Complete", date: "Q1 2026", color: "#38BDF8" },
    { title: "SQL & Databases", status: "In Progress", date: "Q1-Q2 2026", color: "#2563EB" },
    { title: "Data Analysis & Pandas", status: "In Progress", date: "Q2 2026", color: "#60A5FA" },
    { title: "Power BI & Visualization", status: "Planned", date: "Q2-Q3 2026", color: "#0EA5E9" },
  ];

  const openSourceInterests = [
    { name: "pandas", description: "Data manipulation & analysis library for Python" },
    { name: "matplotlib", description: "Data visualization library" },
    { name: "scikit-learn", description: "Machine learning library for Python" },
  ];

  return (
    <section id="contributions" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-[#E5E7EB]">My </span>
            <span className="text-[#38BDF8]">Contributions</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Learning through projects, code, and open-source community involvement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Learning Milestones */}
          <div className="lg:col-span-2 space-y-6">
            {/* Learning Progress */}
            <GlowCard className="p-8">
              <h3 className="text-xl font-bold text-[#E5E7EB] mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#38BDF8]" />
                Learning Milestones
              </h3>

              <div className="space-y-4">
                {learningMilestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-[#0b1220]/40 border border-[#273142]/50"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#E5E7EB] mb-1">{milestone.title}</h4>
                        <p className="text-sm text-[#9CA3AF]">{milestone.date}</p>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                        style={{
                          backgroundColor: `${milestone.color}20`,
                          color: milestone.color,
                        }}
                      >
                        {milestone.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlowCard>

            {/* Open Source Interests */}
            <GlowCard className="p-8">
              <h3 className="text-xl font-bold text-[#E5E7EB] mb-6 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-[#2563EB]" />
                Open Source Interests
              </h3>

              <div className="space-y-3">
                {openSourceInterests.map((project, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-[#0b1220]/40 border border-[#273142]/50 hover:border-[#38BDF8]/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-[#E5E7EB]">{project.name}</p>
                        <p className="text-sm text-[#9CA3AF] mt-1">{project.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#60A5FA] flex-shrink-0 mt-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlowCard>
          </div>

          {/* Sidebar - GitHub Profile */}
          <div>
            <GlowCard className="p-8 sticky top-24">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#38BDF8]/10 rounded-lg">
                    <Github className="w-6 h-6 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#E5E7EB]">GitHub</h3>
                </div>

                <div className="bg-[#0b1220]/40 border border-[#273142]/50 rounded-lg p-6 text-center space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-[#9CA3AF]">
                      Contributing to learning through hands-on projects and code exploration.
                    </p>
                  </div>

                  <motion.a
                    href="https://github.com/Aqdas-16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] text-black rounded-lg font-medium hover:shadow-lg hover:shadow-[#38BDF8]/50 transition-all w-full justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Profile
                  </motion.a>
                </div>

                {/* Activity Stats */}
                <div className="space-y-3 pt-4 border-t border-[#273142]">
                  <h4 className="text-sm font-semibold text-[#E5E7EB]">Activity Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#9CA3AF]">Learning Actively</span>
                      <span className="px-2 py-1 rounded bg-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold">Yes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#9CA3AF]">Building Projects</span>
                      <span className="px-2 py-1 rounded bg-[#60A5FA]/20 text-[#60A5FA] text-xs font-semibold">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#9CA3AF]">Open Source Ready</span>
                      <span className="px-2 py-1 rounded bg-[#2563EB]/20 text-[#2563EB] text-xs font-semibold">Soon</span>
                    </div>
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