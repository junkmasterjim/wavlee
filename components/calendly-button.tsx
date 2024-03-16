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
				<div
					className="md:text-base border-muted/50 bg-muted/10 backdrop-blur-sm inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border hover:bg-accent hover:text-accent-foreground h-9 px-3"
					onClick={() => {
						console.log(root);
					}}
				>
					<PopupButton
						url="https://calendly.com/prodbywavlee"
						rootElement={root}
						text="Book a Session"
					/>
				</div>
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
