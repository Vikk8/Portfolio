import { motion } from "framer-motion";
import { Briefcase, Shield, Award } from "lucide-react";

const certifications = [
  {
    name: "Databricks Certified Generative AI Engineer Associate",
    href: "https://credentials.databricks.com/7feb4b3b-87a7-436f-9127-eb98f821e28f#acc.ZST1jce7",
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    href: "https://credentials.databricks.com/cdcc15d5-7825-4c7f-a555-8d8f98004c10#acc.oeizJOAx",
  },
  {
    name: "Microsoft Certified AZ-900",
    href: "https://learn.microsoft.com/en-us/users/vikkigupta-6263/credentials/5459d965d6e1888b?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
];

const experience = [
  {
    icon: Briefcase,
    role: "Data Engineer",
    company: "Accenture",
    period: "May 2024 – Present",
    points: [
      "Engineered scalable ETL data pipelines processing enterprise-grade data volumes.",
      "Automated critical QA workflows via Qtest, reducing manual testing overhead.",
      "Orchestrated code versioning and deployments to Central Repository (CR).",
      "Delivered the flagship optimization: 6-hour job reduced to 36 seconds.",
    ],
  },
  {
    icon: Shield,
    role: "Cybersecurity Engineer Intern",
    company: "Virtual Testing Foundation",
    period: "May 2022 – July 2022",
    points: [
      "Executed Nmap vulnerability scans across network infrastructure.",
      "Drafted incident reporting SOPs adopted by the security team.",
      "Performed manual SQL injection testing and documented findings.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-surface/30">
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
            Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-light">
            Proven Results &amp; Experience
          </h2>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent/10 via-surface to-accent/5 border border-accent/20 rounded-2xl p-8 mb-16"
        >
          <p className="text-muted text-xs font-semibold tracking-widest uppercase mb-4">
            Flagship Achievement
          </p>
          <p className="text-light text-xl sm:text-2xl font-bold leading-snug mb-6">
            Reduced critical job execution time from{" "}
            <span className="text-accent">6 hours to 36 seconds</span>, slashing
            compute costs from{" "}
            <span className="text-accent">$800,000 to ~$1,400</span> per run.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border">
            {[
              { val: "99.98%", label: "Cost Reduction" },
              { val: "600×", label: "Speed Improvement" },
              { val: "36s", label: "Final Execution Time" },
              { val: "$798K+", label: "Savings Per Run" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-accent text-2xl font-bold">{s.val}</p>
                <p className="text-muted text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />
          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.company}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="sm:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-surface border border-border items-center justify-center">
                    <Icon size={16} className="text-accent" />
                  </div>

                  <div className="bg-surface border border-border rounded-2xl p-7 card-glow transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-light font-semibold text-lg">{exp.role}</h3>
                        <p className="text-accent text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-muted text-xs bg-bg border border-border px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-muted text-sm leading-relaxed">
                          <span className="text-accent mt-1.5 shrink-0">▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted text-xs font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
            <Award size={14} className="text-accent" /> Certifications
          </p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium hover:bg-accent/15 hover:border-accent/60 transition-all duration-200"
              >
                <Award size={13} />
                {cert.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
