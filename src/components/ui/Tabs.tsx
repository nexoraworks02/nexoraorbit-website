"use client";

import type { KeyboardEvent } from "react";
import { useState } from "react";
import { cn } from "@/lib/cn";

export type TabItem = {
  id: string;
  label: string;
  content: string;
};

export type TabsProps = {
  items: TabItem[];
  defaultValue?: string;
  ariaLabel?: string;
  className?: string;
};

export function Tabs({ items, defaultValue, ariaLabel = "Tabs", className }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultValue ?? items[0]?.id);
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  function focusTab(nextIndex: number) {
    const nextItem = items[nextIndex];
    if (!nextItem) return;
    setActiveId(nextItem.id);
    requestAnimationFrame(() => {
      document.getElementById(`${nextItem.id}-tab`)?.focus();
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab((index + 1) % items.length);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab((index - 1 + items.length) % items.length);
    }
    if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      focusTab(items.length - 1);
    }
  }

  return (
    <div className={cn("grid gap-4", className)}>
      <div role="tablist" aria-label={ariaLabel} className="flex flex-wrap gap-2">
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${item.id}-panel`}
              id={`${item.id}-tab`}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                "ds-focus-ring min-h-11 rounded-[var(--radius-full)] border px-4 py-2 text-sm font-semibold transition duration-[var(--duration-fast)]",
                isActive
                  ? "border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-[var(--text-accent)]"
                  : "border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--surface-panel)]",
              )}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem ? (
        <div
          id={`${activeItem.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeItem.id}-tab`}
          className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-panel)] p-5 text-sm leading-6 text-[var(--text-secondary)]"
        >
          {activeItem.content}
        </div>
      ) : null}
    </div>
  );
}
