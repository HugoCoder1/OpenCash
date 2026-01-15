import { LayoutDashboard, User, LogOut, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const menuItems = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Transactions", href: "/dashboard", icon: LayoutDashboard },
  { name: "Profil", href: "/profile", icon: User },
];

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-card border border-border rounded-xl"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
        fixed lg:sticky top-0 left-0 z-50
        w-72 bg-sidebar text-sidebar-foreground min-h-screen h-full p-6 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-sidebar-accent rounded-lg"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg" />
          <span className="text-xl font-semibold tracking-tight">OpenCash</span>
        </div>

        {/* Menu */}
        <nav className="space-y-1 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Déconnexion */}
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-sidebar-foreground/60 hover:text-red-400 hover:bg-red-500/10 transition-colors w-full">
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </aside>
    </>
  );
}
