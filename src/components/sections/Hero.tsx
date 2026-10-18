import { personalInfo } from "@/data/portfolio";
import { expertise } from "./About";

export default function Hero() {
  const links = [
    { label: "Fiverr", href: personalInfo.fiverr },
    { label: "Upwork", href: personalInfo.upwork },
    { label: "GitHub", href: personalInfo.github },
    { label: "LinkedIn", href: personalInfo.linkedin },
    { label: "Email", href: personalInfo.email },
    { label: "Facebook", href: personalInfo.facebook },
  ];
  return (
    <section style={{minHeight:"60vh",paddingTop:"1rem",paddingBottom:"1rem",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div className="site-container">
        
        <h1 style={{fontSize:"clamp(2rem,5vw,4.5rem)",fontWeight:700,color:"#fff",lineHeight:1.1,maxWidth:"56rem",marginBottom:"1.25rem"}}>
          Hi! I'm Shahadat Sarker.
        </h1>
        
          <p style={{color:"rgba(255,255,255,0.5)",fontSize:"1rem",marginBottom:"0.4rem"}}> Full-Stack Software Engineer <br></br>AI Engineer</p>
         
        
        <div style={{display:"flex",flexWrap:"wrap",gap:"1.25rem"}}>
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{color:"rgba(255,255,255,0.5)",fontSize:"0.875rem",textDecoration:"underline",textUnderlineOffset:"4px"}}>
              {link.label}
            </a>
          ))}
        </div>
        <center><div style={{width:"4.5rem",height:"4.5rem",borderRadius:"9999px",backgroundColor:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",marginBottom:".5rem",marginTop:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.25)",fontSize:"0.65rem"}}>
          Photo
        </div></center>
        
            <div style={{display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem"}}>
              {expertise.map((item) => (
                <span key={item} style={{fontSize: "0.75rem", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "0.25rem 0.75rem", borderRadius: "9999px"}}>
                  {item}
                </span>
              ))}
            </div>
      </div>
    </section>
  );
}
