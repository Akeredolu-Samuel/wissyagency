const CtaSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(211_100%_52%/0.12),transparent_60%)]" />
      <div className="container relative mx-auto px-6">
        <div className="glass rounded-3xl p-12 md:p-20 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(211_100%_52%/0.08),transparent_60%)]" />
          <div className="relative space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Let's Build Something
              <br />
              That <span className="text-primary glow-text">Stands Out.</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Work with wissy.agency to bring your ideas to life and scale your
              brand with powerful digital products.
            </p>
            <a
              href="mailto:hello@wissyagency.com"
              className="inline-block gradient-cta px-10 py-4 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-all hover:shadow-[0_0_40px_hsl(211_100%_52%/0.4)]"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
