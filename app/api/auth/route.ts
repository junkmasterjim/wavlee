import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const data = await req.json();
	console.log(data);

	if (data.p === process.env.PW) {
		return new NextResponse(JSON.stringify({ verified: true }), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 200,
		});
	} else
		return new NextResponse(JSON.stringify({ verified: false }), {
			headers: {
				"Content-Type": "application/json",
			},
			// unauthorized
			status: 401,
		});
}
