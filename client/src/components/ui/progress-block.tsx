import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ProgressBlockProps {
  title: string;
  value: number;
  maxValue: number;
  status?: "pending" | "completed" | "locked";
  className?: string;
}

export function ProgressBlock({
  title,
  value,
  maxValue,
  status = "pending",
  className,
}: ProgressBlockProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressValue = (value / maxValue) * 100;
    setProgress(progressValue);
  }, [value, maxValue]);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono">
            <span className="text-primary">$</span> {title}
          </span>
          {status === "completed" && (
            <span className="px-1.5 py-0.5 text-xs font-mono bg-primary/20 text-primary rounded">
              Completed
            </span>
          )}
          {status === "locked" && (
            <span className="px-1.5 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded">
              Locked
            </span>
          )}
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          {value}/{maxValue}
        </span>
      </div>
      <div className="relative">
        <Progress 
          value={progress} 
          className={cn(
            "h-2 transition-all",
            status === "completed" && "bg-primary/20",
            status === "locked" && "opacity-50"
          )}
        />
        {status === "pending" && (
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
        )}
      </div>
    </div>
  );
}
