const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white";
    }

    if (variant === "ghost") {
      return "bg-transparent text-[#818181]";
    }

    if (variant === "secondary") {
      return "bg-[#EEEEEE] text-[#35383E]";
    }
  };

  const getSizeClasses = () => {
    if (size === "small") {
      return "text-xs  py-1";
    }

    if (size === "large") {
      return "text-sm  py-2";
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition hover:opacity-75 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
