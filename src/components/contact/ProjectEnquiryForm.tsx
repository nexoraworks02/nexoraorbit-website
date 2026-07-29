"use client";

import { useMemo, useState, type FormEvent, type MouseEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  budgetRangeOptions,
  projectStageOptions,
  serviceNeededOptions,
  timelineOptions,
} from "@/data/contact";

type FormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  region: string;
  service: string;
  stage: string;
  budget: string;
  timeline: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  website: "",
  region: "",
  service: "",
  stage: "",
  budget: "",
  timeline: "",
  message: "",
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ProjectEnquiryForm() {
  const [values, setValues] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function updateField(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
    setSuccessMessage("");
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!validateEmail(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.service) {
      nextErrors.service = "Select the service area that best fits.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  }

  function runPreviewSubmission() {
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      // TODO: Connect this form to an approved backend, CRM, or form service before production launch.
      setLoading(false);
      setSuccessMessage("Your enquiry preview is ready. Connect a form backend before production launch.");
    }, 500);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runPreviewSubmission();
  }

  function handleSubmitClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    runPreviewSubmission();
  }

  return (
    <form
      className="grid gap-6 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-raised)] p-5 shadow-[var(--shadow-dark-panel)] sm:p-6 lg:p-8"
      noValidate
      onSubmit={handleSubmit}
    >
      <div>
        <h2 className="ds-h3 text-[var(--text-primary)]">Project Enquiry Form</h2>
        <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">
          Required fields are marked with an asterisk. Keep the first message practical and focused on the decision you need to make.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label="Name"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          errorText={errors.name}
          helperText="Your full name."
          onChange={(event) => updateField("name", event.target.value)}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          errorText={errors.email}
          helperText="Use the best email for project follow-up."
          onChange={(event) => updateField("email", event.target.value)}
        />
        <Input
          label="Company"
          name="company"
          autoComplete="organization"
          value={values.company}
          helperText="Optional, but useful for context."
          onChange={(event) => updateField("company", event.target.value)}
        />
        <Input
          label="Website"
          name="website"
          type="url"
          inputMode="url"
          value={values.website}
          helperText="Optional current website or product URL."
          onChange={(event) => updateField("website", event.target.value)}
        />
        <Input
          label="Location / Region"
          name="region"
          autoComplete="country-name"
          value={values.region}
          helperText="City, country, or operating region."
          onChange={(event) => updateField("region", event.target.value)}
        />
        <Select
          label="Service Needed"
          name="service"
          required
          value={values.service}
          options={serviceNeededOptions}
          errorText={errors.service}
          helperText="Choose the closest fit. Select 'Not sure yet' if needed."
          onChange={(event) => updateField("service", event.target.value)}
        />
        <Select
          label="Project Stage"
          name="stage"
          value={values.stage}
          options={projectStageOptions}
          helperText="Where the work currently stands."
          onChange={(event) => updateField("stage", event.target.value)}
        />
        <Select
          label="Budget Range"
          name="budget"
          value={values.budget}
          options={budgetRangeOptions}
          helperText="A rough planning range is enough."
          onChange={(event) => updateField("budget", event.target.value)}
        />
        <Select
          label="Timeline"
          name="timeline"
          value={values.timeline}
          options={timelineOptions}
          helperText="When you want the next step to begin."
          onChange={(event) => updateField("timeline", event.target.value)}
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        required
        value={values.message}
        errorText={errors.message}
        helperText="Tell us what you are trying to build, improve, automate, or launch."
        placeholder="Tell us what you are trying to build, improve, automate, or launch."
        rows={7}
        onChange={(event) => updateField("message", event.target.value)}
      />

      <div className="grid gap-4">
        {hasErrors ? (
          <div
            role="alert"
            className="nx-feedback-fade rounded-[var(--radius-md)] border border-[var(--tone-error-border)] bg-[var(--tone-error-bg)] p-4 text-sm text-[var(--status-error)]"
          >
            Please fix the highlighted fields before submitting.
          </div>
        ) : null}
        {successMessage ? (
          <div
            role="status"
            className="nx-feedback-fade rounded-[var(--radius-md)] border border-[var(--tone-success-border)] bg-[var(--tone-success-bg)] p-4 text-sm text-[var(--status-success)]"
          >
            {successMessage}
          </div>
        ) : null}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[var(--text-muted)]">
            We only use this information to review your enquiry and respond with relevant next steps.
          </p>
          <Button type="submit" size="lg" loading={loading} className="w-full sm:w-auto" onClick={handleSubmitClick}>
            Submit Project Enquiry
          </Button>
        </div>
      </div>
    </form>
  );
}
