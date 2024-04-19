import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const CubeAdminCard = () => {
	const [input, setInput] = useState<{
		src: string;
		alt: string;
	}>({
		src: "",
		alt: "",
	});

	const handlePatch = async () => {
		try {
			const response = await fetch("/api/cube", {
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
			throw new Error("Error updating cube");
		}
	};

	const { data, isPending, isError, error } = useQuery({
		queryKey: ["cube"],
		queryFn: async () => {
			const res = await fetch("/api/cube");
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
			<Card>
				<CardHeader>
					<CardTitle>Cube Images</CardTitle>
					<CardDescription>
						Edit the cube images that appear on the home page.
					</CardDescription>
				</CardHeader>
				<form action="">
					<CardContent className="space-y-2">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead />
									<TableHead>Image URL</TableHead>
									<TableHead>Alt Text</TableHead>
									<TableHead className="text-right">Actions</TableHead>
								</TableRow>
							</TableHeader>

							{/* Table Data */}

							<TableBody>
								{data.map(
									(
										img: {
											id: number;
											src: string;
											alt: string;
										},
										i: number
									) => (
										<TableRow key={i}>
											<TableCell className="font-medium">{img.id}</TableCell>
											<TableCell className="max-w-[250px] flex items-center">
												<Image
													unoptimized
													src={img.src}
													width={24}
													height={24}
													alt={img.alt}
													className="rounded-full mr-2"
												/>
												<p className="truncate">{img.src}</p>
											</TableCell>
											<TableCell>{img.alt}</TableCell>

											{/* Actions Dialog */}

											<TableCell className="text-right">
												<Dialog
													onOpenChange={(e: boolean) => {
														if (e === true) {
															setInput({ ...img });
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
															<DialogTitle>{img.alt}</DialogTitle>
															<DialogDescription>
																Update {img.alt} hours.
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
																	htmlFor="src"
																>
																	Image URL
																</Label>
																<Input
																	type="url"
																	id="src"
																	placeholder={img.src}
																	name="src"
																	value={input.src}
																	onChange={(e) =>
																		setInput({ ...input, src: e.target.value })
																	}
																/>
															</div>
															<div className="space-y-1">
																<Label
																	className="text-muted-foreground"
																	htmlFor="alt"
																>
																	Alt Text
																</Label>
																<Input
																	type="text"
																	id="alt"
																	placeholder={img.alt}
																	name="alt"
																	value={input.alt}
																	onChange={(e) =>
																		setInput({
																			...input,
																			alt: e.target.value,
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
					<CardFooter>
						<Button>Save changes</Button>
					</CardFooter>
				</form>
			</Card>
		);
};

export default CubeAdminCard;
