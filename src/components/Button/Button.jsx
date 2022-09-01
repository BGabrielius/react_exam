import React from "react";
import { StyledButton } from "./Button.style";

const Button = ({ text, icon, action, theme, size }) => {
  let buttonBackgroundColor = "";
  let buttonColor = "";
  switch (theme) {
    case "primary":
      buttonBackgroundColor = "#fff";
      buttonColor = "#000";
      break;
    case "secondary":
      buttonBackgroundColor = "#4F70B5";
      buttonColor = "#fff";
      break;
    default:
      buttonBackgroundColor = "#4F70B5";
      buttonColor = "#fff";
      break;
  }
  return (
    <StyledButton
      style={{
        backgroundColor: buttonBackgroundColor,
        color: buttonColor,
      }}
      onClick={action}
    >
      <span>{icon}</span>
      {text}
    </StyledButton>
  );
};

export default Button;
