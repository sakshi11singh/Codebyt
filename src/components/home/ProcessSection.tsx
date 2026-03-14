import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your goals, challenges, and market to define the perfect strategy." },
  { num: "02", title: "Design", desc: "Our designers craft intuitive interfaces backed by research and user testing." },
  { num: "03", title: "Develop", desc: "Engineers build your solution with clean, scalable code and continuous integration." },
  { num: "04", title: "Deploy & Scale", desc: "We launch, monitor, and optimize — then help you scale as you grow." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Process</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            How We <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-xl p-6">
                <span className="font-heading text-4xl font-bold text-primary/20">{step.num}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
