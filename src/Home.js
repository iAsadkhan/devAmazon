import React from "react";
import "./Home.css";
import Product from "./Product";
import background from "./DarkOcean.jpg";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__image" src={background} alt="notFound" />
				<div className="home__row">
					<Product
						id={12345}
						title="LOL"
						rating={5}
						img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
						price={29.99}
					/>
					<Product
						id={54321}
						title="LOL"
						rating={5}
						img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
						price={29.99}
					/>
				</div>
				<div className="home__row">
					<Product
						id={12233}
						title="LOL"
						rating={5}
						img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
						price={29.99}
					/>
					<Product
						id={12321}
						title="LOL"
						rating={5}
						img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
						price={29.99}
					/>
					<Product
						id={12341}
						title="LOL"
						rating={5}
						img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
						price={29.99}
					/>
				</div>
				<div className="home__row">
					<Product
						id={12123}
						title="LOL"
						rating={5}
						img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
						price={29.99}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
