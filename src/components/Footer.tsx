import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/ssriramcse23-ui/" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sriram-s-9aaa87374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
];

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Sriram . Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
