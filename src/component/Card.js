import React from "react";
import logoMail from "../assets/email.svg";
import logoTelefon from "../assets/phone.svg";
import logoLocation from "../assets/location.svg";
import './Card.css';

const Card = ({ item }) => {
  return (
    <div className="container">
      <div className="container-main">
         <div className="main">
        <img className="image" src={item?.picture?.medium} alt="" />
        <h3>{item?.name?.first} {item?.name?.last}</h3>
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
          <p>{item?.location?.city} - {item?.location?.country}</p>
        </div>
          <p>Age: {item?.dob?.age}</p>
          <p>Register Date : {item?.registered?.date}</p>
        </div>
        
      </div>
     


    // <div className="container">
    //   <div className="main">
    //     <img className="image" src={item?.picture?.medium} alt="" />
    //     <h3>{item?.name?.first} {item?.name?.last}</h3>
    //     </div>
    //     <div className="main">
    //       <img src={logoMail} alt="" />
    //       <p>{item?.email}</p>
    //     </div>
    //     <div className="main">
    //       <img src={logoTelefon} alt="" />
    //       <p>{item?.phone}</p>
    //     </div>
    //     <div className="main">
    //       <img src={logoLocation} alt="" />
    //       <p>{item?.location?.city} {item?.location?.country}</p>
    //     </div>
    //       <p>Age: {item?.dob?.age}</p>
    //     </div>
    
  );
};

export default Card;
