import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const FAQ: { q: string; a: string | string[]; footnote?: string }[] = [
	{
		q: "What are your studio hours?",
		a: [
			"Studio hours are listed below:",
			"Weekdays: 8pm-12am",
			"Weekends: 3pm-12am",
		],
	},
	{
		q: "What time slots can I book?",
		a: [
			"Available time slots are listed below:",
			"2h @ $60",
			"4h @ $120",
			"6h @ $200",
			"8h @ $260",
			"10h @ $340",
		],
	},
	{
		q: "What options are available for beat leasing?",
		a: [
			"I offer three options:",
			"Basic MP3 for $45, which includes 3000 streams and 25% splits.",
			"WAV + Stems for $65, which includes 5000 streams and 20% splits. ",
			"Exclusive & Custom for $150, which offers unlimited streams and 0% splits.",
		],
	},
	{
		q: "Do you offer executive production?",
		a: [
			"My executive prod. rates are listed below: ",
			"Up to 4 tracks @ $400",
			"Up to 8 tracks @ $800 ",
			"Up to 12 tracks @ $1000 ",
		],
		footnote: "All options include unlimited streams and 10% splits.",
	},
	{
		q: "How much does mixing/mastering cost?",
		a: "The charge is $40 per track for mixing, editing, and mastering.",
	},
	{
		q: "Is there an additional fee for on-the-spot beat production?",
		a: "Yes, there is a $50 fee per instrumental for additional mid-session production.",
	},
	{
		q: "Can you remove the producer tag?",
		a: "Yes, there is a $50 fee for tag removal.",
	},
	{
		q: "What are the crediting requirements?",
		a: "Credit must be given to Wav Lee in the title of each track, on the project cover art, and/or in the credits for the production of the instrumental(s) upon release, unless otherwise agreed upon.",
	},
];

const Page = () => {
	return (
		<section className="container w-full">
			<div className="lg:prose-xl prose text-muted-foreground prose-headings:text-foreground">
				<h1 className="text-3xl sm:text-5xl leading-relaxed text-foreground font-semibold">
					Bookings
				</h1>
				<span className="flex justify-between items-center gap-4">
					<p className="text-muted-foreground text-base">
						Book a session with me! Frequently asked questions are answered
						below.
					</p>
					<Button
						className="text-base border-muted/50 bg-muted/10 backdrop-blur-sm"
						variant={"outline"}
					>
						Book a Session
					</Button>
				</span>
				<Separator className="mt-4" />
			</div>
			<div className="mt-8 grid lg:grid-flow-col grid-flow-row gap-4 auto-cols-fr">
				<div className="max-w-prose bg-black">
					<Accordion type="single" collapsible>
						<h3 className="text-2xl sm:text-3xl leading-relaxed text-foreground font-semibold mb-4">
							FAQ
						</h3>
						{FAQ.map((item, i) => (
							<AccordionItem className="border-muted" key={i} value={`${i}`}>
								<AccordionTrigger>{item.q}</AccordionTrigger>
								{item.a instanceof Array ? (
									<AccordionContent>
										<ul>
											{item.a.map((li, i) => (
												<li key={i} className={cn(i > 0 && "mt-1 ml-4")}>
													{i > 0 && "- "} {li}
													{item.footnote && i === item.a.length - 1 && (
														<span className="block text-xs text-muted-foreground mt-1">
															{item.footnote}
														</span>
													)}
												</li>
											))}
										</ul>
									</AccordionContent>
								) : (
									<AccordionContent>
										{item.a}
										{item.footnote && (
											<span className="block text-xs text-muted-foreground mt-1">
												{item.footnote}
											</span>
										)}
									</AccordionContent>
								)}
							</AccordionItem>
						))}
					</Accordion>
				</div>
				<div className="max-w-prose space-y-4">
					<div>
						<h1>Still have questions?</h1>
						<h2>Contact me!</h2>
					</div>
					<div className="aspect-video bg-accent rounded flex justify-center items-center">
						Contact Form Here
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
