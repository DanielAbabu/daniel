import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Émile Vasari" },
      {
        name: "description",
        content: "Get in touch about freelance, full-time, or interesting problems worth solving together.",
      },
      { property: "og:title", content: "Contact — Émile Vasari" },
      { property: "og:description", content: "Start a conversation about your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `From: ${form.name} <${form.email}>\nSubject: ${form.subject}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject || "Hello")}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-10">
      <Reveal>
        <p className="section-num mb-6">— Index 05 / Contact</p>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.04em]">
          Send me
          <br />
          <span className="italic text-primary">a letter.</span>
        </h1>
      </Reveal>

      <div className="mt-24 grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="section-num mb-6">— Direct</p>
          <ul className="space-y-4">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-t border-rule py-3 text-lg">
                  <span>{s.label}</span>
                  <span className="font-mono-ui text-xs text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">Based in</p>
            <p className="mt-2 font-display text-3xl">{site.location}</p>
          </div>
          {site.available && (
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Currently taking on selected projects.
            </p>
          )}
        </Reveal>

        <div className="md:col-span-8">
          {sent ? (
            <Reveal>
              <div className="border-2 border-primary p-12">
                <p className="section-num mb-4">— Sent</p>
                <h2 className="font-display text-4xl">Your draft is open.</h2>
                <p className="mt-4 text-muted-foreground">
                  Your email client should be open with the message ready. If
                  not, write directly to{" "}
                  <a href={`mailto:${site.email}`} className="editorial-link">{site.email}</a>.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 editorial-link"
                >
                  Send another →
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={submit} className="space-y-8">
                <Field label="Your name" required value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} />
                <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} />
                <Field label="Subject" value={form.subject} onChange={(v) => setForm((f) => ({ ...f, subject: v }))} />
                <Field label="Message" textarea required value={form.message} onChange={(v) => setForm((f) => ({ ...f, message: v }))} />
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 overflow-hidden border border-foreground bg-foreground px-8 py-4 font-mono-ui text-xs uppercase tracking-[0.2em] text-background transition-colors"
                >
                  <span className="relative z-10">Send message</span>
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                  <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
};

function Field({ label, value, onChange, type = "text", textarea, required }: FieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="border-b border-rule pb-3 transition-colors focus-within:border-foreground">
      <label htmlFor={id} className="block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className="mt-2 w-full resize-none bg-transparent font-display text-2xl outline-none placeholder:text-muted-foreground/40"
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 w-full bg-transparent font-display text-2xl outline-none placeholder:text-muted-foreground/40"
        />
      )}
    </div>
  );
}
