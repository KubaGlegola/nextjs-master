import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="my-5 flex justify-center">
			<SignUp />
		</section>
	);
}
