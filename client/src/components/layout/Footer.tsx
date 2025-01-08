import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Wasabi AI. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms">
              <span className="hover:text-foreground cursor-pointer transition-colors">
                Terms of Service
              </span>
            </Link>
            <Link href="/disclaimer">
              <span className="hover:text-foreground cursor-pointer transition-colors">
                AI Disclaimer
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}