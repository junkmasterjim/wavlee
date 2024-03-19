import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
	const prisma = new PrismaClient();

	try {
		const studioHours = await prisma.studioHours.findMany({});
		return new NextResponse(JSON.stringify(studioHours), { status: 200 });
	} catch (error) {
		console.error(error);
		return new NextResponse("Internal Server Error", {
			status: 500,
			statusText: "Internal Server Error: " + error,
		});
	}
};
