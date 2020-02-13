import React from "react";
import style from './CloseIcon.module.scss';

function CloseIcon(props) {
  return <div className={style.close} onClick={() => props.onClick()}></div>;
}

export default CloseIcon;