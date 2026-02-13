import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCard } from "./GlowCard";
import {
  BookOpen,
  ArrowRight,
  Tag,
  Calendar,
  Clock,
  X,
  Download,
} from "lucide-react";

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
      excerpt:
        "My first step into analytics started with Excel where I learned data cleaning, sorting, and pivot tables.",
      fullDescription:
        "I began my analytics journey with Excel. I learned formulas, pivot tables, dashboards, and data cleaning. Excel built my foundation in structured thinking and reporting.",
      notesFile: null,
    },

    {
      id: 2,
      title: "Diving into SQL Databases",
      category: "SQL",
      categoryColor: "#2563EB",
      date: "Feb 2026",
      readTime: "7",
      excerpt:
        "SQL opened the doors to managing databases and writing complex queries.",
      fullDescription:
        "SQL helped me work with large datasets. I learned joins, aggregations, subqueries, and performance optimization. It strengthened my data extraction and database understanding.",
      
      // 🔽 REAL NOTES LINK
      notesFile: "/notes/sql-notes.pdf",
    },

    {
      id: 3,
      title: "Programming with Python",
      category: "Python",
      categoryColor: "#60A5FA",
      date: "Mar 2026",
      readTime: "8",
      excerpt:
        "Python enabled automation and deeper analytics capabilities.",
      fullDescription:
        "Python expanded my analytics toolkit. I worked with Pandas, NumPy, and Matplotlib to automate workflows and analyze datasets programmatically.",
      notesFile: null,
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
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
            Technical articles and study notes from my analytics journey
          </p>
        </motion.div>

        {/* BLOG CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <GlowCard key={blog.id} className="overflow-hidden group h-full">
              <div className="flex flex-col h-full">

                {/* IMAGE */}
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-[#111827] to-[#1F2937]">
                  <BookOpen className="w-12 h-12 text-[#38BDF8]" />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1 space-y-4">

                  {/* CATEGORY */}
                  <div className="flex justify-between">
                    <span
                      className="text-xs font-mono px-2 py-1 rounded-full border"
                      style={{
                        color: blog.categoryColor,
                        borderColor: `${blog.categoryColor}40`,
                      }}
                    >
                      {blog.category}
                    </span>

                    <span className="text-xs text-[#9CA3AF] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold text-[#E5E7EB] group-hover:text-[#38BDF8]">
                    {blog.title}
                  </h3>

                  {/* EXCERPT */}
                  <p className="text-sm text-[#9CA3AF] flex-1">
                    {blog.excerpt}
                  </p>

                  {/* READ MORE */}
                  <button
                    onClick={() => setSelectedBlog(blog.id)}
                    className="flex items-center gap-2 text-[#38BDF8] text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* BLOG MODAL */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              className="bg-[#1F2937] max-w-2xl w-full rounded-lg border border-[#38BDF8]/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="p-6 border-b border-[#374151] flex justify-between">
                <h2 className="text-xl font-bold text-white">
                  {blogs.find((b) => b.id === selectedBlog)?.title}
                </h2>

                <button onClick={() => setSelectedBlog(null)}>
                  <X />
                </button>
              </div>

              {/* BODY */}
              <div className="p-6 space-y-6">

                {/* DESCRIPTION */}
                <p className="text-[#9CA3AF] leading-relaxed">
                  {
                    blogs.find((b) => b.id === selectedBlog)
                      ?.fullDescription
                  }
                </p>

                {/* NOTES SECTION */}
                <div className="bg-[#111827] border border-[#38BDF8]/20 rounded-lg p-4">

                  <div className="flex justify-between mb-4">
                    <h3 className="text-white font-semibold">
                      Study Notes
                    </h3>

                    {blogs.find((b) => b.id === selectedBlog)
                      ?.notesFile && (
                      <a
                        href={
                          blogs.find((b) => b.id === selectedBlog)
                            ?.notesFile!
                        }
                        download
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] rounded-lg text-sm"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    )}
                  </div>

                  <div className="text-center py-6">
                    <BookOpen className="w-8 h-8 text-[#38BDF8] mx-auto mb-2 opacity-50" />

                    <p className="text-sm text-[#9CA3AF] font-mono">
                      {blogs.find((b) => b.id === selectedBlog)
                        ?.notesFile
                        ? "Click download to access notes"
                        : "Notes Coming Soon"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
