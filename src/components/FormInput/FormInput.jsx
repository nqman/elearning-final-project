import React from "react";
import "./FormInput.scss";

const FormInput = ({ id, type, placeholder, formik, errors, touched, value }) => {
  const { handleChange, handleBlur } = formik;
  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="mb-3">
      <div id="form__input" className="rounded-md shadow-md">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full p-3 duration-300 rounded-md outline-none"
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
        <label className={`${errors && touched ? "bg-error" : ""}`}></label>
      </div>
      {errors && touched ? (
        <p className="mt-2 text-xs italic text-left text-red-500 sm:text-sm">* {errors}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormInput;
