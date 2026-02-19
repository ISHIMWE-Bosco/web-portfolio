import { Download } from 'lucide-react';

const education = [
  {
    degree: 'Computer Science',
    school: 'Kigali Institute of Science',
    year: '2019-2023',
    details: 'Bachelor of Science in Computer Science with focus on software engineering and web technologies'
  },
];

const experience = [
  {
    title: 'Computer Science',
    company: 'TechCorp Solutions',
    year: '2023-Present',
    details: 'Leading software development projects, mentoring junior developers, and architecting scalable solutions.'
  },
];

const skills = [
  { name: 'Web Design', level: 90 },
  { name: 'React JS', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Angular JS', label: 'Angular JS', level: 80 },
  { name: 'TypeScript', level: 85 },
  { name: 'Bootstrap', level: 80 },
];

export default function Resume() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20">
      <div className="max-w-5xl w-full">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Resume</h1>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1bc38b] hover:bg-[#15a373] text-[#191c21] font-semibold rounded-lg transition-all duration-300">
            <Download size={20} />
            Download CV
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-[#1bc38b]">
              My Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-8 pl-6 border-l-2 border-[#1bc38b]">
                <p className="text-[#1bc38b] font-semibold">{edu.year}</p>
                <h3 className="text-xl font-bold text-white mt-2">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.school}</p>
                <p className="text-gray-500 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-[#1bc38b]">
              Work Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-8 pl-6 border-l-2 border-[#1bc38b]">
                <p className="text-[#1bc38b] font-semibold">{exp.year}</p>
                <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-[#1bc38b]">
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <p className="text-white font-semibold">{skill.name}</p>
                  <p className="text-[#1bc38b]">{skill.level}%</p>
                </div>
                <div className="w-full bg-[#22252b] rounded-full h-2">
                  <div
                    className="bg-[#1bc38b] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
