import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CV",
	description:
		"Curriculum Vitae for Sam Osterfeld — full stack developer and AI enthusiast.",
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
