"use client";

import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import {
	SiTypescript,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiTailwindcss,
	SiReact,
	SiNextdotjs,
	SiPostgresql,
	SiGithub,
	SiOpenai,
	SiDeepgram,
	SiVercel,
	SiNodedotjs,
	SiSupabase,
	SiAdobephotoshop,
	SiAdobelightroom,
	SiGraphite,
	SiGooglegemini,
} from "react-icons/si";

function BrandBadge({
	Icon,
	label,
	color,
	outlineOnDark = false,
}: {
	Icon: IconType;
	label: string;
	color: string;
	outlineOnDark?: boolean;
}) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative flex flex-col items-center group cursor-pointer print-skill-item"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<span
				className={`transition-all duration-200 whitespace-nowrap ${
					isHovered
						? "scale-110 bg-neutral-100 dark:bg-neutral-800"
						: "hover:bg-neutral-50 dark:hover:bg-neutral-900/60"
				}`}
			>
				<span
					className={
						outlineOnDark
							? "dark:[filter:drop-shadow(0_0_1px_#ffffff)]"
							: undefined
					}
				>
					<Icon color={color} size={32} aria-hidden="true" />
				</span>
			</span>

			{/* Text appears below the badge */}
			{isHovered && (
				<span className="absolute top-full mt-1 text-xs font-medium text-foreground bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 animate-in fade-in duration-150">
					{label}
				</span>
			)}

			{/* Print-only text label */}
			<span className="hidden print:inline">{label}</span>
			<span className="sr-only print:hidden">{label}</span>
		</div>
	);
}

// Obfuscated email component using multiple anti-crawling techniques
function ObfuscatedEmail({
	className,
	children,
	showIcon = false,
}: {
	className?: string;
	children?: React.ReactNode;
	showIcon?: boolean;
}) {
	const [email, setEmail] = useState<string>("");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Multi-layer obfuscation:
		// 1. Reverse string + Base64 encoding
		// 2. Character code manipulation
		// 3. Runtime assembly

		// "ost.sam@gmail.com" reversed = "moc.liamg@mas.tso"
		// Then base64 encoded = "bW9jLmxpYW1nQG1hcy50c28="
		const encoded = "bW9jLmxpYW1nQG1hcy50c28=";
		const decoded = atob(encoded);

		// Reverse the string back to get the email
		const email = decoded.split("").reverse().join("");

		setEmail(email);
		setMounted(true);
	}, []);

	if (!mounted) {
		// Server-side render placeholder
		return (
			<span className={className}>
				{showIcon && "✉️ "}
				{children || "Contact"}
			</span>
		);
	}

	return (
		<a
			href={`mailto:${email}`}
			className={className}
			onClick={(e) => {
				// Additional layer: construct mailto dynamically on click
				e.preventDefault();
				const parts = email.split("@");
				if (parts.length === 2) {
					window.location.href = `mailto:${parts[0]}@${parts[1]}`;
				}
			}}
		>
			{showIcon && "✉️ "}
			{children || email}
		</a>
	);
}

// Note: metadata moved to layout.tsx since this is now a Client Component

