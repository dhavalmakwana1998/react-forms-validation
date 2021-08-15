import { useState, useEffect } from "react";
import validation from "../validation";

function useForm() {
  const [users, setUsers] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    password: "",
    cnPassword: "",
    address: "",
    gender: "",
    fieldArr: [],
  });
  const [errors, setErrors] = useState({});

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value });
    setErrors(validation(users));
  };
  const onBlurHandle = () => {
    // setErrors(validation(users));
  };
  //   const addFiledArr = () => {
  //     users.fieldArr.push({ value: "" });
  //   };

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    const isErr = await validation(users);
    console.log("err", isErr);
    setErrors(isErr);
    if (Object.keys(isErr).length === 0) {
      alert("success..please check console");
      console.log(users);
    }
  };

  return {
    onSubmitHandle,
    onBlurHandle,
    onInputChange,
    users,
    errors,
  };
}

export default useForm;
