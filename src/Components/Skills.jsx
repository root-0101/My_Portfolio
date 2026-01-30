import React from 'react';
import DynamicIconCloud from './DynamicIconCloud';

const skills = [
  { name: 'Penetration Testing' },
  { name: 'Bug Hunting' },
  { name: 'Web Application Security' },
  { name: 'Networking & Protocols' },
  { name: 'OSINT (Open Source Intelligence)' },
  { name: 'API Testing' },
  { name: 'Linux Administration' },
  { name: 'Vulnerability Assessment' },
  { name: 'OWASP TOP 10' },
  { name: 'Report Writing' },
];

const Skills = () => {
  return (
    <>
      <div className="bg-[#09090B] text-white  px-10 mb-12">

        <div className="max-w-2xl mx-auto flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-4 py-2 bg-[#1e293b] hover:bg-blue-700 rounded-full text-sm font-medium"
            >
              <span className='text-xs'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default Skills;
