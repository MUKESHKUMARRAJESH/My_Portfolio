import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react";

const techStack = [
  { name: "Python", color: "#61DAFB" },
  { name: "C", color: "#3178C6" },
  { name: "SQL", color: "#339933" },
  { name: "NLP", color: "#3776AB" },
  { name: "Streamlit", color: "#FFFFFF" },
  { name: "Prompt Engineering", color: "#4169E1" },
  { name: "AWS", color: "#2496ED" },
  { name: "LLMs", color: "#FF9900" },
  { name: "RAG", color: "#E10098" },
  { name: "OpenCV", color: "#06B6D4" },
  { name: "GenAI", color: "#47A248" },
  { name: "CNNs", color: "#DC382D" },
];

const experience = [
  {
    role: "Technical Lead",
    company: "EduSpine",
    year: "Jan 2026 - Present",
    location: "Remote",
    type: "Full-time",
  },
  {
    role: "Assistant Tech Lead",
    company: "EduSpine",
    year: "Aug 2025 - Jan 2026",
    location: "Coimbatore, Tamil Nadu, India · Remote",
    type: "Full-time",
  },
  {
    role: "AI Intern",
    company: "Adhoc Softwares",
    year: "Jun 2025 - Jul 2025",
    location: "Coimbatore, Tamil Nadu, India · On-site",
    type: "Internship",
  },
];

const education = [
  {
    degree: "B.Tech Artificial Intelligence and Data Science",
    school: "SNS College of Engineering",
    year: "2023 - 2027",
    location: "Coimbatore, Tamil Nadu, India",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An innovative AI Engineer dedicated to building scalable, intelligent
            systems using Generative AI and full-stack technologies.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Engineering the Future of Intelligence
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I operate at the intersection of Scalable Engineering and Generative AI. 
              As a Technical Lead and dedicated builder, I don't just write code—I architect intelligent ecosystems. 
              My expertise lies in taming Large Language Models, optimizing RAG pipelines for precision, 
              and deploying full-stack solutions that can handle the heat of the real world.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Beyond the terminal, I’m a competitive problem solver who thrives in the high-pressure environment of hackathons. 
              I believe knowledge grows when shared, which is why I dedicate my free time to empowering the next generation of devs through technical bootcamps. 
              I build to solve, I lead to inspire.
            </p>
          </motion.div>

          {/* Profile Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl rotate-6 opacity-50" />
              <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline - NOW FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <GraduationCap className="inline-block mr-2 text-primary" />
            Education
          </h3>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]" />
                <div className="glass rounded-xl p-6 ml-4 hover-glow">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline - NOW SECOND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <Briefcase className="inline-block mr-2 text-primary" />
            Experience
          </h3>
          <div className="max-w-2xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]" />
                <div className="glass rounded-xl p-6 ml-4 hover-glow">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">
                    {exp.type}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass rounded-xl p-4 text-center cursor-pointer hover-glow group"
                style={{
                  boxShadow: `0 0 0px ${tech.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0px ${tech.color}`;
                }}
              >
                <span
                  className="text-lg font-medium transition-colors"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
