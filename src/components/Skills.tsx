import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    items: ["Java", "C", "C++", "Python"],
  },
  {
    title: "Web",
    items: ["HTML", "CSS"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub"],
  },
  {
    title: "Core Strengths",
    items: ["Leadership", "Mentoring", "Determination", "Consistency"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">What I Work With</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="rounded-xl bg-card border border-border p-6 glow-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-4 text-sm">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs rounded-md bg-muted text-muted-foreground font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
