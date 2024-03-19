import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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

const HoursAdminCard = () => {
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
			<Card>
				<CardHeader>
					<CardTitle>Studio Info</CardTitle>
					<CardDescription>
						Edit your hours here, they'll be reflected in your FAQ.
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
										<TableCell className="font-medium flex items-center">
											{item.days}
										</TableCell>
										<TableCell className="max-w-[100px] truncate">
											{item.open}
										</TableCell>
										<TableCell>{item.close}</TableCell>
										<TableCell className="text-right">Actions</TableCell>
									</TableRow>
								)
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		);
};

export { HoursAdminCard };
