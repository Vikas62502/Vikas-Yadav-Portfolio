import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "6rem 1.25rem",
        textAlign: "center",
      }}
    >
      <div>
        <p style={{ color: "#fb7185", fontFamily: "var(--font-mono), monospace" }}>404</p>
        <h1 style={{ color: "#fafafa", fontSize: "2rem", margin: "0.75rem 0" }}>
          Page not found
        </h1>
        <p style={{ color: "#a1a1aa", marginBottom: "1.5rem" }}>
          That URL doesn&apos;t exist. Try the homepage or projects.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              padding: "0.7rem 1.2rem",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Home
          </Link>
          <Link
            href="/projects"
            style={{
              padding: "0.7rem 1.2rem",
              borderRadius: "999px",
              border: "1px solid #ffffff40",
              color: "#fafafa",
              fontWeight: 700,
            }}
          >
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
