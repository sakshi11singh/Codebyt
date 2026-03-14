import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Cloud, Palette, BarChart3, Globe, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { icon: Globe, title: "Website Development", desc: "From marketing sites to complex web applications, we build performant, accessible, and SEO-optimized websites using React, Next.js, and modern frameworks.", features: ["Custom web applications", "E-commerce platforms", "Progressive web apps", "CMS integration"] },
  { icon: Code, title: "Custom Software Development", desc: "Bespoke software solutions tailored to your unique business processes. We handle everything from architecture to deployment.", features: ["Enterprise applications", "API development", "Legacy modernization", "System integration"] },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.", features: ["iOS & Android apps", "React Native / Flutter", "App Store optimization", "Push notifications"] },
  { icon: Brain, title: "AI & Automation", desc: "Harness the power of artificial intelligence to automate workflows, extract insights, and create intelligent products.", features: ["Machine learning models", "NLP & chatbots", "Process automation", "Predictive analytics"] },
  { icon: Cloud, title: "Cloud & SaaS Development", desc: "Scalable cloud-native architectures and SaaS platforms designed for high availability and rapid growth.", features: ["Cloud migration", "Microservices", "DevOps & CI/CD", "Multi-tenant SaaS"] },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design that balances aesthetics with usability to create products people love to use.", features: ["User research", "Wireframing & prototyping", "Design systems", "Usability testing"] },
  { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven marketing strategies that increase brand visibility, drive traffic, and convert visitors into customers.", features: ["Content strategy", "PPC campaigns", "Social media", "Analytics & reporting"] },
  { icon: Zap, title: "SEO Optimization", desc: "Technical and content SEO strategies that improve your search rankings and drive organic growth.", features: ["Technical SEO audits", "Keyword research", "On-page optimization", "Link building"] },
];

const Services = () => {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container-tight text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
              Full-Spectrum <span className="gradient-text">Technology Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to scale, we provide everything you need to build, launch, and grow your digital products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-tight space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-2">{service.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-border rounded-2xl p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Every business is unique. Let's discuss how we can tailor our services to your specific needs.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get a Free Quote <ArrowRight size={16} /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
