import { Download } from 'lucide-react';
import resumePdf from '../../assets/Bosco_Ishimwe_Software Engineering_Resume.pdf';

const education = [
  {
    degree: 'Software Engineering',
    school: 'African Leadership University',
    year: '2023-2026',
    details: 'Focused on software engineering principles, modern development practices, and building scalable digital products.'
  },
  {
    degree: 'Apprenticeship',
    school: 'The Gym Rwanda',
    year: '2024-2025',
    details: 'Built practical skills through guided training, collaboration, and continuous project-based learning.'
  },
];

const experience = [
  {
    title: 'Internship',
    company: 'TostGroup',
    year: '2023-2024',
    details: 'Contributed to real-world projects, supported development teams, and gained hands-on industry experience.'
  },
  {
    title: 'Junior Developer',
    company: 'KLab Rwanda',
    year: '2025-2026',
    details: 'Contributed to software development projects, collaborated with teams, and built practical experience in delivering production-ready features.'
  },
];

const skills = [
  { name: 'Web Design', level: 70 },
  { name: 'React JS', level: 85 },
  { name: 'HTML/CSS', level: 65 },
  { name: 'Angular JS', label: 'Angular JS', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Bootstrap', level: 55 },
];

export default function Resume() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-12 py-20 bg-[#1b1f24]">
      <div className="max-w-5xl w-full">
        <div className="relative mb-12 text-center">
          <p className="pointer-events-none absolute inset-x-0 -top-10 select-none text-6xl md:text-8xl font-black tracking-[0.2em] text-gray-500/10 uppercase">
            SUMMARY
          </p>
          <h1 className="relative text-3xl md:text-4xl font-bold text-white">Resume</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1bc38b]" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-[#1bc38b]">
              My Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-8 pl-6 border-l-2 border-[#1bc38b]">
                <p className="inline-block rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">{edu.year}</p>
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
                <p className="inline-block rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">{exp.year}</p>
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

        <a
          href={resumePdf}
          download="Bosco_Ishimwe_Resume.pdf"
          className="mx-auto mt-12 flex w-fit items-center gap-2 px-6 py-3 bg-[#1bc38b] hover:bg-[#15a373] text-[#191c21] font-semibold rounded-full transition-all duration-300"
        >
          <Download size={20} />
          Download CV
        </a>
      </div>
    </section>
  );
}
