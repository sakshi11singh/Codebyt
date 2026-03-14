import { motion } from "framer-motion";
import { Shield, Rocket, Users, HeartHandshake } from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Ship Faster", desc: "Agile methodologies and modern tools to get your product to market quickly." },
  { icon: Shield, title: "Enterprise Security", desc: "Industry-leading security practices baked into every line of code." },
  { icon: Users, title: "Dedicated Teams", desc: "Senior engineers and designers fully embedded in your project." },
  { icon: HeartHandshake, title: "Long-term Partnership", desc: "We don't just build and leave. We grow with you as your technology partner." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Why NexaByte</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              Built by Engineers,<br />
              <span className="gradient-text">Driven by Results</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We combine deep technical expertise with a relentless focus on business outcomes.
              Every solution we deliver is engineered to create measurable impact.
            </p>
            <div className="grid gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-destructive" />
                <div className="h-3 w-3 rounded-full bg-accent" />
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-primary/10 rounded w-3/4" />
                <div className="h-4 bg-primary/5 rounded w-full" />
                <div className="h-4 bg-primary/10 rounded w-1/2" />
                <div className="h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded w-2/3 mt-4" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">3x</div>
                  <div className="text-xs text-muted-foreground">Faster Delivery</div>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">40%</div>
                  <div className="text-xs text-muted-foreground">Cost Savings</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
