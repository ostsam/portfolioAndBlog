import Link from "next/link";

export default function NotFound() {
	return (
		<section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
			<div className="space-y-6">
				<div className="space-y-2">
					<h1 className="text-6xl font-bold text-neutral-300 dark:text-neutral-700">
						404
					</h1>
					<h2 className="text-2xl font-semibold tracking-tight">
						Page not found
					</h2>
				</div>
				<p className="text-muted-foreground max-w-[50ch]">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="inline-flex items-center px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors duration-200"
					>
						Go home
					</Link>
					<Link
						href="/blog"
						className="inline-flex items-center px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors duration-200"
					>
						Browse blog
					</Link>
				</div>
			</div>
		</section>
	);
}
