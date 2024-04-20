import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getPlaiceholderImage } from "@/lib/plaiceholder";

export const GET = async () => {
	const prisma = new PrismaClient();

	try {
		const data = await prisma.soundKits.findMany();

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

export const POST = async (req: NextRequest) => {
	const prisma = new PrismaClient();

	const { name, imageUrl, url } = await req.json();
	if (!name || !imageUrl || !url) {
		return new NextResponse("Bad Request", {
			status: 400,
			statusText: "Bad Request: all fields are required",
		});
	}

	const { base64, img } = await getPlaiceholderImage(imageUrl);
	if (!base64 || !img) {
		return new NextResponse("Bad Request", {
			status: 400,
			statusText: "Bad Request: invalid image",
		});
	}

	try {
		const data = await prisma.soundKits.create({
			data: {
				name,
				imageUrl,
				url,
				base64,
				price: 0,
			},
		});

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
