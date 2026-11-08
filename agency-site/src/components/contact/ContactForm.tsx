"use client";

import Link from "next/link";
import { FadeUp } from "@/lib/motion";
import { useState } from "react";

type Field = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  autoComplete?: string;
  inputMode?: "email" | "tel";
  options?: string[];
};

const FIELDS: Field[] = [
  { id: "name", label: "Full name*", type: "text", autoComplete: "name" },
  { id: "email", label: "Email*", type: "email", inputMode: "email", autoComplete: "email" },
  { id: "phone", label: "Phone", type: "tel", inputMode: "tel", autoComplete: "tel" },
  { id: "company", label: "Company", type: "text", autoComplete: "organization" },
  {
    id: "service",
    label: "Service interested in",
    type: "select",
    options: ["SEO", "Social Media", "Ads", "Content", "Branding", "Web", "Email"],
  },
  {
    id: "budget",
    label: "Project budget",
    type: "select",
    options: ["Under $5k", "$5k–$15k", "$15k–$50k", "$50k+"],
  },
  { id: "message", label: "Project description*", type: "textarea", autoComplete: "off" },
];

export function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const required = ["name", "email", "message"];

  const validate = () => {
    const next: Record<string, string> = {};
    let ok = true;
    FIELDS.forEach((f) => {
      const v = (values[f.id] || "").trim();
      if (required.includes(f.id) && !v) {
        next[f.id] = "This field is required.";
        ok = false;
      }
      if (f.id === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        next[f.id] = "Enter a valid email address.";
        ok = false;
      }
    });
    setErrors(next);
    return ok;
  };

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="glass-panel p-1 rounded-24 max-w-lg w-full border border-border">
      <div className="rounded-23 p-8 border border-white/10 bg-surface-soft">
        <FadeUp delay={200}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {FIELDS.map((field) => {
              const error = errors[field.id];
              return (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs font-semibold text-text mb-1.5"
                  >
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={field.id}
                      value={values[field.id] || ""}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className={`w-full rounded-12 border px-4 py-3 text-sm text-text bg-surface-soft focus:border-accent focus:outline-none disabled:text-muted ${error ? "border-error" : "border-border"}`}
                    >
                      <option value="">{`Select ${field.label.toLowerCase().replace("*", "")}`}</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      value={values[field.id] || ""}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      rows={4}
                      className={`w-full rounded-12 border px-4 py-3 text-sm text-text bg-surface-soft focus:border-accent focus:outline-none ${error ? "border-error" : "border-border"}`}
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                                inputMode={field.inputMode}
                      autoComplete={field.autoComplete}
                      value={values[field.id] || ""}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className={`w-full rounded-12 border px-4 py-3 text-sm text-text bg-surface-soft focus:border-accent focus:outline-none ${error ? "border-error" : "border-border"}`}
                    />
                  )}
                  {error && (
                    <p className="mt-1.5 flex items-center gap-2 text-xs text-error">
                      <span aria-hidden="true">!</span>
                      {error}
                    </p>
                  )}
                </div>
              );
            })}

            <div className="flex items-start gap-3 pt-2">
              <input
                id="consent"
                type="checkbox"
                checked={values["consent"] === "true"}
                onChange={(e) => handleChange("consent", e.target.checked ? "true" : "")}
                className="w-4 h-4 rounded border border-border text-accent focus:ring-accent bg-surface-soft"
              />
              <label htmlFor="consent" className="text-xs text-muted leading-relaxed">
                I agree to the processing of my data as described in the{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            {errors["consent"] && (
              <p className="mt-1.5 flex items-center gap-2 text-xs text-error">
                <span aria-hidden="true">!</span>
                {errors["consent"]}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-full bg-accent text-dark-text font-semibold disabled:opacity-50 hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
          </form>
        </FadeUp>

        {status === "success" && (
          <FadeUp delay={400} className="mt-6 glass-panel p-6 rounded-24 border border-border bg-surface">
            <h3 className="font-heading text-lg font-bold text-text">Thank you.</h3>
            <p className="text-muted text-sm mt-2">
              Your message has been sent. We’ll be in touch shortly.
            </p>
            <Link
              href="/portfolio"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              View our work
            </Link>
          </FadeUp>
        )}
        {status === "error" && (
          <p className="mt-4 text-xs text-error flex items-center gap-2">
            <span aria-hidden="true">!</span>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
