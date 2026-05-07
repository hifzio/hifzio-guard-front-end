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
        "relative mx-auto rounded-[2rem] border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden",
        "ring-4 ring-white/10 dark:ring-white/5",
        className
      )}
    >
      {/* Top camera notch simulation */}
      <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-20">
        <div className="w-1/3 h-full bg-slate-800 rounded-b-xl flex justify-center items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900/50 shadow-inner"></div>
        </div>
      </div>
      
      {/* Power/Volume button simulation on the edges */}
      <div className="absolute -right-[12px] top-24 w-1 h-12 bg-slate-700 rounded-r-md"></div>
      <div className="absolute -left-[12px] top-24 w-1 h-8 bg-slate-700 rounded-l-md"></div>
      <div className="absolute -left-[12px] top-36 w-1 h-8 bg-slate-700 rounded-l-md"></div>

      <div className="relative z-10 w-full h-full bg-background rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}
