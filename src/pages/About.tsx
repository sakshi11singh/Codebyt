import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Users, Target, Award, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Every project we take on is aligned with creating real business impact." },
  { icon: Users, title: "People First", desc: "We invest in our team so they can deliver their best work for you." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in code quality and design." },
  { icon: Globe, title: "Global Reach", desc: "Serving clients across 20+ countries with distributed, agile teams." },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Founder", bio: "15+ years in tech leadership" },
  { name: "Priya Sharma", role: "CTO", bio: "Ex-Google, systems architecture expert" },
  { name: "David Kim", role: "Head of Design", bio: "Award-winning UX designer" },
  { name: "Maria Santos", role: "VP Engineering", bio: "Full-stack expert, open-source contributor" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-tight text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">About Us</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
              Building the Future of <span className="gradient-text">Digital Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Founded in 2011, NexaByte has grown from a small development team into a full-service technology
              company trusted by startups and enterprises alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card/50">
        <div className="container-tight">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our <span className="gradient-text">Values</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Leadership <span className="gradient-text">Team</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading text-xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
