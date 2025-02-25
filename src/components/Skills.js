import React, { useEffect } from 'react';
import { FaReact, FaPython, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaJava, FaServer, FaInternetExplorer } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiMongodb, SiIntellijidea, SiGithub, SiGitlab, SiTailwindcss, SiRedis, SiFirebase, SiPostman, SiVisualstudiocode, SiAndroidstudio, SiFigma, SiJquery, SiMui, SiBootstrap, SiMysql, SiPostgresql, SiGit, SiTensorflow, SiExpress } from 'react-icons/si';
import { PiFileSqlLight } from "react-icons/pi";
import '../index.css';

const skillData = [
  { icon: <FaJs size={50} color="#F0DB4F" />, name: "JavaScript" },
  { icon: <SiNextdotjs size={50} color="#000000" />, name: "Next.js" },
  { icon: <FaReact size={50} color="#61DBFB" />, name: "React.js" },
  { icon: <FaHtml5 size={50} color="#E34C26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={50} color="#264de4" />, name: "CSS3" },
  { icon: <SiBootstrap size={50} color="#7952B3" />, name: "Bootstrap" },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: "Tailwind CSS" },
  { icon: <SiMui size={50} color="#007FFF" />, name: "MUI" },
  { icon: <SiRedux size={50} color="#764ABC" />, name: "Redux" },
  { icon: <FaPython size={50} color="#3776AB" />, name: "Python" },
  { icon: <FaJava size={50} color="#007396" />, name: "Java" },
  { icon: <FaNodeJs size={50} color="#68A063" />, name: "Node.js" },
  { icon: <SiExpress size={50} color="#000000" />, name: "Express.js" },
  { icon: <SiJquery size={50} color="#0769AD" />, name: "jQuery" },
  { icon: <FaServer size={50} color="#4CAF50" />, name: "RestAPI" },
  { icon: <SiFirebase size={50} color="#FFCA28" />, name: "Firebase" },
  { icon: <PiFileSqlLight size={50} color="#4479A1" />, name: "SQL" },
  { icon: <SiMongodb size={50} color="#47A248" />, name: "MongoDB" },
  { icon: <SiMysql size={50} color="#4479A1" />, name: "MySQL" },
  { icon: <SiPostgresql size={50} color="#336791" />, name: "PostgreSQL" },
  { icon: <SiRedis size={50} color="#D82C20" />, name: "Redis" },
  { icon: <FaAws size={50} color="#FF9900" />, name: "AWS" },
  { icon: <FaDocker size={50} color="#0db7ed" />, name: "Docker" },
  { icon: <SiPostman size={50} color="#FF6C37" />, name: "Postman" },
  { icon: <SiVisualstudiocode size={50} color="#007ACC" />, name: "VSCode" },
  { icon: <SiIntellijidea size={50} color="#000000" />, name: "IntelliJ IDEA" },
  { icon: <SiAndroidstudio size={50} color="#3DDC84" />, name: "Android Studio" },
  { icon: <SiGit size={50} color="#F1502F" />, name: "Git" },
  { icon: <SiGithub size={50} color="#181717" />, name: "GitHub" },
  { icon: <SiGitlab size={50} color="#FC6D26" />, name: "GitLab" },
  { icon: <SiFigma size={50} color="#F24E1E" />, name: "Figma" },
  { icon: <SiTensorflow size={50} color="#FF6F00" />, name: "Machine Learning" },
  { icon: <FaInternetExplorer size={50} color="#1E90FF" />, name: "IoT" },
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
    <section id="skills" className="skills-section p-2">
      <div className="container">
        <h2 className="text-center">My Skills</h2>
        <div className="skills-grid">
          {renderSkillRows(0, 7)}
          {renderSkillRows(7, 19)}
          {renderSkillRows(19, skillData.length)}
        </div>
      </div>
    </section>
  );
};

export default Skills;