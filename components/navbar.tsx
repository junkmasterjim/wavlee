"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Navbar() {
	const pathname = usePathname();
	const [activeTab, setActiveTab] = useState<string>(
		pathname === "/" ? "home" : pathname.replace("/", "")
	);
	useEffect(() => {
		setActiveTab(pathname.split("/")[1] || "home");
	}, [pathname]);

	const tabs = [
		{ label: "Home", href: "/" },
		{ label: "Beats", href: "/beats" },
		{ label: "Downloads", href: "/downloads" },
		{ label: "Bookings", href: "/bookings" },
		{ label: "Contact", href: "/contact" },
	];

	return (
		<nav className="w-full fixed z-20 inset-0 shadow backdrop-blur bg-background/50 h-16 shadow-accent/50">
			<div className="flex w-full h-full justify-between items-center container">
				{/* Logo */}
				<div className="flex items-center gap-4 select-none">
					<motion.div
						initial={{
							rotate: 0,
							scale: 1,
						}}
						whileHover={{ rotate: 10, scale: 1.2 }}
						transition={{ type: "spring", duration: 0.5 }}
					>
						<Image
							height={48}
							width={48}
							className="size-10 rounded-full object-cover border-2 border-primary"
							src={"/wav_portrait.png"}
							alt="Wav Lee"
						/>
					</motion.div>
					<p className={"text-2xl font-semibold"}>Wav Lee</p>
				</div>

				{/* Links */}
				<motion.menu layout className="sm:flex hidden gap-2 items-center px-2">
					{tabs.map((tab, index) => (
						<span className="flex gap-2 items-center" key={index}>
							<Button
								variant={"ghost"}
								className={cn("h-fit px-2 py-1 hover:bg-inherit")}
								asChild
							>
								<Link
									href={tab.href}
									className={`font-medium relative ${
										pathname === tab.href ? "text-primary" : "text-foreground"
									}`}
								>
									{tab.label}
									{/* Active tav span */}
									{activeTab === tab.label.toLowerCase() && (
										<motion.span
											layoutId="selected-tab"
											className="absolute flex inset-0 z-10 bg-accent rounded-md border-foreground mix-blend-overlay"
											style={{ originY: "0px" }}
											transition={{ type: "spring", duration: 0.5 }}
										/>
									)}
								</Link>
							</Button>
							{index !== tabs.length - 1 && (
								<span className="select-none pointer-events-none text-muted-foreground">
									/
								</span>
							)}
						</span>
					))}
				</motion.menu>
			</div>
		</nav>
	);
}

export { Navbar };
