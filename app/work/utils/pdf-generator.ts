import jsPDF from "jspdf";
import { resumeData } from "../data/resume-data";

// Professional PDF generation using centralized resume data
export async function generatePDF() {
	try {
		// Create elegant loading indicator
		const loadingOverlay = document.createElement("div");
		loadingOverlay.className =
			"fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center";
		loadingOverlay.innerHTML = `
			<div class="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-2xl border border-neutral-200 dark:border-neutral-800">
				<div class="flex flex-col items-center gap-4">
					<div class="relative">
						<div class="animate-spin w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full"></div>
						<div class="absolute inset-0 animate-ping w-8 h-8 border border-blue-300 rounded-full opacity-20"></div>
					</div>
					<div class="text-center">
						<h3 class="text-neutral-900 dark:text-white font-semibold text-lg mb-1">Crafting Professional PDF</h3>
						<p class="text-neutral-600 dark:text-neutral-400 text-sm">Extracting content and optimizing layout...</p>
					</div>
				</div>
			</div>
		`;
		document.body.appendChild(loadingOverlay);

		// Initialize PDF with premium settings
		const pdf = new jsPDF({
			orientation: "portrait",
			unit: "pt",
			format: "a4",
			compress: true,
		});

		// Page dimensions and refined margins for better balance
		const pageWidth = 595.28;
		const pageHeight = 841.89;
		const margin = 50;
		const contentWidth = pageWidth - margin * 2;
		const leftColumn = margin;
		const rightColumn = pageWidth - margin;

		let currentY = margin + 30;
		const lineHeight = 15;
		const sectionSpacing = 20;
		const subsectionSpacing = 14;

		// Clean, modern typography system with excellent readability
		const fonts = {
			header: { size: 26, weight: "bold" },
			subtitle: { size: 11, weight: "normal" },
			sectionTitle: { size: 14, weight: "bold" },
			subsectionTitle: { size: 12, weight: "bold" },
			jobTitle: { size: 11.5, weight: "bold" },
			body: { size: 11, weight: "normal" },
			small: { size: 10, weight: "normal" },
			contact: { size: 10, weight: "normal" },
		};

		// Minimal, sophisticated color palette
		const colors = {
			primary: "#000000", // Pure black
			secondary: "#2d2d2d", // Dark gray
			accent: "#0052cc", // Clean blue
			muted: "#666666", // Medium gray
			light: "#999999", // Light gray
			veryLight: "#f5f5f5", // Background
		};

		// Helper functions
		const setFont = (type: keyof typeof fonts) => {
			const font = fonts[type];
			pdf.setFontSize(font.size);
			pdf.setFont("helvetica", font.weight);
		};

		const checkPageBreak = (neededSpace: number = 40) => {
			if (currentY > pageHeight - neededSpace) {
				pdf.addPage();
				currentY = margin + 30;
				return true;
			}
			return false;
		};

		const addText = (text: string, x: number, y: number, options: any = {}) => {
			if (options.maxWidth) {
				const lines = pdf.splitTextToSize(text, options.maxWidth);
				if (Array.isArray(lines)) {
					// Check if we need a page break for multiple lines
					if (y + lines.length * lineHeight > pageHeight - 40) {
						pdf.addPage();
						y = margin + 30;
						currentY = y;
					}
					lines.forEach((line: string, index: number) => {
						pdf.text(line, x, y + index * lineHeight);
					});
					return y + lines.length * lineHeight + 2;
				}
			}
			// Check for single line
			if (y + lineHeight > pageHeight - 40) {
				pdf.addPage();
				y = margin + 30;
				currentY = y;
			}
			pdf.text(text, x, y);
			return y + lineHeight;
		};

		const addSection = (title: string) => {
			if (currentY > pageHeight - 80) {
				pdf.addPage();
				currentY = margin + 30;
			}

			currentY += sectionSpacing;

			// Clean, minimal section design
			setFont("sectionTitle");
			pdf.setTextColor(colors.primary);
			pdf.text(title.toUpperCase(), margin, currentY);

			// Simple, elegant underline
			pdf.setDrawColor(colors.accent);
			pdf.setLineWidth(1);
			const titleWidth = pdf.getTextWidth(title.toUpperCase());
			pdf.line(margin, currentY + 3, margin + titleWidth + 10, currentY + 3);

			currentY += 18;
		};

		const addBulletPoint = (text: string) => {
			// Check if we need a page break before adding bullet point
			checkPageBreak(20);

			setFont("body");

			// Simple bullet
			pdf.setTextColor(colors.accent);
			pdf.text("•", margin + 8, currentY);

			// Clean bullet text
			pdf.setTextColor(colors.secondary);
			const textY = addText(text, margin + 16, currentY, {
				maxWidth: contentWidth - 16,
			});
			currentY = textY + 2;
		};

		// Clean, modern header
		setFont("header");
		pdf.setTextColor(colors.primary);
		const nameWidth = pdf.getTextWidth("SAM OSTERFELD");

		// Centered name
		currentY = addText("SAM OSTERFELD", (pageWidth - nameWidth) / 2, currentY);

		// Clean line under name
		pdf.setDrawColor(colors.accent);
		pdf.setLineWidth(0.5);
		pdf.line(margin, currentY + 2, pageWidth - margin, currentY + 2);

		currentY += 14;

		// Clean contact information
		setFont("contact");
		pdf.setTextColor(colors.muted);

		const contactItems = [
			resumeData.personalInfo.location,
			resumeData.personalInfo.email,
			resumeData.personalInfo.github,
			resumeData.personalInfo.linkedin,
		];

		// Single line contact layout
		const contactLine = contactItems.join("  •  ");
		const contactWidth = pdf.getTextWidth(contactLine);
		currentY = addText(contactLine, (pageWidth - contactWidth) / 2, currentY);
		currentY += 20;

		// Professional Summary
		addSection("Professional Summary");
		setFont("body");
		pdf.setTextColor(colors.secondary);
		currentY = addText(resumeData.professionalSummary, margin, currentY, {
			maxWidth: contentWidth,
		});

		// Technical Skills
		addSection("Technical Skills");

		// Languages & Frameworks
		setFont("subsectionTitle");
		pdf.setTextColor(colors.primary);
		currentY = addText("Languages & Frameworks", margin + 8, currentY);
		currentY += 8;

		setFont("body");
		pdf.setTextColor(colors.secondary);
		currentY = addText(
			resumeData.technicalSkills.languagesFrameworksText.join(" • "),
			margin,
			currentY,
			{ maxWidth: contentWidth }
		);
		currentY += 10;

		// Tools & Platforms
		setFont("subsectionTitle");
		pdf.setTextColor(colors.primary);
		currentY = addText("Tools & Platforms", margin + 8, currentY);
		currentY += 8;

		setFont("body");
		pdf.setTextColor(colors.secondary);
		currentY = addText(
			resumeData.technicalSkills.toolsPlatformsText.join(" • "),
			margin,
			currentY,
			{ maxWidth: contentWidth }
		);
		currentY += 10;

		// Core Competencies
		setFont("subsectionTitle");
		pdf.setTextColor(colors.primary);
		currentY = addText("Core Competencies", margin + 8, currentY);
		currentY += 8;

		setFont("body");
		pdf.setTextColor(colors.secondary);
		currentY = addText(
			resumeData.technicalSkills.coreCompetencies,
			margin,
			currentY,
			{ maxWidth: contentWidth }
		);
		currentY += 10;

		// Languages
		setFont("subsectionTitle");
		pdf.setTextColor(colors.primary);
		currentY = addText("Languages", margin + 8, currentY);
		currentY += 8;

		setFont("body");
		pdf.setTextColor(colors.secondary);
		currentY = addText(resumeData.technicalSkills.languages, margin, currentY, {
			maxWidth: contentWidth,
		});

		// Fractal AI Accelerator
		addSection("Fractal AI Accelerator");

		const addJobHeader = (
			title: string,
			dates: string,
			isFirst: boolean = false
		) => {
			// Check if we need a page break before adding job header - use more space to keep job entries together
			checkPageBreak(80);

			// Add extra spacing between different job entries (but not for the first one)
			if (!isFirst) {
				currentY += 8;
			}

			// Clean job header
			setFont("jobTitle");
			pdf.setTextColor(colors.primary);
			pdf.text(title, margin, currentY);

			// Date on the right
			setFont("small");
			pdf.setTextColor(colors.muted);
			const dateWidth = pdf.getTextWidth(dates);
			pdf.text(dates, pageWidth - margin - dateWidth, currentY);

			currentY += 18;
		};

		addJobHeader("Overview", resumeData.fractalAIAccelerator.dates);

		checkPageBreak(60);
		setFont("body");
		pdf.setTextColor(colors.secondary);
		currentY = addText(
			resumeData.fractalAIAccelerator.overview.description,
			margin,
			currentY,
			{
				maxWidth: contentWidth,
			}
		);
		currentY += 10;

		// Fractal Projects
		checkPageBreak(40);
		setFont("subsectionTitle");
		pdf.setTextColor(colors.primary);
		currentY = addText("Projects", margin + 8, currentY);
		currentY += 10;

		const malanProject = resumeData.fractalAIAccelerator.projects[0];
		setFont("jobTitle");
		pdf.setTextColor(colors.primary);
		currentY = addText(malanProject.title, margin + 8, currentY);
		currentY += 8;
		setFont("small");
		pdf.setTextColor(colors.muted);
		currentY = addText(
			`${malanProject.technologies} • ${malanProject.url.replace("https://", "")}`,
			margin + 8,
			currentY
		);
		currentY += 10;
		checkPageBreak(80);
		setFont("body");
		pdf.setTextColor(colors.secondary);
		currentY = addText(malanProject.description, margin + 8, currentY, {
			maxWidth: contentWidth - 8,
		});
		currentY += 12;

		// Internship Experience
		checkPageBreak(40);
		setFont("subsectionTitle");
		pdf.setTextColor(colors.primary);
		currentY = addText("Internship Experience", margin + 8, currentY);
		currentY += 10;

		// Generate internship experience from data
		resumeData.fractalAIAccelerator.internshipExperience.forEach(
			(internship, index) => {
				addJobHeader(internship.company, internship.dates, index === 0);

				// Add tl;dr if available
				if (internship.tldr) {
					setFont("small");
					pdf.setTextColor(colors.muted);
					currentY = addText(internship.tldr, margin + 8, currentY, {
						maxWidth: contentWidth - 8,
					});
					currentY += 8;
				}

				internship.responsibilities.forEach((responsibility) => {
					addBulletPoint(responsibility);
				});
			}
		);

		// Professional Experience
		addSection("Professional Experience");

		// Generate professional experience from data
		resumeData.professionalExperience.forEach((job, index) => {
			addJobHeader(job.title, job.dates, index === 0);
			job.responsibilities.forEach((responsibility) => {
				addBulletPoint(responsibility);
			});
		});

		// Education
		addSection("Education");

		// Generate education from data
		resumeData.education.forEach((edu, index) => {
			addJobHeader(edu.institution, edu.dates, index === 0);
			setFont("body");
			pdf.setTextColor(colors.secondary);
			currentY = addText(edu.degree, margin, currentY);
		});

		// Remove loading overlay
		document.body.removeChild(loadingOverlay);

		// Generate filename and download
		const filename = `Osterfeld_Sam_Resume.pdf`;
		pdf.save(filename);

		// Success notification
		const successNotification = document.createElement("div");
		successNotification.className =
			"fixed top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-in slide-in-from-top duration-500 border border-green-400/20";
		successNotification.innerHTML = `
			<div class="flex items-center gap-3">
				<div class="flex-shrink-0">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
					</svg>
				</div>
				<div>
					<h4 class="font-semibold">PDF Downloaded Successfully!</h4>
					<p class="text-green-100 text-sm">${filename}</p>
				</div>
			</div>
		`;
		document.body.appendChild(successNotification);
		setTimeout(() => {
			successNotification.style.transform = "translateX(100%)";
			setTimeout(() => document.body.removeChild(successNotification), 300);
		}, 4000);
	} catch (error) {
		console.error("PDF generation failed:", error);

		// Error notification
		const errorNotification = document.createElement("div");
		errorNotification.className =
			"fixed top-6 right-6 bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 border border-red-400/20";
		errorNotification.innerHTML = `
			<div class="flex items-center gap-3">
				<div class="flex-shrink-0">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
					</svg>
				</div>
				<div>
					<h4 class="font-semibold">Generation Failed</h4>
					<p class="text-red-100 text-sm">Please try again or contact support</p>
				</div>
			</div>
		`;
		document.body.appendChild(errorNotification);
		setTimeout(() => document.body.removeChild(errorNotification), 5000);
	}
}
