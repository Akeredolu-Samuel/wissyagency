import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(211_100%_52%/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(211_100%_40%/0.08),transparent_60%)]" />
      </div>

      <div className="container relative mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-muted-foreground animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Digital Agency — Web3 · Apps · Scale
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight animate-fade-up [animation-delay:0.1s] opacity-0">
              We Build Digital
              <br />
              Products That{" "}
              <span className="text-primary glow-text">Scale.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg animate-fade-up [animation-delay:0.2s] opacity-0">
              From idea to execution, wissy.agency helps startups and brands build
              powerful apps, stunning websites, and scalable digital systems.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:0.3s] opacity-0">
              <a
                href="#contact"
                className="gradient-cta px-8 py-3.5 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-all hover:shadow-[0_0_30px_hsl(211_100%_52%/0.4)]"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="glass px-8 py-3.5 rounded-xl font-semibold text-foreground hover-glow"
              >
                View Our Work
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:0.4s] opacity-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(211_100%_52%/0.15),transparent_70%)]" />
            <img
              src={heroMockup}
              alt="Futuristic dashboard mockups"
              width={1280}
              height={720}
              className="relative w-full animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
