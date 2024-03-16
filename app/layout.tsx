import { cn, playfair } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Wav Lee",
	description:
		"Wav Lee's official website. Beats, downloads, bookings, and more.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(playfair, "relative")}
				style={{
					background:
						"radial-gradient(ellipse at top center, #191919 0%, #050505 100%)",
				}}
			>
				<div id="__next">
					<Navbar />
					<Image
						src={"/wavLee.jpeg"}
						alt="Chrome Logo"
						fill
						unoptimized
						className="blur-3xl opacity-50 mix-blend-screen"
					/>
					<div
						className="absolute inset-0 min-h-screen"
						style={{
							backgroundImage: "radial-gradient(#ffffff 0.5px, #000000 0.5px)",
							opacity: 0.15,
							backgroundColor: "#000000",
							backgroundSize: "24px 24px",
						}}
					/>
					<main className="relative sm:pt-28 pt-20 min-h-screen pb-16">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
