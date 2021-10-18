import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Add = (props) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://615ad1f14a360f0017a812b2.mockapi.io/animals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const product = await response.json();
      props.onAdd(product);
      history.push("/product");
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <br />
      <br />
      <ul>
        <li>
          {" "}
          <input
            type="text"
            placeholder="Name products"
            {...register("name")}
          />
        </li>
        <li>
          {" "}
          <input
            type="price"
            placeholder="Price products"
            {...register("price")}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Status products"
            {...register("category")}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Image products"
            {...register("img")}
          />
        </li>
      </ul>

      <button type="submit">Add product</button>
    </form>
  );
};

export default Add;
