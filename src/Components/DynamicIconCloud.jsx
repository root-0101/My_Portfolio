import React from 'react';
import { Cloud } from 'react-icon-cloud';

// importing icons
import aircrack from '../assets/images/aircrack.png';
import amass from '../assets/images/amass.png';
import beef from '../assets/images/beef.png';
import burpsuite from '../assets/images/burpsuite.png';
import ffuf from '../assets/images/ffuf.png';
import gobuster from '../assets/images/gobuster.png';
import hashcat from '../assets/images/hashcat.png';
import hydra from '../assets/images/hydra.png';
import john from '../assets/images/john.png';
import linux from '../assets/images/linux.png';
import metasploit from '../assets/images/metasploit.png';
import wireshark from '../assets/images/wireshark.png';
import zaproxy from '../assets/images/zaproxy.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';
import Python from '../assets/images/python.png';

const DynamicIconCloud = () => {
  const icons = [
    <img src={aircrack} alt="Aircrack Icon" className="w-12 h-12 object-contain" />,
    <img src={amass} alt="Amass Icon" className="w-12 h-12 object-contain" />,
    <img src={beef} alt="Beef Icon" className="w-12 h-12 object-contain" />,
    <img src={burpsuite} alt="Burp Suite Icon" className="w-12 h-12 object-contain" />,
    <img src={ffuf} alt="FFUF Icon" className="w-12 h-12 object-contain" />,
    <img src={gobuster} alt="Gobuster Icon" className="w-12 h-12 object-contain" />,
    <img src={hashcat} alt="Hashcat Icon" className="w-12 h-12 object-contain" />,
    <img src={hydra} alt="Hydra Icon" className="w-12 h-12 object-contain" />,
    <img src={john} alt="John the Ripper Icon" className="w-12 h-12 object-contain" />,
    <img src={linux} alt="Linux Icon" className="w-12 h-12 object-contain" />,
    <img src={metasploit} alt="Metasploit Icon" className="w-12 h-12 object-contain" />,
    <img src={wireshark} alt="Wireshark Icon" className="w-12 h-12 object-contain" />,
    <img src={zaproxy} alt="Zaproxy Icon" className="w-12 h-12 object-contain" />,
    <img src={git} alt="git" className="w-12 h-12 object-contain" />,
    <img src={github} alt="github" className="w-12 h-12 object-contain" />,
    <img src={Python} alt="Python" className="w-12 h-12 object-contain" />,
  ];

  return (
    <>
      <div id="skills" className="h-24"></div>

      <div className="w-full flex flex-col items-center">
      <h2 className="text-4xl text-white text-center font-medium audiowide-regular ">Skills</h2>

        {/* Cloud component with Tailwind CSS for scaling */}
        <div className="transform scale-75"> {/* scale-75 shrinks the cloud */}
          <Cloud
            keepStatic={true}
            autoRotate={true}
            initialSpeed={0.05}
            maxSpeed={0.2}
            shape="sphere"
          >
            {icons.map((icon, index) => (
              <a key={index} href="#" onClick={(e) => e.preventDefault()} className="inline-block">
                {icon}
              </a>
            ))}
          </Cloud>
        </div>
      </div>
      <div className="my-10 w-[80%] max-w-[600px] justify-self-center"></div>
    </>
  );
};

export default DynamicIconCloud;
