import { Sidebar } from "@/components/sidebar";
import { user } from "@/lib/data";
import { formatMoney } from "@/utils/formatMoney";
import { Mail, UserIcon, Wallet } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-4 pt-16 lg:pt-8 lg:p-12 min-w-0">
        <h1 className="text-xl lg:text-2xl font-semibold tracking-tight mb-8 lg:mb-10">
          Profil
        </h1>

        <div className="max-w-full">
          {/* Card Profile */}
          <div className="bg-card border border-border rounded-2xl p-5 lg:p-8">
            {/* Avatar & Nom */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-8 text-center sm:text-left">
              <img
                src={user.photo || "/placeholder.svg"}
                alt="Photo de profil"
                width={80}
                height={80}
                className="rounded-full ring-4 ring-accent/20"
              />
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Membre depuis Janvier 2024
                </p>
              </div>
            </div>

            {/* Liste des informations */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-muted rounded-xl">
                <div className="w-9 lg:w-10 h-9 lg:h-10 bg-background rounded-full flex items-center justify-center shrink-0">
                  <UserIcon size={18} className="text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Nom complet
                  </p>
                  <p className="font-medium mt-0.5 truncate">{user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-muted rounded-xl">
                <div className="w-9 lg:w-10 h-9 lg:h-10 bg-background rounded-full flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-medium mt-0.5 truncate">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-accent/10 rounded-xl">
                <div className="w-9 lg:w-10 h-9 lg:h-10 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <Wallet size={18} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-accent/70 uppercase tracking-wider">
                    Solde disponible
                  </p>
                  <p className="font-semibold text-accent mt-0.5">
                    {formatMoney(user.balance)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
