// Centralized resume data that can be used by both the CV page and PDF generator
export const resumeData = {
	personalInfo: {
		name: "Sam Osterfeld",
		location: "New York, NY",
		email: "ost.sam@gmail.com",
		portfolio: "https://www.malan.chat",
		github: "github.com/ostsam",
		linkedin: "linkedin.com/in/sam-osterfeld",
	},

	professionalSummary:
		"I am a full-stack developer with a humanities background who transitioned into tech to build impactful solutions to real-world problems. I am candid about gaps, relentless about closing them, and biased toward deployment.",

	technicalSkills: {
		languagesFrameworks: [
			{ name: "TypeScript", icon: "SiTypescript", outlineOnDark: true },
			{ name: "React", icon: "SiReact", outlineOnDark: true },
			{ name: "Tailwind CSS", icon: "SiTailwindcss", outlineOnDark: true },
			{ name: "Next.js", icon: "SiNextdotjs", outlineOnDark: true },
			{ name: "JavaScript", icon: "SiJavascript", outlineOnDark: true },
			{ name: "HTML5", icon: "SiHtml5", outlineOnDark: true },
			{ name: "CSS3", icon: "SiCss3", outlineOnDark: true },
			{ name: "PostgreSQL", icon: "SiPostgresql", outlineOnDark: true },
		],
		toolsPlatforms: [
			{ name: "GitHub", icon: "SiGithub", outlineOnDark: true },
			{ name: "Graphite", icon: "SiGraphite", outlineOnDark: true },
			{ name: "OpenAI", icon: "SiOpenai", outlineOnDark: true },
			{ name: "Google AI Studio", icon: "SiGooglegemini", outlineOnDark: true },
			{ name: "Deepgram", icon: "SiDeepgram", outlineOnDark: true },
			{ name: "Vercel", icon: "SiVercel", outlineOnDark: true },
			{ name: "Node.js", icon: "SiNodedotjs", outlineOnDark: true },
			{ name: "Supabase", icon: "SiSupabase", outlineOnDark: true },
			{
				name: "Adobe Photoshop",
				icon: "SiAdobephotoshop",
				outlineOnDark: true,
			},
			{
				name: "Adobe Lightroom",
				icon: "SiAdobelightroom",
				outlineOnDark: true,
			},
		],
		// Keep the string versions for PDF generation
		languagesFrameworksText: [
			"TypeScript",
			"React",
			"Tailwind CSS",
			"Next.js",
			"JavaScript",
			"HTML5",
			"CSS3",
			"PostgreSQL",
		],
		toolsPlatformsText: [
			"GitHub",
			"Graphite",
			"OpenAI",
			"Google AI Studio",
			"Deepgram",
			"Vercel",
			"Node.js",
			"Supabase",
			"Adobe Photoshop",
			"Adobe Lightroom",
		],
		coreCompetencies:
			"Full stack development, AI integration, UI/UX design, responsive design, Agile workflows",
		languages:
			"English (native), Russian (native), Arabic (advanced), Hebrew (advanced), French (advanced), German (advanced), Spanish (working knowledge)",
	},

	fractalAIAccelerator: {
		title: "Fractal AI Accelerator",
		dates: "Jun 2025 – Aug 2025",
		overview: {
			description:
				"The Fractal AI Accelerator is an intensive 70 hour per week program focused on AI-driven web development and deployment. Comprehensive training in modern full-stack technologies, AI integration, and rapid prototyping methodologies.",
			links: {
				website: "https://fractalbootcamp.com/",
				curriculum: "https://github.com/fractal-bootcamp/bootcamp-monorepo",
			},
		},
		projects: [
			{
				title: "Malan",
				url: "https://www.malan.chat",
				technologies: "TypeScript, Next.js, Tailwind, SQL, OpenAI API, Vercel",
				description:
					"Malan is a speaking-first AI-powered language learning suite which empowers users to learn 57 different languages. Where most language learning apps on the market today are gamified tapping games, Malan throws the user right into the language learning experience by expecting them to speak from the first conversation. Users are helpfully aided by the built in dictionary and the latest FSRS algorithm to maximize vocabulary retention.",
			},
		],
		internshipExperience: [
			{
				company: "SupplyCo AI",
				dates: "July 2025",
				responsibilities: [
					"Implemented a self-onboarding flow for new users.",
					"Added trial mode to the platform.",
					"Added email drip campaigns with cron jobs based on leads generated from the platform.",
					"Mobile website optimization.",
				],
			},
			{
				company: "Shrinked.ai",
				dates: "Ongoing",
				responsibilities: ["TBD :)"],
			},
		],
	},

	professionalExperience: [
		{
			title: "Substitute Teacher – NYCDOE",
			dates: "Dec 2022 – May 2025",
			responsibilities: [
				"Instructed classes of up to 30 students, adapting complex material for diverse learners.",
				"Integrated online tools to facilitate interactive lessons.",
			],
		},
		{
			title: "Intake Assistant – Crocus Home Care",
			dates: "Aug 2020 – Dec 2022",
			responsibilities: [
				"Digitized and streamlined client intake processes, reducing data entry errors by 15% and accelerating onboarding timelines.",
				"Coordinated with cross-functional teams to ensure data accuracy, compliance, and client satisfaction.",
			],
		},
		{
			title: "Research Assistant – Brooklyn Institute for Social Research",
			dates: "Oct 2018 – Apr 2020",
			responsibilities: [
				"Managed multi-year research project analyzing primary source datasets in Arabic and English; synthesized findings into actionable insights for publication.",
				"Proofread and optimized content for clarity and accuracy.",
			],
		},
		{
			title: "Arabic Language Teaching Assistant – Columbia University",
			dates: "Aug 2017 – May 2019",
			responsibilities: [
				"Graded the homework of students studying Arabic on a daily basis.",
				"Offered personalized feedback during office hours.",
			],
		},
		{
			title: "Volunteer Content & Social Media Manager – Are You Syrious?",
			dates: "Mar 2016 – Jun 2019",
			responsibilities: [
				"Automated content workflows and managed social media campaigns, scaling Facebook audience from zero to 40K+ organically.",
				"Led cross-border volunteer team, providing training and quality control for digital publications, reducing revision cycles by 30%.",
				"Wrote and edited grant proposals that secured funding for on-the-ground operations.",
			],
		},
	],

	education: [
		{
			institution: "Columbia University, New York",
			dates: "2017-2020",
			degree: "M.A., Middle Eastern, South Asian, and African Studies",
		},
		{
			institution: "CUNY Baccalaureate, New York",
			dates: "2013-2016",
			degree: "B.A., Middle Eastern Studies & Jewish Studies",
		},
	],

	additionalInformation: [],
};
