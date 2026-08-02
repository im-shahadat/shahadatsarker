import { projects } from "@/data/portfolio";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
      <div className="site-container">
        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "3rem"}} />
        <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem"}}>
          <div>
            <p className="section-label" style={{marginBottom: "0.75rem"}}>Featured Work</p>
            <h2 style={{fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 700, color: "#fff"}}>Projects with a point of view.</h2>
          </div>
          <Link href="/projects" style={{fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)", padding: "0.45rem 1.1rem", borderRadius: "9999px"}}>
            View all →
          </Link>
        </div>
        <div className="grid-projects">
          {projects.map((project) => (
            <div key={project.title} style={{border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.015)"}}>
              <div style={{width: "100%", height: "200px", backgroundColor: "#090b0e", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.12)", fontSize: "0.7rem", letterSpacing: "0.05em"}}>
                PREVIEW
              </div>
              <div style={{padding: "1.25rem"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem"}}>
                  <span style={{fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.15rem 0.55rem", borderRadius: "9999px"}}>Project</span>
                  <span style={{fontSize: "0.7rem", color: "rgba(255,255,255,0.25)"}}>{project.number}</span>
                </div>
                <h3 style={{color: "#fff", fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem"}}>{project.title}</h3>
                <p style={{color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", lineHeight: 1.75, marginBottom: "1.25rem"}}>{project.description}</p>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem"}}>
                  <p style={{color: "rgba(255,255,255,0.25)", fontSize: "0.7rem"}}>{project.date} / {project.role}</p>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", textDecoration: "underline", textUnderlineOffset: "4px"}}>
                      Open →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
