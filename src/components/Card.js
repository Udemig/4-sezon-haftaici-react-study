import React from "react";

import Button from "./Button";

const Card = ({
  title = "",
  description = "",
  imgSrc = "https://pbs.twimg.com/profile_images/1246486049964068865/PMGeB3d0_400x400.jpg",
}) => {
  return (
    <div
      style={{ display: "inline-block", border: "1px solid", width: "300px" }}>
      <div style={{ width: "300px", height: "300px", border: "1px solid" }}>
        <img
          src={imgSrc}
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <Button
          title="Devamını Oku"
          onClick={() => alert("card buton tıklandı")}
        />
      </div>
    </div>
  );
};

export default Card;
