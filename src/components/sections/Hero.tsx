import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const links = [
    { label: "Fiverr", href: personalInfo.fiverr },
    { label: "Upwork", href: personalInfo.upwork },
    { label: "GitHub", href: personalInfo.github },
    { label: "LinkedIn", href: personalInfo.linkedin },
  ];
  return (
    <section style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "6rem", paddingBottom: "4rem"}}>
      <div className="site-container">
        <div style={{width: "4.5rem", height: "4.5rem", borderRadius: "9999px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.25)", fontSize: "0.65rem"}}>
          Photo
        </div>
        <h1 style={{fontSize: "clamp(2.25rem, 5vw, 4.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, maxWidth: "56rem", marginBottom: "1.5rem"}}>
          Shahadat builds woocommerce stores, full-stack apps, and fast web solutions.
        </h1>
        <p style={{color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", marginBottom: "0.4rem"}}>Freelance Developer / WordPress / Full-Stack</p>
        <p style={{color: "rgba(255,255,255,0.3)", fontSize: "0.875rem", marginBottom: "2.5rem"}}>Bangladesh</p>
        <div style={{display: "flex", flexWrap: "wrap", gap: "1.5rem"}}>
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", textDecoration: "underline", textUnderlineOffset: "4px"}}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
