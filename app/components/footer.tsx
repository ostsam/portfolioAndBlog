function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
}

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
							<ArrowIcon />
						</a>
					</div>

					{/* Links */}
					<div className="flex items-center justify-center gap-6 text-sm">
						<a
							className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors duration-200"
							href="/rss"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ArrowIcon />
							<span>RSS</span>
						</a>
						<a
							className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors duration-200"
							href="https://github.com/ostsam"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ArrowIcon />
							<span>GitHub</span>
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
