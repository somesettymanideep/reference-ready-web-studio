import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SERVICE_OPTIONS } from "@/data/site";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-gold/40 bg-accent/60 px-6 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-dark" />
        <h3 className="font-display text-xl font-bold text-navy-900">
          Enquiry Submitted
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within 24
          hours to discuss your project.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-outline mt-2"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ef-name" className="field-label">
            Full Name *
          </label>
          <input id="ef-name" name="name" required className="field" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="ef-phone" className="field-label">
            Phone Number *
          </label>
          <input
            id="ef-phone"
            name="phone"
            type="tel"
            required
            className="field"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ef-email" className="field-label">
            Email Address *
          </label>
          <input
            id="ef-email"
            name="email"
            type="email"
            required
            className="field"
            placeholder="you@example.com"
          />
        </div>
        {!compact && (
          <div>
            <label htmlFor="ef-location" className="field-label">
              Project Location
            </label>
            <input
              id="ef-location"
              name="location"
              className="field"
              placeholder="City / Site location"
            />
          </div>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ef-service" className="field-label">
            Service Interested In *
          </label>
          <select id="ef-service" name="service" required defaultValue="" className="field">
            <option value="" disabled>
              Select Service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        {!compact && (
          <div>
            <label htmlFor="ef-subject" className="field-label">
              Subject
            </label>
            <input
              id="ef-subject"
              name="subject"
              className="field"
              placeholder="e.g. New home construction"
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="ef-message" className="field-label">
          Message *
        </label>
        <textarea
          id="ef-message"
          name="message"
          required
          rows={compact ? 3 : 4}
          className="field resize-none"
          placeholder="Tell us briefly about your project..."
        />
      </div>
      <button type="submit" className="btn-gold w-full sm:w-auto sm:justify-self-start">
        Submit Enquiry
      </button>
    </form>
  );
}
