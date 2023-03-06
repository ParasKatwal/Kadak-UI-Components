/** @jsxImportSource @emotion/react */

import { forwardRef } from "react";
import tw, { TwStyle } from "twin.macro";
import { css } from "@emotion/react";

type ButtonProps = {
  children: any;
  variant?:
    | "primary"
    | "lightPrimary"
    | "success"
    | "lightSuccess"
    | "light"
    | "lightError"
    | "icon"
    | "reset"
    | "actionBtn";
  size?: "normal" | "small";
  pill?: boolean;
  additionalClass?: TwStyle;
  disabled?: boolean;
  loading?: boolean;
};

const variantClasses = {
  primary: tw`bg-primary text-white border-0`,
  lightPrimary: tw`bg-primary-50 text-primary border border-solid border-gray-200`,
  success: tw`bg-success text-white border-0`,
  lightSuccess: tw`bg-success-50 text-success border-0`,
  light: tw`bg-gray-100 text-gray-500 border-0`,
  lightError: tw`bg-error-50 text-error-400 border-0`,
  icon: tw`border border-solid border-gray-300 bg-white`,
  reset: tw`bg-transparent border-0 shadow-sm`,
  actionBtn: tw`h-7 w-7 border border-solid border-gray-100 rounded-lg !p-0 bg-white`,
};

const sizeClasses = {
  normal: tw`px-6 py-3.5 text-sm leading-4`,
  small: tw`px-5 py-3 text-sm leading-4 h-10`,
  icon: tw`h-9 w-9`,
  iconMedium: tw`h-10 w-10`,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "normal",
      pill,
      additionalClass,
      disabled,
      loading,
      ...props
    },
    ref
  ) => {
    const baseClass = tw`font-medium rounded-lg focus:outline-none transition ease-in-out duration-300 outline-none flex items-center justify-center`;
    const variantClass = variantClasses[variant] || "";
    const sizeClass = sizeClasses[size] || "";
    const disabledClass = disabled
      ? tw`bg-gray-100 cursor-not-allowed text-gray-400`
      : "";
    const loadingClass = loading
      ? tw`cursor-not-allowed flex items-center opacity-70`
      : "";
    const pillClass = pill ? tw`rounded-full` : "";
    const addClass = additionalClass || "";

    return (
      <button
        ref={ref}
        css={[
          baseClass,
          variantClass,
          sizeClass,
          disabledClass,
          loadingClass,
          pillClass,
          addClass,
        ]}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
