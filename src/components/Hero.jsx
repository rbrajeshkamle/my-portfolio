import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
return ( <section className="hero" id="home"> <div className="hero-content">
<motion.p
className="hero-tag"
initial={{ opacity: 0, y: 30 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.3 }}
>
👋 Hello, I'm
</motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      Brajesh <span>Kamle</span>
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      Full Stack Developer
    </motion.h2>

    <motion.p
      className="hero-description"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      I build modern, responsive and beautiful web applications using React
      and modern technologies.
    </motion.p>

    <motion.div
      className="hero-buttons"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <a href="#projects" className="primary-btn">
        View My Work
      </a>

      <a href="#contact" className="secondary-btn">
        Contact Me
      </a>
    </motion.div>

    <div className="social-links">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={21} />
      </a>

      <a
  href="linkedin.com/in/brajesh-kamle-b703a7290"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedinIn size={21} />
</a>

      <a href="mailto:your-email@example.com" aria-label="Email">
        <Mail size={21} />
      </a>
    </div>
  </div>

  <motion.div
    className="scroll-down"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <ArrowDown />
  </motion.div>
</section>
);
}

export default Hero;
