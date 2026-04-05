import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
        {/* Left — Text content */}
        <div className="order-2 md:order-1">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Available for new projects
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-light mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Vikki Gupta</span>
            .<br />
            I Architect Scalable Data &amp; AI Solutions.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-muted text-lg leading-relaxed mb-10 max-w-lg"
          >
            Modern Data Engineer specializing in transforming complex data
            infrastructure into high-speed, cost-efficient engines.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-all duration-200 shadow-lg shadow-accent/20"
            >
              <Mail size={16} />
              Let's Talk
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-light font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right — Profile image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-accent/20 scale-110" />
            <div className="absolute inset-0 rounded-full border border-accent/10 scale-125" />

            {/*
              ┌─────────────────────────────────────────────────────────────┐
              │  PROFILE IMAGE PLACEHOLDER                                  │
              │  Replace src="/profile-placeholder.png" with your photo.   │
              │  The mask-image gradient fades the bottom edge so the       │
              │  image blends seamlessly into the dark background.          │
              └─────────────────────────────────────────────────────────────┘
            */}
            <div className="w-full h-full rounded-full overflow-hidden bg-surface border border-border/50">
              <img
                src="/profile-placeholder.png"
                alt="Vikki Gupta"
                className="w-full h-full object-cover object-top"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 90% 90% at 50% 40%, black 55%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 90% 90% at 50% 40%, black 55%, transparent 100%)",
                  mixBlendMode: "luminosity",
                  filter: "contrast(1.05) brightness(0.95)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
