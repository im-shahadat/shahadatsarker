import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const links = [
    { label: "Fiverr", href: personalInfo.fiverr },
    { label: "Upwork", href: personalInfo.upwork },
    { label: "GitHub", href: personalInfo.github },
    { label: "LinkedIn", href: personalInfo.linkedin },
  ];
  return (
    <section style={{minHeight:"60vh",paddingTop:"1rem",paddingBottom:"1rem",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div className="site-container">
        
        <h1 style={{fontSize:"clamp(2rem,5vw,4.5rem)",fontWeight:700,color:"#fff",lineHeight:1.1,maxWidth:"56rem",marginBottom:"1.25rem"}}>
          Hi! I'm Shahadat Sarker.
        </h1>
        
          <p style={{color:"rgba(255,255,255,0.5)",fontSize:"0.875rem",marginBottom:"0.4rem"}}>Freelance Developer / WordPress / Full-Stack</p>
          <p style={{color:"rgba(255,255,255,0.3)",fontSize:"0.875rem",marginBottom:"2rem"}}>Bangladesh</p>
        
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
      </div>
    </section>
  );
}
