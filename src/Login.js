import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
	//react hooks
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (event) => {
		//To prevent refreshing the site
		event.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};

	const register = (event) => {
		//To prevent refreshing the site
		event.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
					className="login__logo"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form action="">
					<h5>E-mail</h5>
					<input
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						type="email"
					/>
					<h5>Password</h5>
					<input
						onChange={(event) => setPassword(event.target.value)}
						type="password"
					/>
					<button onClick={login} className="login__signInButton">
						Sign In
					</button>
				</form>
				<p>By signing-in you agree to Amazon's Conditions of use.</p>
				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
