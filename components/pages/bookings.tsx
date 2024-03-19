"use client";
import CalendlyButton from "@/components/calendly-button";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "../contact-form";
import FAQ from "../faq";

const Bookings = () => {
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
					<CalendlyButton />
				</span>
				<Separator className="mt-4" />
			</div>
			<div className="mt-8 grid lg:grid-flow-col grid-flow-row lg:gap-8 gap-16  auto-cols-fr">
				<div className="max-w-prose">
					<FAQ />
				</div>
				<Separator className="lg:hidden block" />
				<ContactForm />
			</div>
		</section>
	);
};

export default Bookings;
