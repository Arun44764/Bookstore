import React from "react";
import image3 from "../../public/image3.jpg";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={image3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-warning">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline hover:bg-green-500 hover:text-white">
                Rs.{item.price}
              </div>
              <div className="badge badge-outline hover:bg-red-500 hover:text-white duration:200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
