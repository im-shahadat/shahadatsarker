import Link from "next/link";

export const expertise = ["NextJS", "LangChain", "LangGrahp", "LangSmith",
  "AWS", "Django", "FAST API", "Laravel","PHP"];

export default function About() {
  return (
    <section id="about" style={{paddingTop: "1rem", paddingBottom: "5rem"}}>
      <div className="site-container">
        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "3rem"}} />
        <div className="grid-sidebar">
          <p className="section-label">About Me</p>
          <div>
            <h2 style={{fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem"}}>
              A developer obsessed with clean code and fast delivery.
            </h2>
            <p style={{color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.85, marginBottom: "1rem"}}>
              I am Shahadat Sarker, a freelance web developer based in Bangladesh. I specialize in WordPress, WooCommerce, and PHP, helping businesses build fast, conversion-optimized websites.
            </p>
            <p style={{color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.85, marginBottom: "2rem"}}>
              Beyond WordPress, I am actively expanding into Laravel, Next.js, and Vue.js. I work with clients globally through Fiverr and Upwork.
            </p>
            <p className="section-label" style={{marginBottom: "1rem"}}>Expertise</p>
            <div style={{display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem"}}>
              {expertise.map((item) => (
                <span key={item} style={{fontSize: "0.75rem", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "0.25rem 0.75rem", borderRadius: "9999px"}}>
                  {item}
                </span>
              ))}
            </div>
            <Link href="/about" style={{color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textDecoration: "underline", textUnderlineOffset: "4px"}}>
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
