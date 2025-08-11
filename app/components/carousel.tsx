"use client";
import { useState, useRef, useId, useEffect } from "react";
import Image from "next/image";

interface SlideData {
	title: string;
	description?: string;
	buttonText: string;
	link?: string;
	src: string;
	tech?: string[];
	metric?: string;
	github?: string;
}

interface SlideProps {
	slide: SlideData;
	index: number;
	current: number;
	handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
	const slideRef = useRef<HTMLLIElement>(null);

	const xRef = useRef(0);
	const yRef = useRef(0);
	const frameRef = useRef<number | null>(null);

	useEffect(() => {
		const animate = () => {
			if (!slideRef.current) return;

			const x = xRef.current;
			const y = yRef.current;

			slideRef.current.style.setProperty("--x", `${x}px`);
			slideRef.current.style.setProperty("--y", `${y}px`);

			frameRef.current = requestAnimationFrame(animate);
		};

		frameRef.current = requestAnimationFrame(animate);

		return () => {
			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	const handleMouseMove = (event: React.MouseEvent) => {
		const el = slideRef.current;
		if (!el) return;

		const r = el.getBoundingClientRect();
		xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
		yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
	};

	const handleMouseLeave = () => {
		xRef.current = 0;
		yRef.current = 0;
	};

	const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.currentTarget.style.opacity = "1";
	};

	const { src, buttonText, title, link, description, tech, metric, github } =
		slide;
	return (
		<li
			ref={slideRef}
			className="[perspective:1200px] [transform-style:preserve-3d] flex flex-1 flex-col items-center justify-start relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
			role="listitem"
			tabIndex={current === index ? 0 : -1}
			aria-selected={current === index}
			aria-label={`Project ${index + 1} of ${3}: ${title}`}
			onClick={() => handleSlideClick(index)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					handleSlideClick(index);
				}
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				transform:
					current !== index
						? "scale(0.98) rotateX(8deg)"
						: "scale(1) rotateX(0deg)",
				transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
				transformOrigin: "bottom",
			}}
		>
			<div
				className="absolute top-0 left-0 w-full h-full bg-neutral-900 rounded-xl overflow-hidden transition-all duration-300 ease-out shadow-2xl ring-1 ring-white/10"
				style={{
					transform:
						current === index
							? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
							: "none",
				}}
			>
				<Image
					className="absolute inset-0 w-[120%] h-[120%] object-cover transition-all duration-300 ease-out"
					style={{
						opacity: current === index ? 1 : 0.6,
						transform: current === index ? "scale(1.02)" : "scale(1)",
					}}
					alt={`Screenshot of ${title} project showing the user interface`}
					src={src}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
					priority={index === 0}
					quality={90}
					placeholder="blur"
					blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
					onLoad={imageLoaded}
				/>
				{current === index && (
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500" />
				)}
			</div>

			<article
				className={`relative pt-[2vmin] px-[4vmin] pb-[4vmin] transition-opacity duration-1000 ease-in-out ${
					current === index ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
			>
				<div className="text-center space-y-4">
					{tech && (
						<div className="flex flex-wrap justify-center gap-2">
							{tech.map((item, i) => (
								<span
									key={i}
									className="px-3 py-1.5 text-xs font-medium text-white bg-black/60 rounded-full backdrop-blur-md border border-black/20 shadow-lg"
								>
									{item}
								</span>
							))}
						</div>
					)}
					<div className="space-y-2">
						<h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight">
							{title}
						</h3>
						{description && (
							<p className="text-sm text-white/90 max-w-[40ch] mx-auto leading-relaxed">
								{description}
							</p>
						)}
					</div>
					<div className="pt-1 space-y-4">
						{metric && (
							<p className="text-xs text-white/70 font-medium tracking-wide uppercase">
								{metric}
							</p>
						)}
						{link && (
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-3 text-sm font-semibold bg-white text-neutral-900 rounded-full hover:bg-white/95 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-105 shadow-lg"
							>
								{buttonText}
								<svg
									className="ml-2 w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						)}
					</div>
				</div>
			</article>
		</li>
	);
};

interface CarouselControlProps {
	type: string;
	title: string;
	handleClick: () => void;
}

const CarouselControl = ({
	type,
	title,
	handleClick,
}: CarouselControlProps) => {
	return (
		<button
			className={`w-10 h-10 z-100 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
				type === "previous" ? "rotate-180" : ""
			}`}
			title={title}
			aria-label={title}
			onClick={handleClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-neutral-600 dark:text-neutral-200"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M5 12l14 0" />
				<path d="M15 16l4 -4" />
				<path d="M15 8l4 4" />
			</svg>
		</button>
	);
};

interface CarouselProps {
	slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
	const [current, setCurrent] = useState(0);

	const handlePreviousClick = () => {
		const previous = current - 1;
		setCurrent(previous < 0 ? slides.length - 1 : previous);
	};

	const handleNextClick = () => {
		const next = current + 1;
		setCurrent(next === slides.length ? 0 : next);
	};

	const handleSlideClick = (index: number) => {
		if (current !== index) {
			setCurrent(index);
		}
	};

	const id = useId();

	return (
		<div
			className="relative w-[70vmin] h-[70vmin] mx-auto"
			role="region"
			aria-roledescription="carousel"
			aria-live="polite"
			aria-label="Project showcase"
		>
			<ul
				role="list"
				className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
				style={{
					transform: `translateX(-${current * (100 / slides.length)}%)`,
				}}
			>
				{slides.map((slide, index) => (
					<Slide
						key={index}
						slide={slide}
						index={index}
						current={current}
						handleSlideClick={handleSlideClick}
					/>
				))}
			</ul>

			<div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
				<CarouselControl
					type="previous"
					title="Go to previous slide"
					handleClick={handlePreviousClick}
				/>

				<CarouselControl
					type="next"
					title="Go to next slide"
					handleClick={handleNextClick}
				/>
			</div>
		</div>
	);
}
