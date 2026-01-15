import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Style sombre moderne */}
      <section className="relative bg-primary text-primary-foreground">
        {/* Header */}
        <header className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg" />
            <span className="text-xl font-semibold tracking-tight">
              OpenCash
            </span>
          </div>
          <Link
            to="/dashboard"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-primary-foreground text-primary hover:opacity-90 transition-opacity"
          >
            Se connecter
          </Link>
        </header>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-20 pb-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.1]">
            La finance
            <br />
            sans friction.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
            Gérez votre argent, suivez vos dépenses et prenez le contrôle de vos
            finances. Simple, rapide, sécurisé.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3.5 bg-primary-foreground text-primary font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Accéder au dashboard
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Pourquoi OpenCash
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            Tout ce dont vous avez besoin pour gérer votre argent.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              number="01"
              title="Suivi en temps réel"
              description="Visualisez vos entrées et sorties instantanément. Gardez un œil sur chaque transaction."
            />
            <FeatureCard
              number="02"
              title="Sécurité maximale"
              description="Vos données sont chiffrées et protégées selon les standards bancaires les plus stricts."
            />
            <FeatureCard
              number="03"
              title="Sans frais cachés"
              description="Transparence totale sur les coûts. Pas de surprise, juste de la clarté."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Prêt à commencer ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Rejoignez des milliers d'utilisateurs qui font confiance à OpenCash.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Commencer maintenant
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group">
      <span className="text-sm font-mono text-accent">{number}</span>
      <h3 className="text-xl font-semibold mt-3 mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
