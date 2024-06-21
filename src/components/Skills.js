import React, { useEffect } from 'react';
import { FaReact, FaPython, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaJava, FaServer, FaInternetExplorer } from 'react-icons/fa';
import { SiIntellijidea, SiGithub, SiGitlab, SiTailwindcss, SiRedis, SiFirebase, SiPostman, SiVisualstudiocode, SiAndroidstudio, SiFigma, SiJquery, SiMui, SiBootstrap, SiMysql, SiPostgresql, SiGit, SiWebpack, SiTensorflow, SiExpress } from 'react-icons/si';
import { PiFileSqlLight } from "react-icons/pi";
import '../index.css';

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

  return (
    <section id="skills" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="skills-grid">
          <div className="skill-row">
            <div className="skill hidden" style={{ '--animation-order': 1 }}>
              <FaPython size={50} color="#3776AB" />
              <p>Python</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 2 }}>
              <FaJava size={50} color="#007396" />
              <p>Java</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 3 }}>
              <FaJs size={50} color="#F0DB4F" />
              <p>JavaScript</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 4 }}>
              <FaReact size={50} color="#61DBFB" />
              <p>React.js</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 5 }}>
              <FaHtml5 size={50} color="#E34C26" />
              <p>HTML5</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 6 }}>
              <FaCss3Alt size={50} color="#264de4" />
              <p>CSS3</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 7 }}>
              <SiBootstrap size={50} color="#7952B3" />
              <p>Bootstrap</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 21 }}>
              <SiTailwindcss size={50} color="#38B2AC" />
              <p>Tailwind CSS</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 8 }}>
              <SiMui size={50} color="#007FFF" />
              <p>MUI</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 9 }}>
              <FaNodeJs size={50} color="#68A063" />
              <p>Node.js</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 10 }}>
              <SiExpress size={50} color="#000000" />
              <p>Express.js</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 11 }}>
              <SiJquery size={50} color="#0769AD" />
              <p>jQuery</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 13 }}>
              <SiFirebase size={50} color="#FFCA28" />
              <p>Firebase</p>
            </div>

            <div className="skill hidden" style={{ '--animation-order': 12 }}>
              <FaServer size={50} color="#4CAF50" />
              <p>RestAPI</p>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill hidden" style={{ '--animation-order': 13 }}>
              <PiFileSqlLight size={50} color="#4479A1" />
              <p>SQL</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 14 }}>
              <SiMysql size={50} color="#4479A1" />
              <p>MySQL</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 15 }}>
              <SiPostgresql size={50} color="#336791" />
              <p>PostgreSQL</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 20 }}>
              <SiRedis size={50} color="#D82C20" />
              <p>Redis</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 16 }}>
              <FaAws size={50} color="#FF9900" />
              <p>AWS</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 17 }}>
              <FaDocker size={50} color="#0db7ed" />
              <p>Docker</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 18 }}>
              <SiGit size={50} color="#F1502F" />
              <p>Git</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 14 }}>
              <SiPostman size={50} color="#FF6C37" />
              <p>Postman</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 19 }}>
              <SiWebpack size={50} color="#8DD6F9" />
              <p>Webpack</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 20 }}>
              <FaInternetExplorer size={50} color="#1E90FF" />
              <p>IoT</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 21 }}>
              <SiTensorflow size={50} color="#FF6F00" />
              <p>Machine Learning</p>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill hidden" style={{ '--animation-order': 15 }}>
              <SiVisualstudiocode size={50} color="#007ACC" />
              <p>VSCode</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 22 }}>
              <SiIntellijidea size={50} color="#000000" />
              <p>IntelliJ IDEA</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 16 }}>
              <SiAndroidstudio size={50} color="#3DDC84" />
              <p>Android Studio</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 30 }}>
              <SiGithub size={50} color="#181717" />
              <p>GitHub</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 31 }}>
              <SiGitlab size={50} color="#FC6D26" />
              <p>GitLab</p>
            </div>
            <div className="skill hidden" style={{ '--animation-order': 17 }}>
              <SiFigma size={50} color="#F24E1E" />
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;