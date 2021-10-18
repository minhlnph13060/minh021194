import React from "react";
import { useForm } from "react-hook-form";
import { singup } from "../api/authAPI";

const Singup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    singup(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <br />
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: true })}
      />
      <input type="password" placeholder="Password" {...register("password")} />
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default Singup;
