import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" style={{paddingTop: "1rem", paddingBottom: "5rem"}}>
      <div className="site-container">
        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "3rem"}} />
        <div className="grid-sidebar">
          <p className="section-label">Experience</p>
          <div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
            {experience.map((item) => (
              <div key={item.company}>
                <div style={{display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.6rem"}}>
                  <h3 style={{color: "#fff", fontWeight: 600, fontSize: "1.05rem"}}>{item.role}</h3>
                  <span style={{fontSize: "0.7rem", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", padding: "0.2rem 0.7rem", borderRadius: "9999px"}}>{item.company}</span>
                </div>
                <p style={{color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.8}}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
