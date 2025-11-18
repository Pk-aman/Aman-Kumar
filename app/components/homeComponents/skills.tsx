import { skillsData } from "@/app/data/data";

function Skills() {
  // Split skills into two columns
  const breakPoint = Math.ceil(skillsData.length / 3);
  const leftColumn = skillsData.slice(0, breakPoint);
  const centerColumn = skillsData.slice(breakPoint, 2*breakPoint)
  const rightColumn = skillsData.slice(2*breakPoint);

  return (
    <>
      <div className="text-4xl font-bold py-5">Skills</div>
      <div className="pl-5 grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-2">
          {leftColumn.map((skill) => (
            <div key={skill.name} className="flex justify-between">
              <span>• {skill.name}</span>
              <span className="text-gray-500">{skill.experience}</span>
            </div>
          ))}
        </div>

        {/* Cnter Column */}
        <div className="border-l-2 border-gray-300 pl-8 space-y-2">
          {centerColumn.map((skill) => (
            <div key={skill.name} className="flex justify-between">
              <span>• {skill.name}</span>
              <span className="text-gray-500">{skill.experience}</span>
            </div>
          ))}
        </div>

        {/* Vertical Line and Right Column */}
        <div className="border-l-2 border-gray-300 pl-8 space-y-2">
          {rightColumn.map((skill) => (
            <div key={skill.name} className="flex justify-between">
              <span>• {skill.name}</span>
              <span className="text-gray-500">{skill.experience}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
