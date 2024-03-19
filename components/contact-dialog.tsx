import { ContactForm } from "./contact-form";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

function ContactDialog({ trigger }: { trigger: React.ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild className="cursor-pointer">
				{trigger}
			</DialogTrigger>
			<DialogContent className="border-muted/50">
				<ContactForm minimal generalText />
			</DialogContent>
		</Dialog>
	);
}
export { ContactDialog };
