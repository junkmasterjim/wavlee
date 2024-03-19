import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { useQuery } from "@tanstack/react-query";
import { Menu } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const HoursAdminCard = () => {
	const [input, setInput] = useState<{
		days: string;
		open: string;
		close: string;
	}>({
		days: "",
		open: "",
		close: "",
	});

	const handlePatch = async () => {
		try {
			const response = await fetch("/api/studio-hours", {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(input),
			});
			const json = await response.json();
			return json;
		} catch (error) {
			console.error(error);
			throw new Error("Error updating hours");
		}
	};

	const { data, isPending, isError, error } = useQuery({
		queryKey: ["hours"],
		queryFn: async () => {
			const res = await fetch("/api/studio-hours");
			const data = await res.json();
			return data;
		},
	});

	if (isPending)
		return (
			<div className="text-center text-muted-foreground animate-pulse">
				Loading...
			</div>
		);

	isError && console.error(isError);
	if (error)
		return (
			<div className="text-center text-muted-foreground">
				Error: {error.message}
			</div>
		);

	if (data)
		return (
			<>
				<Card>
					<CardHeader>
						<CardTitle>Studio Info</CardTitle>
						<CardDescription>
							Edit your hours here, they&apos;ll be reflected in your FAQ.
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-2">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead />
									<TableHead>{"Day(s)"}</TableHead>
									<TableHead>Open</TableHead>
									<TableHead>Close</TableHead>
									<TableHead className="text-right">Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{/* Table Data */}

								{data.map(
									(
										item: {
											id: string;
											days: string;
											open: string;
											close: string;
										},
										i: number
									) => (
										<TableRow key={i}>
											<TableCell className="text-muted-foreground">
												{item.id}
											</TableCell>
											<TableCell className="font-medium">{item.days}</TableCell>
											<TableCell className="max-w-[100px] truncate">
												{item.open}
											</TableCell>
											<TableCell>{item.close}</TableCell>
											<TableCell className="text-right">
												<Dialog
													onOpenChange={(e: boolean) => {
														if (e === true) {
															setInput({ ...item });
														}

														if (e === false) {
															console.log("closed");
														}
													}}
												>
													<Button size={"icon"} asChild variant={"ghost"}>
														<DialogTrigger>
															<Menu size={24} />
														</DialogTrigger>
													</Button>
													<DialogContent className="border-muted/50">
														<DialogHeader>
															<DialogTitle>{item.days}</DialogTitle>
															<DialogDescription>
																Update {item.days} hours.
															</DialogDescription>
														</DialogHeader>
														<form
															className="space-y-2"
															onSubmit={async (e) => {
																e.preventDefault();

																try {
																	const patch = await handlePatch();
																	console.log(patch);
																	toast.success(
																		"Hours updated. Refresh the page to see changes."
																	);
																} catch (error) {
																	toast.error("Error updating hours");
																}
															}}
														>
															<div className="space-y-1">
																<Label
																	className="text-muted-foreground"
																	htmlFor="days"
																>
																	{"Day(s)"}
																</Label>
																<Input
																	type="text"
																	id="days"
																	name="days"
																	value={input.days}
																	disabled
																/>
															</div>
															<div className="space-y-1">
																<Label
																	className="text-muted-foreground"
																	htmlFor="open"
																>
																	Open Time
																</Label>
																<Input
																	type="text"
																	id="open"
																	placeholder={item.open}
																	name="open"
																	value={input.open}
																	onChange={(e) =>
																		setInput({ ...input, open: e.target.value })
																	}
																/>
															</div>
															<div className="space-y-1">
																<Label
																	className="text-muted-foreground"
																	htmlFor="close"
																>
																	Close Time
																</Label>
																<Input
																	type="text"
																	id="close"
																	placeholder={item.close}
																	name="close"
																	value={input.close}
																	onChange={(e) =>
																		setInput({
																			...input,
																			close: e.target.value,
																		})
																	}
																/>
															</div>
															<div className="text-end">
																<Button type="submit" variant={"ghost"}>
																	Submit
																</Button>
															</div>
														</form>
													</DialogContent>
												</Dialog>
											</TableCell>
										</TableRow>
									)
								)}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</>
		);
};

export { HoursAdminCard };
