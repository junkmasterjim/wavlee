"use client";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const ContactForm = ({
	minimal,
	generalText,
}: {
	minimal?: boolean;
	generalText?: boolean;
}) => {
	const form = useRef<HTMLFormElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// const formData = new FormData(e.currentTarget);
		// const data = Object.fromEntries(formData.entries());
		// console.log(data);

		emailjs
			.sendForm(
				"WAVLEE_gmail_01",
				"defaultTemplate",
				form.current!,
				"OUH8QIDn0ceYoUaiW"
			)
			.then(
				(result) => {
					console.log(result.text);
					form.current?.reset();
					toast.success("Message sent successfully!");
				},
				(error) => {
					console.log(error.text);
					toast.error("Message failed. Try again later.");
				}
			);
	};

	return (
		<Card
			className={cn(
				minimal
					? "bg-card/0 max-w-none w-full border-0 backdrop-blur-sm lg:mt-0"
					: "border-muted/50 bg-background/25 backdrop-blur lg:mt-12",
				"h-fit"
			)}
		>
			<CardHeader>
				<CardTitle>
					{generalText ? "Get in touch with me" : "Still have questions?"}
				</CardTitle>
				<CardDescription className="pb-2">
					Feel free to reach out to me with any questions or concerns you may
					have. I will get back to you as soon as possible.
				</CardDescription>

				<Separator />
				<form
					ref={form}
					id="contact"
					className="space-y-2 pt-2"
					onSubmit={handleSubmit}
				>
					<div className="space-y-2">
						<div className="space-y-2">
							<Label htmlFor="name" className="block text-muted-foreground">
								Name
							</Label>
							<Input
								type="text"
								id="formName"
								name="user_name"
								required
								placeholder="Metro Boomin"
								className="w-full rounded-md border-muted placeholder:opacity-50"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email" className="block text-muted-foreground">
								Email
							</Label>
							<Input
								id="formEmail"
								type="email"
								name="user_email"
								required
								placeholder="metrooo@gmail.com"
								className="w-full rounded-md border-muted placeholder:opacity-50"
							/>
						</div>
					</div>
					<div className="space-y-2 pb-2">
						<Label htmlFor="message" className="block text-muted-foreground">
							Message
						</Label>
						<Textarea
							id="formMessage"
							name="message"
							required
							rows={4}
							placeholder="I want to discuss a project with you."
							className="w-full rounded-md border-muted placeholder:opacity-50"
						/>
					</div>
					<button
						className="md:text-base border-muted/50 bg-muted/10 backdrop-blur-sm inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border hover:bg-accent hover:text-accent-foreground h-9 px-3 text-muted-foreground w-full"
						type="submit"
					>
						Send Message
					</button>
				</form>
			</CardHeader>
		</Card>
	);
};

export { ContactForm };
