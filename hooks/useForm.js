import { useState } from 'react';

const useForm = (initialState, onSubmit) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(values);
    setValues(initialState);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;