import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Code2, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Code2,
    title: "Student",
    description: "Computer Science",
  },
  {
    icon: Lightbulb,
    title: "5+ Projects",
    description: "Academic & Personal",
  },
  {
    icon: Users,
    title: "5+ Teams",
    description: "Hackathons & Collabs",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform -rotate-3" />
              
              {/* Main card */}
              <div className="relative glass-card p-8 h-full flex flex-col justify-center items-center">
                <div className="text-8xl mb-6">👨‍🎓</div>
                <div className="font-mono text-sm text-muted-foreground text-center">
                  <span className="text-primary">const</span> student = &#123;
                  <br />
                  &nbsp;&nbsp;name: <span className="text-primary">"Sriram"</span>,
                  <br />
                  &nbsp;&nbsp;goal: <span className="text-primary">"Become a Full-Stack Dev"</span>,
                  <br />
                  &nbsp;&nbsp;learning: <span className="text-primary">"React, Node.js"</span>
                  <br />
                  &#125;;
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate about building
              <br />
              <span className="gradient-text">creative web experiences</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a computer science student and aspiring full-stack developer with a strong
              interest in web technologies. I love building clean, functional, and user-friendly
              interfaces using React, JavaScript, and modern tools.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Apart from coding, I enjoy participating in hackathons, learning new frameworks,
              and working on personal projects that challenge me to grow as a developer.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-bold text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </motion.div>
              ))}
            </div>

            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://drive.google.com/file/d/1BCePOKL5ewO3LD1SX75umBSCtAjSWo5-/view?usp=sharing" download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
