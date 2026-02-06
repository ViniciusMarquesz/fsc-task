import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

const Button = ({
  children,
  color = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const button = tv({
    base: `flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition hover:opacity-75 ${rest.disabled && "opacity-50 cursor-not-allowed hover:opacity-50"}`,
    variants: {
      color: {
        primary: "bg-brand-primary text-white",
        ghost: "bg-transparent text-brand-dark-gray",
        secondary: "bg-brand-light-gray text-brand-dark-blue",
        danger: "bg-brand-danger text-brand-white",
      },
      size: {
        small: "text-xs  py-1",
        large: "text-sm  py-2",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button className={button({ color, size, className })} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "ghost", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "large"]),
  className: PropTypes.string,
};

export default Button;
