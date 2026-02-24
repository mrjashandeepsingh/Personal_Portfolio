import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:mrjashandeepsingh.work@gmail.com", text: "mrjashandeepsingh.work@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+919501441072", text: "+91 9501441072" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mrjashandeepsingh", text: "mrjashandeepsingh" },
  { icon: Github, label: "GitHub", href: "https://www.github.com/mrjashandeepsingh", text: "mrjashandeepsingh" },
  { icon: Twitter, label: "X / Twitter", href: "https://www.x.com/MrJashandeepS", text: "@MrJashandeepS" },
  { icon: ExternalLink, label: "LeetCode", href: "https://www.leetcode.com/u/mrjashandeepsingh", text: "mrjashandeepsingh" },
];

const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let's build something impactful.
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-12">
          I'm always open to connecting with fellow developers, mentors, and collaborators.
        </p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-card border border-border p-4 glow-border text-left"
          >
            <l.icon size={18} className="text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">{l.label}</p>
              <p className="text-sm text-foreground truncate">{l.text}</p>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Contact;
