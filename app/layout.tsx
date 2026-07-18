import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilal Saaoud — Développeur Full-stack",
  description:
    "Portfolio de Bilal Saaoud, étudiant en Bachelor Développeur Full-stack à l'ETNA. Recherche alternance dès octobre 2026 — Lille / Île-de-France.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
