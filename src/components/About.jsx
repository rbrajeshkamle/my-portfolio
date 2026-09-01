import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";

function About() {
const features = [
{
icon: <FaCode />,
title: "Development",
text: "Building modern, responsive and scalable web applications.",
},
{
icon: <FaPalette />,
title: "UI Design",
text: "Creating clean, attractive and user-friendly interfaces.",
},
{
icon: <FaRocket />,
title: "Performance",
text: "Developing fast and optimized digital experiences.",
},
];

return ( <section className="section about" id="about"> <div className="section-container">
<motion.div
className="section-heading"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
> <p>GET TO KNOW ME</p> <h2>About <span>Me</span></h2>
</motion.div>

    <div className="about-content">
      <motion.div
        className="about-text glass-card"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3>Passionate Full Stack Developer</h3>

        <p>
          I'm Brajesh Kamle, a passionate developer focused on building
          modern and user-friendly web applications.
        </p>

        <p>
          I enjoy working with React, JavaScript and modern web
          technologies to create smooth digital experiences.
        </p>

        <a href="#contact" className="primary-btn about-btn">
          Let's Work Together
        </a>
      </motion.div>

      <div className="about-cards">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="feature-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
);
}

export default About;
