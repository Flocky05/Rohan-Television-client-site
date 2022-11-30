import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../images/SignUp/signUp.webp";
import { AuthContext } from "../../../Contexs/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import img1 from "../../../images/google/google.png";
import useChangeTitle from "../../../hooks/changeTitle";
import server from "../../../utils/axios-client";

export const SignUp = () => {
  useChangeTitle("SignUp");
  const { signIn, providerLogin, setLoading, createUser } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    form.reset();

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        server
          .post("user", { name, email, role })
          .then((res) => console.log(res.data));
      })
      .catch((error) => console.error(error));
  };
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Successfully Login");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">SignUp</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <select
                name="role"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  What kind of Account do you need
                </option>
                <option value={"buyer"}>Buyer</option>
                <option value={"seller"}>seller</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-2 rounded mr-2 w-full"
                type="submit"
                value="Login"
              />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                onClick={handleGoogleSignIn}
                type="submit"
                className="bg-white w-full p-2 rounded-lg border border-blue-600"
              >
                <div className="flex space-x-5 justify-around algin-iteam-center px-8">
                  <img className="w-8" src={img1} alt="" />
                  <div className="text-xl">SignIn with Google</div>
                </div>
              </button>
            </div>
          </form>
          <p className="text-center ">
            Have an account{" "}
            <Link
              className="text-blue-600 hover:text-blue-700 font-bold"
              to="/signin"
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
