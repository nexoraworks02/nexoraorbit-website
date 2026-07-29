"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
};

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | undefined>(defaultOpenId);

  return (
    <div className={cn("grid gap-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${item.id}-panel`;
        const buttonId = `${item.id}-button`;

        return (
          <div key={item.id} className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-panel)]">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="ds-focus-ring flex w-full items-center justify-between gap-4 rounded-[var(--radius-lg)] px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)]"
              onClick={() => setOpenId(isOpen ? undefined : item.id)}
            >
              <span>{item.title}</span>
              <span aria-hidden="true" className={cn("transition duration-[var(--duration-base)]", isOpen ? "rotate-45" : "")}>
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden px-5 transition-[grid-template-rows,opacity,padding] duration-[var(--duration-base)] ease-[var(--ease-standard)]",
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0",
              )}
            >
              <div className="min-h-0">
                <p className="text-sm leading-6 text-[var(--text-secondary)]">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
