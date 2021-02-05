import React from "react";
import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
	const auth = useAuth();
	const history = useHistory();

	const handleSignIn = ()=>{
		const res = auth.signin('mail','password')
		console.log('handleSignIn',res)
		history.push("/app/about");
	}
	return (
		<div>
			<Helmet title="Login" />
			<h2>Login</h2>
			
			<button onClick={()=>handleSignIn()}>
				Sign in
			</button>
		</div>
	);
};

export default Login;
