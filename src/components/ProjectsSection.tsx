import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Weather App",
    description:
      "A simple weather application that shows current weather and 7-day forecast using OpenWeather API.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=450&fit=crop",
    techStack: ["React", "OpenWeather API", "CSS"],
    features: [
      "Search weather by city",
      "7-day forecast",
      "Dynamic weather icons",
    ],
    liveUrl: "https://weatherlocate.netlify.app",
    githubUrl: "https://github.com",
  },
  {
    title: "College Management Website",
    description:
      "A web-based college management system for handling students, staff, results, and attendance.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Student registration",
      "Admin dashboard",
      "Attendance & results",
      "User authentication",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Calculator Web App",
    description:
      "A basic calculator web app for performing simple arithmetic operations.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: ["Basic operations", "Responsive UI", "Fast & lightweight"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const smallerProjects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase my projects and skills.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=450&fit=crop",
    techStack: ["React", "Tailwind", "Framer Motion"],
    features: ["Responsive design", "Smooth animations", "Dark mode"],
    githubUrl: "https://github.com",
  },
  {
    title: "Notes App",
    description:
      "A simple notes-taking app built using React with local storage support.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop",
    techStack: ["React", "LocalStorage"],
    features: ["Add, delete notes", "Auto save", "Minimal UI"],
    githubUrl: "https://github.com",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are some of the projects I built as a student while learning
            web development.
          </p>
        </motion.div>

        {/* Major Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Smaller Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallerProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index + 3}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
