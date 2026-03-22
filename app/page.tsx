import CoverImage from "./components/homeComponents/coverImage";
import Experience from "./components/homeComponents/experience";
import Overview from "./components/homeComponents/overview";
import Projects from "./components/homeComponents/projects";
import Skills from "./components/homeComponents/skills";
import Educations from "./components/homeComponents/Educations";
import ContactForm from "./components/homeComponents/contactForm";

export default function Home() {
  return (
    <>
      <CoverImage />
      <div style={{ maxWidth: "100%" }}>
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
