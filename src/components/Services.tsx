import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layout, Server, Sparkles, FileText, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Development",
    description: "Building scalable web applications using MERN stack with clean architecture and secure backend logic.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Responsive, user-focused UI using React, Tailwind, and modern animations.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "RESTful APIs, authentication systems, and database integration.",
  },
  {
    icon: Sparkles,
    title: "AI & Smart Applications",
    description: "Real-time chatbot integration and intelligent UI logic.",
  },
  {
    icon: FileText,
    title: "Software Documentation",
    description: "SRS documentation, use cases, user stories, structured project planning.",
  },
  {
    icon: Palette,
    title: "UI/UX & Prototyping",
    description: "Wireframes, high-fidelity designs, interactive prototypes using Figma.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            What I can do for you — from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group gradient-border p-6 hover:glow transition-all duration-300"
            >
              <div className="p-3 rounded-lg gradient-bg inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
