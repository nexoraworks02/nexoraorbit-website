import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: GridColumns;
};

const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
};

export function Grid({ columns = 3, className, ...props }: GridProps) {
  return <div className={cn("grid gap-5", columnClasses[columns], className)} {...props} />;
}
