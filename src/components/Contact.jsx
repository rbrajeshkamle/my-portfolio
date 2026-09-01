import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
return ( <section className="section contact" id="contact"> <div className="section-container">
<motion.div
className="section-heading"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
> <p>GET IN TOUCH</p> <h2>Let's <span>Connect</span></h2>
</motion.div>
    <motion.div
      className="contact-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3>Have a project in mind?</h3>

      <p>
        I'm always interested in new opportunities and exciting projects.
      </p>

      <div className="contact-links">
        <a href="mailto:your-email@example.com">
          <FaEnvelope />
          Email Me
        </a>

        <a
  href="https://www.linkedin.com/in/brajesh-kamle-b703a7290/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedinIn size={21} />
</a>

        <a href="#">
          <FaGithub />
          GitHub
        </a>
      </div>
    </motion.div>
  </div>
</section>
);
}

export default Contact;
