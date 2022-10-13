
import React from 'react'
import Button from "../Button/Button.jsx"
import CardStyles from "./card.module.css";

const Card = ({id,btnName,img,language}) => {
 
  return (
    <div className='infoCard'>
   
                
                <h1 className={CardStyles.h11}>{language}</h1>
                <img src={img} alt="" />
                <Button buton={btnName}/>
                
            
        
    </div>
  )
}

export default Card;