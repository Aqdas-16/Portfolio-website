import { motion } from "motion/react";
import { GlowCard } from "./GlowCard";
import { BookOpen, Target, Sparkles, TrendingUp } from "lucide-react";

export function AboutSection() {
  const roadmapSteps = [
    { period: "2025", title: "Foundations", description: "Core concepts: Excel, basic Python, SQL and data-cleaning practices." },
    { period: "2026", title: "Visualization & Tools", description: "Focused on visual storytelling: Power BI, Matplotlib/Seaborn, dashboard design." },
    { period: "2026-27", title: "Projects & Portfolio", description: "Build small end-to-end projects with real datasets; document learnings and limitations." },
    { period: "2027+", title: "Applied Analytics", description: "Prepare for internships: domain problems, reproducible analysis and collaboration." },
  ];

  const drivingFactors = [
    { icon: Target, text: "Building strong fundamentals in data analysis " },
    { icon: TrendingUp, text: "Consistent, project-based learning" },
    { icon: Sparkles, text: "Turning data into visuals" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-[#E5E7EB]">About </span>
            <span className="text-[#38BDF8]">My Journey</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">A concise, honest overview of where I am today as a beginner in data analytics and where I'm headed next.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <GlowCard className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-[#38BDF8]/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <h3 className="text-2xl font-bold text-[#E5E7EB]">Who I Am</h3>
              </div>

              <div className="text-[#9CA3AF] leading-relaxed space-y-4">
                <p>
                  I am a Computer Engineering student beginning my journey into data analytics. I started focused learning in 2024 and am building
                  fundamentals in Excel, SQL and Python. I prefer project-driven learning — experimenting with small datasets, documenting
                  assumptions, and iterating on feedback.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full bg-[#111827]/40 text-sm text-[#E5E7EB]">Beginner • Learning</span>
                  <span className="px-3 py-1 rounded-full bg-[#111827]/40 text-sm text-[#9CA3AF]">Excel</span>
                  <span className="px-3 py-1 rounded-full bg-[#111827]/40 text-sm text-[#9CA3AF]">Python</span>
                  <span className="px-3 py-1 rounded-full bg-[#111827]/40 text-sm text-[#9CA3AF]">SQL</span>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <a href="#contact" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] text-black rounded-md font-medium">Contact</a>
                  <a href="#projects" className="text-sm text-[#9CA3AF] underline">See project ideas</a>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-[#2563EB]/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#E5E7EB]">What Drives Me</h3>
              </div>

              <div className="space-y-4">
                {drivingFactors.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#0b1220]/40 border border-[#273142]/50"
                    whileHover={{ x: 4 }}
                  >
                    <item.icon className="w-5 h-5 text-[#60A5FA] mt-1 flex-shrink-0" />
                    <p className="text-[#9CA3AF]">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlowCard>
        </div>

        <GlowCard className="p-8">
          <h3 className="text-2xl font-bold text-[#E5E7EB] mb-6 text-center">Analytics Journey Timeline</h3>
          <div className="relative">
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#2563EB] hidden md:block" />

            <div className="grid md:grid-cols-4 gap-6">
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative p-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="flex flex-col items-center mb-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center border-2 border-[#0f1724] relative z-10 mb-3">
                      <span className="text-white font-semibold text-xs">{step.period}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold text-[#E5E7EB]">{step.title}</h4>
                    <p className="text-sm text-[#9CA3AF] mt-1">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}