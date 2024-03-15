import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { HeroCube } from "./cube";

function Hero() {
	return (
		<section
			className="container sm:pt-36 pt-20 min-h-screen relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-16 pb-16"
			id="home"
		>
			{/* Hero - 5 Cols */}

			{/* Span 3 Cols */}
			<div className="h-full prose col-span-3 space-y-8">
				<h1 className="text-3xl sm:text-5xl leading-relaxed text-foreground font-semibold">
					Elevate your music. <br />
					<span className="ml-16">Define your sound.</span>
				</h1>
				<p className="text-muted-foreground">
					Wav Lee is an American record producer from Salt Lake City, UT who
					specializes in instrumental production, vocal recording and artist
					development.
				</p>

				{/* CTA */}
				<div className="flex flex-wrap md:*:text-base *:text-muted-foreground *:transition items-center">
					<Button
						asChild
						className="hover:text-foreground not-prose"
						variant={"link"}
					>
						<Link href={"/beats"}>Shop beats</Link>
					</Button>
					<span className="select-none pointer-events-none">/</span>
					<Button
						asChild
						className="hover:text-foreground not-prose"
						variant={"link"}
					>
						<Link href={"/"}>Book a session</Link>
					</Button>
					<span className="select-none pointer-events-none">/</span>
					<Button
						asChild
						className="hover:text-foreground not-prose"
						variant={"link"}
					>
						<Link href={"/"}>Contact</Link>
					</Button>
				</div>
				<Separator />
				{/* social links */}
				<div className="flex flex-wrap justify-between text-muted-foreground items-center">
					<div className="flex gap-2">
						<Button size={"icon"} className="rounded-full" variant={"ghost"}>
							<FaInstagram className="size-5" />
						</Button>
						<Button size={"icon"} className="rounded-full " variant={"ghost"}>
							<FaTwitter className="size-5" />
						</Button>
						<Button size={"icon"} className="rounded-full " variant={"ghost"}>
							<FaYoutube className="size-5" />
						</Button>
					</div>
					<a
						href="mailto:prodbywavlee@gmail.com"
						className="text-sm text-muted-foreground hover:text-foreground"
					>
						prodbywavlee@gmail.com
					</a>
				</div>
				<Separator />
				{/* Mobile Cube */}
				<div className="sm:col-span-2 sm:hidden col-span-3 items-center w-full place-self-center sm:-mt-36 flex flex-col">
					<HeroCube />
					<p className="mt-4 text-center font-medium text-xs text-muted-foreground pointer-events-none select-none">
						Albums I've produced on.
						<br />
						<span>Drag me!</span>
					</p>
				</div>
				<iframe
					className="h-96 w-full opacity-75 border rounded-xl border-muted bg-muted"
					src="https://open.spotify.com/embed/playlist/5eWcwIimPSFiJdN0RD5i3P?utm_source=generator&theme=0"
					allowFullScreen={false}
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="eager"
				/>
			</div>

			{/* Desktop Cube */}
			<div className="sm:col-span-2 hidden col-span-3 items-center w-full place-self-center sm:-mt-36 sm:flex flex-col">
				<HeroCube />
				<p className="mt-4 text-center font-medium text-xs text-muted-foreground pointer-events-none select-none">
					Albums I've produced on.
					<br />
					<span>Drag me!</span>
				</p>
			</div>
		</section>
	);
}

export { Hero };
