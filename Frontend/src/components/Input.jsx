import React, { useState } from "react";

const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  error,
  required = false,
  disabled = false,
  register,
}) => {

  // Base input classes 
  const inputClasses = `
    peer w-full px-4 py-3 bg-white border border-slate-200
    rounded-lg transition-all duration-200 outline-none
    placeholder-transparent focus:border-teal-500 focus:ring-2 focus:ring-teal-100
    ${
      disabled
        ? "bg-slate-50 cursor-not-allowed text-slate-500"
        : "text-slate-900"
    }
    ${error ? "border-red-300 focus:border-red-500 focus:ring-red-100" : ""}
  `;

  const labelClasses = `
    left-4 top-3.5 text-slate-600 pointer-events-none
    transition-all duration-200 peer-focus:text-teal-600
    text-base peer-placeholder-shown:top-3.5'
    ${error ? "peer-focus:text-red-600" : ""}
  `;

  return (
    <div className="mb-6">
      <div className="relative pt-2">
        {/* label */}
        {label && (
          <label htmlFor={id} className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        {/* Text input   */}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={inputClasses}
      {...register(name)}
        />
      </div>

      {/* Error message */}
      {error && (
        <p className="text-xs text-red-600 mt-2 animate-slideIn">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
