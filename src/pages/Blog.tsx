import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  { title: "How AI Is Reshaping Custom Software Development in 2026", category: "AI & Automation", date: "Mar 10, 2026", excerpt: "Explore how AI-powered tools are transforming the way we build, test, and deploy software at scale." },
  { title: "The Ultimate Guide to Choosing a Tech Stack for Your Startup", category: "Engineering", date: "Mar 5, 2026", excerpt: "From databases to frontend frameworks — a practical guide to making the right technology choices." },
  { title: "Why Your Business Needs a Mobile App (Not Just a Website)", category: "Mobile", date: "Feb 28, 2026", excerpt: "Mobile apps drive 3x more engagement than mobile websites. Here's how to capitalize on that." },
  { title: "Cloud Migration: A Step-by-Step Strategy for Enterprises", category: "Cloud", date: "Feb 20, 2026", excerpt: "A comprehensive roadmap for migrating legacy systems to modern cloud infrastructure." },
  { title: "SEO in the Age of AI: What Actually Works in 2026", category: "Digital Marketing", date: "Feb 15, 2026", excerpt: "Search is evolving fast. Learn the strategies that drive real organic growth today." },
  { title: "Design Systems: The Secret Weapon of High-Growth Teams", category: "UI/UX Design", date: "Feb 10, 2026", excerpt: "How a well-crafted design system can accelerate development and improve product consistency." },
];

const Blog = () => {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container-tight text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Blog</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
              Insights & <span className="gradient-text">Ideas</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts on technology, design, and building great products from our team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-tight grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/5" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-primary font-medium">{post.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} /> {post.date}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-tight max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">Get the latest insights delivered to your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border/50 bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
