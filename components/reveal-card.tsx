"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const RevealCard = ({
	title,
	subtitle,
	href,
	src,
}: {
	title: string;
	subtitle: string;
	href: string;
	src: string;
}) => {
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<motion.div
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			className="w-[calc(100%/3-16px)] bg-card aspect-square relative overflow-hidden grid grid-rows-2 border border-input shadow"
		>
			<motion.div
				animate={
					hovered
						? {
								top: "50%",
								width: "50%",
								height: "50%",
								filter: "grayscale(1)",
						  }
						: {
								top: "0%",
								left: "0%",
								width: "100%",
								height: "100%",
								filter: "grayscale(0)",
						  }
				}
				className={`h-full w-full absolute bg-cover bg-center`}
				style={{ backgroundImage: `url(${src})` }}
			/>
			<div className="bg-foreground text-background p-2">
				<h1 className="text-lg font-bold tracking-wide">{title}</h1>
				<h2 className="text-background/90 text-sm">{subtitle}</h2>
			</div>
			<div className="grid gap-6 grid-cols-2">
				<div />
				<div className="flex h-full justify-center items-center">
					<a
						href={href}
						target="_blank"
						className="flex items-center text-muted-foreground hover:text-foreground border-b border-muted-foreground hover:border-foreground transition"
					>
						<span>Link</span>
						<ArrowUpRight className="ml-2 h-5 w-5" />
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export { RevealCard };
