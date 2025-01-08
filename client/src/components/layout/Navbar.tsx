import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { WalletButton } from "@/components/ui/WalletButton";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Chat", href: "/chat" },
    { label: "Resources", href: "/resources" },
    { label: "Changelog", href: "/changelog" },
    { 
      label: "Twitter",
      href: "https://x.com/wasabi_ai",
      external: true,
      icon: <FaTwitter className="h-4 w-4" />
    }
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
              <img src="/logo.png" alt="Wasabi AI Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">Wasabi AI</span>
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