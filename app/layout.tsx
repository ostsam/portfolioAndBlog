import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { baseUrl } from "./sitemap";
import ClientLayoutWrapper from "./components/client-layout-wrapper";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Sam Osterfeld - Developer & Writer",
		template: "%s | Sam Osterfeld",
	},
	description:
		"Full-stack developer learning to build things that work. Currently at Fractal AI Accelerator, sharing my coding journey through projects and writing.",
	keywords: [
		"developer",
		"full-stack",
		"fullstack",
		"frontend",
		"backend",
		"front end",
		"back end",
		"javascript",
		"typescript",
		"react",
		"nextjs",
		"ai",
		"fractal",
	],
	authors: [{ name: "Sam Osterfeld" }],
	creator: "Sam Osterfeld",
	openGraph: {
		title: "Sam Osterfeld - Developer & Writer",
		description:
			"Full-stack developer learning to build things that work. Currently at Fractal AI Accelerator.",
		url: baseUrl,
		siteName: "Sam Osterfeld",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/og?title=Sam%20Osterfeld%20-%20Developer%20%26%20Writer",
				width: 1200,
				height: 630,
				alt: "Sam Osterfeld - Developer & Writer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sam Osterfeld - Developer & Writer",
		description: "Full-stack developer learning to build things that work.",
		images: ["/og?title=Sam%20Osterfeld%20-%20Developer%20%26%20Writer"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: process.env.GOOGLE_SITE_VERIFICATION,
	},
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cx(
				"text-black bg-white dark:text-white dark:bg-black",
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link rel="dns-prefetch" href="https://vercel.com" />
				<meta
					name="theme-color"
					content="#ffffff"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="#000000"
					media="(prefers-color-scheme: dark)"
				/>
				<meta name="color-scheme" content="light dark" />
			</head>
			<body className="antialiased min-h-screen">
				<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
			</body>
		</html>
	);
}
