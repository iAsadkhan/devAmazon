import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const SignIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => console.log(error));
	};

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="notFound"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="login__signInButton" onClick={SignIn}>
						Sign In
					</button>
					<p>
						By Signing in you agree to the Amazon-Clone Terms and Conditions of
						Use & Sale
					</p>
					<button
						type="submit"
						className="login__registerButton"
						onClick={register}
					>
						Create your Amazon account
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
