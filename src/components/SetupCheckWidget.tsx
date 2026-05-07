import { useState } from "react";
import { ShieldCheck, ShieldAlert, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

type Status = "idle" | "checking" | "secure" | "unsecured";

const STATUS_CONFIG: Record<Status, {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}> = {
  idle: {
    icon: <ShieldCheck className="h-5 w-5 text-muted-foreground" />,
    title: "Is your network protected?",
    description: "Run a quick check to see if Hifzio Guard is active on your connection.",
    bgColor: "bg-muted",
    textColor: "text-muted-foreground",
  },
  checking: {
    icon: <Loader2 className="h-5 w-5 text-primary animate-spin" />,
    title: "Checking your connection…",
    description: "Verifying if your DNS is filtered by Hifzio Guard.",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
  secure: {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    title: "Your network is protected",
    description: "Hifzio Guard is active. Your family is browsing safely.",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  unsecured: {
    icon: <ShieldAlert className="h-5 w-5 text-red-500" />,
    title: "Not protected yet",
    description: "Adult content and threats can still reach your devices.",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
  },
};

export function SetupCheckWidget() {
  const [status, setStatus] = useState<Status>("idle");

  const runCheck = () => {
    setStatus("checking");
    setTimeout(() => setStatus("unsecured"), 2000);
  };

  const cfg = STATUS_CONFIG[status];

  return (
    <div className="rounded-2xl border border-border/60 bg-white shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      {/* Status icon */}
      <div className={`shrink-0 flex h-10 w-10 items-center justify-center rounded-xl ${cfg.bgColor}`}>
        {cfg.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">{cfg.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{cfg.description}</p>
      </div>

      {/* Action */}
      <div className="shrink-0 w-full sm:w-auto">
        {status === "idle" && (
          <button
            onClick={runCheck}
            className="w-full sm:w-auto inline-flex items-center justify-center h-9 px-4 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted/60 transition-all"
          >
            Run Check
          </button>
        )}
        {status === "checking" && (
          <span className="text-xs text-muted-foreground">Please wait…</span>
        )}
        {status === "secure" && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
            <ShieldCheck className="h-3.5 w-3.5" /> Protected
          </span>
        )}
        {status === "unsecured" && (
          <Link
            to="/setup"
            className="inline-flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark shadow-sm shadow-primary/20 transition-all"
          >
            Set Up Now
          </Link>
        )}
      </div>
    </div>
  );
}

export default SetupCheckWidget;
