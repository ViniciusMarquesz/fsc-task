const Button = ({ children, variant = "primary", ...rest }) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white";
    }

    if (variant === "secondary") {
      return "bg-transparent text-[#818181]";
    }
  };

  return (
    <button
      className={`flex items-center gap-2 rounded-md px-3 py-1 font-semibold transition hover:opacity-75 ${getVariantClasses()}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
