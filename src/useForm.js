import { useState } from "react";

export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);

  return [
    ...initialValue,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};
