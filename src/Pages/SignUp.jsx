import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { emailPassSignUp, editProfile, googleSignIn } = use(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const { name, password, email, photoUrl } = Object.fromEntries(
      formData.entries()
    );
    // console.log(name, password, email, photoUrl);
    setError("");
    setSuccess(false);
    if (!/[A-Z]/.test(password)) {
      setError("Atleast one Upprcase letter needed!!");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Atleast one Lowercase letter needed!!");
      return;
    } else if (!/\d/.test(password)) {
      setError("Atleast one Digit needed!!");
      return;
    }

    emailPassSignUp(email, password)
      .then(() => {
        editProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setError(err.code.slice(5).split("-").join(" "));
      });
  };

  const handleGoogleSignIn = () => {
    setError("");
    googleSignIn()
      .then(() => navigate("/"))
      .catch((err) => setError(err.code));
  };
  return (
    <div className="min-h-screen w-11/12 mx-auto">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-lg border border-gray-300 my-[100px]">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-primary">SignUp now!</h1>
          <form onSubmit={handleSUbmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Name"
              name="name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              name="password"
            />

            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Photo url"
              name="photoUrl"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-[14px] text-red-400">{error}</p>}

            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-primary">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="mt-3 text-[16px]">
            Already have an account?
            <Link
              to="/login"
              className="underline text-secondary font-semibold">
              LogIn
            </Link>
          </p>

          {success && <p>Successfully logged in</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
