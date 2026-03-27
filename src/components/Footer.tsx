import { Instagram, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@wissyagency.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <span className="font-display text-xl font-bold">
              wissy<span className="text-primary">.</span>agency
            </span>
            <p className="text-sm text-muted-foreground">
              Building the future, one product at a time.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground md:justify-center">
            <a href="#home" className="hover:text-foreground transition-colors">Home</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="flex gap-4 md:justify-end">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover-glow transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} wissy.agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
