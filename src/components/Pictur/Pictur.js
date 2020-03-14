import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'
import './Pictur.css'

const Pictur = (props) => {
    console.log(props.product)
    return (
        <div className ="picture" >
            <div className="img">
               <img className="image" src={props.product.img} alt=""/>
            </div>
            <div className="information">
            <h2 className="name"> Name : {props.product.name} </h2>
            <h2 className ="userName"> User_Id : {props.product.username} </h2>
            <h2 className ="email"> Emil:{props.product.email} </h2>
             <h2 className="salary">Salary per Month : $ {props.product.salary}</h2>
           <button className="main-btn"
           onClick ={() => props.handleAddProduct(props.product)}
           
           > <FontAwesomeIcon icon={faUser} /> Add me</button>
            
            </div>
            
            
        </div>
    );
};

export default Pictur;