import { RevealCard } from "@/components/reveal-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Page = () => {
	return (
		<section className="container w-full">
			<div className="lg:prose-xl prose">
				<h1 className="text-3xl sm:text-5xl leading-relaxed text-foreground font-semibold">
					Downloads
				</h1>
				<p className="text-muted-foreground text-base">
					Drum kits and sample packs for producers and beatmakers.
				</p>
				<Separator className="mt-8" />
			</div>

			<div className="flex mt-8 gap-3 flex-wrap justify-stretch">
				{/* Card */}
				<div className="bg-muted-foreground/5 text-muted-foreground backdrop-blur p-2 aspect-[5/7] rounded-sm space-y-4 border border-muted/50">
					<div className="aspect-square relative size-60">
						<Image className="rounded-sm" src="" fill alt="" />
					</div>
					<div className="flex justify-between">
						<p>Kit Name</p>
						<p className="text-muted-foreground font-semibold">Free</p>
					</div>
					<Button
						className="w-full rounded-sm text-muted-foreground border-accent/50"
						variant={"outline"}
					>
						Download
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Page;
