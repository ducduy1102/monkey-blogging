import React from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";

const Option = ({ onClick, children }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    // close dropdown
    setShow(false);
  };

  return (
    <div
      className="flex items-center justify-between px-5 py-4 text-sm transition-all cursor-pointer hover:text-primary"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

Option.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Option;
