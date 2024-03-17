"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { ContactDialog } from "./contact-dialog";

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
	];

	return (
		<nav className="w-full fixed z-20 inset-0 shadow backdrop-blur bg-background/50 h-16 shadow-accent/50">
			<div className="flex w-full h-full justify-between items-center container">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-4 select-none group">
					<div className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 ease-in-out">
						<Image
							height={48}
							width={48}
							className="size-10 rounded-full object-cover border-2 border-primary"
							src={"/wav_portrait.jpg"}
							alt="Wav Lee"
						/>
					</div>
					<p className={"text-2xl font-semibold"}>Wav Lee</p>
				</Link>

				{/* Mobile Links */}
				<Sheet>
					<Button size={"icon"} asChild className="sm:hidden" variant={"ghost"}>
						<SheetTrigger>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="size-6"
								fill="none"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</SheetTrigger>
					</Button>
					<SheetContent className="border-accent/50 flex flex-col gap-4">
						<SheetClose id="sheetClose" />
						<SheetHeader>
							<SheetTitle>Wav Lee</SheetTitle>
							<SheetDescription>Navigation</SheetDescription>
						</SheetHeader>
						<Separator />
						<div className="flex flex-col gap-4">
							{tabs.map((tab, index) => (
								<Button
									onClick={() => document.getElementById("sheetClose")?.click()}
									key={index}
									variant={"ghost"}
									className={cn("h-fit px-2 py-1 hover:bg-inherit text-base")}
									asChild
								>
									<Link
										href={tab.href}
										className={`font-medium relative ${
											pathname === tab.href
												? "text-primary underline"
												: "text-foreground"
										}`}
									>
										{tab.label}
									</Link>
								</Button>
							))}
							<ContactDialog
								trigger={
									<Button
										variant={"ghost"}
										className={cn("h-fit px-2 py-1 hover:bg-inherit text-base")}
										asChild
									>
										<span className="font-medium relative text-foreground">
											Contact
										</span>
									</Button>
								}
							/>
						</div>
					</SheetContent>
				</Sheet>

				{/* Desktop Links */}
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
							{index !== tabs.length && (
								<span className="select-none pointer-events-none text-muted-foreground">
									/
								</span>
							)}
						</span>
					))}
					<ContactDialog
						trigger={
							<Button
								variant={"ghost"}
								className={cn("h-fit px-2 py-1 hover:bg-inherit")}
								asChild
							>
								<span className="font-medium relative text-foreground">
									Contact
								</span>
							</Button>
						}
					/>
				</motion.menu>
			</div>
		</nav>
	);
}

export { Navbar };
