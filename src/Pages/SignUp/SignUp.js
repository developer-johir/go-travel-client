import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    useTitle('Sign Up')
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-14">
      <div className="hero-content">
        <div className="card w-96 shadow-2xl bg-base-100 py-14">
        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Your Name" className="input input-bordered rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered rounded-lg" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary rounded-xl" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center">Already have an account? <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;