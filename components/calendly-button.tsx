"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { Button } from "./ui/button";

const CalendlyButton = () => {
	const [root, setRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setRoot(document.getElementById("__next"));
	}, []);

	return (
		<>
			{root ? (
				<Button
					asChild
					variant={"outline"}
					size={"sm"}
					className="md:text-base border-muted/50 bg-muted/10 backdrop-blur-sm"
				>
					<PopupButton
						url="https://calendly.com/prodbywavlee"
						rootElement={root}
						text="Book a Session"
					/>
				</Button>
			) : (
				<Button
					disabled
					variant={"outline"}
					size={"sm"}
					className="md:text-base border-muted/50 bg-muted/10 backdrop-blur-sm"
				>
					Book a Session
				</Button>
			)}
		</>
	);
};

export default CalendlyButton;
