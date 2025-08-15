"use client";

import { useState } from "react";
import { IconType } from "react-icons";

interface BrandBadgeProps {
	icon: IconType;
	name: string;
	outlineOnDark?: boolean;
}

export function BrandBadge({
	icon: Icon,
	name,
	outlineOnDark = false,
}: BrandBadgeProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="relative group">
			<div
				className={`inline-flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 cursor-pointer hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
					outlineOnDark ? "dark:[filter:drop-shadow(0_0_1px_#ffffff)]" : ""
				}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				title={name}
			>
				<Icon className="w-6 h-6" />
			</div>
			{isHovered && (
				<div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 animate-in fade-in duration-200 slide-in-from-top-2">
					{name}
				</div>
			)}
		</div>
	);
}
