"use client";

import { useOptimistic } from "react";
import { changeCartItemQuantity } from "@/utils/actions";

export const CartItemQuantity = ({
	cartId,
	itemId,
	quantity,
}: {
	cartId: string;
	itemId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			{optimisticQuantity > 1 && (
				<button
					className="h-6 w-6 border"
					type="submit"
					data-testid="decrement"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeCartItemQuantity(cartId, itemId, optimisticQuantity - 1);
					}}
				>
					-
				</button>
			)}
			<span className="w-8 text-center" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					console.log(await changeCartItemQuantity(cartId, itemId, optimisticQuantity + 1));
				}}
			>
				+
			</button>
		</form>
	);
};
