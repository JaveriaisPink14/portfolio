import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Lightbulb, Code, Mail, Phone, MapPin, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "Foundation University, Islamabad",
    period: "Sep 2023 – In Progress",
  },
  {
    degree: "FSC – Pre Engineering (A+)",
    school: "F.G Inter College, Mangla Cantt",
    period: "Jun 2021 – Jul 2023",
  },
  {
    degree: "Matric – Science (A+)",
    school: "F.G Public School, Mangla Cantt",
    period: "Mar 2019 – Apr 2021",
  },
];

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Mirpur AJK, Pakistan" },
  { icon: Mail, label: "Email", value: "Jaweriashabbir517@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92-3129618690" },
  { icon: Calendar, label: "D.O.B", value: "01 August 2005" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Get to know my journey, passions, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Software Engineering undergraduate with hands-on experience in frontend and MERN-stack 
              web development. My journey in tech began with a curiosity about how software can transform ideas 
              into reality, and it has since grown into a commitment to creating impactful solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I thrive in environments that challenge my problem-solving abilities and allow me to explore cutting-edge 
              technologies. From building responsive web applications to developing intelligent systems, I enjoy 
              the entire spectrum of software development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to team projects, or 
              designing intuitive user interfaces that make technology more accessible.
            </p>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info) => (
                <div
                  key={info.label}
                  className="gradient-border p-4 flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg gradient-bg flex-shrink-0">
                    <info.icon className="w-4 h-4 text-primary-foreground" />
                  </div>

                  {/* Important Fix: min-w-0 + break-words */}
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium break-words">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Timeline */}
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="gradient-border p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg gradient-bg flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm mb-0.5">
                        {edu.degree}
                      </h3>
                      <p className="text-primary text-xs font-medium">
                        {edu.school}
                      </p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="gradient-border p-5 text-center">
                <div className="p-3 rounded-lg gradient-bg inline-block mb-3">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-display font-semibold">5+</h4>
                <p className="text-muted-foreground text-sm">
                  Projects Built
                </p>
              </div>

              <div className="gradient-border p-5 text-center">
                <div className="p-3 rounded-lg gradient-accent inline-block mb-3">
                  <Lightbulb className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-display font-semibold">Innovative</h4>
                <p className="text-muted-foreground text-sm">
                  Problem Solver
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;