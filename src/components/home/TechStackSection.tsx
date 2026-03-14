import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Server,
  Palette,
  BarChart3,
  Mail,
  Search,
  PenTool,
  Users,
} from "lucide-react";

const techCategories = [
  {
    category: "Frontend Development",
    icon: Globe,
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    technologies: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Redis", color: "#DC382D" },
      { name: "GraphQL", color: "#E10098" },
      { name: "REST API", color: "#FF6C37" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    technologies: [
      { name: "AWS", color: "#FF9900" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "CI/CD", color: "#F7DF1E" },
      { name: "Linux", color: "#FCC624" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    technologies: [
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "OpenAI", color: "#412991" },
      { name: "NLP", color: "#00A8E1" },
      { name: "Computer Vision", color: "#5C6BC0" },
      { name: "ML Ops", color: "#7CB342" },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    technologies: [
      { name: "React Native", color: "#61DAFB" },
      { name: "Flutter", color: "#02569B" },
      { name: "iOS (Swift)", color: "#F05138" },
      { name: "Android (Kotlin)", color: "#7F52FF" },
      { name: "Cross-platform", color: "#007ACC" },
    ],
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    technologies: [
      { name: "Figma", color: "#F24E1E" },
      { name: "Adobe XD", color: "#470137" },
      { name: "Sketch", color: "#FDAD00" },
      { name: "Prototyping", color: "#FF5722" },
      { name: "User Research", color: "#9C27B0" },
    ],
  },
  {
    category: "Digital Marketing",
    icon: BarChart3,
    technologies: [
      { name: "SEO", color: "#4285F4" },
      { name: "Google Ads", color: "#34A853" },
      { name: "Social Media Marketing", color: "#1877F2" },
      { name: "Content Marketing", color: "#EA4335" },
      { name: "Email Marketing", color: "#F4B400" },
      { name: "Analytics", color: "#FBBC05" },
    ],
  },
  {
    category: "Marketing Automation",
    icon: Mail,
    technologies: [
      { name: "HubSpot", color: "#FF5C35" },
      { name: "Mailchimp", color: "#FFE01B" },
      { name: "Salesforce", color: "#00A1E0" },
      { name: "Zapier", color: "#FF4F00" },
      { name: "CRM Integration", color: "#1976D2" },
    ],
  },
  {
    category: "Analytics & Data",
    icon: Database,
    technologies: [
      { name: "Google Analytics", color: "#E37400" },
      { name: "Mixpanel", color: "#7856FF" },
      { name: "Hotjar", color: "#FF3C00" },
      { name: "Tableau", color: "#E97627" },
      { name: "Power BI", color: "#F2C811" },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Expertise</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cutting-edge development frameworks to comprehensive digital marketing solutions, we leverage the best tools to drive your success.
          </p>
        </motion.div>

        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: techIndex * 0.05 }}
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    <div className="px-5 py-3 flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
