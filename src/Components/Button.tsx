interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

export const Button = ({
  variant,
  size,
  text,
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
  const baseStyles = "rounded px-4 py-2 font-medium flex items-center gap-2";
  const variantStyles =
    variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-300 text-black";
  const sizeStyles =
    size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles}`}
    >
      {startIcon && <span>{startIcon}</span>}
      {text}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
