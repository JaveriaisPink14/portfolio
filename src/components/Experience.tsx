import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "MERN Stack Developer Intern",
    company: "SyntexHub",
    period: "December 2025 – januray 2026",
    description: [
      "Built full-stack web applications",
      "Integrated REST APIs",
      "Followed clean coding practices",
      "Worked in Agile team environment",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "FIDSOR",
    period: "July 2025 – August 2025",
    description: [
      "Developed responsive UI using React.js",
      "Improved performance & accessibility",
      "Worked with component-based architecture",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Professional experience and internships.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full gradient-bg" />

              <div className="gradient-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg gradient-bg">
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                    <p className="text-primary text-sm font-medium">{exp.company} • {exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm ml-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
