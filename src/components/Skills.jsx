import { motion } from "framer-motion";

function Skills() {
const skills = [
{ name: "React", level: 90 },
{ name: "JavaScript", level: 85 },
{ name: "HTML & CSS", level: 95 },
{ name: "Node.js", level: 80 },
{ name: "MongoDB", level: 75 },
{ name: "Git & GitHub", level: 85 },
];

return ( <section className="section skills" id="skills"> <div className="section-container">
<motion.div
className="section-heading"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
> <p>MY TECH STACK</p> <h2>My <span>Skills</span></h2>
</motion.div>

    <div className="skills-grid">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="skill-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="skill-bar">
            <motion.div
              className="skill-progress"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
);
}

export default Skills;
