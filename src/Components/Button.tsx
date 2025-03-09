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
  const baseStyles =
    "rounded px-4 py-2 font-medium flex items-center gap-2 text-white transition-all duration-300";

  const variantStyles =
    variant === "primary"
      ? "bg-[#10B981] hover:bg-[#059669]" // Emerald Green with Hover Effect
      : "bg-gray-300 text-black hover:bg-gray-400"; // Keeping Secondary Simple

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
