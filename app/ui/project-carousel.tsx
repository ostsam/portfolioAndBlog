"use client";
import { Carousel } from "app/components/carousel";
export function CarouselDemo() {
	const slideData = [
		{
			title: "Malan Language Tutor",
			buttonText: "Visit Project",
			link: "https://malan.vercel.app/",
			src: "/Malan-Slide.png",
		},
		{
			title: "Pet Rock Simulator",
			buttonText: "Visit Project",
			link: "https://pet-rock-simulator.vercel.app/",
			src: "/Rock-Slide.png",
		},
		{
			title: "Tic-Tac-Toe",
			buttonText: "Visit Project",
			link: "https://tictactoe-lime-sigma.vercel.app",
			src: "/Tictactoe-Slide.png",
		},
	];
	return (
		<div className="flex flex-col items-center justify-center py-10">
			<h1 className="text-5xl hover:animate-pulse font-semibold tracking-tighter">
				What I've shipped
			</h1>
			<div className="relative overflow-hidden mv-20 pt-5 pb-14 px-10">
				<Carousel slides={slideData} />
			</div>
		</div>
	);
}
