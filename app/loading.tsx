export default function Loading() {
	return (
		<div className="flex items-center justify-center min-h-[60vh]">
			<div className="flex items-center space-x-2">
				<div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
				<div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></div>
				<div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
			</div>
		</div>
	);
}
