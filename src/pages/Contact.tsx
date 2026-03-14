import Layout from "@/components/Layout";
import ContactFormSection from "@/components/home/ContactFormSection";
import { motion } from "framer-motion";

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects range from 6-16 weeks depending on scope. We provide detailed timelines during the discovery phase." },
  { q: "What's your pricing model?", a: "We offer both fixed-price and time-and-materials models. We'll recommend the best approach based on your project requirements." },
  { q: "Do you offer ongoing support?", a: "Yes! We provide maintenance plans, SLAs, and dedicated support teams for all our clients." },
  { q: "Can you work with our existing tech stack?", a: "Absolutely. We're technology-agnostic and can work with your current infrastructure or recommend optimal alternatives." },
];

const Contact = () => {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container-tight text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Get in Touch</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
              Let's Build Something <span className="gradient-text">Great Together</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <ContactFormSection />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
