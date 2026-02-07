import { motion } from "motion/react";
import { GlowCard } from "./GlowCard";
import { Code2, Database, BarChart3, PieChart, Wrench, Zap } from "lucide-react";

interface Skill {
  name: string;
  level: "Beginner" | "Intermediate";
  proficiency: number;
}

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  color: string;
  skills: Skill[];
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      icon: Code2,
      title: "Programming",
      color: "#38BDF8",
      skills: [
        { name: "Python", level: "Beginner", proficiency: 45 },
        { name: "Data Structures & Loops", level: "Beginner", proficiency: 50 },
        { name: "File Handling", level: "Beginner", proficiency: 40 },
      ],
    },
    {
      icon: Database,
      title: "Databases & SQL",
      color: "#2563EB",
      skills: [
        { name: "SQL Queries (SELECT, WHERE)", level: "Beginner", proficiency: 45 },
        { name: "Filtering & Sorting", level: "Beginner", proficiency: 48 },
        { name: "JOINs & Aggregations", level: "Beginner", proficiency: 35 },
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      color: "#60A5FA",
      skills: [
        { name: "Microsoft Excel", level: "Beginner", proficiency: 60 },
        { name: "Data Cleaning & EDA", level: "Beginner", proficiency: 50 },
        { name: "Pandas & NumPy", level: "Beginner", proficiency: 40 },
      ],
    },
    {
      icon: PieChart,
      title: "Visualization",
      color: "#0EA5E9",
      skills: [
        { name: "Power BI Basics", level: "Beginner", proficiency: 35 },
        { name: "Chart Design Principles", level: "Beginner", proficiency: 45 },
        { name: "Dashboard Layouts", level: "Beginner", proficiency: 40 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "#06B6D4",
      skills: [
        { name: "VS Code", level: "Beginner", proficiency: 55 },
        { name: "Jupyter Notebook", level: "Beginner", proficiency: 50 },
        { name: "Git & GitHub", level: "Beginner", proficiency: 45 },
      ],
    },
    {
      icon: Zap,
      title: "Statistics & Methods",
      color: "#38BDF8",
      skills: [
        { name: "Descriptive Statistics", level: "Beginner", proficiency: 50 },
        { name: "Data Distribution & Trends", level: "Beginner", proficiency: 45 },
        { name: "Basic Statistical Concepts", level: "Beginner", proficiency: 40 },
      ],
    },
  ];



  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-[#E5E7EB]">Technical </span>
            <span className="text-[#38BDF8]">Arsenal</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Building fundamentals in data analytics. Proficiency levels reflect honest, hands-on learning progress.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <GlowCard
              key={categoryIndex}
              className="p-6 group"
              glowColor={category.color}
            >
              <div className="space-y-5">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: `${category.color}15`,
                    }}
                  >
                    <category.icon
                      className="w-6 h-6"
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#E5E7EB]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.05 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#E5E7EB]">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-semibold px-2 py-1 rounded"
                          style={{
                            backgroundColor: `${category.color}20`,
                            color: category.color,
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#0b1220]/50 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: category.color,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: categoryIndex * 0.05 + skillIndex * 0.05 + 0.2,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <GlowCard className="p-6 inline-block">
            <p className="text-[#9CA3AF] font-mono text-sm">
              <span className="text-[#38BDF8]">{">"}</span>{" "}
              Learning consistently through projects, experimentation, and feedback.
            </p>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
