import React from "react";

const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <span
                style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: 130,
                    height: 40,
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                }}
            >
                <img
                    alt="logo-itemku"
                    src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fitemku%2Fitemku-logo-color-transparent.png&w=375&q=75"
                    data-nimg="fixed"
                    className="cursor-pointer"
                    srcSet="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fitemku%2Fitemku-logo-color-transparent.png&w=140&q=75 1x, https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fitemku%2Fitemku-logo-color-transparent.png&w=375&q=75 2x"
                    style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                    }}
                />
            </span>
        </div>
    );
};

export default Logo;
