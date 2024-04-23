"use client";

import clsx from "clsx";
import { forwardRef } from "react";
import { useFormStatus } from "react-dom";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  textSize?: string;
  hideLoadingSpinner?: boolean;

  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      isLoading,
      children,
      bgColor,
      bgHoverColor,
      textColor,
      textSize,
      hideLoadingSpinner,
      ...rest
    }: Props,
    ref
  ) => {
    // Return status of useFormState hook - only available in child componenet of Form.
    // https://github.com/vercel/next.js/issues/49232
    const { pending } = useFormStatus();

    return (
      <button
        {...rest}
        ref={ref}
        disabled={isLoading || pending || rest.disabled}
        className={clsx(
          "inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent px-4 py-2 font-semibold disabled:pointer-events-none disabled:opacity-50",
          bgColor ? bgColor : "bg-indigo-500",
          bgHoverColor ? `hover:${bgHoverColor}` : "hover:bg-indigo-600",
          textColor ? textColor : "text-white",
          textSize ? textSize : "text-sm"
        )}
      >
        {/* Show loading spinner if isLoading is true */}
        {(isLoading || pending) && !hideLoadingSpinner && (
          <span
            className="inline-block size-4 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white mr-2"
            role="status"
            aria-label="loading"
          ></span>
        )}

        {children}
      </button>
    );
  }
);

export default Button;
