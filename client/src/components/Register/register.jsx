import { useState } from "react";
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";

export default function Register({ user, registerHandler }) {
  const navigate = useNavigate();
  const registerSubmit = (values) => {
 const { email, password,confirmPassword } = values;
    
    // TODO Validation and real authentication
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!email || !password || !confirmPassword) {
      alert("All fields are required");
      
      return;
    }
    registerHandler(email, password);
    navigate("/");
    
  }
  const {register,formAction,  } = useForm(registerSubmit, {
    email: "",
    password: "",
    confirmPassword : "",
  })
  return (
    <section id="register-page" className="content auth">
      <form id="register" action={formAction}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            {...register('email')}
           
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            
            id="register-password"
            placeholder="Password"
            {...register('password')}
            
          />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            
            id="confirm-password"
            placeholder="Repeat Password"
            {...register('confirmPassword')}
           
          />
          <input className="btn submit" type="submit" defaultValue="Register" />
        </div>
      </form>
    </section>
  );
}