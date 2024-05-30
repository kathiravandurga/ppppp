import React from 'react';
import './App.css'

const Card = (props) => {
     
    return (
       
        <div className='card1'>
            <h4>{props.fname}</h4>
            <h2>{props.title}</h2>
            <hr/>
            <p><i class="fa-solid fa-check"></i>    {props.para1}</p>
            <p><i class="fa-solid fa-check"></i>    {props.para2}</p>
            <p><i class="fa-solid fa-check"></i>    {props.para3}</p>
            <p><i class="fa-solid fa-check"></i>    {props.para4}</p>
            <p><i class="fa-solid fa-check"></i>    {props.para5}</p>
            <p><i class="fa-solid fa-check"></i>    {props.para6}</p>
            <p><i class="fa-solid fa-check"></i>    {props.para7}</p>
            <button className='btn'>Button</button>
              
         
        
        </div>
           
       
    );
};

export default Card;