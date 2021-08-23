import React from 'react';
import logoMail from '../assets/email.svg';
import logoTelefon from '../assets/phone.svg';
import logoLocation from '../assets/location.svg';

const Card = ({item}) => {
    return (
    <div className="container">
        <div className="container-left">
        <img src={item.picture} alt="" />
        <img src={logoMail} alt="" />
        <img src={logoTelefon} alt="" />
        <img src={logoLocation} alt="" />
        </div>
        <div className="container-right">
          <h2>{item.name}</h2>
          <p>{item.mail}</p>
          <p>{item.phone}</p>
          <p>{item.location}</p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>

        
      </div>
    
    )
}

export default Card;
