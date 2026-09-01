import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaCalculator,
} from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Account Assistant",
      company: "Professional Experience",
      duration: "6 Months",
      description:
        "Supported daily accounting tasks, maintained records, and assisted with administrative and financial operations.",
      icon: <FaBriefcase />,
    },
    {
      role: "Computer Tutor",
      company: "Teaching Experience",
      duration: "2 Years",
      description:
        "Taught computer fundamentals, software applications, and practical computer skills to students.",
      icon: <FaLaptopCode />,
    },
    {
      role: "Math Tutor",
      company: "Teaching Experience",
      duration: "1 Year",
      description:
        "Provided mathematics tutoring and helped students understand concepts through structured and practical learning.",
      icon: <FaCalculator />,
    },
    {
      role: "Full Stack Developer Intern",
      company: "Infobeans Foundation",
      duration: "Internship",
      description:
        "Worked on full-stack development concepts and gained practical experience building modern web applications and learning industry development workflows.",
      icon: <FaChalkboardTeacher />,
    },
  ];

  return (
    <section className="section experience" id="experience">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>MY JOURNEY</p>
          <h2>Work <span>Experience</span></h2>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <motion.div
              className="experience-card glass-card"
              key={experience.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="experience-icon">
                {experience.icon}
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>

                  <span className="experience-duration">
                    {experience.duration}
                  </span>
                </div>

                <p>{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;