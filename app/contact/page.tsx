"use client";

import { useState } from "react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
		"idle"
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");

		try {
			const response = await fetch("https://formspree.io/f/mvgqlped", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.message,
				}),
			});

			if (response.ok) {
				setStatus("sent");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section className="max-w-2xl">
			<div className="mb-12">
				<p className="uppercase tracking-wide text-xs text-neutral-500 dark:text-neutral-400 mb-3">
					Contact
				</p>
				<h1 className="font-semibold text-3xl md:text-4xl mb-4 tracking-tighter">
					Let's work together
				</h1>
				<p className="text-neutral-600 dark:text-neutral-400 max-w-[50ch]">
					Have a project in mind? I'd love to hear about it. Drop me a message
					and I'll get back to you soon.
				</p>
			</div>

			<form
				onSubmit={handleSubmit}
				className="space-y-6"
				action="https://formspree.io/f/mvgqlped"
				method="POST"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium mb-2">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-2">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows={6}
						className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
					/>
				</div>
				<button
					type="submit"
					disabled={status === "sending"}
					className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-200 hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{status === "sending" ? "Sending..." : "Send Message"}
				</button>
			</form>

			{status === "sent" && (
				<div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
					<p className="text-green-800 dark:text-green-200">
						Thanks for your message! I'll get back to you soon.
					</p>
				</div>
			)}

			{status === "error" && (
				<div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
					<p className="text-red-800 dark:text-red-200">
						Something went wrong. Please try again or reach out directly.
					</p>
				</div>
			)}
		</section>
	);
}
