import { Navigate, useNavigate } from "react-router";

export default function Login({ user, loginHandler }) {
  const navigate = useNavigate();
  const submitAction = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    loginHandler( email, password);
    navigate("/");
  };
  return (
    <section id="login-page">
      <form id="login" action={submitAction}>
        <div className="container">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
          <label htmlFor="login-pass">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder="Password"
          />
          <input type="submit" className="btn submit" defaultValue="Login" />
        </div>
      </form>
    </section>
  );
}