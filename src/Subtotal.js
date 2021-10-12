import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	const total = basket.reduce((accumulator, basket) => {
		return accumulator + basket.price;
	}, 0);
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal({basket.length}a! item):
							<strong>{`${value}`}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={total}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
