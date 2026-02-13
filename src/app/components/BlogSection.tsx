import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, X, Download } from "lucide-react";

export function BlogSection() {

  /* ---------------- STATE ---------------- */

  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [previewFile, setPreviewFile] = useState<string | null>(null);

  /* ---------------- BLOG DATA ---------------- */

  const blogs = [

    {
      id: 1,
      title: "Learning Excel for Data Analysis",
      category: "Excel",
      image: "/images/excel.png",
      excerpt:
        "Data cleaning, pivot tables, formulas and dashboards using Excel.",
      notes: "Coming Soon",
    },

    {
      id: 2,
      title: "Diving into SQL Databases",
      category: "SQL",
      image: "/images/sql.png",
      excerpt:
        "Structured querying, joins, aggregations and database design.",
      notes: "/notes/sql-notes.pdf",   // ← YOUR PDF PATH
    },

    {
      id: 3,
      title: "Programming with Python",
      category: "Python",
      image: "/images/python.png",
      excerpt:
        "Automation, Pandas, NumPy and data processing workflows.",
      notes: "Coming Soon",
    },

    {
      id: 4,
      title: "Power BI Dashboards",
      category: "Power BI",
      image: "/images/powerbi.png",
      excerpt:
        "Interactive dashboards, DAX and business reporting.",
      notes: "Coming Soon",
    },

    {
      id: 5,
      title: "Statistics Fundamentals",
      category: "Statistics",
      image: "/images/statistics.png",
      excerpt:
        "Hypothesis testing, distributions and regression basics.",
      notes: "Coming Soon",
    },

    {
      id: 6,
      title: "Tableau Visualization",
      category: "Tableau",
      image: "/images/tableau.png",
      excerpt:
        "Storytelling dashboards and advanced visual analytics.",
      notes: "Coming Soon",
    },

  ];

  /* ---------------- UI ---------------- */

  return (
    <section id="blog" className="py-20 px-4">

      <div className="max-w-7xl mx-auto">

        {/* ---------- HEADER ---------- */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Knowledge Hub
          </h2>
          <p className="text-gray-400">
            Technical articles and study notes from my analytics journey
          </p>
        </div>

        {/* ---------- TOP 3 CARDS ---------- */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {blogs.slice(0, 3).map((blog) => (

            <div
              key={blog.id}
              className="bg-[#111827] border border-[#374151] rounded-xl overflow-hidden hover:border-[#38BDF8]/60 transition-all group"
            >

              {/* ICON IMAGE (SMALL) */}
              <div className="h-28 flex items-center justify-center bg-gradient-to-br from-[#0B0F14] to-[#1F2937] border-b border-[#374151]">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />

              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">

                <h3 className="text-lg font-semibold text-white">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {blog.excerpt}
                </p>

                <button
                  onClick={() => {
                    if (blog.notes !== "Coming Soon") {
                      setPreviewFile(blog.notes);
                    } else {
                      alert("Notes not uploaded yet");
                    }
                  }}
                  className="text-[#38BDF8] text-sm hover:underline"
                >
                  Open Notes
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* ---------- VIEW MORE BUTTON ---------- */}

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllBlogs(true)}
            className="px-8 py-3 border border-[#38BDF8] text-[#38BDF8] rounded-lg hover:bg-[#38BDF8]/10"
          >
            View More
          </button>
        </div>

      </div>

      {/* ---------- ALL BLOGS MODAL ---------- */}

      <AnimatePresence>

        {showAllBlogs && (

          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAllBlogs(false)}
          >

            <div
              className="bg-[#0B0F14] max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-xl border border-[#38BDF8]/30 p-6"
              onClick={(e) => e.stopPropagation()}
            >

              <h2 className="text-2xl text-white mb-6">
                All Notes & Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {blogs.map((blog) => (

                  <div
                    key={blog.id}
                    className="bg-[#111827] border border-[#374151] rounded-lg overflow-hidden"
                  >

                    <div className="h-24 flex items-center justify-center bg-gradient-to-br from-[#0B0F14] to-[#1F2937]">

                      <img
                        src={blog.image}
                        className="w-14 h-14 object-contain"
                      />

                    </div>

                    <div className="p-4 space-y-2">

                      <h3 className="text-white font-semibold text-sm">
                        {blog.title}
                      </h3>

                      <button
                        onClick={() => {
                          if (blog.notes !== "Coming Soon") {
                            setPreviewFile(blog.notes);
                            setShowAllBlogs(false);
                          } else {
                            alert("Notes not uploaded yet");
                          }
                        }}
                        className="text-[#38BDF8] text-xs hover:underline"
                      >
                        Open Notes
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* ---------- PREVIEW MODAL ---------- */}

      <AnimatePresence>

        {previewFile && (

          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <div className="bg-[#0B0F14] w-full max-w-6xl h-[90vh] rounded-xl border border-[#38BDF8]/30 flex flex-col">

              {/* HEADER */}
              <div className="flex justify-between items-center p-4 border-b border-[#374151]">

                <h3 className="text-white font-semibold">
                  Notes Preview
                </h3>

                <div className="flex gap-4">

                  <a
                    href={previewFile}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-[#38BDF8]/10 border border-[#38BDF8]/40 text-[#38BDF8] rounded-lg text-sm"
                  >
                    <Download size={16} />
                    Download
                  </a>

                  <button
                    onClick={() => setPreviewFile(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X />
                  </button>

                </div>

              </div>

              {/* PDF VIEWER */}
              <iframe
                src={previewFile}
                className="flex-1 w-full"
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}
