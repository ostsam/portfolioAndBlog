"use client";

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
	SiLinkedin,
} from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { PDFDownloadButton } from "./components/PDFDownloadButton";
import { BrandBadge } from "./components/BrandBadge";
import { ObfuscatedEmail } from "./components/ObfuscatedEmail";
import { generatePDF } from "./utils/pdf-generator";
import { resumeData } from "./data/resume-data";
import { createContext, useContext } from "react";

// Reusable contact link component to reduce duplication
interface ContactLinkProps {
	href: string;
	icon: React.ReactNode;
	text: string;
	className?: string;
}

function ContactLink({ href, icon, text, className = "" }: ContactLinkProps) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2 ${className}`}
		>
			<span className="flex items-center gap-1.5">
				{icon}
				<span className={className}>{text}</span>
			</span>
		</Link>
	);
}

// ContactLinks component that can be reused
function ContactLinks({
	layout = "vertical",
	showLocation = true,
	isMobile = false,
}: {
	layout?: "vertical" | "horizontal";
	showLocation?: boolean;
	isMobile?: boolean;
}) {
	const malanLogo = (
		<Image
			src="/malan-logo.svg"
			alt="Malan Logo"
			width={16}
			height={16}
			className="w-4 h-4 dark:invert brightness-0"
		/>
	);

	const githubIcon = <SiGithub className="w-4 h-4" />;
	const linkedinIcon = <SiLinkedin className="w-4 h-4" />;

	const containerClass =
		layout === "vertical"
			? "space-y-2"
			: "flex flex-wrap justify-center gap-x-4 gap-y-3";

	const linkClass = layout === "vertical" ? "block" : "";
	const textClass = isMobile ? "text-[13px]" : ""; // Custom size between xs (12px) and sm (14px)

	return (
		<div className={containerClass}>
			{showLocation && (
				<p className="text-neutral-600 dark:text-neutral-300 mb-1.5">
					📍 {resumeData.personalInfo.location}
				</p>
			)}
			<ObfuscatedEmail className={textClass} compact={isMobile} />
			<ContactLink
				href={`https://${resumeData.personalInfo.portfolio}`}
				icon={malanLogo}
				text="Malan"
				className={`${linkClass} ${textClass}`}
			/>
			<ContactLink
				href={`https://${resumeData.personalInfo.github}`}
				icon={githubIcon}
				text="GitHub"
				className={`${linkClass} ${textClass}`}
			/>
			<ContactLink
				href={`https://${resumeData.personalInfo.linkedin}`}
				icon={linkedinIcon}
				text="LinkedIn"
				className={`${linkClass} ${textClass}`}
			/>
		</div>
	);
}

// Custom disclosure triangle component - CSS-only implementation for cross-platform compatibility
function DisclosureTriangle() {
	return (
		<div
			className="absolute left-2 top-1/2 -translate-y-1/2 h-0 w-0 pointer-events-none css-triangle"
			aria-hidden="true"
		/>
	);
}

// Icon mapping for dynamic badge generation
const iconMap = {
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
};

