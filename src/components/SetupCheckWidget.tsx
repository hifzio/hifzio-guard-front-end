import { useState, useEffect } from "react";
import { ShieldCheck, ShieldAlert, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SetupCheckWidget() {
  const [status, setStatus] = useState<"idle" | "checking" | "secure" | "unsecured">("idle");

  const runCheck = () => {
    setStatus("checking");
    // Simulate a network check
    setTimeout(() => {
      // For the landing page demonstration, we can randomly show secure/unsecured,
      // but typically we'd default to unsecured for new users to prompt them to set it up.
      setStatus("unsecured");
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-medium border border-border/50 max-w-md mx-auto text-center space-y-4">
      <div className="flex justify-center">
        {status === "idle" && (
          <div className="h-16 w-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-slate-400" />
          </div>
        )}
        {status === "checking" && (
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
          </div>
        )}
        {status === "secure" && (
          <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-secondary" />
          </div>
        )}
        {status === "unsecured" && (
          <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <ShieldAlert className="h-8 w-8 text-destructive" />
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-bold tracking-tight">
          {status === "idle" && "Check your network status"}
          {status === "checking" && "Analyzing your connection..."}
          {status === "secure" && "You are protected!"}
          {status === "unsecured" && "Your network is exposed"}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {status === "idle" && "See if your current Wi-Fi is protected by Hifzio Guard."}
          {status === "checking" && "We are checking if your DNS requests are filtered."}
          {status === "secure" && "Hifzio Guard is active on this network. Your family is safe."}
          {status === "unsecured" && "You are not using Hifzio Guard. Adult content and threats can bypass your router."}
        </p>
      </div>

      {status !== "checking" && status !== "secure" && (
        <Button 
          onClick={runCheck} 
          variant={status === "unsecured" ? "default" : "outline"}
          className="w-full"
        >
          {status === "idle" ? "Run Setup Check" : "Secure My Network Now"}
        </Button>
      )}
      {status === "secure" && (
        <Button variant="outline" className="w-full" disabled>
          Protection Active
        </Button>
      )}
    </div>
  );
}
