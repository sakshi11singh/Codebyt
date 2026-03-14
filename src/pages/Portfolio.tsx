import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  { title: "DataFlow Analytics Platform", category: "SaaS / Cloud", desc: "Built a real-time analytics dashboard handling 10M+ events/day. Reduced data processing time by 80%.", tech: ["React", "Node.js", "AWS", "PostgreSQL"] },
  { title: "InnovateLab Mobile App", category: "Mobile / AI", desc: "Cross-platform mobile app with AI-powered recommendations, serving 500K+ active users.", tech: ["React Native", "Python", "TensorFlow", "Firebase"] },
  { title: "CloudSync Enterprise Suite", category: "Enterprise Software", desc: "End-to-end enterprise resource management platform with role-based access and real-time collaboration.", tech: ["TypeScript", "GraphQL", "Docker", "Redis"] },
  { title: "Quantum AI Research Portal", category: "Web Application", desc: "Interactive research portal with real-time data visualization and collaborative annotation tools.", tech: ["Next.js", "D3.js", "Python", "Kubernetes"] },
  { title: "NextGen E-commerce Platform", category: "E-commerce", desc: "Headless commerce platform with personalized shopping experiences and 99.99% uptime.", tech: ["React", "Stripe", "Elasticsearch", "AWS"] },
  { title: "TechCorp Brand Redesign", category: "UI/UX Design", desc: "Complete brand identity and website redesign resulting in 200% increase in lead generation.", tech: ["Figma", "React", "Tailwind CSS", "Framer Motion"] },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container-tight text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Portfolio</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
              Our <span className="gradient-text">Best Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase our capabilities across industries and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-tight grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-primary/30 group-hover:text-primary/60 transition-colors" />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start Your Project <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
