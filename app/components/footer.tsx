import { SiRss } from "react-icons/si";

export default function Footer() {
	return (
		<footer className="mt-16">
			<div className="border-t border-neutral-200 dark:border-neutral-800 pt-12 pb-8">
				<div className="text-center space-y-6">
					{/* Main CTA */}
					<div className="space-y-2">
						<p className="text-neutral-700 dark:text-neutral-300 font-medium">
							Let's build something together
						</p>
						<a
							href="/contact"
							className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-200 hover:scale-105 font-medium text-sm"
						>
							Get in touch
						</a>
					</div>

					{/* Links */}
					<div className="flex items-center justify-center gap-6 text-sm">
						<a
							className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors duration-200 group hover:animate-pulse"
							href="/rss"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RSS Feed"
						>
							<SiRss className="w-4 h-4 group-hover:animate-pulse" />
							<span>RSS</span>
						</a>
					</div>

					{/* Copyright */}
					<div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
						<p className="text-xs text-neutral-500 dark:text-neutral-400">
							© {new Date().getFullYear()} Sam Osterfeld
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
