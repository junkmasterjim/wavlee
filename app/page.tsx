"use client";

import { Hero } from "@/components/pages/hero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Home = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Hero />
		</QueryClientProvider>
	);
};

export default Home;
