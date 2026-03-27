import ceoPortrait from "@/assets/ceo-portrait.jpg";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/akeredolu-samuel-970707370/", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@wissyagency.com", label: "Email" },
];

const CeoSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(211_100%_52%/0.06),transparent_70%)]" />
      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative group flex justify-center">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors duration-500 z-10" />
              <div className="absolute -inset-1 rounded-2xl bg-[radial-gradient(circle_at_center,hsl(211_100%_52%/0.2),transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
              <img
                src={ceoPortrait}
                alt="Akeredolu Samuel — Founder & CEO"
                loading="lazy"
                width={640}
                height={800}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-sm text-primary font-semibold tracking-widest uppercase">
              Meet the Founder
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Akeredolu Samuel
            </h2>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              Founder & CEO, wissy.agency
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Akeredolu Samuel (Samwissy) is a full-stack developer and Web3 builder focused on
              creating scalable digital products. With a passion for innovation,
              security, and real-world solutions, he leads wissy.agency in
              building powerful systems for modern businesses.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover-glow transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
