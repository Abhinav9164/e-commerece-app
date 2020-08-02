import React from "react";
import "./Header.css";
import { Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from "./StateProvider";
import {animateScroll as scroll} from "react-scroll";


function Header() {
  const [{ basket }] = useStateValue();
   return(
     <nav className="header">
       <Link to="/Home page">
      <img
        className="header_logo"
        onClick={() => scroll.scrollToTop()}
        src="https://img.freepik.com/free-vector/happy-shop-logo-template_57516-57.jpg?size=626&ext=jpg"
        alt=""
      />
    </Link>

    {/* search box */}
    <div className="header_search">
<input type ="text" className="header_searchInput"/>
<SearchIcon className="header_searcIcon" />
</div>

<div className="header_nav">
 <Link to="/login" className="header_link">

   <div className="header_option">

     <span className="header_optionLineOne">Hello</span>
     <span className="header_optionLineTwo">Sign In</span>
 </div>
 </Link>

 <Link to="/" className="header_link">

   <div className="header_option">
     <span className="header_optionLineOne">Return</span>
     <span className="header_optionLineTwo">& order</span>
 </div>
 </Link>


 <Link to="/" className="header_link">

   <div className="header_option">
     <span className="header_optionLineOne">Your</span>
    <span className="header_optionLineTwo">Membership</span>
 </div>
 </Link>

 <Link to="/Checkout" className="header_link">
   <div className="header_optionBasket">
     <ShoppingCartIcon />
<span className="header_optionLineTwo header_basketCount">{basket?.length}</span>

   </div>
 </Link>


</div>

     </nav>
   )
}

export default Header;
