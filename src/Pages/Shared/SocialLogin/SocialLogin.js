import React, { useContext } from "react";
// import { setAuthToken } from "../../../api/auth";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  useTitle('Social Login');

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setAuthToken(user);

      })
      .catch((err) => console.log(err));
  };

  return (
    <div  onClick={handleGoogleSignIn} className="flex justify-items-center justify-center bg-amber-500 w-72 py-2 mx-auto mt-10 rounded-lg">
        <img className="w-8 h-8" src="https://statesoftwater.com/wp-content/uploads/new-google-favicon-256.png" alt="" />
      <p className="">
        <button className="text-2xl ml-3">
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
