import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline";
};

const Button = ({ children, variant = "primary", className = "", ...rest }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-colors duration-200 cursor-pointer disabled: opacity-50 disabled:cursor-not-allowed";

  const variantStyle = variant === "primary" ? "bg-leaf text-cream hover: bg-sage" : "border-2 border-leaf text-leaf hover:bg-leaf hover:text-cream";

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`}
        {...rest}> {children}
    </button>
  )
};

export default Button
