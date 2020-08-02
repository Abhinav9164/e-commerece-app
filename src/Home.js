import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return(
    <div className="home">

      <img
        className="home_image"
        src="https://static.zando.co.za/cms/WinterClearanceSale_ShopSale_Mobi_01062020-new.jpg"
      alt=""
      />
<div className="home_row">
  <Product
    id="12549"
    title="A book considered by Warren Buffet; typically composed of many pages bound together and protected by a cover"
    price={12}
    rating={5}
    image="https://www.thebalance.com/thmb/w4syTJBkKMI7QDfXQPee3boybtU=/683x512/smart/filters:no_upscale()/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png"
/>
<Product
  id="148412"
  title="Reliable Wireless Connection : Enjoy a wireless connection up to 10m away thanks to a plug-and-forget USB mini-receiver"
  price={45.5}
  rating={4}
  image="https://images-na.ssl-images-amazon.com/images/I/615sBWQp4OL._SL1500_.jpg"
/>
</div>

<div className="home_row">

  <Product
    id="45458"
    title="BenQ 27-inch DesignVue Designer IPS Monitor with 2K QHD 1440p, 100% sRGB, AQCOLOR Technology, Darkroom, Animation, CAD/CAM Mode, Dualview Function, Display Pilot Software, Built-in Speaker - PD2700Q (Black)"
    price={125}
    rating={1}
    image="https://m.economictimes.com/thumb/height-450,width-600,imgsize-247010,msid-64565598/samsung.jpg"
/>
<Product
  id="45485"
  title="UMANAC American Whole Dried Blueberries 250 Gm"
  price={125}
  rating={5}
  image="https://images-na.ssl-images-amazon.com/images/I/61Ab-vYyogL._SL1500_.jpg"
/>

<Product
  id="78966"
  title="Ambrane 10000mAh Li-Polymer Powerbank with Compact Size & Fast Charging for Smartphones, Smart Watches, Neckbands & Other Devices (Capsule 10K, White)"
  price={125}
  rating={2}
  image="https://www.solarpowersupply.eu/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/x/t/xtorm-ac-powerbank-brick-23200-al480n---4_1.jpg"
/>

</div>

<div className="home_row2">
  <Product
    id="125898"
    title="The PS5 console includes a white-and-black design to match the new controller that will be included in the box. "
    price={12502}
    rating={5}
    image="https://images.dexerto.com/uploads/2020/03/17220011/how-to-watch-ps5-reveal-date-time-stream.jpg"
    />

    <Product
      id="12298"
      title="Bishan clothing brings this cool t-shirt for music lovers. All music lovers must buy this t-shirt., This Music is my sanity tee for men and women is ..."
      price={128}
      rating={3}
      image="https://www.bishanstore.com/media/product_None/file_music_tshirt.png"
      />

      <Product
        id="12266"
        title="Read the in depth Review of JBL E55BT Wireless Headphones Audio Video. Know detailed info about JBL E55BT Wireless Headphones configuration, design "
        price={500}
        rating={2}
        image="https://static.digit.in/default/thumb_115908_default_td_480x480.jpeg"
        />




</div>
<div>
<Product
  id="12266"
  title="Capture the best moments of your life with all new LG W10 Smartphone featuring Dual AI camera that delivers unparalleled sharpness, colour accuracy, . "
  price={1200}
  rating={5}
  image="https://www.lg.com/in/images/mobile-phones/md06155757/gallery/Platinum_07-1100-V3.jpg"
  />
</div>
</div>
  );

}

export default Home;
