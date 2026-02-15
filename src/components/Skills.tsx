import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 95 },
      { name: "tailwind css", level: 95 },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 95 },
      { name: "MySQL", level: 90},
      { name: "MongoDB", level: 90 },
    ],
  },
  {
    title: "Data Analysis",
    skills: [
      { name: "SQL Queries", level: 75 },
      { name: "Data Cleaning", level: 70 },
      { name: "Data Visualization", level: 60 },
    ],
  },
  {
    title: "Development Concepts",
    skills: [
      { name: "OOP", level: 80 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "SDLC", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 85 },
      { name: "Adobe Photoshop", level: 70 },
      { name: "Adobe Illustrator", level: 80 },
      { name: "Jira", level: 75 },
      { name: "Confluence", level: 65 },
      { name: "Canva", level: 85 },
      { name: "MS Office", level: 85 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="gradient-border p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-5 gradient-text">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full gradient-bg"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIdx * 0.1 + 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
