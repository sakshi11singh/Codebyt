import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll get back to you within 24 hours.");
    }, 1000);
  };

  return (
    <section className="section-padding bg-card/50" id="contact">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Contact Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind? Fill out the form and our team will respond within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@nexabyte.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required className="bg-background/50 border-border/50" />
              <Input placeholder="Email Address" type="email" required className="bg-background/50 border-border/50" />
            </div>
            <Input placeholder="Company (optional)" className="bg-background/50 border-border/50" />
            <Input placeholder="Project Budget (optional)" className="bg-background/50 border-border/50" />
            <Textarea placeholder="Tell us about your project..." rows={5} required className="bg-background/50 border-border/50 resize-none" />
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : <>Send Message <Send size={16} /></>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
