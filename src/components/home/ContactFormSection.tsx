import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Calendar, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);
  const FORMSPREE_URL = "https://formspree.io/f/maqpbrbk";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent! We'll get back to you within 24 hours.");
        e.currentTarget.reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.errors?.map((e: any) => e.message).join(', ') || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
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
                { icon: Mail, text: "Codebytdigital@gmail.com" },
                { icon: Phone, text: "+91 97184 17771" },
                { icon: Phone, text: "+91 99250 97911" },
                { icon: MapPin, text: "India" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/30">
              <h3 className="font-heading font-semibold text-foreground mb-4">Want to talk immediately?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                    <Calendar size={16} className="mr-2" /> Book a Discovery Call
                  </a>
                </Button>
                <Button variant="outline" className="border-green-500/20 text-green-500 hover:bg-green-500/10 hover:text-green-400" asChild>
                  <a href="https://wa.me/919718417771?text=Hi!%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} className="mr-2" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 md:p-8 space-y-4"
            action={FORMSPREE_URL}
            method="POST"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Your Name" required className="bg-background/50 border-border/50" />
              <Input name="email" placeholder="Email Address" type="email" required className="bg-background/50 border-border/50" />
            </div>
            <Input name="company" placeholder="Company (optional)" className="bg-background/50 border-border/50" />
            <Input name="budget" placeholder="Project Budget (optional)" className="bg-background/50 border-border/50" />
            <Textarea name="message" placeholder="Tell us about your project..." rows={5} required className="bg-background/50 border-border/50 resize-none" />
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
