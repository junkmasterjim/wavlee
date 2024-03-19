import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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

export const PATCH = async (req: NextRequest) => {
	const prisma = new PrismaClient();

	const { id, ...data } = await req.json();

	if (!id) {
		return new NextResponse("Bad Request", {
			status: 400,
			statusText: "Bad Request: id is required",
		});
	}

	if (Object.keys(data).length === 0) {
		return new NextResponse("Bad Request", {
			status: 400,
			statusText: "Bad Request: at least one field is required",
		});
	}

	try {
		const updatedStudioHours = await prisma.studioHours.update({
			where: { id },
			data,
		});
		return new NextResponse(JSON.stringify(updatedStudioHours), {
			status: 200,
		});
	} catch (error) {
		console.error(error);
		return new NextResponse("Internal Server Error", {
			status: 500,
			statusText: "Internal Server Error: " + error,
		});
	}
};
