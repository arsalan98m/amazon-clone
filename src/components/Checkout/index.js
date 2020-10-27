import "./Checkout.css";

import SubTotal from "../SubTotal";
import { useStateValue } from "../../context/StateProvider";
import CheckOutProduct from "../CheckoutProduct";

import FlipMove from 'react-flip-move';


const Checkout = ()=>{
    const [{basket,user},dispatch] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout__ad" alt="checkout header" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* Checkout product */}

                    <FlipMove 
                    staggerDurationBy={30}
                    duration={750}
                        delay={30}>
                    {basket.map((products,index)=>{
                        const {id,image,title,price,rating} = products;
                         return <CheckOutProduct key={index} id={id} image={image} title={title} price={price} rating={rating}  />
          
                    })}
                </FlipMove>
             </div>

            </div>

            <div className="checkout__right"> 
                {/* Subtotal  */}
                <SubTotal />
                 
            </div>

        </div>
    )
}

export default Checkout;