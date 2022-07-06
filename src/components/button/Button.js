import React from 'react'
import "./Button.css"

function Button(props) {

  let buttonType
  switch (props.type) {
    case "listing":
      buttonType = "listing";
      break;
    case "primary":
      buttonType = "primary";
      break;
    case "secondary":
      buttonType = "secondary";
      break;
    case "transparent":
      buttonType = "transparent";
      break;
    default:
      buttonType = undefined;
  }

  return (
    <a className={`rel-global--btn rel-btn--${buttonType}`} title={props.text} href='google.com'>{props.text}</a>
  )
}

export default Button;