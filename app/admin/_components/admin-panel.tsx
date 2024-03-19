import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { HoursAdminCard } from "./hours-admin-card";

function AdminPanel() {
	return (
		<Tabs defaultValue="cube">
			<TabsList className="grid w-full auto-cols-fr auto-rows-auto sm:grid-flow-col grid-flow-row h-fit">
				<TabsTrigger value="cube">Cube Images</TabsTrigger>
				<TabsTrigger value="downloads">Downloads</TabsTrigger>
				<TabsTrigger value="hours">Studio Hours</TabsTrigger>
			</TabsList>

			<TabsContent value="cube">
				{/* <CubeAdminCard /> */}
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
										<TableHead>Source</TableHead>
										<TableHead>Alt Text</TableHead>
										<TableHead className="text-right">Actions</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{/* Table Data */}

									{Array.from({ length: 6 }).map((_, i) => (
										<TableRow key={i}>
											<TableCell className="font-medium">ID</TableCell>
											<TableCell className="max-w-[100px] truncate">
												https://source.unsplash.com/random/200x200
											</TableCell>
											<TableCell>Foobar - Untitled</TableCell>
											<TableCell className="text-right">Actions</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter>
							<Button>Save changes</Button>
						</CardFooter>
					</form>
				</Card>
			</TabsContent>

			<TabsContent value="downloads">
				{/* <DownloadsAdminCard /> */}
				<Card>
					<CardHeader>
						<CardTitle>Downloads</CardTitle>
						<CardDescription>Edit your downloads page here.</CardDescription>
					</CardHeader>
					<form action="">
						<CardContent className="space-y-2">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead />
										<TableHead>Name</TableHead>
										<TableHead>Image Src</TableHead>
										<TableHead>Link</TableHead>
										<TableHead className="text-right">Actions</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{/* Table Data */}

									{Array.from({ length: 6 }).map((_, i) => (
										<TableRow key={i}>
											<TableCell className="font-medium">ID</TableCell>
											<TableCell className="font-medium flex items-center">
												<span className="bg-white size-5 mr-2 rounded-full" />
												Name
											</TableCell>
											<TableCell className="max-w-[100px] truncate">
												https://source.unsplash.com/random/200x200
											</TableCell>
											<TableCell>Foobar - Untitled</TableCell>
											<TableCell className="text-right">Actions</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter>
							<Button>Save changes</Button>
						</CardFooter>
					</form>
				</Card>
			</TabsContent>
			<TabsContent value="hours">
				<HoursAdminCard />
			</TabsContent>
		</Tabs>
	);
}

export { AdminPanel };
