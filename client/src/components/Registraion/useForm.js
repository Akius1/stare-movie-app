import { useState } from "react";
import validateInfo from "./validateInfo";

const useForm = (validate) => {
  const [values, setValues] = useState(validate);

  const [errors, setErrors] = useState(validate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateInfo(values);
    if (errors) setErrors(errors);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
