import { experience } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Shahadat Sarker",
  description: "Learn more about Shahadat Sarker, a freelance WordPress and full-stack developer based in Bangladesh.",
};

export default function AboutPage() {
  const practice = ["WordPress development", "WooCommerce stores", "PHP custom plugins", "Laravel applications", "Next.js frontends", "REST API design", "Performance optimization", "CDN and caching setup"];
  const skills = ["WordPress", "WooCommerce", "PHP", "Laravel", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "MySQL", "Docker", "Cloudflare", "Git"];
  return (
    <main style={{paddingTop: "6rem", paddingBottom: "6rem", minHeight: "100vh"}}>
      <div className="site-container">
        <p className="section-label" style={{marginBottom: "2rem"}}>About Me</p>
        <h1 style={{fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, maxWidth: "44rem", marginBottom: "3rem"}}>
          A developer trying to make something useful out of every project.
        </h1>

        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "3rem"}} />
        <div className="grid-sidebar" style={{marginBottom: "4rem"}}>
          <p className="section-label">Background</p>
          <div>
            <p style={{color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.9, marginBottom: "1.25rem"}}>
              I am Shahadat Sarker, a freelance web developer based in Bangladesh with a background in Computer Science and Engineering. I started with WordPress and gradually evolved into a full-stack developer who builds custom solutions from the ground up.
            </p>
            <p style={{color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.9, marginBottom: "1.25rem"}}>
              My core stack is WordPress, WooCommerce, and PHP for client work, paired with Next.js, Laravel, and Vue.js for modern applications. I have experience with Cloudflare CDN setup, LiteSpeed Cache optimization, and Core Web Vitals improvement.
            </p>
            <p style={{color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.9}}>
              Clean architecture and real-world delivery are not separate goals. They are one habit: making an idea work well in production.
            </p>
          </div>
        </div>

        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "3rem"}} />
        <div className="grid-sidebar" style={{marginBottom: "4rem"}}>
          <p className="section-label">Practice</p>
          <div style={{display: "flex", flexWrap: "wrap", gap: "0.6rem"}}>
            {practice.map((p) => (
              <span key={p} style={{fontSize: "0.8rem", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "0.3rem 0.85rem", borderRadius: "9999px"}}>{p}</span>
            ))}
          </div>
        </div>

        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "3rem"}} />
        <div className="grid-sidebar" style={{marginBottom: "4rem"}}>
          <p className="section-label">Skills</p>
          <div style={{display: "flex", flexWrap: "wrap", gap: "0.6rem"}}>
            {skills.map((item) => (
              <span key={item} style={{fontSize: "0.8rem", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "0.3rem 0.85rem", borderRadius: "9999px"}}>{item}</span>
            ))}
          </div>
        </div>

        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "3rem"}} />
        <div className="grid-sidebar">
          <p className="section-label">Experience</p>
          <div style={{display: "flex", flexDirection: "column", gap: "2.5rem"}}>
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
    </main>
  );
}
