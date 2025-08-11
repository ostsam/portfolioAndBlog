import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
	let allBlogs = getBlogPosts();

	return (
		<div className="space-y-6">
			{allBlogs
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1;
					}
					return 1;
				})
				.map((post, idx) => {
					// Calculate reading time
					const wordCount = post.content.split(/\s+/).length;
					const readingTime = Math.ceil(wordCount / 200);

					return (
						<Link
							key={post.slug}
							className="group block p-4 -m-4 rounded-lg transition-all duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 will-change-transform"
							href={`/blog/${post.slug}`}
						>
							<div
								className="flex flex-col md:flex-row md:items-start gap-4 translate-y-0 opacity-100 group-hover:translate-y-[-1px] group-hover:opacity-100 transition-transform duration-150 ease-out"
								style={{ transitionDelay: `${idx * 25}ms` }}
							>
								<div className="flex-shrink-0 w-full md:w-28 text-sm text-neutral-500 dark:text-neutral-400 tabular-nums">
									{formatDate(post.metadata.publishedAt, false)}
								</div>
								<div className="flex-grow min-w-0">
									<h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors duration-200">
										{post.metadata.title}
									</h3>
									{post.metadata.summary && (
										<p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-2">
											{post.metadata.summary}
										</p>
									)}
									<div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
										<span>{readingTime} min read</span>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
		</div>
	);
}
