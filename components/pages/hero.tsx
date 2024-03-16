import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { DesktopCube, HeroCube, MobileCube } from "../cube";

function Hero() {
	return (
		<section
			className="container min-h-screen relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-16"
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
						<Link href={"/bookings"}>Book a session</Link>
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
						<Button
							size={"icon"}
							asChild
							className="rounded-full"
							variant={"ghost"}
						>
							<Link href={"https://www.instagram.com/Wav_Lee/"} target="_blank">
								<FaInstagram className="size-5" />
							</Link>
						</Button>
						<Button
							size={"icon"}
							asChild
							className="rounded-full "
							variant={"ghost"}
						>
							<Link target="_blank" href={"https://twitter.com/Wav_Lee"}>
								<FaTwitter className="size-5" />
							</Link>
						</Button>
						<Button
							size={"icon"}
							asChild
							className="rounded-full "
							variant={"ghost"}
						>
							<Link
								target="_blank"
								href={
									"https://www.youtube.com/channel/UCMoLMstZHA2-pMAUEdaJ2vw"
								}
							>
								<FaYoutube className="size-5" />
							</Link>
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
				<MobileCube />
				<iframe
					className="h-96 w-full opacity-75 border rounded-xl border-muted bg-muted"
					src="https://open.spotify.com/embed/playlist/5eWcwIimPSFiJdN0RD5i3P?utm_source=generator&theme=0"
					allowFullScreen={false}
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="eager"
				/>
			</div>
			<DesktopCube />
		</section>
	);
}

export { Hero };
