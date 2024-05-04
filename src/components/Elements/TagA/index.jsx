import { Fragment } from "react";


const TagA = (props) => {
    const {text="Dhemit Gaming",rate="4.7"} = props;
    return(
        <Fragment>
                <a href="#">
                    <div className="w-full flex flex-col items-center space-y-8 mx-12 bg-blue-400">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative bg-yellow-400 z-10">
                            <img src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Ficon%2Fsystem-icon%2Favatar-toko.png&w=375&q=75" alt="" />
                        </div>
                        <div className="w-full text-center text-base text-nero font-normal line-clamp-1">{text}</div>
                        <div className="h-6 flex  justify-center">
                            <span class="inline-block  align-middle text-center text-charcoal font-bold text-lg">{rate}</span>
                        </div>
                    </div>
                    
                </a>
        </Fragment>
    )
}

{/* 
                            
                            
                                
                            </div>
                        </div> */}
export default TagA;