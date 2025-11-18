import { ProjectCardDetails } from "@/app/utility/types";
import IntroVideo from "../../components/ExploreComponents/introVideo";
import { repos } from "@/app/data/data";
import ProjectCard from "@/app/components/ExploreComponents/projectCard";
import Link from "next/link";
import { AiFillBackward } from "react-icons/ai";

async function Explore() {
  let filteredData = [];
  try {
    const res = await fetch(`https://api.github.com/users/Pk-aman/repos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    const temp = data.filter((repo: any) => repos.includes(repo.name));

    filteredData = temp.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
    }));

    //console.log(filteredData);
  } catch (error) {
    console.log(`Error: ${error}`);
  }

  return (
    <div>
      
      <div className="fixed bottom-10 left-10 flex z-10">
          <Link className="text-white bg-blue-600 px-4 py-3 rounded-full text-bold border-5 border-blue-700 shadow-xl" href='/' > <AiFillBackward /> </Link>
      </div>

      <IntroVideo />
      <div className="w-full max-w-7xl mx-auto px-4">
        <h1 className="font-bold text-4xl p-3">Projects</h1>
        <div className="flex flex-wrap gap-3">
          {filteredData.map((repo: ProjectCardDetails) => (
            <div key={repo.name}>
              <ProjectCard
                name={repo.name}
                description={repo.description}
                html_url={repo.html_url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
