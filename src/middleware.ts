import { authMiddleware } from "@clerk/nextjs";

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/payment",
		"/payment(.*)",
		"/categories/(.*)",
		"/collections/(.*)",
		"/product/(.*)",
		"/products",
		"/products/(.*)",
		"/api/stripe",
	],
});