export default function Page() {
	return (
		<>
			{/* Print-specific styles for professional resume layout */}
			<style jsx global>{`
				@media print {
					/* Hide non-essential elements */
					.print-hide {
						display: none !important;
					}

					/* Page setup */
					@page {
						margin: 0.75in;
						size: letter;
						@top-left {
							content: none;
						}
						@top-center {
							content: none;
						}
						@top-right {
							content: none;
						}
						@bottom-left {
							content: none;
						}
						@bottom-center {
							content: none;
						}
						@bottom-right {
							content: none;
						}
					}

					/* Body and layout adjustments */
					body {
						font-size: 11pt !important;
						line-height: 1.3 !important;
						color: #000 !important;
						background: white !important;
					}

					/* Single column layout for print */
					.print-layout {
						display: block !important;
						max-width: none !important;
						grid-template-columns: none !important;
						gap: 0 !important;
					}

					/* Adjust spacing for print */
					.print-section {
						margin-bottom: 1rem !important;
						page-break-inside: avoid;
					}

					/* Header adjustments */
					.print-header h1 {
						font-size: 24pt !important;
						margin-bottom: 0.25rem !important;
						font-weight: 600 !important;
					}

					.print-header p {
						font-size: 10pt !important;
						margin-bottom: 0.5rem !important;
					}

					/* Contact info in header */
					.print-contact {
						display: flex !important;
						flex-wrap: wrap !important;
						gap: 0.75rem !important;
						font-size: 9pt !important;
						margin-bottom: 1rem !important;
						justify-content: center !important;
					}

					.print-contact span {
						white-space: nowrap !important;
					}

					/* Section headings */
					.print-section h2 {
						font-size: 14pt !important;
						font-weight: 600 !important;
						margin-bottom: 0.5rem !important;
						margin-top: 1rem !important;
						border-bottom: 1px solid #333 !important;
						padding-bottom: 0.125rem !important;
					}

					/* Job titles and dates */
					.print-job-header {
						display: flex !important;
						justify-content: space-between !important;
						align-items: baseline !important;
						margin-bottom: 0.25rem !important;
					}

					.print-job-header h3 {
						font-size: 12pt !important;
						font-weight: 500 !important;
					}

					.print-job-header .date {
						font-size: 10pt !important;
						color: #666 !important;
					}

					/* Lists */
					.print-list {
						margin-left: 1rem !important;
						margin-bottom: 0.5rem !important;
					}

					.print-list li {
						font-size: 10pt !important;
						margin-bottom: 0.125rem !important;
						line-height: 1.2 !important;
					}

					/* Skills section - make badges text-only */
					.print-skills {
						display: flex !important;
						flex-wrap: wrap !important;
						gap: 0.5rem !important;
					}

					.print-skill-item {
						font-size: 10pt !important;
						padding: 0.125rem 0.25rem !important;
						border: 1px solid #ccc !important;
						border-radius: 0.125rem !important;
						display: inline-block !important;
						position: relative !important;
					}

					/* Hide icons and hover elements in print */
					.print-skill-item svg,
					.print-skill-item span:not(.print\\:inline):not(.sr-only) {
						display: none !important;
					}

					/* Show text labels in print */
					.print-skill-item .print\\:inline {
						display: inline !important;
					}

					/* Projects section */
					.print-project {
						margin-bottom: 0.75rem !important;
					}

					.print-project h3 {
						font-size: 11pt !important;
						font-weight: 500 !important;
						margin-bottom: 0.125rem !important;
					}

					.print-project p {
						font-size: 9pt !important;
						margin-bottom: 0.25rem !important;
					}

					/* Force page breaks */
					.page-break-before {
						page-break-before: always !important;
					}

					.page-break-after {
						page-break-after: always !important;
					}

					/* Avoid page breaks */
					.no-page-break {
						page-break-inside: avoid !important;
					}
				}
			`}</style>

			<div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12 print-layout">
				<div className="lg:col-start-1">
					<section className="animate-in fade-in duration-1000 text-center lg:text-left mb-8 lg:mb-16 print-header print-section">
						<p className="kicker mb-3 print-hide">Curriculum Vitae</p>
						<h1 className="mb-2 lg:mb-4 text-4xl md:text-5xl font-semibold tracking-tighter title">
							Sam Osterfeld
						</h1>

						{/* Print-only contact info */}
						<div className="hidden print-contact">
							<span>📍 New York, NY</span>
							<span>✉️ ost.sam@gmail.com</span>
							<span>🌐 malan.vercel.app</span>
							<span>💻 ostsam</span>
							<span>🔗 sam-osterfeld</span>
						</div>

						<p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed lg:hidden print-hide">
							📍 New York, NY
						</p>

						{/* Mobile contact links */}
						<div className="lg:hidden mt-6 text-center print-hide">
							{/* Mobile PDF Download Button */}
							<div className="mb-6">
								<button
									onClick={() => window.print()}
									className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white border border-black dark:border-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
								>
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									Download PDF
								</button>
							</div>

							<p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
								Contact
							</p>
							<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
								<ObfuscatedEmail
									className="cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
									showIcon={true}
								/>
								<a
									href="https://malan.vercel.app"
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
								>
									🌐 Malan
								</a>
								<a
									href="https://github.com/ostsam"
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
								>
									💻 GitHub
								</a>
								<a
									href="https://linkedin.com/in/sam-osterfeld"
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
								>
									🔗 LinkedIn
								</a>
							</div>
						</div>
					</section>

					<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-200 mb-12 print-section">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">
							Professional Summary
						</h2>
						<p className="max-w-[72ch] text-neutral-700 dark:text-neutral-300 leading-relaxed">
							I am a full-stack developer with a humanities background who
							transitioned into tech to build impactful solutions to real-world
							problems. I am candid about gaps, relentless about closing them,
							and biased toward deployment.
						</p>
					</section>

					<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300 mb-12 print-section">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">
							Technical Skills
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-700 dark:text-neutral-300">
							<div className="space-y-2">
								<h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
									Languages & Frameworks
								</h3>
								<div className="flex flex-wrap gap-2 [&>span]:inline-flex [&>span]:items-center [&>span]:gap-2 [&>span]:px-3 [&>span]:py-1.5 [&>span]:rounded-md [&>span]:border [&>span]:border-neutral-200 dark:[&>span]:border-neutral-800 [&>span]:bg-neutral-50 dark:[&>span]:bg-neutral-900/40 print-skills">
									<BrandBadge
										Icon={SiTypescript}
										label="TypeScript"
										color="#3178C6"
									/>
									<BrandBadge Icon={SiReact} label="React" color="#61DAFB" />
									<BrandBadge
										Icon={SiTailwindcss}
										label="Tailwind CSS"
										color="#06B6D4"
									/>
									<BrandBadge
										Icon={SiNextdotjs}
										label="Next.js"
										color="#000000"
										outlineOnDark
									/>
									<BrandBadge
										Icon={SiJavascript}
										label="JavaScript"
										color="#F7DF1E"
									/>
									<BrandBadge Icon={SiHtml5} label="HTML5" color="#E34F26" />
									<BrandBadge Icon={SiCss3} label="CSS3" color="#1572B6" />
									<BrandBadge
										Icon={SiPostgresql}
										label="PostgreSQL"
										color="#4169E1"
									/>
								</div>
							</div>
							<div className="space-y-2">
								<h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
									Tools & Platforms
								</h3>
								<div className="flex flex-wrap gap-2 [&>span]:inline-flex [&>span]:items-center [&>span]:gap-2 [&>span]:px-3 [&>span]:py-1.5 [&>span]:rounded-md [&>span]:border [&>span]:border-neutral-200 dark:[&>span]:border-neutral-800 [&>span]:bg-neutral-50 dark:[&>span]:bg-neutral-900/40 print-skills">
									<BrandBadge
										Icon={SiGithub}
										label="GitHub"
										color="#181717"
										outlineOnDark
									/>
									<BrandBadge
										Icon={SiGraphite}
										label="Graphite"
										color="#000000"
										outlineOnDark
									/>
									<BrandBadge
										Icon={SiOpenai}
										label="OpenAI"
										color="#000000"
										outlineOnDark
									/>
									<BrandBadge
										Icon={SiGooglegemini}
										label="Google AI Studio"
										color="#4285F4"
									/>
									<BrandBadge
										Icon={SiDeepgram}
										label="Deepgram"
										color="#3191FF"
									/>
									<BrandBadge
										Icon={SiVercel}
										label="Vercel"
										color="#000000"
										outlineOnDark
									/>
									<BrandBadge
										Icon={SiNodedotjs}
										label="Node.js"
										color="#339933"
									/>
									<BrandBadge
										Icon={SiSupabase}
										label="Supabase"
										color="#3ECF8E"
									/>
									<BrandBadge
										Icon={SiAdobephotoshop}
										label="Adobe Photoshop"
										color="#31A8FF"
									/>
									<BrandBadge
										Icon={SiAdobelightroom}
										label="Adobe Lightroom"
										color="#31A8FF"
									/>
								</div>
							</div>
							<div className="space-y-2">
								<h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
									Core Competencies
								</h3>
								<p>
									Full stack development, AI integration, UI/UX design,
									responsive design, Agile workflows
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
									Languages
								</h3>
								<p>
									English (native), Russian (native), Arabic (advanced), Hebrew
									(advanced), French (advanced), German (advanced), Spanish
									(working knowledge)
								</p>
							</div>
						</div>
					</section>

					<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300 mb-12 mt-6 print-section">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-0.5">
							Fractal AI Accelerator
						</h2>
						<p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
							Jun 2025 – Aug 2025
						</p>

						<div className="space-y-8">
							{/* Overview */}
							<div>
								<h3 className="text-lg font-medium tracking-tight mb-3">
									Overview
								</h3>
								<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
									The Fractal AI Accelerator is an intensive 70 hour per week
									program focused on AI-driven web development and deployment.
									Comprehensive training in modern full-stack technologies, AI
									integration, and rapid prototyping methodologies.
								</p>
								<p className="text-sm text-neutral-600 dark:text-neutral-400">
									<a
										href="https://fractalbootcamp.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-4 hover:text-foreground transition-colors duration-200 mr-0.5"
									>
										Fractal AI Accelerator →
									</a>
									{"   •   "}
									<a
										href="https://github.com/fractal-bootcamp/bootcamp-monorepo"
										target="_blank"
										rel="noopener noreferrer"
										className="ml-0.5 underline underline-offset-4 hover:text-foreground transition-colors duration-200"
									>
										View curriculum →
									</a>
								</p>
							</div>

							{/* Projects */}
							<div>
								<h3 className="text-lg font-medium tracking-tight mb-4">
									Projects
								</h3>
								<div className="space-y-6">
									<div className="surface p-4 print-project">
										<h4 className="text-base font-medium tracking-tight mb-1">
											Malan
										</h4>
										<p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
											TypeScript, Next.js, Tailwind, SQL, OpenAI API, Vercel ·{" "}
											<a
												href="https://malan.vercel.app"
												target="_blank"
												rel="noopener noreferrer"
												className="underline underline-offset-4 hover:text-foreground transition-colors duration-200"
											>
												malan.vercel.app
											</a>
										</p>
										<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
											Malan is a speaking-first AI-powered language learning
											suite which empowers users to learn 57 different
											languages. Where most language learning apps on the market
											today are gamified tapping games, Malan throws the user
											right into the language learning experience by expecting
											them to speak from the first conversation. Users are
											helpfully aided by the built in dictionary and the latest
											FSRS algorithm to maximize vocabulary retention.
										</p>
									</div>
								</div>
							</div>

							{/* Internship Experience */}
							<div>
								<h3 className="text-lg font-medium tracking-tight mb-4">
									Internship Experience
								</h3>
								<div className="space-y-4">
									<div>
										<h4 className="text-base font-medium tracking-tight mb-2">
											SupplyCo AI (July 2025)
										</h4>
										<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
											<li>Implemented a self-onboarding flow for new users.</li>
											<li>Added trial mode to the platform.</li>
											<li>
												Added email drip campaigns based on leads generated from
												the platform.
											</li>
											<li>Mobile website optimization.</li>
										</ul>
									</div>
									<div>
										<h4 className="text-base font-medium tracking-tight mb-2">
											Shrinked.ai (Ongoing)
										</h4>
										<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
											<li>TBD :)</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300 mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">
							Professional Experience
						</h2>
						<div className="space-y-6">
							<div>
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
									<h3 className="text-lg font-medium tracking-tight">
										Substitute Teacher – NYCDOE
									</h3>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										Dec 2022 – May 2025
									</p>
								</div>
								<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 mt-2">
									<li>
										Delivered dynamic, real-time instruction to classes of up to
										30 students, adapting complex material for diverse
										learners—skills directly applicable to technical
										communication and end-user education.
									</li>
									<li>
										Integrated online tools to facilitate interactive lessons,
										improving participation rates by 25%.
									</li>
								</ul>
							</div>

							<div>
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
									<h3 className="text-lg font-medium tracking-tight">
										Intake Assistant – Crocus Home Care
									</h3>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										Aug 2020 – Dec 2022
									</p>
								</div>
								<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 mt-2">
									<li>
										Digitized and streamlined client intake processes, reducing
										data entry errors by 15% and accelerating onboarding
										timelines.
									</li>
									<li>
										Coordinated with cross-functional teams to ensure data
										accuracy, compliance, and client satisfaction.
									</li>
								</ul>
							</div>

							<div>
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
									<h3 className="text-lg font-medium tracking-tight">
										Research Assistant – Brooklyn Institute for Social Research
									</h3>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										Oct 2018 – Apr 2020
									</p>
								</div>
								<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 mt-2">
									<li>
										Managed multi-year research project analyzing primary source
										datasets in Arabic and English; synthesized findings into
										actionable insights for publication.
									</li>
									<li>
										Proofread and optimized content for clarity and accuracy,
										akin to QA and documentation processes in tech.
									</li>
								</ul>
							</div>

							<div>
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
									<h3 className="text-lg font-medium tracking-tight">
										Arabic Language Teaching Assistant – Columbia University
									</h3>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										Aug 2017 – May 2019
									</p>
								</div>
								<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 mt-2">
									<li>
										Graded the homework of students studying Arabic on a daily
										basis.
									</li>
									<li>Offered personalized feedback during office hours.</li>
								</ul>
							</div>

							<div>
								<div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
									<h3 className="text-lg font-medium tracking-tight">
										Volunteer Content & Social Media Manager – Are You Syrious?
									</h3>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										Mar 2016 – Jun 2019
									</p>
								</div>
								<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 mt-2">
									<li>
										Automated content workflows and managed social media
										campaigns, scaling Facebook audience from zero to 40K+
										organically.
									</li>
									<li>
										Led cross-border volunteer team, providing training and
										quality control for digital publications, reducing revision
										cycles by 30%.
									</li>
									<li>
										Wrote and edited grant proposals that secured funding for
										on-the-ground operations.
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300 mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">
							Education
						</h2>
						<div className="space-y-6">
							<div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
								<h3 className="text-lg font-medium tracking-tight">
									Columbia University, New York
								</h3>
								<p className="text-sm text-neutral-500 dark:text-neutral-400">
									M.A., Middle Eastern, South Asian, and African Studies
									(2017-2020)
								</p>
							</div>

							<div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
								<h3 className="text-lg font-medium tracking-tight">
									CUNY Baccalaureate, New York
								</h3>
								<p className="text-sm text-neutral-500 dark:text-neutral-400">
									B.A., Middle Eastern Studies & Jewish Studies (2013-2016)
								</p>
							</div>
						</div>
					</section>

					<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300 mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">
							Additional Information
						</h2>
						<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
							<li>
								Public speaking at academic and community events; experience
								presenting to diverse audiences.
							</li>
							<li>
								Proven ability to self-learn complex technical subjects and
								apply them in real-world projects.
							</li>
						</ul>
					</section>
				</div>

				{/* Contact Sidebar */}
				<aside className="lg:col-start-2 lg:row-start-1 animate-in slide-in-from-bottom-4 duration-1000 delay-100 print-hide">
					<div className="lg:sticky lg:top-8 space-y-6 text-center lg:text-left">
						{/* PDF Download Button */}
						<div className="hidden lg:block">
							<button
								onClick={() => window.print()}
								className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white border border-black dark:border-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Download PDF
							</button>
						</div>

						<div className="hidden lg:block">
							<p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
								Contact
							</p>
							<div className="space-y-2 text-sm">
								<p className="text-neutral-600 dark:text-neutral-300">
									📍 New York, NY
								</p>
								<ObfuscatedEmail
									className="cursor-pointer block text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
									showIcon={true}
								/>
								<a
									href="https://malan.vercel.app"
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer block text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
								>
									🌐 malan.vercel.app
								</a>
								<a
									href="https://github.com/ostsam"
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer block text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
								>
									💻 github.com/ostsam
								</a>
								<a
									href="https://linkedin.com/in/sam-osterfeld"
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer block text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
								>
									🔗 linkedin.com/in/sam-osterfeld
								</a>
							</div>
						</div>
					</div>
				</aside>
			</div>
		</>
	);
}
