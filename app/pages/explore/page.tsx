import { ProjectCardDetails } from "@/app/utility/types";
import IntroVideo from "../../components/ExploreComponents/introVideo";
import { repos } from "@/app/data/data";
import ProjectCard from "@/app/components/ExploreComponents/projectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore — Aman Kumar",
  description: "Video introduction and open-source GitHub projects by Aman Kumar.",
};

async function Explore() {
  let filteredData: ProjectCardDetails[] = [];

  try {
    const res = await fetch(`https://api.github.com/users/Pk-aman/repos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 }, // cache for 1 hour
    });
    const data = await res.json();
    const temp = data.filter((repo: any) => repos.includes(repo.name));

    filteredData = temp.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
    }));
  } catch (error) {
    console.log(`Error fetching GitHub repos: ${error}`);
  }

  return (
    <div style={{ paddingTop: "68px", minHeight: "100vh" }}>
      {/* Intro Video */}
      <IntroVideo />

      {/* GitHub Projects */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px 80px",
        }}
      >
        <h2 className="section-heading">GitHub Projects</h2>

        {filteredData.length === 0 ? (
          <div
            className="glass-card"
            style={{
              padding: "48px",
              textAlign: "center",
              color: "var(--text-muted)",
            }}
          >
            <p style={{ fontSize: "1rem" }}>
              Unable to load repositories right now. Check back shortly or visit{" "}
              <a
                href="https://github.com/Pk-aman"
                target="_blank"
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                github.com/Pk-aman
              </a>{" "}
              directly.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {filteredData.map((repo: ProjectCardDetails) => (
              <ProjectCard
                key={repo.name}
                name={repo.name}
                description={repo.description}
                html_url={repo.html_url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
