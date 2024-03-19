"use client";

import Bookings from "@/components/pages/bookings";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Page = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Bookings />
		</QueryClientProvider>
	);
};

export default Page;
