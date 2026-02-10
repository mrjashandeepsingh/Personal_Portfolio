import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { value: "9.2", label: "CGPA" },
  { value: "Founder", label: "Council of Coders" },
  { value: "2025–29", label: "B.Tech CSE" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-glow pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Software Engineer in the Making
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Jashandeep</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              B.Tech CSE student focused on building strong fundamentals, leadership, and future-ready engineering skills.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects <ExternalLink size={16} />
              </a>
              <a
                href="https://drive.google.com/file/d/1OUQSAbEiqi3sQW0XE9znqjrpUdBvnVVu/view"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
              >
                Download Resume <Download size={16} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden glow-border">
                <img
                  src={profileImg}
                  alt="Jashandeep Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-2xl border border-primary/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
