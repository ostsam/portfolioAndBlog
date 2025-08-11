"use client";

import { ScrollProgress } from "./motion-primitives/scroll-progress";

export function ProgressBar() {
	return (
		<div className="pointer-events-none fixed top-0 left-0 w-full z-[60]">
			<div className="absolute left-0 top-0 h-0.5 w-full bg-neutral-200 dark:bg-[#111111]" />
			<ScrollProgress
				className="absolute top-0 h-0.5 bg-emerald-500 dark:bg-emerald-400"
				springOptions={{
					stiffness: 280,
					damping: 18,
					mass: 0.3,
				}}
			/>
		</div>
	);
}
