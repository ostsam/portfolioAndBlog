import { BlogPosts } from "app/components/posts";
import { CarouselDemo } from "./ui/project-carousel";

export default function Page() {
	return (
		<>
			<section className="animate-in fade-in duration-1000">
				<p className="kicker mb-3">Portfolio</p>
				<h1 className="mb-4 text-4xl md:text-5xl font-semibold tracking-tighter title">
					Code, words, and other experiments
				</h1>
				<div className="mb-2 max-w-[68ch] text-neutral-700 dark:text-neutral-300 leading-relaxed">
					<p>
						My name is Sam, and I'm just a wordcel living in the shape rotators'
						world, learning to build things that work. Below are recent projects
						and writing from my coding journey.
					</p>
				</div>
				<p className="text-sm text-neutral-500 dark:text-neutral-400">
					Currently at{" "}
					<a
						className="underline underline-offset-4 hover:text-foreground transition-colors duration-200"
						href="https://fractalbootcamp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Fractal AI Accelerator
					</a>
				</p>
			</section>
			<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-200">
				<CarouselDemo />
			</section>
			<section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300">
				<div className="mb-8">
					<p className="uppercase tracking-wide text-xs text-neutral-500 dark:text-neutral-400 mb-3">
						Recent Writing
					</p>
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-4">
						Latest thoughts
					</h2>
				</div>
				<BlogPosts />
			</section>
		</>
	);
}
