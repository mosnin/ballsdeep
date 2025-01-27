import { useEffect, useState } from "react";

export function Preloader() {
  const [dots, setDots] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);

    // Hide preloader after 2.5 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="w-full max-w-md mx-4 font-mono">
        <div className="border border-primary/20 rounded-lg bg-card/50 backdrop-blur p-6 space-y-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8fERpQ_S7oUOM-jC7XRaDZXfVAV4lKyXX-dt8OifeII6QWW6VnGNWJL0DK9422UBv6KAwGOLdIxardLFDXyTyL_UonRV48a_d4empFoWggfDaddZ4HoIytiqBxwW6yLwPQ3AEhWhcObNEJMcB5RFks4Wl-gnDc8qK2nZYjUGrwvWebxoNb_ESqrLnZjY/s320/Untitled%20design%20-%202025-01-26T215738.301.png"
              alt="BallsDeep Logo"
              className="h-20 w-20"
            />
          </div>

          {/* Terminal-style text */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <span>$</span>
              <span className="text-foreground">initializing_deep_dive</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <span>{">"}</span>
              <span className="text-foreground">loading_dependencies</span>
              <span className="text-primary/60">{dots}</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <span>$</span>
              <span className="text-foreground">balls_about_to_go_deep</span>
              <span className="text-primary/60">{dots}</span>
            </div>
          </div>

          {/* Loading bar */}
          <div className="relative h-1 bg-primary/20 rounded overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-primary w-full animate-[loader_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}