import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  useTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        // get jwt token
        fetch("https://go-travel-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage is the easiest but the not the best place to store jwt token
            localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero my-10">
      <div className="hero-content">
        <div className="card w-96 shadow-2xl bg-base-100 py-14">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered rounded-lg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered rounded-lg"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary rounded-xl" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Go-Travel:{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
