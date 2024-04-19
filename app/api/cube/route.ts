import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
	const prisma = new PrismaClient();

	try {
		const data = await prisma.cubeImages.findMany();

		return new NextResponse(JSON.stringify(data), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 200,
		});
	} catch (error) {
		console.error(error);
		return new NextResponse(
			JSON.stringify({ message: "Internal Server Error", error }),
			{
				headers: {
					"Content-Type": "application/json",
				},
				status: 500,
			}
		);
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
		const updatedCubeImages = await prisma.cubeImages.update({
			where: { id },
			data,
		});
		return new NextResponse(JSON.stringify(updatedCubeImages), {
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
