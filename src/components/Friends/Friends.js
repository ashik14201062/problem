import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react'
import './Friends.css';
import Pictur from '../Pictur/Pictur'
import List from '../List/List';





const Friends = () => {
  
    const First10 = fakeData.slice(0,15);
   const [products , setProduct] = useState(First10);
   const [cart , setCart] = useState([]);

   const handleAddProduct =(product) => {
       console.log("add people",product);

       const newCart = [...cart, product];
       setCart(newCart);
   }

   

   
   return (
       
    <div className ="people-container" >


        <div className="information-container">
        

           

                    {
                        products.map(pd => <Pictur 
                            handleAddProduct={handleAddProduct}
                            product= {pd}> </Pictur> )
                    }
                
            


        </div>
        <div className="summary-container">
            <List cart={cart} ></List>
           
            

        


        </div>

        

       
        
        
       
    </div>
);

    


   
   };

    
   

export default Friends;