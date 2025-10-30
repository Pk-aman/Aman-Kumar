import { projectsData } from "@/app/data/data";

function Projects() {
  return (
    <>
      <div className="text-4xl font-bold py-5">Projects</div>
      <div className="pl-5">
        {projectsData.map((project, index) => (
          <div key={project.name}>
            <div className="border-l-4 border-gray-500 pl-5">
              <div>
                {/* Company Name */}
                <div className={`relative ${index > 0 ? "pt-5" : ""}`}>
                  <div
                    className={`bg-gray-900 w-3 h-4 rounded-full absolute -left-7 top-1/2 transform -translate-y-1/2 ${
                      index > 0 ? " mt-3" : ""
                    }`}
                  ></div>
                  <div className="flex items-center flex-row justify-between">
                    <h1 className="text-2xl font-bold">{project.name}</h1>
                  </div>
                </div>
                {/* Skill */}
                <div className="flex items-center flex-row justify-between">
                  <h1 className="text-medium font-bold text-gray-500">
                    Skills:{" "}
                    <span className="font-normal text-black">
                      {project.skills.map((skill, index) => (
                        <span key={skill} className="font-bold">
                          {skill}
                          {index < project.skills.length - 1 && (
                            <span className="mx-2">|</span>
                          )}
                        </span>
                      ))}
                    </span>
                  </h1>
                </div>
                {/* Description */}
                <ul className="list-disc list-outside pl-5">
                  {project.descriptions.map((description: string) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
