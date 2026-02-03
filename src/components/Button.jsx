const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-brand-primary text-white";
    }

    if (variant === "ghost") {
      return "bg-transparent text-brand-dark-gray";
    }

    if (variant === "secondary") {
      return "bg-brand-light-gray text-brand-dark-blue";
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
