import React from 'react';
import './List.css';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import Pictur from '../Pictur/Pictur';

const List = (props) => {
    const cart = props.cart;
    
    const total = cart.reduce((total,prd)=>total+prd.salary,0);
    const addFrnd = cart.reduce((addFrnd,prd)=>addFrnd +prd.name,[]);
    const addFrndUser = cart.reduce((addFrndUser,prd)=>addFrndUser +prd.username,[])
    const totalYear = total*12 ;
   
    return (
        <div>
            <h1> Friend requst : 10 </h1>
    
        <h5> Accept friend :{cart.length}  </h5>
        <h4 className="salary-year"> Salary/per Year: $  {totalYear}</h4>
        <h5  className ="nameinfo"> Name : {addFrnd }  </h5> 
        <h5 className ="nameinfoto ">UserName: {addFrndUser}</h5>
         
                
          
            
            
           

          </div>
    );
};

export default List;