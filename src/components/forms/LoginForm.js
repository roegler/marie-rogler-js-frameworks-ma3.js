import React from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";

const schema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(4, "Your password must contain at least 4 characters")
});

function LoginForm() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);
	}

	return ( 
	<form onSubmit={handleSubmit(onSubmit)}>
		<input name="username" type="text" placeholder="Username" ref={register} />
		{errors.username && <p>{errors.username.message}</p>}
		
		<input name="password" type="password" placeholder="Password" ref={register} />
		{errors.password && <p>{errors.password.message}</p>}

		<button type="submit">Submit</button>
	</form>
	);
}

export default LoginForm;
