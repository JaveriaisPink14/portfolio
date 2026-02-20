import { motion } from "framer-motion";
import { ArrowDown, Code2, Cpu, Globe, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const floatingIcons = [
  { icon: Code2, delay: 0, x: -60, y: -40 },
  { icon: Globe, delay: 0.5, x: 60, y: -60 },
  { icon: Cpu, delay: 1, x: -80, y: 40 },
  { icon: Sparkles, delay: 1.5, x: 70, y: 50 },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4 text-sm tracking-widest uppercase"
            >
              Hello, I'm
            </motion.p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Javaria Shabbir</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Software Engineering Undergraduate | Full Stack (MERN) Developer | UI/UX Enthusiast
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Motivated Software Engineering undergraduate with hands-on experience in frontend and MERN-stack 
              web development. Skilled in building responsive, user-centric applications using modern 
              frameworks and technologies. Strong problem-solving ability, quick learner, and passionate 
              about applying academic knowledge to real-world software solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-border bg-card px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-colors inline-flex items-center gap-2"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            {/* Floating icons */}
            {floatingIcons.map(({ icon: Icon, delay, x, y }, i) => (
              <motion.div
                key={i}
                className="absolute z-10 p-2 rounded-lg bg-card border border-border glow-sm"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="w-4 h-4 text-primary" />
              </motion.div>
            ))}

            {/* Glow ring */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 gradient-bg animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-background p-1">
                <img
                  src={profileImg}
                  alt="Javaria Shabbir"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
