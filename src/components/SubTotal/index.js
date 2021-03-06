import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";
import { useNavigate} from "react-router-dom";


const SubTotal = ()=>{
    const [{basket},dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <p>{`SubTotal (${basket.length} items):`} <strong>{value}</strong></p>

                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            <button onClick={e=> navigate('/payment')}>Proceed to Checkout</button>
                
            
        </div>
    )
}

export default SubTotal;