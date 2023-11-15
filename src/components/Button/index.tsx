import React from "react";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    light_blue_500: "bg-light_blue-500 shadow-bs text-white-A700",
    light_blue_500_72: "bg-light_blue-500_72 shadow-bs",
    black_900_1e: "bg-black-900_1e",
    gray_100: "bg-gray-100",
    white_A700: "bg-white-A700 shadow-bs2",
  },
  outline: { black_900: "border border-black-900 border-solid" },
} as const;
const sizes = {
  xs: "p-px",
  sm: "p-1.5",
  md: "p-2.5",
  lg: "p-[13px]",
  xl: "p-4",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
