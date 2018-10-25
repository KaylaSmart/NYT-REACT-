import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SubmitBtn = props => (
  <span className="submit-btn" {...props}>
    ✗
  </span>
);

export default SubmitBtn;
