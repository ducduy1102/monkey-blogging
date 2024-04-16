import React, { Fragment, useState } from "react";
import Input from "./Input";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import PropTypes from "prop-types";

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        // type="password"
        name="password"
        control={control}
        placeholder="Enter your password"
      >
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

InputPasswordToggle.propTypes = {
  control: PropTypes.object.isRequired,
};

export default InputPasswordToggle;
