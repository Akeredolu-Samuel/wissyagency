import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, label: "Discovery", description: "We learn your vision, goals, and audience." },
  { icon: Palette, label: "Design", description: "Crafting stunning interfaces and experiences." },
  { icon: Code, label: "Development", description: "Building robust, scalable digital products." },
  { icon: Rocket, label: "Launch & Scale", description: "Deploying and growing your product." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm text-primary font-semibold tracking-widest uppercase">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Our Process
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.label} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-20 h-20 rounded-2xl glass mx-auto mb-5 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300 relative z-10">
                <step.icon size={28} className="text-primary" />
              </div>
              <span className="text-xs text-primary font-semibold">
                0{i + 1}
              </span>
              <h3 className="text-lg font-display font-semibold mt-1 mb-2">
                {step.label}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
