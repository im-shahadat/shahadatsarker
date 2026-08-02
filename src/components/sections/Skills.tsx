import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
      <div className="site-container" style={{marginBottom: "2rem"}}>
        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "2rem"}} />
        <p className="section-label">Skills</p>
      </div>
      <div style={{overflowX: "auto", paddingBottom: "0.5rem"}}>
        <div style={{display: "flex", minWidth: "max-content", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
          {skills.map((skill, i) => (
            <div key={skill} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2rem", borderRight: "1px solid rgba(255,255,255,0.08)", minWidth: "150px", gap: "1rem"}}>
              <p style={{color: "rgba(255,255,255,0.25)", fontSize: "0.65rem", alignSelf: "flex-start"}}>({String(i + 1).padStart(2, "0")})</p>
              <div style={{width: "3rem", height: "3rem", borderRadius: "9999px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", fontWeight: 700}}>
                {skill.slice(0, 2).toUpperCase()}
              </div>
              <p style={{color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center"}}>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
