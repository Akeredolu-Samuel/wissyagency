import { Smartphone, Globe, TrendingUp, Blocks, Bot } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Custom mobile and web applications built for performance and scalability.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites that convert and represent your brand.",
  },
  {
    icon: TrendingUp,
    title: "Brand Scaling",
    description: "Growth strategies, digital systems, and optimization for long-term success.",
  },
  {
    icon: Blocks,
    title: "Web3 Solutions",
    description: "Smart contracts, blockchain integration, and decentralized applications.",
  },
  {
    icon: Bot,
    title: "Automation & Bots",
    description: "Custom tools, Telegram bots, and AI-powered workflows.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm text-primary font-semibold tracking-widest uppercase">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-8 group hover-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
