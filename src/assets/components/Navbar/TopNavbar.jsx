import React from "react";

const TopNavbar = (props) => {
    return (
        <a
            className="text-base font-sans-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer undefined"
            rel=""
            href="#"
            style={{ lineHeight: "1.125rem" }}
        >
            {props.itemName}
        </a>
    );
};

export default TopNavbar;
