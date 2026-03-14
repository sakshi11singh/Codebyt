import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Cloud, Palette, BarChart3, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Globe, title: "Web Experiences", desc: "Fast, accessible, and high-converting websites built on cutting-edge stacks." },
  { icon: Code, title: "Custom Engineering", desc: "Complex web applications and internal tools that streamline operations." },
  { icon: Smartphone, title: "Mobile Ecosystems", desc: "Native-quality mobile apps for iOS and Android that engage users." },
  { icon: Brain, title: "AI Integration", desc: "Smart algorithms, LLM integrations, and intelligent automation." },
  { icon: Cloud, title: "Cloud Architecture", desc: "Serverless setups, smooth migrations, and resilient infrastructure." },
  { icon: Palette, title: "Experience Design", desc: "User journeys that delight and interfaces that convert flawlessly." },
  { icon: BarChart3, title: "Growth Marketing", desc: "Data-backed campaigns to scale your user base and MRR." },
  { icon: Zap, title: "Performance SEO", desc: "Dominate search with robust technical and content optimization." },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-bold uppercase tracking-[0.2em]">Expertise</span>
          <h2 className="font-heading text-3xl md:text-6xl font-extrabold mt-4 mb-6">
            Everything You Need to <span className="gradient-text">Dominate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We bring together engineering, design, and strategy to build solutions that outpace the competition.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to="/services"
                className="glass-card group block relative overflow-hidden rounded-2xl p-8 border border-border/50 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1 hover:bg-white/[0.02] transition-all duration-500 will-change-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <service.icon className="h-10 w-10 text-primary mb-6 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{service.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
