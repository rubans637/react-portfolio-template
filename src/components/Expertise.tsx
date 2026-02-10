import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skills = [
  {
    icon: faReact,
    title: "Full Stack Web Development",
    description:
      "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have strong proficiency in the SDLC process and frontend + backend development.",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Flask",
      "Python",
      "SQL",
      "PostgreSQL",
      "Postman",
    ],
  },
  {
    icon: faGamepad,
    title: "Gaming & Content Creation",
    description:
      "I actively create gaming-related content including gameplay clips, reels, live streams, and short-form videos with a strong focus on engagement, edits, and storytelling.",
    stack: [
      "PC Gaming",
      "Mobile Gaming",
      "Game Design & Development",
      "Gameplay Recording",
      "Live Streaming",
      "Video Editing",
      "Short-form Reels",
      "Content Strategy",
      "Community Building",
    ],
  },
  {
    icon: faPython,
    title: "GenAI & LLM",
    description:
      "Leverage the latest AI models to build enterprise-grade GenAI solutions that enable intelligent decision-making.",
    stack: [
      "OpenAI",
      "Groq",
      "LangChain",
      "Qdrant",
      "Hugging Face",
      "LlamaIndex",
      "Streamlit",
    ],
  },
];

const Expertise: React.FC = () => {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-icon">
                <FontAwesomeIcon icon={skill.icon} size="3x" />
              </div>

              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {skill.stack.map((tech, i) => (
                  <Chip key={i} label={tech} className="chip" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
