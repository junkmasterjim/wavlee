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
import Image from "next/image";
import CubeAdminCard from "./cube-admin-card";
import DownloadsAdminCard from "./downloads-admin-card";

function AdminPanel() {
	return (
		<Tabs defaultValue="cube">
			<TabsList className="grid w-full auto-cols-fr auto-rows-auto sm:grid-flow-col grid-flow-row h-fit">
				<TabsTrigger value="cube">Cube Images</TabsTrigger>
				<TabsTrigger value="downloads">Downloads</TabsTrigger>
				<TabsTrigger value="hours">Studio Hours</TabsTrigger>
			</TabsList>

			<TabsContent value="cube">
				<CubeAdminCard />
			</TabsContent>

			<TabsContent value="downloads">
				<DownloadsAdminCard />
			</TabsContent>
			<TabsContent value="hours">
				<HoursAdminCard />
			</TabsContent>
		</Tabs>
	);
}

export { AdminPanel };
