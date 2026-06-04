import { useState, useEffect } from "react";

const NAV_LINKS = ["Features", "How It Works", "Portals", "Contact"];

const FEATURES = [
  {
    icon: "⚡",
    title: "Real-Time Booking",
    desc: "Book desks and meeting rooms instantly with live conflict detection. No double-bookings, ever.",
  },
  {
    icon: "🗺️",
    title: "Floor Map View",
    desc: "See available desks visually on an interactive floor map. Filter by zone, floor, or amenity.",
  },
  {
    icon: "🧹",
    title: "Maintenance Queue",
    desc: "Vacated desks are automatically queued for cleaning before the next occupant arrives.",
  },
  {
    icon: "📊",
    title: "Usage Analytics",
    desc: "Admins get dashboards showing peak hours, most-booked resources, and utilization trends.",
  },
  {
    icon: "🔐",
    title: "Role-Based Access",
    desc: "Three secure portals — Employee, Maintenance Staff, and Admin — each with tailored controls.",
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    desc: "Get booking confirmations, reminders, and status updates delivered automatically.",
  },
];

const PORTALS = [
  {
    role: "Employee",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.08)",
    border: "rgba(79,142,247,0.3)",
    icon: "👤",
    actions: ["Search & filter desks by floor or amenity", "Instant desk/room booking", "View & manage your bookings", "Receive booking reminders"],
  },
  {
    role: "Maintenance",
    color: "#F7A84F",
    bg: "rgba(247,168,79,0.08)",
    border: "rgba(247,168,79,0.3)",
    icon: "🔧",
    actions: ["Real-time cleaning queue", "Mark resources out of service", "Toggle desk status live", "View maintenance logs"],
  },
  {
    role: "Admin",
    color: "#4FF7A8",
    bg: "rgba(79,247,168,0.08)",
    border: "rgba(79,247,168,0.3)",
    icon: "⚙️",
    actions: ["Full inventory management", "User & role assignment", "Booking rule configuration", "Analytics & reports"],
  },
];

