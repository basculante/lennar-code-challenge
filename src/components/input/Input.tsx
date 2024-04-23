import { InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50"
    />
  );
});

export default Input;

Input.displayName = "Input";