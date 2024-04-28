import React from "react";
import TopNavbar from "./TopNavbar";
import Logo from "./Logo";
import Category from "./Button/Category";
import Search from "./Search";
import Cart from "./Button/Cart";
import SignUp from "./Button/SignUp";
import Login from "./Button/Login";

function Navbar() {
    return (
        <div>
            <div className="flex justify-end space-x-4 desktop-default:space-x-6 max-w-1440px mx-auto px-32">
                <TopNavbar itemName="🎉 Mainkan Giveaway" />
                <TopNavbar itemName="Promo" />
                <TopNavbar itemName="Itemku Play" />
                <TopNavbar itemName="Jualan di itemku" />
            </div>
            <div className="flex items-center justify-between pt-3  space-x-4 desktop-default:space-x-6 px-32 mx-auto max-w-1440px">
                <Logo />
                <div className="flex items-center w-full space-x-4">
                    <Category />
                    <Search />
                    <Cart />
                    <div className="h-10 border-r" />
                    <div className="flex items-center space-x-4">
                        <SignUp/>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
