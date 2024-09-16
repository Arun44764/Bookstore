import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"


function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => console.log(data);
  return (
    
    <>
    <div className="flex right  item-center justify-center p-5 rounded mt-10">
    <div  className="w-[700px] ">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
      ❌
     </Link>
    
    
    <h3 className="font-bold text-lg">Signup</h3>
    {/* Name add karne ke liye */}
    <div className="mt-4 s pace-y-2">
        <span>Name</span>
        <br/>
        <input type="text" placeholder="Enter Your Full Name ✍ Baba" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("name", { required: true })}
        />
         {errors.name && <span className= "text-sm text-red-500">This field is required</span>}
    </div>
    {/* Login Button pe email use karne k liye */}
    <div className="mt-4 s pace-y-2">
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter Your Email 📧 Baba" className="w-80 px-3 py-1 border rounded-md outline-none"
          {...register("email", { required: true })}
        />
         {errors.email && <span className= "text-sm text-red-500">This field is required</span>}
    </div>
    {/* Login button pe password use karne ke lie */}
    <div className="mt-4 s pace-y-2">
        <span>Password</span>
        <br/>
        <input type="password" placeholder="Enter Your Password 🔑 Baba" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("password", { required: true })}
        />
        {errors.password && <span className= "text-sm text-red-500">This field is required</span>}
    </div>
    <br/>
         {/* Login page me button use krne ke liye */}
    <div className="flex justify-around mt-4">
      <button className="btn btn-accent">Signup</button>
     <p className='text-xl'>Have Account ?{ " "}
      <button 
       className="underline text-blue-500 cursor-pointer"
       onClick={() =>
        document.getElementById("modal3").showModal()
       }
       > Login
       </button>{" "}
       <Login/>
       </p>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup;
