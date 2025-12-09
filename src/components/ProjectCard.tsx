import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
  isInView: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  techStack,
  features,
  liveUrl,
  githubUrl,
  index,
  isInView,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack?.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Features */}
        <ul className="text-sm text-muted-foreground mb-6 space-y-1">
          {features?.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="hero" size="sm" asChild className="flex-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}

          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
