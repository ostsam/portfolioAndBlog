"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = {
	"/": {
		name: "home",
	},
	"/blog": {
		name: "blog",
	},
	"/cv": {
		name: "cv",
	},
	"/contact": {
		name: "contact",
	},
};

export function Navbar() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 8);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`sticky top-0 z-50 -mx-5 md:-mx-8 lg:-mx-10 px-5 md:px-8 lg:px-10 py-4 mb-12 transition-all duration-200 border-b border-neutral-200 dark:border-neutral-800 ${
				isScrolled ? "backdrop-blur-sm bg-background/70" : ""
			}`}
		>
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center space-x-0">
					{Object.entries(navItems).map(([path, { name }]) => {
						const isActive = pathname === path;
						return (
							<Link
								key={path}
								href={path}
								className={`relative py-2 px-3 text-sm transition-colors duration-180 hover:text-foreground ${
									isActive
										? "text-foreground after:absolute after:left-3 after:-bottom-1 after:h-0.5 after:w-[calc(100%-24px)] after:bg-accent after:transition-all"
										: "text-muted-foreground"
								}`}
							>
								{name}
							</Link>
						);
					})}
				</div>
				<div className="hidden md:flex items-center gap-4">
					<a
						href="https://github.com/ostsam"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
					>
						GitHub
					</a>
				</div>
			</div>
		</nav>
	);
}
