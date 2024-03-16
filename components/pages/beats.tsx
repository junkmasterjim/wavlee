"use client";

import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

function BeatsPage() {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<section className="container w-full">
			<div className="lg:prose-xl prose">
				<h1 className="text-3xl sm:text-5xl leading-relaxed text-foreground font-semibold">
					Beats
				</h1>
				<p className="text-muted-foreground text-base">
					Use the blaze player below to browse & shop instrumentals!
				</p>
				<Separator className="mt-8" />
			</div>

			{/* Blaze Player */}
			<div className="rounded-xl border-2 border-muted aspect-video mt-8 bg-accent">
				{isMounted && (
					<motion.iframe
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						src="https://player.beatstars.com/?storeId=146553"
						width="100%"
						height="800"
						className="w-full rounded-lg border-2 border-muted bg-accent"
					/>
				)}
			</div>
		</section>
	);
}
export { BeatsPage };
