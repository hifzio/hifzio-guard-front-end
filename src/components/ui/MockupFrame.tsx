import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MockupFrameProps {
  children: ReactNode;
  className?: string;
}

export function MockupFrame({ children, className }: MockupFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto rounded-[3rem] border-[12px] border-slate-900 bg-muted shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-700 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] hover:scale-[1.02]",
        "ring-1 ring-white/20 dark:ring-white/10",
        className
      )}
    >
      {/* Dynamic notch */}
      <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
        <div className="w-32 h-full bg-muted rounded-b-2xl flex justify-center items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700/50"></div>
          <div className="w-8 h-1 rounded-full bg-slate-700/50"></div>
        </div>
      </div>
      
      {/* Premium Button Accents */}
      <div className="absolute -right-[14px] top-32 w-1.5 h-16 bg-slate-800 rounded-r-lg border-l border-white/5"></div>
      <div className="absolute -left-[14px] top-32 w-1.5 h-10 bg-slate-800 rounded-l-lg border-r border-white/5"></div>
      <div className="absolute -left-[14px] top-48 w-1.5 h-10 bg-slate-800 rounded-l-lg border-r border-white/5"></div>

      <div className="relative z-10 w-full h-full bg-background rounded-[2rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
export default MockupFrame;
