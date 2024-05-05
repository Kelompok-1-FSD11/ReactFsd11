import { Fragment } from "react";


const TagA = (props) => {
    const {text="Dhemit Gaming",rate="4.7"} = props;
    return(
        <Fragment><a href="/t/dhemit-gaming?from=shop-section-homepage">
        <div className="w-full flex flex-col items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-qb-card-icon z-10">
            <img
            alt="https://files.itemku.com/icon/system-icon/avatar-toko.png"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="bg-white object-cover"
            sizes="100vw"
            src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Ficon%2Fsystem-icon%2Favatar-toko.png&w=1033&q=75"
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
            }}
            />
        </div>
        <div className="w-full h-[82px] bg-white rounded shadow-qb-card-icon -mt-6 pt-8 pb-3 px-3 flex flex-col">
            <div className="w-full text-center text-base text-nero font-normal line-clamp-1 leading-[18px]">
            {text}
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-1">
            <div className="h-5 flex justify-center">
                <span className="inline-block align-middle text-center text-charcoal font-bold text-lg">
                {rate}
                </span>
            </div>
            <div id="star-fill-icon" style={{ height: 20, width: 20 }}>
                <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M21.0002 9.88005C20.9386 9.69527 20.8245 9.53249 20.6717 9.41169C20.5189 9.29089 20.3342 9.21733 20.1402 9.20005L14.9802 8.75005L12.9202 4.00005C12.8434 3.81966 12.7152 3.66584 12.5516 3.55773C12.388 3.44961 12.1963 3.39197 12.0002 3.39197C11.8041 3.39197 11.6124 3.44961 11.4488 3.55773C11.2852 3.66584 11.157 3.81966 11.0802 4.00005L9.0802 8.74005L3.9102 9.20005C3.71621 9.21733 3.53148 9.29089 3.37871 9.41169C3.22593 9.53249 3.11176 9.69527 3.0502 9.88005C2.97651 10.0738 2.96484 10.2856 3.01679 10.4862C3.06874 10.6869 3.18176 10.8664 3.3402 11L7.2502 14.39L6.0802 19.39C6.04343 19.5766 6.06059 19.7697 6.12966 19.9468C6.19874 20.1239 6.31686 20.2777 6.4702 20.39C6.62854 20.5051 6.81716 20.5712 7.0127 20.5801C7.20823 20.589 7.40208 20.5403 7.5702 20.4401L12.0002 17.7801L16.4302 20.46C16.5856 20.5491 16.7611 20.5972 16.9402 20.6C17.152 20.6008 17.3586 20.5343 17.5302 20.41C17.6835 20.2977 17.8017 20.1439 17.8707 19.9668C17.9398 19.7897 17.957 19.5966 17.9202 19.41L16.7402 14.41L20.6502 11C20.8191 10.874 20.9439 10.6979 21.0067 10.4968C21.0696 10.2956 21.0673 10.0798 21.0002 9.88005Z"
                    fill="#FFBF00"
                />
                </svg>
            </div>
            </div>
        </div>
        </div>
    </a> 
        </Fragment>
    )
}


export default TagA;