import CoverImage from "./components/homeComponents/coverImage";
import Experience from "./components/homeComponents/experience";
import Overview from "./components/homeComponents/overview";
import Projects from "./components/homeComponents/projects";
import Skills from "./components/homeComponents/skills";
import Educations from "./components/homeComponents/Educations";
import ContactForm from "./components/homeComponents/contactForm";
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className="fixed bottom-10 w-full flex justify-center z-10">
          <Link className="text-white bg-blue-600 px-4 py-3 rounded-full text-bold border-5 border-blue-700 shadow-xl" href='/pages/explore' >EXPLORE MORE</Link>
      </div>

      <CoverImage />
      <div className="w-full max-w-7xl mx-auto px-4">
        <Overview />
        <Experience />
        <Skills />
        <Projects />
        <Educations />
        <ContactForm />
      </div>
    </>
  );
}
