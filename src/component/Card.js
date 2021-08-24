import React from "react";
import logoMail from "../assets/email.svg";
import logoTelefon from "../assets/phone.svg";
import logoLocation from "../assets/location.svg";

const Card = ({ item }) => {
  return (
    <div className="container">
      <div className="container">
        <img src={item?.picture?.medium} alt="" />
        <h3>{item?.name?.first} {item?.name?.last}</h3>
        </div>
        <div>
          <img src={logoMail} alt="" />
          <p>{item?.email}</p>
        </div>
        <div>
          <img src={logoTelefon} alt="" />
          <p>{item?.phone}</p>
        </div>
        <div>
          <img src={logoLocation} alt="" />
          <p>{item?.location?.city} {item?.location?.country}</p>
        </div>
          <p>Age: {item?.dob?.age}</p>
        </div>
    
  );
};

export default Card;
