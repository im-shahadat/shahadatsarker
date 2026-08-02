"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "#0d1117", borderBottom: "1px solid rgba(255,255,255,0.06)"}}>
      <div className="site-container" style={{display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.25rem", paddingBottom: "1.25rem"}}>
        <Link href="/" style={{color: "#fff", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none"}}>
          Shahadat Sarker
        </Link>
        <ul className="nav-desktop">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textDecoration: "none"}}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#contact" className="nav-cta" style={{color: "#fff", fontSize: "0.75rem", textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)", padding: "0.4rem 1rem", borderRadius: "9999px", alignItems: "center"}}>
          Contact
        </Link>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} style={{color: "#fff", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: "0.25rem"}}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="mobile-menu" style={{borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem"}}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", textDecoration: "none"}} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
