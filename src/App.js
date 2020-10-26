import './App.css';


// Components
import Header from "./components/Header";
// import Home from "./components/Home";

// Pages
import HomePage from "./pages/Home";
import CheckOutPage from "./pages/Checkout";
 
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

function App() {
  return (

    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />

    </Routes>
    </div>
   
    </Router>
  );
}

export default App;
