const projects = [
  {
    title: "Lingflow",
    description: "A Telegram translation bot enabling seamless multilingual conversations in real-time.",
    tech: ["Telegram API", "Node.js", "AI/NLP"],
    link: "https://t.me/lingflow_bot",
  },
  {
    title: "Arcpay",
    description: "A username-based payments system making crypto transfers as easy as sending a message.",
    tech: ["Web3", "React", "Smart Contracts"],
    link: "https://arc-pay-lac.vercel.app/",
  },
  {
    title: "Immanuel Luxury Homes",
    description: "A premium real estate platform showcasing exclusive listings and investment consulting in Lagos.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://immanuelluxuryhomes.vercel.app/",
  },
  {
    title: "Samwissy Portfolio",
    description: "A personal portfolio site bridging the gap between Web2 design and the decentralized frontier of Web3.",
    tech: ["React", "Web3", "TypeScript"],
    link: "https://samwissyy.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm text-primary font-semibold tracking-widest uppercase">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-8 group hover-glow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Color accent bar */}
              <div className="w-full h-40 rounded-xl bg-secondary flex items-center justify-center mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(211_100%_52%/0.1),transparent_70%)] group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                <span className="font-display text-2xl font-bold text-primary/40 group-hover:text-primary/60 transition-colors">
                  {project.title}
                </span>
              </div>

              <h3 className="text-xl font-display font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary font-semibold hover:underline"
              >
                View Case Study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
