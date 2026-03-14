import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden section-padding min-h-[90vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[128px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[128px] mix-blend-screen" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8"
          >
            <Sparkles size={14} />
            <span>Now offering AI-powered solutions</span>
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Transform Your
            <br />
            <span className="gradient-text">Digital Future</span>
            <br />
            With Next-Gen Tech
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We architect scalable software, AI-driven automation, and premium digital experiences to accelerate your business growth. Join the innovators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto glass-card rounded-2xl p-6"
          >
            {[
              { value: "10+", label: "Transformations Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "3+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center p-4">
                <div className="font-heading text-3xl md:text-5xl font-bold gradient-text drop-shadow-sm">{stat.value}</div>
                <div className="text-sm text-foreground/80 mt-2 font-medium text-center">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
