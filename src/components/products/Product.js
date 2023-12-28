import React, { useState } from "react";
import "./Product.css";
import { FaRegHeart,FaTrash, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "number-brm";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishes } from "../../contents/counterSlice";
import { incCart } from "../../contents/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Product({admin, data }) {
  const [count, setCount] = useState(1);
  const DEAFAULT__COUNT = 10;
  const dispatch = useDispatch();
  const wishes = useSelector((s) => s.wishes.value);
  const handleAddToCart = (el) => {
    dispatch(incCart(el));
    toast.success("Savatchaga muvaffaqqiyatli qo'shildi");
  };



  return (
    <>
      <div className="products__wrapper">
        {
        data.slice(0, count * DEAFAULT__COUNT)?.map((el) => {
          return (

            <div key={el.id} className="products__card">
              <Link to={`/product/${el.id}`} className="products__image">
                <img src={el.url} alt="" />
              </Link>

              <div className="products__body">
                <p className="products__title">{el.title}</p>
                <div style={{ flex: 1 }}>
                  <span className="products__monthly">
                    {((el.price * 1.5) / 12)?.brm()} so'm oyiga
                  </span>
                </div>

                <del> {(el.price * 1.2)?.brm()} so'm</del>
                <p className="products__price">{el.price?.brm()}so'm</p>
              </div>
              <div
                onClick={() => dispatch(toggleWishes(el))}
                className="products__wishes"
              >
                {wishes.some((item) => item.id === el.id) ? (
                  <FaHeart style={{ color: "var(--bg-py" }} />
                ) : (
                  <FaRegHeart />
                )}
              </div>
              {
                admin? <div
                className="products__cart"
              >
                <FaTrash />
              </div>:
              <div
              onClick={() => handleAddToCart(el)}
              className="products__cart"
            >
              <IoCartOutline />
            </div>
              } 
              
            </div>
          );
        })}
      </div>

      {data.length >= count * DEAFAULT__COUNT ? (
        <button onClick={() => setCount((p) => p + 1)} className="btns">
          {" "}
          Ko'proq ko'rsatish
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

export default Product;
