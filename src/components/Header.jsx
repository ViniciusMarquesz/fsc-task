import PropTypes from "prop-types";

function Header(props) {
  return <header>{props.children}</header>;
}

export default Header;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
