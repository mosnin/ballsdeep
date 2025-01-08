import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Chat", href: "/chat" },
    { label: "Changelog", href: "/changelog" },
    { 
      label: "Twitter",
      href: "https://x.com/shevoki_ai",
      external: true,
      icon: <FaTwitter className="h-4 w-4" />
    }
  ];

  return (
    <nav className="border-b border-primary/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.png" alt="Shevoki Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">Shevoki</span>
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
            <Button variant="outline">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item, i) => (
              item.external ? (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                </a>
              ) : (
                <Link key={i} href={item.href}>
                  <span className="block text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    {item.label}
                  </span>
                </Link>
              )
            ))}
            <Button variant="outline" className="w-full">
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}