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
		"I am a full-stack engineer with a humanities background who transitioned into tech to build impactful solutions to real-world problems. I've built production-scale applications with 1000+ hours of intensive development experience. Architected and deployed Malan, a 100K-line language learning platform serving 500+ users across 57 languages with 8GB of optimized data. Reduced critical system latencies by 10x through database optimization and eliminated manual bottlenecks that blocked revenue growth.",

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
				"Intensive 70-hour/week program (840+ hours total) building production applications with modern full-stack technologies and AI integration.",
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
					"Architected and deployed production-scale language learning platform (100K lines of code) serving 500+ active users across 57 languages. Processed 7,500+ AI-powered conversations with sub-second latency through Opus audio optimization. Built 8GB PostgreSQL database with optimized vocabulary storage and implemented FSRS spaced repetition algorithm for retention. Reduced API costs through prompt optimization while maintaining conversation quality.",
			},
		],
		internshipExperience: [
			{
				company: "SupplyCo AI",
				dates: "Jul 2025",
				responsibilities: [
					"Eliminated founder bottleneck by implementing self-service onboarding flow, directly enabling revenue growth (previously required manual account creation for each customer).",
					"Reduced dashboard load times by 10x (30 seconds → 3 seconds) through PostgreSQL index optimization, fixing critical performance bug.",
					"Transformed desktop-only platform into mobile-responsive application, capturing previously inaccessible web traffic.",
					"Built automated email drip campaigns with cron jobs for lead nurturing, replacing manual follow-ups.",
				],
			},
			{
				company: "Shrinked.ai",
				dates: "Ongoing",
				responsibilities: [
					"Refining the data enrichment system for the context management platform, allowing for the ingestion of many different kinds of data for the purposes of creating an AI platform free of hallucinations.",
					"Creating a chess data ingestion system as a proof of concept for the context management platform, allowing users to query the database for higher-level chess analysis and reports derived therefrom.",
				],
			},
		],
	},

	professionalExperience: [
		{
			title: "Teacher – NYCDOE",
			dates: "Dec 2022 – May 2025",
			responsibilities: [
				"Taught social studies and science to classes of 30 students while completing 200+ hours of self-directed software development (EloquentJS, Full Stack Open curriculum).",
				"Integrated digital tools and online platforms to facilitate interactive lessons, developing technical skills that directly informed later software development.",
			],
		},
		{
			title: "Intake Assistant – Crocus Home Care",
			dates: "Aug 2020 – Dec 2022",
			responsibilities: [
				"Reduced data entry errors by 15% through process digitization and workflow optimization, directly improving client onboarding efficiency.",
				"Coordinated cross-functional teams across 3 departments to ensure data accuracy and compliance, managing client satisfaction for 200 clients.",
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
				"Provided personalized feedback and instruction to 60+ students studying Arabic, developing systematic approaches to language instruction.",
				"Graded and evaluated daily homework assignments, maintaining consistent quality standards across multiple proficiency levels.",
			],
		},
		{
			title: "Volunteer Content & Social Media Manager – Are You Syrious?",
			dates: "Mar 2016 – Jun 2019",
			responsibilities: [
				"Scaled Facebook audience from zero to 40,000+ followers organically through content strategy and community engagement.",
				"Led cross-border volunteer team, providing training and quality control for digital publications, reducing revision cycles by 30%.",
				"Secured $20,000+ in grant funding through proposal writing and editing, directly supporting on-the-ground humanitarian operations in Croatia.",
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
