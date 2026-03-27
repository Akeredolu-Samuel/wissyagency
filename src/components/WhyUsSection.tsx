import { ShieldCheck, Rocket, Cpu, Layers } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Systems, Not Just Products",
    description: "We don't build basic products — we build scalable systems designed to grow.",
  },
  {
    icon: Rocket,
    title: "Built for Scale",
    description: "We focus on scalability, not just design. Every line of code is future-proof.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "We understand modern tech — AI, Web3, automation — and integrate them where it counts.",
  },
  {
    icon: ShieldCheck,
    title: "Dev + Strategy + Innovation",
    description: "We combine development, strategy, and innovation into one unified approach.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(211_100%_52%/0.06),transparent_60%)]" />
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm text-primary font-semibold tracking-widest uppercase">
            Why wissy.agency
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Why Choose Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="glass rounded-2xl p-8 hover-glow transition-all duration-300"
            >
              <r.icon size={28} className="text-primary mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
