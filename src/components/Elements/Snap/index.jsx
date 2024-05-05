const SnapImg = (props) => {
    const {children="High Domino", img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231129%2F4lv01exy4ft5r6v94j14uq.jpg&w=375&q=75"} = props;
    return(
        <a href="#">
            <div className="relative  cursor-pointer h-82 min-w-[120px] max-w-[127px] flex flex-col items-center ml-4">
                <div className="game mx-4 relative w-18 h-18 rounded overflow-hidden animate-none">
                    <img src={img} className="w-32 h-32" alt="High Domino" />                           
                </div>
                <div className="mx-3 my-2  bottom-5 h-10 w-24 flex justify-center items-center text-center animate-none">
                    <p className="ds-text-lg pt-5 ds-leading-5 ds-font-semibold text-black line-clamp-2">
                        {children}
                    </p>
                </div>
                <div className="absolute bottom-8  w-30 h-23 rounded overflow-hidden animate-none" style={{clipPath:"polygon(0% 0%, 86.7% 0%, 100% 17.4%, 100% 100%, 13.3% 100%, 0% 82.6%)", zIndex: "10"}}>
                    <div className="h-full w-full  bg-ghost-white  animate-none" />
                        <img src={img} className="w-32 h-32 object-cover opacity-30 " alt="High Domino" />
                </div>

            </div>
        </a>
        // <div className="snap-start">
        //     <div className="snap-start">
        //         <a href="#">
        //             <div className="relative crusor-pointer h-32 flex flex-col items-center justify-center">
        //                 <div className="game relative w-18 h-18 rounded overflow-hidden animate-none">
        //                     <img src={img} className="w-32 h-32" alt="High Domino" />
        //                 </div>
        //                 <div className="mx-3">
        //                     <p className="text-xs text-center justify-center font-bold">{children}</p>
        //                 </div>
        //             </div>
        //         </a>
        //     </div>
        // </div>
    )
}

export default SnapImg;