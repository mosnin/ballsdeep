import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { WalletButton } from "@/components/ui/WalletButton";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Terminal", href: "/chat" },
    { 
      label: "Updates", 
      href: "https://x.com/magaterminal_ai",
      external: true,
      icon: <FaTwitter className="h-4 w-4" />
    },
    {
      label: "Community",
      href: "https://t.me/magaterminal",
      external: true,
      icon: <FaTelegram className="h-4 w-4" />
    },
    { label: "Strategy", href: "/mission" }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-primary/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/balls-deep-logo.png" alt="BallsDeep Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-primary">BallsDeep</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, i) => (
              item.external ? (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <Link key={i} href={item.href}>
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    {item.label}
                  </span>
                </Link>
              )
            ))}
            <ThemeToggle />
            <WalletButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-6 border-t border-primary/20">
            {navItems.map((item, i) => (
              item.external ? (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                  onClick={handleNavClick}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                </a>
              ) : (
                <Link key={i} href={item.href} onClick={handleNavClick}>
                  <span className="block text-muted-foreground hover:text-foreground cursor-pointer transition-colors px-2 py-2">
                    {item.label}
                  </span>
                </Link>
              )
            ))}
            <div className="pt-4 px-2">
              <WalletButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}