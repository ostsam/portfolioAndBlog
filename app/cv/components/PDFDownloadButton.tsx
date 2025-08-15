"use client";

interface PDFDownloadButtonProps {
	onDownload: () => void;
	className?: string;
}

export function PDFDownloadButton({
	onDownload,
	className = "",
}: PDFDownloadButtonProps) {
	return (
		<button
			onClick={onDownload}
			className={`inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white border border-black dark:border-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-neutral-900 ${className}`}
		>
			<svg
				className="w-4 h-4"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
			Download PDF
		</button>
	);
}
