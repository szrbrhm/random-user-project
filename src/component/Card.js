import React from "react";
import logoMail from "../assets/email.svg";
import logoTelefon from "../assets/phone.svg";
import logoLocation from "../assets/location.svg";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="container-main">
      <div className="main">
        <img className="image" src={item?.picture?.medium} alt="" />

        <h3>
          {item?.name?.first} {item?.name?.last}
        </h3>
      </div>
      <div className="main">
        <img src={logoMail} alt="" />
        <p>{item?.email}</p>
      </div>
      <div className="main">
        <img src={logoTelefon} alt="" />

        <p>{item?.phone}</p>
      </div>
      <div className="main">
        <img src={logoLocation} alt="" />

        <p>
          {item?.location?.city} - {item?.location?.country}
        </p>
      </div>
      <p>Age: {item?.dob?.age}</p>
      <p>Register Date : {item?.registered?.date.split("T")[0]}</p>
    </div>
  );
};

export default Card;

// div className="main-left">
//          <div>
//         <img className="image" src={item?.picture?.medium} alt="" />
//       </div>
//       <div>
//         <img src={logoMail} alt="" />
//       </div>
//       <div>
//         <img src={logoTelefon} alt="" />
//       </div>
//       <div>
//         <img src={logoLocation} alt="" />
//       </div>
//       </div>
//       <div className="main-right">
//       <div>
//           <h3>{item?.name?.first} {item?.name?.last}</h3>
//         </div>
//         <div>
//           <p>{item?.email}</p>
//         </div>
//         <div className="main">
//           <p>{item?.phone}</p>
//         </div>
//         <div className="main">
//           <p>{item?.location?.city} {item?.location?.country}</p>
//         </div>
//       </div>
