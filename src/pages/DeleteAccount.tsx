import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type DeleteRequest = {
  email: string;
  name: string;
  reason: string;
  notes: string;
  date: string;
};

const SUPPORT_EMAIL = "support@hifzio.com";
const SUBJECT = "Delete my Hifzio Guard account";
const APP_NAME = "Hifzio Guard";

const reasonOptions = [
  "Switching to another service",
  "Privacy concerns",
  "App issues/bugs",
  "No longer need the service",
  "Other",
];

const DeleteAccount = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isCopying, setIsCopying] = useState(false);

  useEffect(() => {
    document.title = "Hifzio Guard — Delete Account Request";
  }, []);

  const emailPattern = useMemo(() =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  []);

  const buildBody = (payload: DeleteRequest) =>
    [
      "Hello Wequitech Support,",
      "",
      `I am requesting deletion of my ${APP_NAME} account.`,
      `Sign-in email: ${payload.email}`,
      `Full name: ${payload.name || "Not provided"}`,
      `Reason: ${payload.reason || "Not provided"}`,
      `Additional notes: ${payload.notes || "None"}`,
      `Local date/time: ${payload.date}`,
      `App: ${APP_NAME}`,
      "",
      "Please delete my account and associated data and confirm when completed.",
    ].join("\n");

  const readForm = (): DeleteRequest | null => {
    const form = formRef.current;
    if (!form) return null;
    const data = new FormData(form);

    const email = (data.get("email") ?? "").toString().trim();
    const name = (data.get("name") ?? "").toString().trim();
    const reason = (data.get("reason") ?? "").toString().trim();
    const notes = (data.get("notes") ?? "").toString().trim();
    const confirmed = data.get("confirm") === "on";

    if (!email || !emailPattern.test(email)) {
      setError("Please enter a valid sign-in email.");
      return null;
    }

    if (!confirmed) {
      setError("Please confirm you want to delete your account.");
      return null;
    }

    return {
      email,
      name,
      reason,
      notes,
      date: new Date().toLocaleString(),
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setError("");

    const payload = readForm();
    if (!payload) return;

    const body = buildBody(payload);
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("If your email app did not open, use the copy button and paste the text into a message to support@hifzio.com.");
  };

  const handleCopy = async () => {
    setStatus("");
    setError("");
    setIsCopying(true);

    const payload = readForm();
    if (!payload) {
      setIsCopying(false);
      return;
    }

    const body = buildBody(payload);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(body);
      } else {
        throw new Error("Clipboard API not available");
      }
      setStatus("Email text copied. Paste into a new email to support@hifzio.com.");
    } catch (copyError) {
      console.error(copyError);
      setError("Could not copy automatically. Please select and copy the text manually after the mail app opens.");
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <PageLayout mainClassName="bg-background text-foreground">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_10%_20%,rgba(79,195,247,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(156,239,168,0.18),transparent_28%)]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Account deletion</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Hifzio Guard — Delete Account Request</h1>
            <p className="text-base text-muted-foreground">
              Submit this form to generate an email to our support team. Entries stay in your browser only; no data is stored on this site.
            </p>
          </div>

          <Card className="border-border/80 bg-muted/80 text-foreground shadow-2xl backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Request deletion</CardTitle>
              <CardDescription className="text-muted-foreground">
                We’ll open your email client with the details prefilled. If mailto is blocked, use the copy button.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email used to sign in <span className="text-cyan-300">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="border-border bg-muted/60 text-foreground placeholder:text-muted-foreground focus-visible:ring-cyan-400 focus-visible:ring-offset-0"
                  />
                  <p className="text-xs text-muted-foreground">Used to locate your account in Firebase Auth.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full name (optional)
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="border-border bg-muted/60 text-foreground placeholder:text-muted-foreground focus-visible:ring-cyan-400 focus-visible:ring-offset-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-foreground">
                    Reason for deletion (optional)
                  </Label>
                  <select
                    id="reason"
                    name="reason"
                    className="w-full rounded-md border border-border bg-muted/60 px-3 py-2 text-sm text-foreground shadow-sm outline-none ring-offset-0 transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400"
                    defaultValue=""
                  >
                    <option value="" className="bg-muted text-foreground">
                      Select a reason (optional)
                    </option>
                    {reasonOptions.map((option) => (
                      <option key={option} value={option} className="bg-muted text-foreground">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-foreground">
                    Additional notes (optional)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Anything you want us to know"
                    className="min-h-[96px] border-border bg-muted/60 text-foreground placeholder:text-muted-foreground focus-visible:ring-cyan-400 focus-visible:ring-offset-0"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="confirm"
                    name="confirm"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 cursor-pointer rounded border border-slate-500 bg-muted accent-cyan-400"
                  />
                  <Label htmlFor="confirm" className="text-foreground">
                    I confirm I want to delete my account and associated data.
                  </Label>
                </div>

                <div className="space-y-2" aria-live="polite">
                  {status ? <p className="text-sm text-emerald-300">{status}</p> : null}
                  {error ? <p className="text-sm font-semibold text-rose-300">{error}</p> : null}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="submit" className="h-11 flex-1 bg-gradient-to-r from-cyan-400 to-emerald-300 text-slate-950 shadow-lg shadow-cyan-500/20 hover:opacity-95">
                    Open email app to send request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    disabled={isCopying}
                    onClick={handleCopy}
                    className="h-11 flex-1 border-border bg-muted/60 text-foreground hover:border-cyan-300 hover:bg-slate-800"
                  >
                    {isCopying ? "Copying..." : "Copy email text"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border/80 bg-muted/60 text-foreground shadow-xl backdrop-blur">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">What happens next</CardTitle>
              <CardDescription className="text-muted-foreground">Data handling and timeline</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <ul className="list-disc space-y-2 pl-5">
                <li>We delete your {APP_NAME} account (Firebase Auth) and stored profile data (email, name, photo) plus any user-linked database records.</li>
                <li>Aggregated analytics or crash-report data may remain in system logs for reliability and security; these are not tied to your active account.</li>
                <li>Processing time: requests are handled within 90 days. You will receive a confirmation email once completed.</li>
              </ul>
              <p className="text-muted-foreground">Developer: Wequitech — Contact: {SUPPORT_EMAIL} — App: {APP_NAME}.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default DeleteAccount;
