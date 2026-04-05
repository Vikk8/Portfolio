import { motion } from "framer-motion";
import { Code2, Database, Terminal, Shield, Wrench, ShieldAlert } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    category: "Data Engineering & ETL",
    skills: ["SAP BODS", "Databricks", "ETL Pipeline Optimization"],
  },
  {
    icon: Database,
    category: "Databases & Querying",
    skills: ["Teradata SQL", "BTEQ Scripting", "MySQL"],
  },
  {
    icon: Terminal,
    category: "Programming Languages",
    skills: ["Python", "Java"],
  },
  {
    icon: Terminal,
    category: "Scripting & OS",
    skills: ["Unix Scripting", "Windows", "Linux"],
  },
  {
    icon: Shield,
    category: "Security",
    skills: ["Web Penetration Testing", "OWASP TOP 10", "VAPT"],
  },
  {
    icon: Wrench,
    category: "Tools & Testing",
    skills: ["Q-test", "Git", "Central Repository (CR)"],
  },
  {
    icon: ShieldAlert,
    category: "Security Tools",
    skills: ["Nmap", "Nexus", "Burp Suite", "Metasploit"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-light">Skills</h2>
          <p className="text-muted mt-4 max-w-xl text-base leading-relaxed">
            A broad toolkit spanning data engineering, cloud infrastructure,
            security, and systems programming.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="group bg-surface border border-border rounded-2xl p-6 card-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 shrink-0">
                    <Icon size={17} className="text-accent" />
                  </div>
                  <h3 className="text-light font-semibold text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-bg border border-border text-muted text-xs font-medium hover:border-accent/40 hover:text-light transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
