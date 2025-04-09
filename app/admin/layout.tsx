import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Sidebar from "./components/sidebar";

export const metadata: Metadata = {
	title: "Admin",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	//get asce-cookies from headers
	const cookieStore = await cookies();
	const cookie = cookieStore.get("aces-cookie");
	if (!cookie) return;
	const decodedCloud = decodeURIComponent(cookie.value);
	const cloud = JSON.parse(decodedCloud);

	if (!cloud?.auth_token) return notFound();
	console.log(cloud);
	return (
		<div className="flex">
			<Sidebar />
			<div className="w-[80%] min-h-screen ">{children}</div>
		</div>
	);
}
