import { motion } from "framer-motion";
import { GitBranch, Cloud, Database, Zap } from "lucide-react";

const services = [
  {
    icon: GitBranch,
    title: "Modern Data Engineering & ETL",
    description:
      "Building highly scalable pipelines and orchestrating data workflows that handle enterprise-grade volume with precision.",
  },
  {
    icon: Cloud,
    title: "Cloud & AI Data Ecosystems",
    description:
      "Leveraging Databricks, Python, and Generative AI to future-proof data integration and unlock intelligent automation.",
  },
  {
    icon: Database,
    title: "Database Architecture & Querying",
    description:
      "Deep expertise in Teradata SQL, BTEQ scripting, and complex query refactoring for maximum throughput.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Executing massive performance tuning initiatives to deliver reliable, lightning-fast data delivery at scale.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-light">
            Core Services &amp; Expertise
          </h2>
          <p className="text-muted mt-4 max-w-xl text-base leading-relaxed">
            End-to-end data solutions — from raw ingestion to production-grade
            pipelines — built to scale and built to last.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="group bg-surface border border-border rounded-2xl p-8 card-glow transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="text-light font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
