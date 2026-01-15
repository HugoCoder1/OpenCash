import { Sidebar } from "@/components/sidebar";
import { user, transactions, monthlyData } from "@/lib/data";
import { formatMoney } from "@/utils/formatMoney";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}) {
  if (!active || !payload) return null;

  return (
    <div className="bg-popover border border-border rounded-lg px-3 py-2 shadow-lg">
      <p className="text-xs font-medium text-foreground mb-1">{label}</p>
      {payload.map((item, index) => (
        <p key={index} className="text-xs">
          <span
            className={
              item.dataKey === "entrees" ? "text-emerald-500" : "text-rose-500"
            }
          >
            {item.dataKey === "entrees" ? "Entrées" : "Sorties"}:
          </span>{" "}
          <span className="font-semibold">{formatMoney(item.value)}</span>
        </p>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const totalEntrees = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const totalSorties = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-4 pt-16 lg:pt-8 lg:p-12 min-w-0">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <p className="text-muted-foreground text-sm">Bonjour,</p>
          <h1 className="text-xl lg:text-2xl font-semibold tracking-tight mt-1">
            {user.name}
          </h1>
        </div>

        {/* Balance */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-5 lg:p-8 mb-6 lg:mb-8">
          <p className="text-sm text-primary-foreground/70 mb-2">
            Solde disponible
          </p>
          <p className="text-3xl lg:text-5xl font-semibold tracking-tight">
            {formatMoney(user.balance)}
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 lg:mt-8 pt-5 lg:pt-6 border-t border-primary-foreground/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <ArrowDownRight size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/60">Entrées</p>
                <p className="font-semibold">+{formatMoney(totalEntrees)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <ArrowUpRight size={20} className="text-red-400" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/60">Sorties</p>
                <p className="font-semibold">-{formatMoney(totalSorties)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Aperçu mensuel */}
        <div className="bg-card border border-border rounded-2xl p-4 lg:p-6 mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h2 className="font-semibold">Aperçu mensuel</h2>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Entrées
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                Sorties
              </span>
            </div>
          </div>

          <div className="h-45 lg:h-50 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} barGap={4}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#a1a1aa", fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#a1a1aa", fontSize: 10 }}
                  tickFormatter={(value) => `${value / 1000}k`}
                  width={35}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(255,255,255,0.05)" }}
                />
                <Bar
                  dataKey="entrees"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={24}
                />
                <Bar
                  dataKey="sorties"
                  fill="#f43f5e"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-border">
            <h2 className="font-semibold">Transactions récentes</h2>
          </div>

          {/* En-têtes du tableau */}
          <div className="hidden sm:grid grid-cols-4 gap-4 px-4 lg:px-6 py-3 bg-muted/30 text-xs text-muted-foreground font-medium">
            <span>Nom</span>
            <span>Date</span>
            <span className="text-right">Montant</span>
            <span className="text-right">Statut</span>
          </div>

          {/* Lignes de transactions */}
          <div className="divide-y divide-border">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:grid sm:grid-cols-4 gap-2 sm:gap-4 px-4 lg:px-6 py-4 hover:bg-muted/20 transition-colors"
              >
                {/* Nom avec icône */}
                <div className="flex items-center justify-between sm:justify-start gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        transaction.amount > 0
                          ? "bg-accent/10"
                          : "bg-red-500/10"
                      }`}
                    >
                      {transaction.amount > 0 ? (
                        <ArrowDownRight size={14} className="text-accent" />
                      ) : (
                        <ArrowUpRight size={14} className="text-red-500" />
                      )}
                    </div>
                    <span className="font-medium text-sm">
                      {transaction.name}
                    </span>
                  </div>
                  {/* Montant */}
                  <span
                    className={`sm:hidden text-sm font-semibold ${
                      transaction.amount > 0 ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : "-"}
                    {formatMoney(transaction.amount)}
                  </span>
                </div>

                {/* Date et statut */}
                <div className="flex items-center justify-between sm:contents pl-11 sm:pl-0">
                  {/* Date */}
                  <span className="text-sm text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  {/* Montant */}
                  <span
                    className={`hidden sm:block text-sm font-semibold text-right ${
                      transaction.amount > 0 ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : "-"}
                    {formatMoney(transaction.amount)}
                  </span>

                  {/* Statut */}
                  <div className="sm:flex sm:justify-end">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        transaction.status === "Complété"
                          ? "bg-accent/10 text-accent"
                          : "bg-amber-500/10 text-amber-500"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
