import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="modal3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("modal3").closest()}
            >
              ❌
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Login Button pe email use karne k liye */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email 📧 Baba"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Login button pe password use karne ke lie */}
            <div className="mt-4 s pace-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password 🔑 Baba"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <br />
            {/* Login page me button use krne ke liye */}
            <div className="flex-justify-around mt-4">
              <button className="btn btn-accent">Login</button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("modal3").closest()}
                >
                  {" "}
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