const STATS = [
  { value: "3", label: "User Portals" },
  { value: "0", label: "Double Bookings" },
  { value: "100%", label: "Real-Time Sync" },
  { value: "∞", label: "Scalability" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activePortal, setActivePortal] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={styles.root}>
      {/* Background */}
      <div style={styles.bgGrid} />
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      {/* Navbar */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoDot}>▣</span>
            <span style={styles.logoText}>WorkSpace<span style={styles.logoPro}>Pro</span></span>
          </div>
          <div style={styles.navLinks}>
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} style={styles.navLink}>{l}</a>
            ))}
            <a href="#portals" style={styles.navCta}>Get Started</a>
          </div>
          <button style={styles.menuBtn} onClick={() => setMenuOpen(o => !o)}>☰</button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={styles.mobileLink} onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>🏢 Hybrid Office Management</div>
          <h1 style={styles.heroTitle}>
            Your Office,<br />
            <span style={styles.heroAccent}>Intelligently</span><br />
            Managed.
          </h1>
          <p style={styles.heroDesc}>
            WorkSpace Pro eliminates desk conflicts, streamlines cleaning workflows, and gives admins full visibility — all in real time.
          </p>
          <div style={styles.heroBtns}>
            <a href="#portals" style={styles.btnPrimary}>Explore Portals</a>
            <a href="#features" style={styles.btnSecondary}>See Features →</a>
          </div>
        </div>
        <div style={styles.heroVisual}>
          <div style={styles.mockCard}>
            <div style={styles.mockHeader}>
              <span style={styles.mockDot} />
              <span style={{ ...styles.mockDot, background: "#F7A84F" }} />
              <span style={{ ...styles.mockDot, background: "#4FF7A8" }} />
              <span style={styles.mockTitle}>Desk Booking</span>
            </div>
            <div style={styles.mockGrid}>
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} style={{
                  ...styles.mockDesk,
                  background: [2, 5, 9, 12].includes(i)
                    ? "rgba(79,247,168,0.25)"
                    : [3, 7].includes(i)
                    ? "rgba(247,80,80,0.2)"
                    : "rgba(255,255,255,0.05)",
                  border: [2, 5, 9, 12].includes(i)
                    ? "1px solid rgba(79,247,168,0.5)"
                    : [3, 7].includes(i)
                    ? "1px solid rgba(247,80,80,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                }}>
                  {[2, 5, 9, 12].includes(i) ? "✓" : [3, 7].includes(i) ? "✗" : ""}
                </div>
              ))}
            </div>
            <div style={styles.mockLegend}>
              <span style={{ ...styles.mockBadge, background: "rgba(79,247,168,0.2)", color: "#4FF7A8" }}>● Available</span>
              <span style={{ ...styles.mockBadge, background: "rgba(247,80,80,0.15)", color: "#F75050" }}>● Booked</span>
              <span style={{ ...styles.mockBadge, background: "rgba(255,255,255,0.06)", color: "#888" }}>● Empty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={styles.statsBar}>
        {STATS.map((s, i) => (
          <div key={i} style={styles.statItem}>
            <div style={styles.statVal}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section id="features" style={styles.section}>
        <div style={styles.sectionLabel}>What We Offer</div>
        <h2 style={styles.sectionTitle}>Everything your hybrid<br />office needs</h2>
        <div style={styles.featureGrid}>
          {FEATURES.map((f, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.featureIcon}>{f.icon}</div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.sectionLabel}>Simple Process</div>
        <h2 style={styles.sectionTitle}>Up and running<br />in three steps</h2>
        <div style={styles.stepsRow}>
          {[
            { n: "01", t: "Login to your portal", d: "Each user (Employee, Staff, Admin) gets a dedicated, role-protected login." },
            { n: "02", t: "Find & book a resource", d: "Search desks or rooms by filter, check live availability, and confirm instantly." },
            { n: "03", t: "System handles the rest", d: "Cleaning queues update, admins are notified, and conflicts are prevented automatically." },
          ].map((s, i) => (
            <div key={i} style={styles.stepCard}>
              <div style={styles.stepNum}>{s.n}</div>
              <h3 style={styles.stepTitle}>{s.t}</h3>
              <p style={styles.stepDesc}>{s.d}</p>
              {i < 2 && <div style={styles.stepArrow}>→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Portals */}
      <section id="portals" style={styles.section}>
        <div style={styles.sectionLabel}>Three Portals</div>
        <h2 style={styles.sectionTitle}>Built for every<br />role in your office</h2>
        <div style={styles.portalTabs}>
          {PORTALS.map((p, i) => (
            <button
              key={i}
              onClick={() => setActivePortal(i)}
              style={{
                ...styles.portalTab,
                ...(activePortal === i ? { ...styles.portalTabActive, borderColor: p.color, color: p.color } : {}),
              }}
            >
              {p.icon} {p.role}
            </button>
          ))}
        </div>
        <div style={{ ...styles.portalPanel, background: PORTALS[activePortal].bg, borderColor: PORTALS[activePortal].border }}>
          <h3 style={{ ...styles.portalTitle, color: PORTALS[activePortal].color }}>
            {PORTALS[activePortal].icon} {PORTALS[activePortal].role} Portal
          </h3>
          <ul style={styles.portalList}>
            {PORTALS[activePortal].actions.map((a, i) => (
              <li key={i} style={styles.portalItem}>
                <span style={{ color: PORTALS[activePortal].color, marginRight: 10 }}>▸</span>{a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaGlow} />
        <h2 style={styles.ctaTitle}>Ready to fix your hybrid office?</h2>
        <p style={styles.ctaDesc}>WorkSpace Pro brings order, visibility, and efficiency to every corner of your workplace.</p>
        <a href="#" style={styles.btnPrimary}>Get Started Free</a>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLogo}>
          <span style={styles.logoDot}>▣</span>
          <span style={styles.logoText}>WorkSpace<span style={styles.logoPro}>Pro</span></span>
        </div>
        <p style={styles.footerNote}>WPL Mini Project · MERN Stack · Built with React.js</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080C14; }
        a { text-decoration: none; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate { animation: fadeUp 0.7s ease forwards; }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#080C14",
    color: "#E8EDF5",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
  },
  bgGrid: {
    position: "fixed", inset: 0, zIndex: 0,
    backgroundImage: "linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    pointerEvents: "none",
  },
  bgGlow1: {
    position: "fixed", top: "-200px", right: "-200px", width: "700px", height: "700px",
    borderRadius: "50%", background: "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)",
    zIndex: 0, pointerEvents: "none",
  },
  bgGlow2: {
    position: "fixed", bottom: "-200px", left: "-200px", width: "600px", height: "600px",
    borderRadius: "50%", background: "radial-gradient(circle, rgba(79,247,168,0.08) 0%, transparent 70%)",
    zIndex: 0, pointerEvents: "none",
  },

  // Nav
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    padding: "0 24px",
    transition: "background 0.3s, box-shadow 0.3s",
  },
  navScrolled: {
    background: "rgba(8,12,20,0.92)",
    backdropFilter: "blur(16px)",
    boxShadow: "0 1px 0 rgba(79,142,247,0.15)",
  },
  navInner: {
    maxWidth: "1200px", margin: "0 auto",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    height: "68px",
  },
  logo: { display: "flex", alignItems: "center", gap: "10px" },
  logoDot: { fontSize: "22px", color: "#4F8EF7" },
  logoText: { fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px", color: "#E8EDF5", letterSpacing: "-0.5px" },
  logoPro: { color: "#4F8EF7" },
  navLinks: { display: "flex", alignItems: "center", gap: "8px" },
  navLink: {
    color: "#9AAFC5", fontSize: "14px", fontWeight: 500,
    padding: "8px 14px", borderRadius: "8px",
    transition: "color 0.2s",
  },
  navCta: {
    background: "#4F8EF7", color: "#fff",
    fontSize: "14px", fontWeight: 600,
    padding: "9px 20px", borderRadius: "10px",
    marginLeft: "8px",
  },
  menuBtn: {
    display: "none", background: "none", border: "none",
    color: "#9AAFC5", fontSize: "22px", cursor: "pointer",
  },
  mobileMenu: {
    background: "rgba(8,12,20,0.97)",
    padding: "12px 24px 20px",
    display: "flex", flexDirection: "column", gap: "4px",
    borderTop: "1px solid rgba(255,255,255,0.07)",
  },
  mobileLink: { color: "#9AAFC5", padding: "10px 0", fontSize: "15px", borderBottom: "1px solid rgba(255,255,255,0.05)" },

  // Hero
  hero: {
    position: "relative", zIndex: 1,
    maxWidth: "1200px", margin: "0 auto",
    padding: "160px 24px 100px",
    display: "flex", alignItems: "center", gap: "60px",
    flexWrap: "wrap",
  },
  heroContent: { flex: "1 1 400px", minWidth: "300px" },
  heroBadge: {
    display: "inline-block",
    background: "rgba(79,142,247,0.12)", color: "#4F8EF7",
    border: "1px solid rgba(79,142,247,0.3)",
    padding: "6px 16px", borderRadius: "100px",
    fontSize: "13px", fontWeight: 500,
    marginBottom: "28px",
  },
  heroTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(44px, 6vw, 76px)",
    fontWeight: 800, lineHeight: 1.05,
    letterSpacing: "-2px",
    color: "#E8EDF5",
    marginBottom: "24px",
  },
  heroAccent: {
    background: "linear-gradient(135deg, #4F8EF7, #4FF7A8)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
  },
  heroDesc: {
    color: "#7A90AA", fontSize: "17px", lineHeight: 1.7,
    maxWidth: "420px", marginBottom: "36px",
  },
  heroBtns: { display: "flex", gap: "14px", flexWrap: "wrap" },
  btnPrimary: {
    background: "linear-gradient(135deg, #4F8EF7, #3B7AE0)",
    color: "#fff", fontWeight: 600, fontSize: "15px",
    padding: "14px 28px", borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(79,142,247,0.35)",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "inline-block",
  },
  btnSecondary: {
    background: "rgba(255,255,255,0.05)", color: "#9AAFC5",
    border: "1px solid rgba(255,255,255,0.1)",
    fontWeight: 500, fontSize: "15px",
    padding: "14px 28px", borderRadius: "12px",
    display: "inline-block",
  },

  // Hero Visual
  heroVisual: { flex: "1 1 340px", display: "flex", justifyContent: "center" },
  mockCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px", padding: "24px",
    width: "320px", backdropFilter: "blur(12px)",
    boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
  },
  mockHeader: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" },
  mockDot: { width: "10px", height: "10px", borderRadius: "50%", background: "#4FF7A8", display: "inline-block" },
  mockTitle: { marginLeft: "auto", fontSize: "12px", color: "#7A90AA", fontWeight: 500 },
  mockGrid: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px", marginBottom: "16px" },
  mockDesk: {
    aspectRatio: "1", borderRadius: "8px",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "11px", fontWeight: 600,
  },
  mockLegend: { display: "flex", gap: "8px", flexWrap: "wrap" },
  mockBadge: { fontSize: "11px", padding: "4px 10px", borderRadius: "100px" },

  // Stats
  statsBar: {
    position: "relative", zIndex: 1,
    maxWidth: "1200px", margin: "0 auto 0",
    padding: "0 24px 60px",
    display: "flex", gap: "0",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    flexWrap: "wrap",
  },
  statItem: {
    flex: "1 1 120px",
    padding: "28px 24px",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center",
  },
  statVal: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "36px", fontWeight: 800,
    background: "linear-gradient(135deg, #4F8EF7, #4FF7A8)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
  },
  statLabel: { color: "#7A90AA", fontSize: "13px", marginTop: "4px" },

  // Sections
  section: {
    position: "relative", zIndex: 1,
    maxWidth: "1200px", margin: "0 auto",
    padding: "80px 24px",
  },
  sectionAlt: {
    maxWidth: "100%",
    background: "rgba(255,255,255,0.02)",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  sectionLabel: {
    display: "inline-block",
    color: "#4F8EF7", fontSize: "12px", fontWeight: 600,
    letterSpacing: "2px", textTransform: "uppercase",
    marginBottom: "16px",
  },
  sectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: 800, lineHeight: 1.1,
    letterSpacing: "-1.5px",
    marginBottom: "52px",
    color: "#E8EDF5",
  },

  // Features
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  featureCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "16px", padding: "28px",
    transition: "border-color 0.2s, transform 0.2s",
  },
  featureIcon: { fontSize: "28px", marginBottom: "16px" },
  featureTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "17px", fontWeight: 700, color: "#E8EDF5",
    marginBottom: "10px",
  },
  featureDesc: { color: "#7A90AA", fontSize: "14px", lineHeight: 1.65 },

  // Steps
  stepsRow: {
    maxWidth: "1200px", margin: "0 auto",
    padding: "0 24px",
    display: "flex", gap: "0", flexWrap: "wrap",
    position: "relative",
  },
  stepCard: {
    flex: "1 1 260px",
    padding: "32px 28px",
    position: "relative",
  },
  stepNum: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "48px", fontWeight: 800,
    color: "rgba(79,142,247,0.15)", lineHeight: 1,
    marginBottom: "16px",
  },
  stepTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "18px", fontWeight: 700,
    color: "#E8EDF5", marginBottom: "12px",
  },
  stepDesc: { color: "#7A90AA", fontSize: "14px", lineHeight: 1.65 },
  stepArrow: {
    position: "absolute", right: "-8px", top: "40px",
    fontSize: "28px", color: "rgba(79,142,247,0.3)",
  },

  // Portals
  portalTabs: { display: "flex", gap: "10px", marginBottom: "24px", flexWrap: "wrap" },
  portalTab: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#7A90AA", fontSize: "14px", fontWeight: 500,
    padding: "10px 20px", borderRadius: "10px",
    cursor: "pointer", transition: "all 0.2s",
  },
  portalTabActive: {
    background: "rgba(79,142,247,0.08)",
    fontWeight: 600,
  },
  portalPanel: {
    border: "1px solid",
    borderRadius: "18px", padding: "32px",
    transition: "all 0.3s",
  },
  portalTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "22px", fontWeight: 700, marginBottom: "20px",
  },
  portalList: { listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" },
  portalItem: { color: "#B0C0D4", fontSize: "15px", display: "flex", alignItems: "center" },

  // CTA
  ctaSection: {
    position: "relative", zIndex: 1,
    textAlign: "center",
    padding: "100px 24px",
    overflow: "hidden",
  },
  ctaGlow: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px", height: "400px",
    background: "radial-gradient(ellipse, rgba(79,142,247,0.15) 0%, transparent 70%)",
    zIndex: 0,
  },
  ctaTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: 800, letterSpacing: "-1.5px",
    color: "#E8EDF5", marginBottom: "16px",
    position: "relative",
  },
  ctaDesc: {
    color: "#7A90AA", fontSize: "16px", maxWidth: "480px",
    margin: "0 auto 36px", lineHeight: 1.65,
    position: "relative",
  },

  // Footer
  footer: {
    position: "relative", zIndex: 1,
    borderTop: "1px solid rgba(255,255,255,0.07)",
    padding: "32px 24px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexWrap: "wrap", gap: "16px",
    maxWidth: "1200px", margin: "0 auto",
  },
  footerNote: { color: "#4A5A6A", fontSize: "13px" },
};
