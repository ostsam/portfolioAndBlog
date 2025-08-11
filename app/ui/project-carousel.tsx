"use client";
import { Carousel } from "app/components/carousel";

export function CarouselDemo() {
	const slideData = [
		{
			title: "Malan Language Tutor",
			description: "AI-powered conversation practice for language learners",
			buttonText: "Live Demo",
			link: "https://malan.vercel.app/",
			src: "/Malan-Slide.png",
			tech: ["TypeScript", "Next.js", "Tailwind", "OpenAI API"],
		},
		{
			title: "Pet Rock Simulator",
			description: "Keep a pet rock without any of the hassle.",
			buttonText: "Live Demo",
			link: "https://pet-rock-simulator.vercel.app/",
			src: "/Rock-Slide.png",
			tech: ["Javascript", "Three.js"],
		},
		{
			title: "Tic-Tac-Toe",
			description: "Classic game with clean UI and smart AI opponent",
			buttonText: "Live Demo",
			link: "https://tictactoe-lime-sigma.vercel.app",
			src: "/Tictactoe-Slide.png",
			tech: ["Typescript", "Minimax Algorithm", "Tailwind"],
		},
	];

	return (
		<div className="flex flex-col items-center justify-center py-10">
			<div className="text-center mb-12">
				<p className="kicker mb-3">Recent Work</p>
				<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
					What I've shipped
				</h2>
				<p className="text-neutral-600 dark:text-neutral-400 max-w-[50ch] mx-auto">
					A few projects from my coding journey, each teaching me something new
					about building for the web.
				</p>
			</div>
			<div className="relative overflow-hidden pt-5 pb-14 px-10">
				<Carousel slides={slideData} />
			</div>
		</div>
	);
}