export default function Page() {
	return (
		<div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12 print-layout">
			<div className="lg:col-start-1">
				<section className="animate-in fade-in duration-1000 text-center lg:text-left mb-8 lg:mb-16 print-header print-section">
					<p className="kicker mb-3 print-hide">Résumé</p>
					<h1 className="mb-2 lg:mb-4 text-4xl md:text-5xl font-semibold tracking-tighter title">
						{resumeData.personalInfo.name}
					</h1>

					{/* Print-only contact info */}
					<div className="hidden print-contact">
						<span>📍 {resumeData.personalInfo.location}</span>
						<span>✉️ {resumeData.personalInfo.email}</span>
						<span>
							<Image
								src="/malan-logo.svg"
								alt="Malan Logo"
								width={12}
								height={12}
								className="inline-block mr-1 w-4 h-4 brightness-0"
							/>
							{resumeData.personalInfo.portfolio}
						</span>
						<span>
							💻 {resumeData.personalInfo.github.replace("github.com/", "")}
						</span>
						<span>
							🔗{" "}
							{resumeData.personalInfo.linkedin.replace("linkedin.com/in/", "")}
						</span>
					</div>

					<p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed lg:hidden print-hide">
						📍 {resumeData.personalInfo.location}
					</p>

					{/* Mobile contact links */}
					<div className="lg:hidden mt-116 text-center print-hide">
						{/* Mobile PDF Download Button */}
						<div className="mb-6">
							<PDFDownloadButton onDownload={generatePDF} />
						</div>

						<p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
							Contact
						</p>
						<ContactLinks
							layout="horizontal"
							showLocation={false}
							isMobile={true}
						/>
					</div>
				</section>

				<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-200 mb-12 print-section">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">
						Professional Summary
					</h2>
					<p className="max-w-[72ch] text-neutral-700 dark:text-neutral-300 leading-relaxed">
						{resumeData.professionalSummary}
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
								{resumeData.technicalSkills.languagesFrameworks.map(
									(skill, index) => {
										const IconComponent =
											iconMap[skill.icon as keyof typeof iconMap];
										return (
											<BrandBadge
												key={index}
												icon={IconComponent}
												name={skill.name}
												outlineOnDark={skill.outlineOnDark}
											/>
										);
									}
								)}
							</div>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
								Tools & Platforms
							</h3>
							<div className="flex flex-wrap gap-2 [&>span]:inline-flex [&>span]:items-center [&>span]:gap-2 [&>span]:px-3 [&>span]:py-1.5 [&>span]:rounded-md [&>span]:border [&>span]:border-neutral-200 dark:[&>span]:border-neutral-800 [&>span]:bg-neutral-50 dark:[&>span]:bg-neutral-900/40 print-skills">
								{resumeData.technicalSkills.toolsPlatforms.map(
									(skill, index) => {
										const IconComponent =
											iconMap[skill.icon as keyof typeof iconMap];
										return (
											<BrandBadge
												key={index}
												icon={IconComponent}
												name={skill.name}
												outlineOnDark={skill.outlineOnDark}
											/>
										);
									}
								)}
							</div>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
								Core Competencies
							</h3>
							<p>{resumeData.technicalSkills.coreCompetencies}</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
								Languages
							</h3>
							<p>{resumeData.technicalSkills.languages}</p>
						</div>
					</div>
				</section>

				<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300 mb-12 mt-6 print-section">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-0.5">
						{resumeData.fractalAIAccelerator.title}
					</h2>
					<p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
						{resumeData.fractalAIAccelerator.dates}
					</p>

					<div className="space-y-8">
						{/* Overview */}
						<div>
							<h3 className="text-lg font-medium tracking-tight mb-3">
								Overview
							</h3>
							<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
								{resumeData.fractalAIAccelerator.overview.description}
							</p>
							<p className="text-sm text-neutral-600 dark:text-neutral-400">
								<Link
									href={resumeData.fractalAIAccelerator.overview.links.website}
									target="_blank"
									rel="noopener noreferrer"
									className="underline underline-offset-4 hover:text-foreground transition-colors duration-200 mr-0.5"
								>
									Fractal AI Accelerator →
								</Link>
								{"   •   "}
								<Link
									href={
										resumeData.fractalAIAccelerator.overview.links.curriculum
									}
									target="_blank"
									rel="noopener noreferrer"
									className="ml-0.5 underline underline-offset-4 hover:text-foreground transition-colors duration-200"
								>
									View curriculum →
								</Link>
							</p>
						</div>

						{/* Projects */}
						<div>
							<h3 className="text-lg font-medium tracking-tight mb-4">
								Projects
							</h3>
							<div className="space-y-6">
								{resumeData.fractalAIAccelerator.projects.map(
									(project, index) => (
										<div key={index} className="surface p-4 print-project">
											<h4 className="text-base font-medium tracking-tight mb-1">
												<Link
													href={project.url}
													target="_blank"
													rel="noopener noreferrer"
													className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 hover:underline hover:underline-offset-2 cursor-pointer"
												>
													{project.title} ↗
												</Link>
											</h4>
											<p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
												{project.technologies}
											</p>
											<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
												{project.description}
											</p>
										</div>
									)
								)}
							</div>
						</div>

						{/* Internship Experience */}
						<div>
							<h3 className="text-lg font-medium tracking-tight mb-4">
								Internship Experience
							</h3>
							<div className="space-y-4">
								{resumeData.fractalAIAccelerator.internshipExperience.map(
									(internship, index) => (
										<div key={index}>
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
												<h4 className="text-base font-medium tracking-tight mb-1 sm:mb-0">
													{internship.company}
												</h4>
												<span className="text-sm text-neutral-500 dark:text-neutral-400">
													{internship.dates}
												</span>
											</div>
											{internship.tldr && (
												<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 italic">
													{internship.tldr}
												</p>
											)}
											<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
												{internship.responsibilities.map(
													(responsibility, respIndex) => (
														<li key={respIndex}>{responsibility}</li>
													)
												)}
											</ul>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</section>

				<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300 mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">
						Professional Experience
					</h2>
					<div className="space-y-2">
						{resumeData.professionalExperience.map((job, index) => (
							<div key={index} className="job-details-container">
								<details className="group relative job-details">
									<summary className="cursor-pointer list-none relative pl-8 py-1 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
										<DisclosureTriangle />
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full pr-2">
											<span className="text-lg font-medium tracking-tight mb-1 sm:mb-0 hover:animate-pulse">
												{job.title}
											</span>
											<span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
												{job.dates}
											</span>
										</div>
									</summary>
									<div className="p-4 pt-3">
										<ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
											{job.responsibilities.map((responsibility, respIndex) => (
												<li key={respIndex}>{responsibility}</li>
											))}
										</ul>
									</div>
								</details>
							</div>
						))}
					</div>
				</section>

				<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300 mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">
						Education
					</h2>
					<div className="space-y-6">
						{resumeData.education.map((edu, index) => (
							<div
								key={index}
								className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between"
							>
								<h3 className="text-lg font-medium tracking-tight mb-1 sm:mb-0">
									{edu.institution}
								</h3>
								<p className="text-sm text-neutral-500 dark:text-neutral-400">
									{edu.degree} ({edu.dates})
								</p>
							</div>
						))}
					</div>
				</section>
			</div>

			{/* Contact Sidebar */}
			<aside className="lg:col-start-2 lg:row-start-1 animate-in slide-in-from-bottom-4 duration-1000 delay-100 print-hide">
				<div className="lg:sticky lg:top-10 space-y-6 text-center lg:text-left">
					{/* PDF Download Button */}
					<div className="hidden lg:block lg:sticky lg:top-0 lg:pt-8 lg:bg-background lg:z-10">
						<PDFDownloadButton onDownload={generatePDF} className="w-full" />
					</div>

					<div className="hidden lg:block">
						<p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
							Contact
						</p>
						<ContactLinks layout="vertical" />
					</div>
				</div>
			</aside>
		</div>
	);
}
