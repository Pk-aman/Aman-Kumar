import CoverImage from "./components/homeComponents/coverImage";
import Experience from "./components/homeComponents/experience";
import Overview from "./components/homeComponents/overview";
import Projects from "./components/homeComponents/projects";
import Skills from "./components/homeComponents/skills";
import Educations from "./components/homeComponents/Educations";
export default function Home() {
  return (
    <>
      <CoverImage />
      <div className="px-10 mb-10">
        <Overview />
        <Experience />
        <Skills />
        <Projects />
        <Educations />
      </div>
    </>
  );
}
