import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Class Timetable Website",
    description: "A static website displaying the weekly class timetable for easy access.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/mrjashandeepsingh",
    live: "https://practice-projects-gamma.vercel.app",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">What I've Built</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="rounded-xl bg-card border border-border p-6 card-hover glow-border flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
