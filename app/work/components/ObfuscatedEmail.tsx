"use client";

import { useState } from "react";

export function ObfuscatedEmail() {
	const [emailRevealed, setEmailRevealed] = useState(false);

	const handleEmailClick = () => {
		// Multi-chunk  email obfuscation
		const chunks = ["LnRzbw==", "QG1hcw==", "bGlhbWc=", "bW9jLg=="];

		// Decode each chunk and reverse it back to original
		const decodedChunks = chunks.map((chunk) => {
			const decoded = atob(chunk);
			return decoded.split("").reverse().join("");
		});

		// Concatenate all chunks to form the complete email
		const email = decodedChunks.join("");

		// Create mailto link
		window.location.href = `mailto:${email}`;
	};

	return (
		<a
			href="#"
			onClick={(e) => {
				e.preventDefault();
				handleEmailClick();
			}}
			onMouseEnter={() => setEmailRevealed(true)}
			onMouseLeave={() => setEmailRevealed(false)}
			className="cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
		>
			✉️ {emailRevealed ? "ost.sam@gmail.com" : "Contact Me"}
		</a>
	);
}
