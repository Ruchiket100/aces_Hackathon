"use client";

import { FETCH } from "@/fetch";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const loginMutation = useMutation({
		mutationFn: () => FETCH.auth.login(email, password),
		onSuccess: (data: { message: string; token: string }) => {
			console.log(data);
			toast("User registered successfully");
			router.push(`/auth-login?token=${data.token}`);
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		loginMutation.mutate();
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-5"
			>
				<h2 className="text-2xl font-bold text-center">Login</h2>

				<input
					type="email"
					placeholder="Email"
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<input
					type="password"
					placeholder="Password"
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<button
					type="submit"
					disabled={loginMutation.isLoading}
					className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
				>
					{loginMutation.isLoading ? "Logging in..." : "Login"}
				</button>
			</form>
		</div>
	);
}
