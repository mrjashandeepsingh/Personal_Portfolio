import { motion } from "framer-motion";
import { Code, Globe, Users, Target } from "lucide-react";

const cards = [
  { icon: Code, label: "Programming Foundations" },
  { icon: Globe, label: "Web Development" },
  { icon: Users, label: "Community Leadership" },
  { icon: Target, label: "Consistent Learner" },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-3">About Me</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Building the Foundation
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.p
          className="text-muted-foreground leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm a first-year Computer Science Engineering student at Chandigarh Engineering
          College, CGC Landran, Mohali with a 9.2 CGPA. I'm actively learning programming and
          CS fundamentals while leading the{" "}
          <span className="text-foreground font-medium">Council of Coders</span> — a college
          coding community I founded to foster peer learning and mentoring. My long-term
          aspiration is to become a high-impact software engineer.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              className="rounded-xl bg-card border border-border p-6 card-hover glow-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 * i }}
            >
              <c.icon size={24} className="text-primary mb-3" />
              <p className="font-heading font-semibold text-foreground">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
