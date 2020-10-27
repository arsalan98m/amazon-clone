import "./Home.css";
import Product from "../Product";
 
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
];

const Home = ()=>{
    return (
        <div className="home">
            <div className="home__container">
                {/* <img  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image" alt="homeImage" /> */}
               
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} className="home__image" />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} className="home__image" />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} className="home__image" />
        </div>
      </Fade>
    </div>
 


                <div className="home__row">
                    {/* Product */}
                    <Product id="121112" title='The lean startup' price={29.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"} rating={5}  />

                    <Product id="9090901" title={'VANKYO Aluminum Tr Projector Stand, Adjustable Laptop Stand'} price={33.99} image={'https://images-na.ssl-images-amazon.com/images/I/51WBjeBAfuL._AC_SL1000_.jpg'} rating={3} />
            
                    {/* Product */}
                </div>

                <div className="home__row">
               
                    <Product id="222212" title='Google Pixel 4a - New Unlocked Android Smartphone' price={120.0} image={'https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SL1500_.jpg'} rating={4}  />
                    <Product id="9090155" title='Garmin vivomove HR, Hybrid Smartwatch' price={159.00} image={'https://images-na.ssl-images-amazon.com/images/I/51ZzxBsQjAL._AC_SL1000_.jpg'} rating={5} />
                    <Product id="9877744" title='JBL Tune 125TWS True Wireless In-Ear Headphones' price={40.00} image={'https://images-na.ssl-images-amazon.com/images/I/61VHoZ1aPqL._AC_SL1500_.jpg'} rating={4} />
                  
                </div>

                <div className="home__row">
                <Product id="4455300" title='SAMSUNG Q60T Series 85-inch Class QLED Smart TV' price={980.00} image={'https://images-na.ssl-images-amazon.com/images/I/81fkfrkmjSL._AC_SL1500_.jpg'} rating={4} />
                   
                </div>


            </div>
        </div>
    )
}

export default Home;