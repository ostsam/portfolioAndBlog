import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
	let posts = getBlogPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata(props) {
	const params = await props.params;
	let post = getBlogPosts().find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = post.metadata;
	let ogImage = image
		? image
		: `${baseUrl}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `${baseUrl}/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Blog(props) {
	const params = await props.params;
	let post = getBlogPosts().find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	// Calculate reading time (rough estimate: 200 words per minute)
	const wordCount = post.content.split(/\s+/).length;
	const readingTime = Math.ceil(wordCount / 200);

	return (
		<section className="max-w-none">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `${baseUrl}${post.metadata.image}`
							: `/og?title=${encodeURIComponent(post.metadata.title)}`,
						url: `${baseUrl}/blog/${post.slug}`,
						author: {
							"@type": "Person",
							name: "Sam Osterfeld",
						},
						estimatedReadingTime: `PT${readingTime}M`,
					}),
				}}
			/>

			{/* Back to blog link */}
			<div className="mb-8">
				<a
					href="/blog"
					className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors duration-200"
				>
					<svg
						className="w-4 h-4 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Back to blog
				</a>
			</div>

			{/* Article header */}
			<header className="mb-12">
				<h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter mb-2 text-balance">
					{post.metadata.title}
				</h1>
				{post.metadata.summary && (
					<p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-[60ch] leading-relaxed">
						{post.metadata.summary}
					</p>
				)}
				<div className="flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500 font-medium">
					<time dateTime={post.metadata.publishedAt}>
						{formatDate(post.metadata.publishedAt)}
					</time>
					<span>•</span>
					<span>{readingTime} min read</span>
				</div>
			</header>

			{/* Article content */}
			<article className="prose prose-neutral dark:prose-invert max-w-[68ch] prose-lg prose-headings:tracking-tight prose-headings:font-semibold prose-p:text-pretty prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4">
				<CustomMDX source={post.content} />
			</article>

			{/* Article footer */}
			<footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
				<div className="flex items-center justify-between">
					<div className="text-sm text-neutral-600 dark:text-neutral-400">
						<p>Thanks for reading!</p>
					</div>
					<a
						href="/blog"
						className="text-sm text-accent hover:underline underline-offset-4"
					>
						← More posts
					</a>
				</div>
			</footer>
		</section>
	);
}
