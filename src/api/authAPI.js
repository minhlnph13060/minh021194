import instance from "./instance";

export const singup = (user) => {
  const url = `/register`;
  return instance.post(url, user);
};

export const singin = (user) => {
  const url = `/singin`;
  return instance.post(url, user);
};
