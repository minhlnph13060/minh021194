import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Edit = (props) => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://615ad1f14a360f0017a812b2.mockapi.io/animals/" + id)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  });
  const onSubmit = (data) => {
    fetch("https://615ad1f14a360f0017a812b2.mockapi.io/animals/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.onUpdate(data);
      });
    // call api de cap nhat du lieu
  };
  return (
    <>
      <hr />
      <h2>Cập nhật sản phẩm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <br />
        <input type="price" placeholder="Price" {...register("price")} />
        <br />
        <input type="text" placeholder="Status" {...register("category")} />
        <br />
        <input type="text" placeholder="Image" {...register("img")} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Edit;
