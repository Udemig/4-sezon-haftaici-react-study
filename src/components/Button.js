import React from "react";

import "../styles/button.css"

/* 
    Button component işleyişi:
    1. Title, onClick ve type isimli propları dışarıdan
    dinamik olarak alacak ve butonun text kısmında title,
    onClick eventinde onClick isimli prop çalışacak
    2. Dışarıdan verilen type'a göre farklı stillerde buttonlar
    ekrana basılacak. Ör: type primary ise bgcolor blue,
    text color white gibi...
    3. Button dışarıdan iconClass isimli bir prop alacak.
    Eğer iconClass verilmemişse bir icon basmayacak, verilmişse
    className'e göre fontawesome'dan icon basılacak.
*/

const Button = ({
  title = "",
  onClick = () => {},
  type = "primary",
  iconClass = "",
}) => {
  /* KOŞULLU RENDER */
  if (type === "primary") {
    return (
      <button
        className="primaryBtn"
        onClick={onClick}>
        {iconClass !== "" && (<i className={iconClass}></i>)} <span>{title}</span>
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button
        className="secondaryBtn"
        onClick={onClick}>
        {iconClass !== "" && (<i className={iconClass}></i>)} <span>{title}</span>
      </button>
    );
  }
  if (type === "danger") {
    return (
      <button
        className="dangerBtn"
        onClick={onClick}>
        {iconClass !== "" && (<i className={iconClass}></i>)} <span>{title}</span>
      </button>
    );
  }
  return (
    <button
      style={{
        padding: "5px 20px",
        border: "none",
      }}
      onClick={onClick}>
      {iconClass !== "" && (<i className={iconClass}></i>)} <span>{title}</span>
    </button>
  );
};

export default Button;
