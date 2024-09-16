import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

function Contact() {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-6 space-x-2 space-y-2">
      <form onSubmit={handleSubmit(onSubmit)}>
      <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("modal3").closest()}
            >
              ❌
            </Link>
        <div>
          <h1 className="font-bold text-lg   ">Contat Us</h1>
          <div className="mt-4 space-y-2">
            <span>Name:-</span>
            <br />

            <input
              type="text"
              placeholder="Enter Your Name "
              className="w-80 px-3 py-2 border rounded-md outline-none"
            />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <span>Email:-</span>
          <br />

          <input
            type="email"
            placeholder="Enter Your email "
            className="w-80 px-3 py-1 border rounded-md outline-none"
          />
        </div>
        <div className="mt-4 space-y-2">
          <span>Mobile Number:-</span>
          <br />

          <input
            type="number"
            placeholder="Enter Your mobile number "
            className="w-80 px-3 py-1 border rounded-md outline-none"
          />
        </div>
        <div className="mt-4 space-y-2">
          <span>Message:-</span>
          <br />

          <textarea
            name="message"
            rows="10"
            cols="30"
            placeholder="Enter your message here..."
            className="w-80 px-3 py-1 border rounded-md outline-none"
          ></textarea>
        </div>
      </form>
      <br />
      <div className="flex-justify-around mt-4">
        <button className="btn btn-accent">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
