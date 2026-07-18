const projets = [
  {
    emoji: "⚔️",
    nom: "Dofus Stuff Builder",
    desc: "Créateur de builds pour Dofus 3 : 18 classes jouables, équipement complet en drag & drop, stats cumulées, résistances et bonus de panoplies calculés en temps réel via l'API DofusDude.",
    stack: ["Vanilla JS", "HTML/CSS", "API REST", "GitHub Pages"],
    demo: "https://bilalsaaoud.github.io/dofus-stuff-builder/",
    code: "https://github.com/bilalsaaoud/dofus-stuff-builder",
    accent: "from-amber-500/20 to-orange-600/10 border-amber-500/30",
  },
  {
    emoji: "🗳️",
    nom: "Vote Realtime",
    desc: "Application de sondages avec résultats diffusés en temps réel à tous les participants via WebSocket. API REST testée, persistance MySQL, orchestration Docker Compose et CI GitHub Actions.",
    stack: ["React", "TypeScript", "Node.js", "Socket.IO", "MySQL", "Docker"],
    code: "https://github.com/bilalsaaoud/vote-realtime-app",
    accent: "from-sky-500/20 to-blue-600/10 border-sky-500/30",
  },
  {
    emoji: "🚲",
    nom: "Bike Rental",
    desc: "API de location de vélos structurée autour de design patterns (Strategy pour la tarification, Observer pour les notifications, Factory). Tests unitaires et d'intégration JUnit 5.",
    stack: ["Java 17", "Spring Boot 3", "PostgreSQL", "JUnit", "Docker"],
    code: "https://github.com/bilalsaaoud/bike-rental-spring",
    accent: "from-emerald-500/20 to-green-600/10 border-emerald-500/30",
  },
  {
    emoji: "📡",
    nom: "TechPulse",
    desc: "Veille technologique automatisée : workflows n8n planifiés qui agrègent articles et releases (RSS, APIs), les dédupliquent et alimentent un tableau de bord React via une API Node.js.",
    stack: ["React", "Node.js", "n8n", "PostgreSQL", "Docker Compose"],
    code: "https://github.com/bilalsaaoud/techpulse",
    accent: "from-violet-500/20 to-purple-600/10 border-violet-500/30",
  },
  {
    emoji: "📚",
    nom: "BiblioTech",
    desc: "Application web de gestion de bibliothèque : catalogue, emprunts, comptes utilisateurs et interface d'administration.",
    stack: ["Python", "Flask", "SQLAlchemy", "Bootstrap 5"],
    code: "https://github.com/bilalsaaoud/bibliotech",
    accent: "from-rose-500/20 to-pink-600/10 border-rose-500/30",
  },
];

const skills = {
  Frontend: ["React.js", "TypeScript", "HTML/CSS", "Tailwind CSS"],
  Backend: ["Node.js/Express", "Java (Spring Boot)", "Python (Flask)", "ASP.NET Core"],
  "Bases de données": ["MySQL", "PostgreSQL", "SQL Server"],
  "DevOps & outils": ["Docker", "GitHub Actions", "Git", "Linux", "Claude Code / Copilot"],
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24">
      {/* Hero */}
      <section className="flex min-h-[80vh] flex-col justify-center gap-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
          Disponible en alternance — octobre 2026
        </p>
        <h1 className="text-5xl font-bold leading-tight sm:text-7xl">
          Bilal Saaoud
          <span className="block bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Développeur Full-stack
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
          Étudiant en Bachelor Développeur Full-stack à l&apos;ETNA (groupe IONIS),
          basé à Lille et mobile en Île-de-France. Rythme d&apos;alternance :{" "}
          <strong className="text-zinc-200">~96 % du temps en entreprise</strong>{" "}
          (un vendredi école toutes les trois semaines).
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="mailto:bilal123saaoud@gmail.com"
            className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white"
          >
            ✉️ Me contacter
          </a>
          <a
            href="https://github.com/bilalsaaoud"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bilal-saaoud/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-400"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Projets */}
      <section className="py-12">
        <h2 className="mb-2 text-3xl font-bold">Projets</h2>
        <p className="mb-10 text-zinc-400">
          Du code réel, testé, avec CI — cliquez pour explorer.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projets.map((p) => (
            <article
              key={p.nom}
              className={`flex flex-col gap-4 rounded-2xl border bg-gradient-to-br p-6 transition hover:scale-[1.02] ${p.accent}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{p.emoji}</span>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold text-zinc-900 transition hover:bg-amber-300"
                  >
                    🕹️ Démo live
                  </a>
                )}
              </div>
              <h3 className="text-xl font-semibold">{p.nom}</h3>
              <p className="flex-1 text-sm leading-relaxed text-zinc-300">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-zinc-800/80 px-2 py-1 text-xs text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-400 underline-offset-4 hover:text-zinc-100 hover:underline"
              >
                Voir le code →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section className="py-12">
        <h2 className="mb-10 text-3xl font-bold">Compétences</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-4 font-semibold text-zinc-200">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-zinc-800/80 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expérience */}
      <section className="py-12">
        <h2 className="mb-10 text-3xl font-bold">Parcours</h2>
        <div className="space-y-6 border-l border-zinc-800 pl-6">
          {[
            ["oct. 2026 — janv. 2028", "Bachelor Développeur Full-stack (2ᵉ année) — ETNA, groupe IONIS", "En alternance : je cherche mon entreprise d'accueil."],
            ["2025", "Stage développeur full-stack — C'est Carré", "Application web métier : ASP.NET Core MVC (.NET 8), SQL Server, CI/CD GitHub Actions, Agile/Scrum."],
            ["2025 — 2026", "Licence 2 Informatique — Université de Lille", "Algorithmique, POO Java, bases de données, développement web, génie logiciel."],
          ].map(([date, titre, desc]) => (
            <div key={titre}>
              <p className="text-xs uppercase tracking-wider text-zinc-500">{date}</p>
              <h3 className="mt-1 font-semibold text-zinc-100">{titre}</h3>
              <p className="mt-1 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 text-center">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 px-8 py-16">
          <h2 className="text-3xl font-bold">Un alternant présent 96 % du temps.</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Grâce au rythme ETNA, je suis en entreprise tous les jours sauf un
            vendredi toutes les trois semaines. Parlons-en 15 minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:bilal123saaoud@gmail.com"
              className="rounded-full bg-emerald-400 px-8 py-3 font-semibold text-zinc-900 transition hover:bg-emerald-300"
            >
              bilal123saaoud@gmail.com
            </a>
            <a
              href="tel:+33769408943"
              className="rounded-full border border-zinc-700 px-8 py-3 font-semibold transition hover:border-zinc-400"
            >
              07 69 40 89 43
            </a>
          </div>
        </div>
        <p className="mt-10 text-sm text-zinc-600">
          © 2026 Bilal Saaoud — construit avec Next.js, déployé sur GitHub Pages.
        </p>
      </section>
    </main>
  );
}
