import React, { useState } from "react";
import "./styles/accordion.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

export default function Accordion({ header, body }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div className="acc-item">
      <div
        className={`acc-header ${toggleShow && "active"}`}
        onClick={() => setToggleShow(!toggleShow)}
      >
        <p>{header}</p>
        {toggleShow ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </div>
      <div className={`acc-body ${toggleShow && "open"}`}>
        <span>{body}</span>
      </div>
    </div>
  );
}
