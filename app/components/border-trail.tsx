"use client";
import { BorderTrail } from "@/app/components/motion-primitives/border-trail";

export function BorderTrailTextarea() {
  return (
    <div className="relative h-[160px] w-[260px] overflow-hidden rounded-md border border-zinc-950/10 bg-white text-zinc-700 outline-hidden dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300">
      <BorderTrail
        className="bg-linear-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
        size={100}
      />
    </div>
  );
}
