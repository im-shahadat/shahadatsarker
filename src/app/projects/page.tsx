import { projects } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Shahadat Sarker",
  description: "A complete index of WordPress builds, full-stack applications, and web projects by Shahadat Sarker.",
};

export default function ProjectsPage() {
  return (
    <main style={{paddingTop: "6rem", paddingBottom: "6rem", minHeight: "100vh"}}>
      <div className="site-container">
        <div style={{display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginBottom: "3rem"}}>
          <span style={{fontSize: "0.7rem", border: "1px solid rgba(255,255,255,0.15)", padding: "0.3rem 0.8rem", borderRadius: "9999px", color: "rgba(255,255,255,0.5)"}}>Projects</span>
          <span style={{fontSize: "0.7rem", border: "1px solid rgba(255,255,255,0.15)", padding: "0.3rem 0.8rem", borderRadius: "9999px", color: "rgba(255,255,255,0.5)"}}>{projects.length} entries</span>
        </div>
        <h1 style={{fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem"}}>Project Index</h1>
        <p style={{color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", maxWidth: "36rem", lineHeight: 1.8, marginBottom: "4rem"}}>
          A complete index of WordPress builds, full-stack applications, and web projects delivered for clients worldwide.
        </p>
        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "0"}} />
        {projects.map((project) => (
          <div key={project.title} style={{borderBottom: "1px solid rgba(255,255,255,0.08)", paddingTop: "2.5rem", paddingBottom: "2.5rem"}}>
            <div className="grid-sidebar">
              <p style={{color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", paddingTop: "0.25rem"}}>Project{project.number}</p>
              <div>
                <div style={{display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "0.75rem"}}>
                  <h2 style={{color: "#fff", fontWeight: 600, fontSize: "1.25rem"}}>{project.title}</h2>
                  <p style={{color: "rgba(255,255,255,0.3)", fontSize: "0.75rem"}}>{project.date} / {project.role}</p>
                </div>
                <p style={{color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1.25rem"}}>{project.description}</p>
                <div style={{display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem"}}>
                  {project.tech.map((t) => (
                    <span key={t} style={{fontSize: "0.65rem", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.45)", padding: "0.2rem 0.6rem", borderRadius: "9999px"}}>{t}</span>
                  ))}
                </div>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", textDecoration: "underline", textUnderlineOffset: "4px"}}>
                    Open project →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
