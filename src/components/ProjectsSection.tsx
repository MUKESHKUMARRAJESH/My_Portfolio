import { motion } from "framer-motion";
import { Github } from "lucide-react"; // Removed Star, GitFork imports
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Derma AI",
    description:
      "The Derma AI project is an AI-based system that analyzes skin lesions to detect whether they are normal moles or specific types of skin cancer.",
    tech: ["Python", "HTML", "CSS", "Javascript", "CNN algorithm"],
    image: "/derma_ai.png",
    github: "https://github.com/MUKESHKUMARRAJESH/Derma-AI",
    // stars and forks data can remain here, it just won't be displayed anymore
    stars: 234,
    forks: 45,
  },
  {
    title: "Smart Path Explorer",
    description:
      "SmartPath Explorer is an AI-powered full-stack application that transforms any topic into a personalized, step-by-step learning roadmap.",
    tech: ["React", "Tailwind CSS", "OpenAI API"],
    image: "/smart_path.png",
    github: "https://github.com/MUKESHKUMARRAJESH/smartpath-explorer",
    stars: 189,
    forks: 32,
  },
  {
    title: "Saucedemo Pytest Selenium",
    description:
      "Automated UI test suite for SauceDemo using PyTest + Selenium. Covers login, checkout, cart, sorting, and social links with reusable fixtures and GitHub Actions CI.",
    tech: ["Python", "CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "https://github.com/MUKESHKUMARRAJESH/saucedemo-pytest-selenium",
    stars: 156,
    forks: 28,
  },
  {
    title: "Face Detector",
    description:
      "A Face Detector web project done with Streamlit library.",
    tech: ["Python", "Streamlit library"],
    image: "/image.jpg",
    github: "https://github.com/MUKESHKUMARRAJESH/Face-Detector",
    stars: 312,
    forks: 67,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing AI driven solutions and consistent development skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group glass rounded-2xl overflow-hidden hover-glow"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Stats Overlay REMOVED HERE */}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 group"
            onClick={() => window.open('https://github.com/MUKESHKUMARRAJESH?tab=repositories', '_blank')}
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;