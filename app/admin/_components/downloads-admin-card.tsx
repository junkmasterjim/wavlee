// TODO: MAKE SURE PLAICEHOLDER IS WORKING PROPERLY
// TODO: MAKE SURE POST IS WORKING PROPERLY
// TODO: ADD DELETE FUNCTIONALITY
// TODO: ADD PATCH FUNCTIONALITY

// TODO: FINISH MAPPING DATABASE TO ADMIN TABLE
// TODO: MAP DATABASE TO FRONTEND

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
import { Separator } from "@/components/ui/separator";
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

const DownloadsAdminCard = () => {
	const [input, setInput] = useState<{
		name: string;
		imageUrl: string;
		url: string;
	}>({
		name: "",
		imageUrl: "",
		url: "",
	});

	const { data, isPending, isError, error, refetch } = useQuery({
		queryKey: ["downloads"],
		queryFn: async () => {
			const res = await fetch("/api/downloads");
			const data = await res.json();
			return data;
		},
	});

	// const handlePatch = async () => {
	// 	try {
	// 		const response = await fetch("/api/downloads", {
	// 			method: "PATCH",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(input),
	// 		});
	// 		const json = await response.json();
	// 		return json;
	// 	} catch (error) {
	// 		console.error(error);
	// 		throw new Error("Error updating cube");
	// 	}
	// };

	const handlePost = async () => {
		if (!input.name || !input.imageUrl || !input.url) {
			toast.error("All fields are required");
			return;
		}

		try {
			const response = await fetch("/api/downloads", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(input),
			});
			const json = await response.json();
			refetch();
			return json;
		} catch (error) {
			console.error(error);
			toast.error("Error adding download");
			throw new Error("Error adding download");
		}
	};

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
				<Dialog
					onOpenChange={(e: boolean) => {
						if (e === false) {
							setInput({ name: "", imageUrl: "", url: "" });
						}
					}}
				>
					<CardHeader>
						<CardTitle>Downloads</CardTitle>
						<CardDescription className="grid sm:grid-cols-3 grid-cols-1">
							<DialogTrigger asChild>
								<Button
									variant={"outline"}
									className="sm:hidden inline-flex border-accent/50"
								>
									Add Download
								</Button>
							</DialogTrigger>
							<span className="sm:col-span-2">
								Edit your downloads section here. You can update your cloudinary
								image URL, download link, and sound kit info.
							</span>
							<DialogTrigger asChild>
								<Button
									variant={"outline"}
									className="hidden sm:inline-flex border-accent/50"
								>
									Add Download
								</Button>
							</DialogTrigger>
						</CardDescription>
					</CardHeader>

					<DialogContent className="border-accent/50">
						<DialogHeader>
							<DialogTitle>Add Download</DialogTitle>
							<DialogDescription>
								Add a new download to your sound kits section.
							</DialogDescription>
						</DialogHeader>

						<Separator />
						<form
							className="space-y-2"
							onSubmit={async (e) => {
								e.preventDefault();

								try {
									const post = await handlePost();
									console.log(post);
									toast.success(
										"Downloads updated. Refresh the page to see changes."
									);
								} catch (error) {
									toast.error("Error adding download");
								}
							}}
						>
							<div className="space-y-1">
								<Label className="text-muted-foreground" htmlFor="alt">
									Name
								</Label>
								<Input
									type="text"
									id="alt"
									placeholder={"Sound Kit Name"}
									name="alt"
									value={input.name}
									onChange={(e) =>
										setInput({
											...input,
											name: e.target.value,
										})
									}
								/>
							</div>
							<div className="space-y-1">
								<Label className="text-muted-foreground" htmlFor="src">
									Image URL
								</Label>
								<Input
									type="url"
									id="src"
									placeholder={"https://res.cloudinary.com/.../image.jpg"}
									name="src"
									value={input.imageUrl}
									onChange={(e) =>
										setInput({
											...input,
											imageUrl: e.target.value,
										})
									}
								/>
							</div>
							<div className="space-y-1">
								<Label className="text-muted-foreground" htmlFor="url">
									Download Link
								</Label>
								<Input
									type="url"
									id="url"
									placeholder={"...{DROPBOX_LINK}?dl=1"}
									name="url"
									value={input.url}
									onChange={(e) =>
										setInput({
											...input,
											url: e.target.value,
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

				<CardContent className="space-y-2">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead />
								<TableHead>Name</TableHead>
								<TableHead>Image Src</TableHead>
								<TableHead>Download Link</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>

						{/* Table Data */}

						<TableBody>
							{data.map(
								(
									dl: {
										id: number;
										name: string;
										imageUrl: string;
										url: string;
									},
									i: number
								) => (
									<TableRow key={i}>
										<TableCell className="font-medium">{dl.id}</TableCell>
										<TableCell>{dl.name}</TableCell>
										<TableCell className="max-w-[250px] flex items-center">
											<Image
												unoptimized
												src={dl.imageUrl}
												width={24}
												height={24}
												alt={dl.name}
												className="rounded-full mr-2"
											/>
											<p className="truncate">{dl.imageUrl}</p>
										</TableCell>
										<TableCell className="truncate max-w-[250px]">
											{dl.url}
										</TableCell>

										{/* Actions Dialog */}

										<TableCell className="text-right">
											<Dialog
												onOpenChange={(e: boolean) => {
													if (e === true) {
														setInput({ ...dl });
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
														<DialogTitle>{dl.name}</DialogTitle>
														<DialogDescription>
															Update {dl.name} hours.
														</DialogDescription>
													</DialogHeader>
													<form
														className="space-y-2"
														onSubmit={async (e) => {
															e.preventDefault();

															try {
																// const patch = await handlePatch();
																// console.log(patch);
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
																placeholder={dl.imageUrl}
																name="src"
																value={input.imageUrl}
																onChange={(e) =>
																	setInput({
																		...input,
																		imageUrl: e.target.value,
																	})
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
																placeholder={dl.name}
																name="alt"
																value={input.name}
																onChange={(e) =>
																	setInput({
																		...input,
																		name: e.target.value,
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
				<CardFooter />
			</Card>
		);
};

export default DownloadsAdminCard;
