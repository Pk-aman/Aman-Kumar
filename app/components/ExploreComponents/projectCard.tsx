import { ProjectCardDetails } from "@/app/utility/types";
import Link from "next/link";

function ProjectCard({ name, description, html_url }: ProjectCardDetails) {
  return (
    <>
      <div className="rounded-xl p-5 shadow-2xl m-5">
        {/* Content */}
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold text-4xl p-3">{name}</h1>
            <Link href={html_url} target="_blank" className="text-blue-300">
              Github
            </Link>
          </div>
          <div className="p-3 text-xl">
            <p>{description}</p>
          </div>
        </div>
        {/* image */}
        {/* <div>Image</div> */}
      </div>
    </>
  );
}

export default ProjectCard;
