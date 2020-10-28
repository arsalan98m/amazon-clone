import { useStateValue } from "../../context/StateProvider";
import React, { forwardRef } from 'react';
import "./CheckOutProduct.css";
 
// {id,image,title,price,rating}
const CheckOutProduct = forwardRef((props,ref)=>{

    const [{basket}, dispatch]= useStateValue();
    const removeFromBasket = ()=>{
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id,

        })

    }
    return (

         
        <div className="checkoutProduct" ref={ref}>
             
            <img src={props.image} className="checkoutProduct__image" alt="product-image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{props.price}</strong>    
                    </p>
            <div className="checkoutProduct__rating">
                {Array(props.rating).fill().map((_,i)=>(
                    <p key={i}>🌟</p>
                ))}
            </div>
            
            {!props.hiddenButton && (<button onClick={removeFromBasket}>Remove from Basket</button>)}
            
            </div>
 
        </div>
    )
})

export default CheckOutProduct;