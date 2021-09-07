import React from "react";
// import logoMail from "../assets/email.svg";
// import logoTelefon from "../assets/phone.svg";
// import logoLocation from "../assets/location.svg";
import Email from "../svg/Email";
import Phone from "../svg/Phone";
import Location from "../svg/Location";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="container-main">
      <div className="main">
        <div className="image-title-box">
          <img className="img" src={item?.picture?.medium} alt="" />
          <p className="info text">
            {item?.name?.first} {item?.name?.last}
          </p>
        </div>
        <div className="user-email">
          <Email className="img" />
          <p className="info">{item?.email}</p>
        </div>
        <div className="user-phone">
          <Phone className="img" />
          <p className="info">{item?.phone}</p>
        </div>
        <div className="user-location">
          <Location className="img" />
          <p className="info">
            {item?.location?.city} - {item?.location?.country}
          </p>
        </div>
        <div>
          <p>Age: {item?.dob?.age}</p>
          <p>Register Date : {item?.registered?.date.split("T")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
