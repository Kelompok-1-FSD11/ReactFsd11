const SingleColumnCard = (props) => {
    return (
        <div>
            <div className="grid grid-col-1 gap-y-6 mr-6">
                <a href="#">
                    <div className="mr-1 ml-1 mt-1 h-30 w-22">
                        <div className="cursor-pointer flex flex-col items-center [&>div>div.dope>img]:hover:scale-110 active:[&>div>div.dope>img]:scale-100 [&>div.dope-wrapper]:hover:shadow-lg [&>div.dope-wrapper]:hover:bg-gradient-to-br  [&>div.dope-wrapper]:hover:from-transparent [&>div.dope-wrapper]:hover:via-[#dddddd] [&>div.dope-wrapper]:hover:to-[#dddddd53] ">
                            <div className="dope-wrapper transition-all animate-none h-[72px] w-18 drop-shadow-sm">
                                <div
                                    className="dope relative w-full h-full flex items-center justify-center"
                                    style={{
                                        clipPath:
                                            "polygon(16% 0%, 100% 0%, 100% 84%, 84% 100%, 0% 100%, 0% 16%)",
                                    }}
                                >
                                    <img
                                        alt={props.name1}
                                        width={72}
                                        height={72}
                                        srcSet={props.linkSet1}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                            </div>
                            <div className="font-itemkuV2 text-lg text-charcoal text-center break-words leading-5 mt-2 w-22 line-clamp-2">
                                {props.name1}
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="mr-1 ml-1 mt-1 h-30 w-22">
                        <div className="cursor-pointer flex flex-col items-center [&>div>div.dope>img]:hover:scale-110 active:[&>div>div.dope>img]:scale-100 [&>div.dope-wrapper]:hover:shadow-lg [&>div.dope-wrapper]:hover:bg-gradient-to-br  [&>div.dope-wrapper]:hover:from-transparent [&>div.dope-wrapper]:hover:via-[#dddddd] [&>div.dope-wrapper]:hover:to-[#dddddd53] ">
                            <div className="dope-wrapper transition-all animate-none h-[72px] w-18 drop-shadow-sm">
                                <div
                                    className="dope relative w-full h-full flex items-center justify-center"
                                    style={{
                                        clipPath:
                                            "polygon(16% 0%, 100% 0%, 100% 84%, 84% 100%, 0% 100%, 0% 16%)",
                                    }}
                                >
                                    <img
                                        alt={props.name2}
                                        width={72}
                                        height={72}
                                        srcSet={props.linkSet2}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <div className="relative -mt-[76px] -ml-1">
                                    
                                </div>
                            </div>
                            <div className="font-itemkuV2 text-lg text-charcoal text-center break-words leading-5 mt-2 w-22 line-clamp-2">
                                {props.name2}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default SingleColumnCard