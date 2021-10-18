import { useForm } from "react-hook-form";
import React from "react";
import { singin } from "../api/authAPI";

const Singin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    singin(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <br />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <input type="password" placeholder="Password" />
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default Singin;
