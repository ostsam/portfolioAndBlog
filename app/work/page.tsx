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
} from "react-icons/si";
import Link from "next/link";
import { PDFDownloadButton } from "./components/PDFDownloadButton";
import { BrandBadge } from "./components/BrandBadge";
import { ObfuscatedEmail } from "./components/ObfuscatedEmail";
import { generatePDF } from "./utils/pdf-generator";
import { resumeData } from "./data/resume-data";

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
						<span>🌐 {resumeData.personalInfo.portfolio}</span>
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
					<div className="lg:hidden mt-6 text-center print-hide">
						{/* Mobile PDF Download Button */}
						<div className="mb-6">
							<PDFDownloadButton onDownload={generatePDF} />
						</div>

						<p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
							Contact
						</p>
						<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
							<ObfuscatedEmail />
							<Link
								href={`https://${resumeData.personalInfo.portfolio}`}
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
							>
								🌐 Malan
							</Link>
							<Link
								href={`https://${resumeData.personalInfo.github}`}
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
							>
								💻 GitHub
							</Link>
							<Link
								href={`https://${resumeData.personalInfo.linkedin}`}
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
							>
								🔗 LinkedIn
							</Link>
						</div>
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
													className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 hover:underline hover:underline-offset-2 cursor-pointer"
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
											<div className="flex items-center justify-between mb-2">
												<h4 className="text-base font-medium tracking-tight">
													{internship.company}
												</h4>
												<span className="text-sm text-neutral-500 dark:text-neutral-400">
													{internship.dates}
												</span>
											</div>
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
					<div className="space-y-6">
						{resumeData.professionalExperience.map((job, index) => (
							<div key={index}>
								<details>
									<summary className="cursor-pointer list-none relative pl-5 flex items-center justify-between before:content-['▶'] before:absolute before:left-0 before:text-sm before:transition-transform before:duration-200 [details[open]_&]:before:rotate-90">
										<span className="text-lg font-medium tracking-tight">
											{job.title}
										</span>
										<span className="text-sm text-neutral-500 dark:text-neutral-400">
											{job.dates}
										</span>
									</summary>
									<ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300 mt-2">
										{job.responsibilities.map((responsibility, respIndex) => (
											<li key={respIndex}>{responsibility}</li>
										))}
									</ul>
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
								className="flex flex-col md:flex-row md:items-baseline md:justify-between"
							>
								<h3 className="text-lg font-medium tracking-tight">
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
				<div className="lg:sticky lg:top-8 space-y-6 text-center lg:text-left">
					{/* PDF Download Button */}
					<div className="hidden lg:block">
						<PDFDownloadButton onDownload={generatePDF} className="w-full" />
					</div>

					<div className="hidden lg:block">
						<p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
							Contact
						</p>
						<div className="space-y-2 text-med">
							<p className="text-neutral-600 dark:text-neutral-300 mb-1.5">
								📍 {resumeData.personalInfo.location}
							</p>
							<ObfuscatedEmail />
							<Link
								href={`https://${resumeData.personalInfo.portfolio}`}
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer block text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
							>
								🌐 Malan
							</Link>
							<Link
								href={`https://${resumeData.personalInfo.github}`}
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer block text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
							>
								💻 GitHub
							</Link>
							<Link
								href={`https://${resumeData.personalInfo.linkedin}`}
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer block text-neutral-600 dark:text-neutral-300 hover:text-foreground active:text-foreground transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
							>
								🔗 LinkedIn
							</Link>
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
}
