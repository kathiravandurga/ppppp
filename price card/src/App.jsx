import './App.css'

import React from 'react';
import Card from './Card';

const App = () => {
   const card_data=[{
    fname : "FREE",
    title : "$0/month",
    data1 : "single User",
    data2 : "50GB Storage ",
    data3 : "Ultimate Public Project",
    data2 : "Community Access",
    data4 : "Ultimate Private Project",
    data5 : "Dedicate phone Support",
    data6 : "Free Subdomain",
    data7 : "Monthly Status Reports",
   },{    fname : "PLUS",
   title : "$9/month",
   data1 : "5 User",
   data2 : "50GB Storage ",
   data3 : "Ultimate Public Project",
   data2 : "Community Access",
   data4 : "Ultimate Private Project",
   data5 : "Dedicate phone Support",
   data6 : "Free Subdomain",
   data7 : "Monthly Status Reports",
  },
  {fname : "PRO",
  title : "$49/month",
  data1 : "Unlimited User",
  data2 : "50GB Storage ",
  data3 : "Ultimate Public Project",
  data2 : "Community Access",
  data4 : "Ultimate Private Project",
  data5 : "Dedicate phone Support",
  data6 : "Free Subdomain",
  data7 : "Monthly Status Reports",
 }]
  return (
    <div className='bg-image'>
      <h1 className='pricacardname'>Price Card</h1>
      {card_data.map((d,index)=>(<Card key={index} fname={d.fname} title={d.title} para1={d.data1 }
      para2={d.data2 }para3={d.data3 }para4={d.data4 }para5={d.data5 }para6={d.data6 } para7={d.data7 }/>))}
      
    </div>
  );
};

export default App;