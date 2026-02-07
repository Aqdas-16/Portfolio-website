import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCard } from "./GlowCard";
import { BookOpen, ArrowRight, Tag, Calendar, Clock, X, Download } from "lucide-react";

export function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Learning Excel for Data Analysis",
      category: "Excel",
      categoryColor: "#38BDF8",
      date: "Jan 2026",
      readTime: "5",
      excerpt: "My first step into analytics started with Excel where I learned data cleaning, sorting, and pivot tables.",
      fullDescription: "My journey in data analytics began with mastering Microsoft Excel. I started by learning the fundamentals of data entry and organization, quickly progressed to using formulas and functions for calculations, and eventually became proficient in creating pivot tables for complex data analysis. Excel taught me the importance of data integrity and the power of organizing information effectively. Through countless spreadsheets, I developed a strong foundation in data manipulation and visualization that would later prove invaluable in my analytics career.",
      notes: "Coming Soon"
    },
    {
      id: 2,
      title: "Diving into SQL Databases",
      category: "SQL",
      categoryColor: "#2563EB",
      date: "Feb 2026",
      readTime: "7",
      excerpt: "SQL opened the doors to managing large databases and writing complex queries for data extraction and analysis.",
      fullDescription: "After mastering Excel, I moved to SQL to handle larger datasets and more complex database operations. SQL allowed me to write powerful queries to extract, filter, and aggregate data from multiple tables. I learned about joins, subqueries, and aggregation functions, which greatly enhanced my ability to analyze data at scale. The transition from Excel to SQL was challenging but rewarding, as it taught me how to think in terms of relational databases and optimize my queries for performance. SQL became my gateway to understanding how data is stored and retrieved in real-world applications.",
      notes: "Coming Soon"
    },
    {
      id: 3,
      title: "Programming with Python",
      category: "Python",
      categoryColor: "#60A5FA",
      date: "Mar 2026",
      readTime: "8",
      excerpt: "Python brought automation and advanced analytics capabilities, enabling me to build powerful data analysis scripts.",
      fullDescription: "Python elevated my data analytics skills to a new level. I learned to automate repetitive tasks, build data pipelines, and perform statistical analysis using libraries like Pandas, NumPy, and Matplotlib. Python's versatility allowed me to not only analyze data but also create interactive visualizations and dashboards. The ability to write scripts and functions made complex analyses reproducible and scalable. Python also introduced me to advanced concepts like machine learning and data visualization, expanding my toolkit as a data analyst. It remains my go-to language for tackling complex analytical problems.",
      notes: "Coming Soon"
    },
    {
      id: 4,
      title: "Data Visualization with Power BI",
      category: "Power BI",
      categoryColor: "#F97316",
      date: "Apr 2026",
      readTime: "6",
      excerpt: "Creating interactive dashboards and compelling visualizations to tell data stories effectively.",
      fullDescription: "Power BI transformed how I present data insights to stakeholders. I learned to design interactive dashboards that allow users to explore data dynamically and gain actionable insights. Power BI's intuitive interface made it easy to create stunning visualizations from complex datasets. I mastered creating measures, calculated columns, and using DAX for advanced calculations. Power BI taught me that data analysis is not just about finding insights, but presenting them in a way that drives decision-making. The tool became essential in my workflow for transforming raw data into compelling visual narratives.",
      notes: "Coming Soon"
    },
    {
      id: 5,
      title: "Statistical Analysis Fundamentals",
      category: "Statistics",
      categoryColor: "#8B5CF6",
      date: "May 2026",
      readTime: "9",
      excerpt: "Understanding statistical concepts and applying them to real-world data analysis problems.",
      fullDescription: "Statistics formed the theoretical foundation for my data analytics work. I studied probability distributions, hypothesis testing, and regression analysis to understand the stories data tells. Learning statistics helped me move beyond descriptive analytics to predictive modeling. Understanding concepts like p-values, confidence intervals, and correlation coefficients allowed me to make data-driven decisions with confidence. Statistics bridged the gap between raw data and meaningful insights, teaching me how to validate assumptions and test hypotheses rigorously. This knowledge became crucial when working with stakeholders who demanded statistical rigor in analysis.",
      notes: "Coming Soon"
    },
    {
      id: 6,
      title: "Business Intelligence & Reporting",
      category: "BI",
      categoryColor: "#06B6D4",
      date: "Jun 2026",
      readTime: "7",
      excerpt: "Designing robust reporting systems and business intelligence solutions for organizational decision-making.",
      fullDescription: "Business Intelligence work taught me how to align data analytics with business objectives. I learned to design reporting systems that provide decision-makers with timely, accurate, and actionable information. BI projects introduced me to the full data lifecycle - from data gathering and transformation to visualization and communication. I discovered that successful BI implementations require understanding both technical aspects and business context. Creating KPIs, designing metrics frameworks, and building self-service analytics platforms became second nature. BI work reinforced that the true value of analytics lies not just in the insights, but in driving measurable business outcomes.",
      notes: "Coming Soon"
    }
  ];

  const handleDownloadNotes = () => {
    alert("Notes file will be available for download soon!");
  };

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Knowledge </span>
            <span className="text-[#38BDF8]">Hub</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] mx-auto mb-6" />
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Technical articles, tutorials, and insights from my data analytics journey
          </p>
        </motion.div>

        {/* Articles Grid - Show only first 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog) => (
            <GlowCard key={blog.id} className="overflow-hidden group h-full">
              <div className="space-y-4 h-full flex flex-col">
                {/* Article Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#111827] to-[#1F2937] border-b border-[#374151] flex items-center justify-center overflow-hidden">
                  <div className="text-center space-y-3">
                    <BookOpen className="w-12 h-12 text-[#38BDF8] mx-auto" />
                    <div className="text-[#60A5FA] font-mono text-xs">
                      {blog.category} Tutorial
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] to-transparent opacity-60" />
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  {/* Category Tag & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" style={{ color: blog.categoryColor }} />
                      <span
                        className="text-xs font-mono px-2 py-1 rounded-full border"
                        style={{
                          color: blog.categoryColor,
                          borderColor: `${blog.categoryColor}40`,
                          backgroundColor: `${blog.categoryColor}10`,
                        }}
                      >
                        {blog.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#9CA3AF]">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#E5E7EB] group-hover:text-[#38BDF8] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#9CA3AF] line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#374151] mt-auto">
                    <div className="flex items-center gap-1 text-xs text-[#9CA3AF] font-mono">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime} min read</span>
                    </div>
                    <motion.button
                      onClick={() => setSelectedBlog(blog.id)}
                      className="flex items-center gap-2 text-[#38BDF8] text-sm font-medium group/btn cursor-pointer hover:text-[#60A5FA] transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAllBlogs(true)}
            className="inline-block px-8 py-3 border-2 border-[#38BDF8] text-[#38BDF8] rounded-lg font-medium hover:bg-[#38BDF8]/10 transition-all duration-300 cursor-pointer"
          >
            View All Articles
          </button>
        </motion.div>
      </div>

      {/* All Blogs Modal */}
      <AnimatePresence>
        {showAllBlogs && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAllBlogs(false)}
          >
            <motion.div
              className="bg-[#1F2937] border border-[#38BDF8]/30 rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#111827] to-[#1F2937] border-b border-[#38BDF8]/30 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#E5E7EB]">All Articles</h2>
                <button
                  onClick={() => setShowAllBlogs(false)}
                  className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* All Blogs Grid */}
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-[#111827] border border-[#374151] rounded-lg overflow-hidden hover:border-[#38BDF8]/50 transition-colors group"
                  >
                    {/* Blog Image */}
                    <div className="relative h-32 bg-gradient-to-br from-[#0B0F14] to-[#1F2937] flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-[#38BDF8] opacity-50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] to-transparent opacity-50" />
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3">
                      {/* Category */}
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-mono px-2 py-1 rounded-full border"
                          style={{
                            color: blog.categoryColor,
                            borderColor: `${blog.categoryColor}40`,
                            backgroundColor: `${blog.categoryColor}10`,
                          }}
                        >
                          {blog.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#E5E7EB] line-clamp-2 group-hover:text-[#38BDF8] transition-colors">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-[#9CA3AF] line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Meta & Button */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#374151]">
                        <div className="flex items-center gap-1 text-xs text-[#9CA3AF] font-mono">
                          <Clock className="w-3 h-3" />
                          <span>{blog.readTime} min</span>
                        </div>
                        <button
                          onClick={() => {
                            setShowAllBlogs(false);
                            setSelectedBlog(blog.id);
                          }}
                          className="flex items-center gap-2 text-[#38BDF8] text-sm font-medium hover:text-[#60A5FA] cursor-pointer transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blog Details Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              className="bg-[#1F2937] border border-[#38BDF8]/30 rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#111827] to-[#1F2937] border-b border-[#38BDF8]/30 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#E5E7EB]">
                  {blogs.find(b => b.id === selectedBlog)?.title}
                </h2>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Meta Info */}
                <div className="flex items-center gap-6 text-sm text-[#9CA3AF] font-mono flex-wrap">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" style={{ color: blogs.find(b => b.id === selectedBlog)?.categoryColor }} />
                    <span>{blogs.find(b => b.id === selectedBlog)?.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogs.find(b => b.id === selectedBlog)?.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogs.find(b => b.id === selectedBlog)?.readTime} min read</span>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-lg font-semibold text-[#E5E7EB] mb-3">Journey</h3>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {blogs.find(b => b.id === selectedBlog)?.fullDescription}
                  </p>
                </div>

                {/* Notes Section */}
                <div className="bg-[#111827] border border-[#38BDF8]/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#E5E7EB]">Study Notes</h3>
                    <button
                      onClick={handleDownloadNotes}
                      className="flex items-center gap-2 px-4 py-2 bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] rounded-lg text-sm font-medium hover:bg-[#38BDF8]/20 transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center space-y-3">
                      <BookOpen className="w-8 h-8 text-[#38BDF8] mx-auto opacity-50" />
                      <p className="text-[#9CA3AF] font-mono text-sm">
                        Notes Coming Soon - In Progress...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="w-full py-3 bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] rounded-lg font-medium hover:bg-[#38BDF8]/20 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
