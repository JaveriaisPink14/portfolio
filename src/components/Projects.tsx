import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Full Stack Job Portal Website",
    tech: ["MongoDB", "Express", "React", "Node"],
    description: "Professional job portal platform with recruiter dashboard, resume upload, application tracking, secure authentication, and scalable architecture.",
    liveLink: "https://full-stack-job-portal-3ufgrwpfm-javeriaispink14s-projects.vercel.app/",
  },
  {
    title: "Fitness & Nutrition App",
    tech: ["React.js", "Express.js", "SQL"],
    description: "Personalized diet plans, calorie tracking, SQL database integration, and responsive design.",
    liveLink: "https://fit-app-tau.vercel.app/",
  },
  {
    title: "AI Chatbot Application",
    tech: ["React.js", "JavaScript"],
    description: "Real-time chatbot with async processing, performance optimized, and smart fallback handling.",
    liveLink: "https://e-commerce-with-react-js-steel.vercel.app/",
  },
  {
    title: "Weather App ",
    tech: ["React", "Express", "MySQL"],
    description: "Real-time weather data, 5-day forecast, search history, and API integration.",
    liveLink: "https://weather-app-syntecxhub-36j6.vercel.app/",
  },
   {
    title: "Employee Management System",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Material-UI"],
    description: "Comprehensive employee management with CRUD operations, status tracking, payroll management, HR modules, and interactive dashboards with charts.",
    liveLink: "https://employee-management-syntecxhub.vercel.app",
  },
  {
    title: "Notes App",
    tech: ["React", "JavaScript", "CSS", "Local Storage"],
    description: "Modern notes application with create, edit, delete, and search functionality. Features modal interface, responsive grid layout, and persistent local storage.",
    liveLink: "https://note-app-syntecxhub-gmn1nzx4y-javeriaispink14s-projects.vercel.app",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A showcase of my recent work and experiments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group gradient-border p-6 hover:glow transition-all duration-300 flex flex-col"
            >
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col h-full cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg pr-2">{project.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
