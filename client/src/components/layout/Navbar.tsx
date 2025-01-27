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
      href: "https://x.com/soballsdeep",
      external: true,
      icon: <FaTwitter className="h-4 w-4" />
    },
    {
      label: "Community",
      href: "https://t.me/+omtwFOy9BfViYWQx",
      external: true,
      icon: <FaTelegram className="h-4 w-4" />
    }
  ];

  return (
    <nav className="border-b border-primary/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8fERpQ_S7oUOM-jC7XRaDZXfVAV4lKyXX-dt8OifeII6QWW6VnGNWJL0DK9422UBv6KAwGOLdIxardLFDXyTyL_UonRV48a_d4empFoWggfDaddZ4HoIytiqBxwW6yLwPQ3AEhWhcObNEJMcB5RFks4Wl-gnDc8qK2nZYjUGrwvWebxoNb_ESqrLnZjY/s320/Untitled%20design%20-%202025-01-26T215738.301.png"
                alt="BallsDeep Logo"
                className="h-8 w-8"
              />
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
              aria-label="Toggle menu"
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
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                </a>
              ) : (
                <Link key={i} href={item.href} onClick={() => setIsOpen(false)}>
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