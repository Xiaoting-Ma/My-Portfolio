import React, { useEffect } from 'react';
import { FaReact, FaPython, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaJava, FaServer, FaInternetExplorer } from 'react-icons/fa';
import { SiIntellijidea, SiGithub, SiGitlab, SiTailwindcss, SiRedis, SiFirebase, SiPostman, SiVisualstudiocode, SiAndroidstudio, SiFigma, SiJquery, SiMui, SiBootstrap, SiMysql, SiPostgresql, SiGit, SiWebpack, SiTensorflow, SiExpress } from 'react-icons/si';
import { PiFileSqlLight } from "react-icons/pi";
import '../index.css';

const skillData = [
  { icon: <FaPython size={50} color="#3776AB" />, name: "Python" },
  { icon: <FaJava size={50} color="#007396" />, name: "Java" },
  { icon: <FaJs size={50} color="#F0DB4F" />, name: "JavaScript" },
  { icon: <FaReact size={50} color="#61DBFB" />, name: "React.js" },
  { icon: <FaHtml5 size={50} color="#E34C26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={50} color="#264de4" />, name: "CSS3" },
  { icon: <SiBootstrap size={50} color="#7952B3" />, name: "Bootstrap" },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: "Tailwind CSS" },
  { icon: <SiMui size={50} color="#007FFF" />, name: "MUI" },
  { icon: <FaNodeJs size={50} color="#68A063" />, name: "Node.js" },
  { icon: <SiExpress size={50} color="#000000" />, name: "Express.js" },
  { icon: <SiJquery size={50} color="#0769AD" />, name: "jQuery" },
  { icon: <SiFirebase size={50} color="#FFCA28" />, name: "Firebase" },
  { icon: <FaServer size={50} color="#4CAF50" />, name: "RestAPI" },
  { icon: <PiFileSqlLight size={50} color="#4479A1" />, name: "SQL" },
  { icon: <SiMysql size={50} color="#4479A1" />, name: "MySQL" },
  { icon: <SiPostgresql size={50} color="#336791" />, name: "PostgreSQL" },
  { icon: <SiRedis size={50} color="#D82C20" />, name: "Redis" },
  { icon: <FaAws size={50} color="#FF9900" />, name: "AWS" },
  { icon: <FaDocker size={50} color="#0db7ed" />, name: "Docker" },
  { icon: <SiGit size={50} color="#F1502F" />, name: "Git" },
  { icon: <SiPostman size={50} color="#FF6C37" />, name: "Postman" },
  { icon: <SiWebpack size={50} color="#8DD6F9" />, name: "Webpack" },
  { icon: <FaInternetExplorer size={50} color="#1E90FF" />, name: "IoT" },
  { icon: <SiTensorflow size={50} color="#FF6F00" />, name: "Machine Learning" },
  { icon: <SiVisualstudiocode size={50} color="#007ACC" />, name: "VSCode" },
  { icon: <SiIntellijidea size={50} color="#000000" />, name: "IntelliJ IDEA" },
  { icon: <SiAndroidstudio size={50} color="#3DDC84" />, name: "Android Studio" },
  { icon: <SiGithub size={50} color="#181717" />, name: "GitHub" },
  { icon: <SiGitlab size={50} color="#FC6D26" />, name: "GitLab" },
  { icon: <SiFigma size={50} color="#F24E1E" />, name: "Figma" },
];

const Skills = () => {
  useEffect(() => {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
      setTimeout(() => {
        skill.classList.remove('hidden');
        // skill.classList.add('slide-in'); not working
      }, index * 200);
    });
  }, []);

  const renderSkillRows = (start, end) => {
    return (
      <div className="skill-row">
        {skillData.slice(start, end).map((skill, index) => (
          <div key={index} className="skill hidden" style={{ '--animation-order': index + 1 }}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="skills-grid">
          {renderSkillRows(0, 14)}
          {renderSkillRows(14, 25)}
          {renderSkillRows(25, skillData.length)}
        </div>
      </div>
    </section>
  );
};

export default Skills;