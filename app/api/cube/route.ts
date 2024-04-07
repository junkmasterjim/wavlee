import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

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
	const res = await prisma.cubeImages.findMany();
};
