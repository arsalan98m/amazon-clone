import "./Checkout.css";

import SubTotal from "../SubTotal";
import { useStateValue } from "../../context/StateProvider";
import CheckOutProduct from "../CheckoutProduct";

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

                    {basket.map((products,index)=>{
                        const {id,image,title,price,rating} = products;
                        return <CheckOutProduct key={index} id={id} image={image} title={title} price={price} rating={rating}  />
                    })}

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