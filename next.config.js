/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable experimental features for better performance
	experimental: {
		optimizePackageImports: ["lucide-react"],
		turbo: {
			rules: {
				"*.svg": {
					loaders: ["@svgr/webpack"],
					as: "*.js",
				},
			},
		},
	},

	// Image optimization
	images: {
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

	// Compression and headers
	compress: true,
	poweredByHeader: false,

	// Bundle analyzer (only in development)
	...(process.env.ANALYZE === "true" && {
		experimental: {
			bundleAnalyzer: {
				enabled: true,
			},
		},
	}),
};

module.exports = nextConfig;
