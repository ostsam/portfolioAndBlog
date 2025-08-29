"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ProgressBar } from "./progress-bar";
import { Navbar } from "./nav";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence, motion } from "motion/react";

export default function ClientLayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isBlogPost =
		pathname.startsWith("/blog/") && pathname.split("/").length > 2;

	// Detect last interaction method to decide whether to move focus programmatically
	const [lastInputWasKeyboard, setLastInputWasKeyboard] = useState(false);

	useEffect(() => {
		const handleKeyDown = () => setLastInputWasKeyboard(true);
		const handlePointer = () => setLastInputWasKeyboard(false);

		document.addEventListener("keydown", handleKeyDown, { passive: true });
		document.addEventListener("mousedown", handlePointer, { passive: true });
		document.addEventListener("pointerdown", handlePointer, { passive: true });
		document.addEventListener("touchstart", handlePointer, { passive: true });

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handlePointer);
			document.removeEventListener("pointerdown", handlePointer);
			document.removeEventListener("touchstart", handlePointer);
		};
	}, []);

	// Temporarily disabled focus management
	// useEffect(() => {
	// 	// Only move focus on keyboard navigation to avoid showing focus ring on mouse nav
	// 	if (!lastInputWasKeyboard) return;
	// 	const el = document.getElementById("main-content");
	// 	if (el) el.focus({ preventScroll: true });
	// }, [pathname, lastInputWasKeyboard]);

	return (
		<>
			{isBlogPost && (
				<div className="print-hide">
					<ProgressBar />
				</div>
			)}
			<div className="print-hide">
				<Navbar />
			</div>
			<div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10 pt-24 print:pt-0">
				<main
					id="main-content"
					className="flex-auto min-w-0 flex flex-col space-y-24 md:space-y-28 print:space-y-0 print:pt-0"
				>
					{children}
				</main>
				<div className="print-hide">
					<Footer />
				</div>
				<Analytics />
				<SpeedInsights />
			</div>
		</>
	);
}
