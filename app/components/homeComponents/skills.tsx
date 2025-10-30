import { skillsData } from "@/app/data/data";

function Skills() {
  // Split skills into two columns
  const midPoint = Math.ceil(skillsData.length / 2);
  const leftColumn = skillsData.slice(0, midPoint);
  const rightColumn = skillsData.slice(midPoint);

  return (
    <>
      <div className="text-4xl font-bold py-5">Skills</div>
      <div className="pl-5 grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-2">
          {leftColumn.map((skill) => (
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
