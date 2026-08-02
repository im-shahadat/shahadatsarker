export default function Footer() {
  return (
    <footer style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
      <div className="site-container">
        <hr style={{borderColor: "rgba(255,255,255,0.1)", marginBottom: "2rem"}} />
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "1.5rem"}}>
          <div>
            <p style={{color: "#fff", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.4rem"}}>Shahadat Sarker</p>
            <p style={{color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", lineHeight: 1.6}}>WordPress and full-stack developer based in Bangladesh.</p>
          </div>
          <p style={{color: "rgba(255,255,255,0.2)", fontSize: "0.75rem"}}>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
