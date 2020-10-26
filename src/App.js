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
 
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { useStateValue } from "./context/StateProvider";



function App() {
  const [{user},dispatch] = useStateValue();

  useEffect(()=>{
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser=>{
      console.log("THe use is >>>",authUser)

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

    </Routes>
    </div>
   
    </Router>
  );
}

export default App;
