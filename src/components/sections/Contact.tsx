import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
      <div className="site-container">
        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "3rem"}} />
        <div className="grid-2col">
          <div>
            <p className="section-label" style={{marginBottom: "2rem"}}>Contact</p>
            <h2 style={{fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem"}}>
              Let us build something together.
            </h2>
            <p style={{color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.85, marginBottom: "2.5rem"}}>
              Open to freelance work across WordPress development, full-stack projects, and selected long-term collaborations.
            </p>
            <div style={{display: "flex", flexWrap: "wrap", gap: "1.5rem"}}>
              <a href={"mailto:" + personalInfo.email} style={{color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", textDecoration: "underline", textUnderlineOffset: "4px"}}>Email Me</a>
              <a href={personalInfo.fiverr} target="_blank" rel="noopener noreferrer" style={{color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", textDecoration: "underline", textUnderlineOffset: "4px"}}>Hire on Fiverr</a>
              <a href={personalInfo.upwork} target="_blank" rel="noopener noreferrer" style={{color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", textDecoration: "underline", textUnderlineOffset: "4px"}}>Hire on Upwork</a>
            </div>
          </div>
          <div className="contact-image" style={{width: "100%", aspectRatio: "1", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.12)", fontSize: "0.7rem", letterSpacing: "0.05em"}}>
            ADD PHOTO
          </div>
        </div>
      </div>
    </section>
  );
}
