import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "NexaByte transformed our entire digital presence. Revenue increased 150% within six months of launching the new platform.",
    name: "Sarah Chen",
    role: "CEO, DataFlow",
    stars: 5,
  },
  {
    quote: "Their AI automation solution saved us over 2,000 hours per month. The ROI was visible from day one.",
    name: "Marcus Johnson",
    role: "CTO, InnovateLab",
    stars: 5,
  },
  {
    quote: "The most responsive and technically skilled team we've ever worked with. They feel like an extension of our own company.",
    name: "Emily Rodriguez",
    role: "VP Product, CloudSync",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Loved by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1 mb-6">"{t.quote}"</p>
              <div>
                <div className="font-heading font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
