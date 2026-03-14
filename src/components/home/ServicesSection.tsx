import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Cloud, Palette, BarChart3, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Globe, title: "Website Development", desc: "High-performance websites and web applications built with modern frameworks." },
  { icon: Code, title: "Custom Software", desc: "Tailored software solutions that automate workflows and drive efficiency." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile apps that users love." },
  { icon: Brain, title: "AI & Automation", desc: "Intelligent solutions powered by machine learning and automation." },
  { icon: Cloud, title: "Cloud & SaaS", desc: "Scalable cloud architectures and SaaS platforms built to grow." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design that converts visitors into customers." },
  { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven strategies that increase visibility and revenue." },
  { icon: Zap, title: "SEO Optimization", desc: "Technical and content SEO to dominate search rankings." },
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
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
            Everything You Need to <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end technology services designed to transform your business and accelerate growth.
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
                className="glass-card group block rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <service.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
