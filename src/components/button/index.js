import React from "react";
import Button from "@material-ui/core/Button";
import "./styles/button.css";

export default function CustomButton({ text, icon, disabled, type }) {
  return (
    <Button
      type={type}
      className="custom_btn"
      endIcon={icon ? <div className="icon_container">{icon}</div> : null}
      disabled={disabled}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
}
