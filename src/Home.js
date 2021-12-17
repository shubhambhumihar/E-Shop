import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81H2oSomXqL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* 2 products */}
          <Product
            id="123213301"
            title="Fire-Boltt Beast Pro Bluetooth Calling 1.69” with Voice Assistance, Local Music, Voice Recorder, Spo2 Monitoring"
            price={3000}
            image="https://m.media-amazon.com/images/I/610d5dbMf1L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="123213641"
            title="2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 7-core GPU, 8GB RAM, 256GB SSD) - Space Grey"
            price={80000}
            image="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
            rating="4"
          />
          <Product
            id="123203341"
            title="Apple iPhone 13 (128GB) - Midnight"
            price={40000}
            image="https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
            rating="5"
          />
          <Product
            id="163213341"
            title="NIVEA Nourishing Lotion Body Milk, 400ml and NIVEA Nourishing Lotion Body Milk, 120ml"
            price={200}
            image="https://m.media-amazon.com/images/I/51shDMCVn+L._SL1000_.jpg"
            rating="3"
          />
        </div>
        <div className="home__row">
          {/* 3 products */}
          <Product
            id="128213341"
            title="AmazonBasics 80cm (32 inch) HD Ready Smart LED Fire TV AB32E10SS (Black) (2020 Model)"
            price={40000}
            image="https://m.media-amazon.com/images/I/71m0Nn4vqOL._SL1254_.jpg"
            rating={5}
          />
          <Product
            id="123213341"
            title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV 43W6600 (Black) (2020 Model)"
            price={20000}
            image="https://m.media-amazon.com/images/I/91v4nFq0LuL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          {/* 1 products */}
          <Product
            id="123213341"
            title="Ben Martin Men's Relaxed Jeans"
            price={900}
            image="https://m.media-amazon.com/images/I/616xchp1ECL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="123213347"
            title="Alan Jones Clothing
Men's Fleece Hooded Hoodie"
            price={1200}
            image="https://m.media-amazon.com/images/I/618NS2oD5uL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="123213348"
            title="Scott International
Men's Regular Fit T-Shirt (Pack of 3)"
            price={4000}
            image="https://m.media-amazon.com/images/I/71vp8Lec9JL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="123213641"
            title="Girls Clubs
Women's Stylish Slim Fit Denim Jeans"
            price={600}
            image="https://m.media-amazon.com/images/I/61kGtnJDoKL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="123213941"
            title="Loire-z126"
            price={3000}
            image="https://m.media-amazon.com/images/I/71iXen7CNrL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="123613341"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={56000}
            image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
