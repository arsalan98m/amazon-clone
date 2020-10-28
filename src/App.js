import {useEffect} from "react";
import {auth} from "./firebase";
import './App.css';


// Components
import Header from "./components/Header";
// import Home from "./components/Home";

// Pages
import HomePage from "./pages/Home";
import CheckOutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import PaymentPage from "./pages/Payment";
import OrdersPage from "./pages/Orders";
 
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { useStateValue } from "./context/StateProvider";

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51HgxNPBegx3rSZs152OdQ1INUdIc0tbT1WrE6hwFgtHIqyB6gyP7AmAc510Upfey6CYerK7uLlE4yvKXzWVTVpnD00U5rNIaUr');


function App() {
  const [{user},dispatch] = useStateValue();

  useEffect(()=>{
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser=>{
      

      if(authUser){
        // the user just logged in /the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      }else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[])


  return (

    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/payment" element={
        <Elements stripe={promise}>
        <PaymentPage />
        </Elements>
        } />

        <Route path="/orders" element={<OrdersPage />} />

    </Routes>
    </div>
   
    </Router>
  );
}

export default App;
