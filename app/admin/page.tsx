"use client";

import { Input } from "@/components/ui/input";

import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { getCookie, setCookie } from "cookies-next";
import { AdminPanel } from "./_components/admin-panel";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Admin = () => {
	const [loading, setLoading] = useState(true);
	const [verified, setVerified] = useState(false);

	useEffect(() => {
		const verifiedCookie = getCookie("verified");
		if (verifiedCookie) {
			setVerified(true);
		}
		setLoading(false);
	}, []);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);

		try {
			const response = await fetch("/api/auth", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const json = await response.json();
			if (json.verified) {
				setVerified(true);
				setCookie("verified", "true", {
					// 3 days
					expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
				});

				toast.success("Logged in");
			} else {
				toast.error("Invalid password");
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (loading) {
		return (
			<div className="container max-w-sm text-center text-muted-foreground animate-pulse">
				Loading...
			</div>
		);
	}

	if (!verified) {
		return (
			<div className="container max-w-sm">
				<h1>Admin</h1>
				<form id="contact" className="space-y-2 pt-2" onSubmit={handleSubmit}>
					<div className="space-y-2">
						<div className="space-y-2">
							<Input
								type="password"
								id="password"
								name="p"
								placeholder="Password"
								required
								className="w-full rounded-md border-muted placeholder:opacity-50"
							/>
						</div>
					</div>

					<button
						className="md:text-base border-muted/50 bg-muted/10 backdrop-blur-sm inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border hover:bg-accent hover:text-accent-foreground h-9 px-3 text-muted-foreground w-full"
						type="submit"
					>
						Log In
					</button>
				</form>
			</div>
		);
	}

	return (
		<QueryClientProvider client={queryClient}>
			<div className="container space-y-4">
				<h1 className="text-4xl font-bold">Admin</h1>
				<p className="leading-none text-muted-foreground">
					Edit the content of your website here.
				</p>

				<AdminPanel />
			</div>
		</QueryClientProvider>
	);
};

export default Admin;
