import { BlogPosts } from "app/components/posts";

export const metadata = {
	title: "Blog",
	description: "Read my blog.",
};

export default function Page() {
	return (
		<section>
			<div className="mb-12">
				<p className="kicker mb-3">Writing</p>
				<h1 className="font-semibold text-3xl md:text-4xl mb-4 tracking-tighter">
					Thoughts and reflections
				</h1>
				<p className="text-neutral-600 dark:text-neutral-400 max-w-[50ch]">
					Writing about my journey learning to code, building things, and making
					sense of it all.
				</p>
			</div>
			<BlogPosts />
		</section>
	);
}
