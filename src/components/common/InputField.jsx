import React from 'react';

export default function InputField({
  label,
  id,
  placeholder,
  type = 'text',
  optional = false,
  value,
  onChange,
  disabled = false,
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-700">
          {label}
          {optional && (
            <span className="text-neutral-400 font-normal ml-1">(Optional)</span>
          )}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="input-base disabled:bg-neutral-50 disabled:text-neutral-400 disabled:cursor-not-allowed"
      />
    </div>
  );
}
