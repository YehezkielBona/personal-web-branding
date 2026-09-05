interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({ children, onClick, variant = "primary", href }: ButtonProps) => {
  const baseStyle = "inline-block px-6 py-3 rounded-md font-medium transition-colors cursor-pointer";
  const variantStyle = variant === "primary" ? "bg-gold text-ink hover:bg-gold/90" : "border border-ink text-ink hover:bg-ink hover:text-offwhite";

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variantStyle}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {children}
    </button>
  );
};

export default Button;
