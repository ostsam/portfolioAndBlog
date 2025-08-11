"use client";

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error("Application error:", error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
			<div className="space-y-4">
				<h2 className="text-2xl font-semibold tracking-tight">
					Something went wrong
				</h2>
				<p className="text-muted-foreground max-w-[50ch]">
					We encountered an unexpected error. This has been logged and we'll
					look into it.
				</p>
				<button
					onClick={reset}
					className="inline-flex items-center px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors duration-200"
				>
					Try again
				</button>
			</div>
		</div>
	);
}
