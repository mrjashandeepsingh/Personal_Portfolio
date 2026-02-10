import { motion } from "framer-motion";

const items = [
  {
    year: "2025",
    title: "Started B.Tech CSE",
    desc: "Began Computer Science Engineering at CGC Landran, Mohali.",
  },
  {
    year: "2025",
    title: "Founded Council of Coders",
    desc: "Created a coding community focused on mentoring and peer learning.",
  },
  {
    year: "2025",
    title: "Programming Fundamentals",
    desc: "Built foundations in Java, C, C++, and Python.",
  },
  {
    year: "2025",
    title: "Web Development Basics",
    desc: "Learned HTML, CSS and started building static projects.",
  },
  {
    year: "2025",
    title: "Git & GitHub Workflows",
    desc: "Adopted version control for collaborative development.",
  },
];

const Journey = () => (
  <section id="journey" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Journey</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">My Growth Timeline</h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex items-start gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-1.5" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-xs text-primary font-medium">{item.year}</span>
                <h3 className="font-heading font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Journey;
