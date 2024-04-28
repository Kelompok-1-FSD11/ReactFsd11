const Search = () => {
    return (
        <div className="relative w-full space-y-2">
                        <div className="flex w-full">
                            <div className="w-full flex items-center">
                                <div className="w-full h-full">
                                    <div className="rounded-[5px] h-full p-[1px] bg-gradient-to-r from-cyan-blue-500 to-persimmon-500">
                                        <div className="w-full relative px-4 py-2 bg-white h-full flex items-center transform duration-200 ease-in-out rounded">
                                            <div
                                                id="search-icon"
                                                className="flex-none"
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M20.2098 18.79L15.2098 13.79C16.1801 12.4645 16.6143 10.8216 16.4255 9.18984C16.2368 7.55805 15.4391 6.05763 14.1919 4.98859C12.9447 3.91954 11.34 3.36066 9.69854 3.42369C8.05709 3.48672 6.49992 4.16702 5.33838 5.32855C4.17684 6.49009 3.49655 8.04726 3.43352 9.68871C3.37049 11.3302 3.92937 12.9349 4.99841 14.1821C6.06746 15.4293 7.56788 16.227 9.19966 16.4157C10.8314 16.6044 12.4743 16.1703 13.7998 15.2L18.7998 20.2C18.8928 20.2937 19.0034 20.3681 19.1253 20.4189C19.2471 20.4697 19.3778 20.4958 19.5098 20.4958C19.6418 20.4958 19.7725 20.4697 19.8944 20.4189C20.0163 20.3681 20.1269 20.2937 20.2198 20.2C20.4048 20.0113 20.5075 19.7571 20.5056 19.4929C20.5038 19.2288 20.3974 18.976 20.2098 18.79ZM9.99983 14.5C9.10981 14.5 8.23978 14.2361 7.49976 13.7416C6.75974 13.2471 6.18297 12.5443 5.84237 11.7221C5.50178 10.8998 5.41266 9.99501 5.5863 9.1221C5.75993 8.24918 6.18851 7.44736 6.81785 6.81802C7.44718 6.18869 8.24901 5.7601 9.12192 5.58647C9.99484 5.41284 10.8996 5.50195 11.7219 5.84254C12.5442 6.18314 13.247 6.75991 13.7414 7.49994C14.2359 8.23996 14.4998 9.10999 14.4998 10C14.4972 11.1927 14.0222 12.3357 13.1789 13.1791C12.3356 14.0224 11.1925 14.4974 9.99983 14.5Z"
                                                        fill="#474747"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                className="outline-none ds-caret-cyan-blue-500 w-full px-2 text-lg z-10 bg-transparent"
                                                defaultValue=""
                                            />
                                            <div
                                                className="flex items-center px-1 mr-1 rounded-md bg-white-smoke text-[8px] text-suva-grey leading-5"
                                                style={{ paddingTop: 2 }}
                                            >
                                                ENTER{" "}
                                                <div
                                                    id="enter-key-icon"
                                                    className="ml-1"
                                                    style={{
                                                        height: 8,
                                                        width: 8,
                                                    }}
                                                >
                                                    <svg
                                                        viewBox="0 0 8 8"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.35323 3.68558C3.54849 3.49032 3.54849 3.17374 3.35323 2.97848C3.15797 2.78322 2.84138 2.78322 2.64612 2.97848L3.35323 3.68558ZM1.33301 4.9987L0.979454 4.64514C0.784192 4.84041 0.784192 5.15699 0.979454 5.35225L1.33301 4.9987ZM2.64612 7.01892C2.84138 7.21418 3.15797 7.21418 3.35323 7.01892C3.54849 6.82366 3.54849 6.50707 3.35323 6.31181L2.64612 7.01892ZM7.16634 1.33203C7.16634 1.05589 6.94248 0.832031 6.66634 0.832031C6.3902 0.832031 6.16634 1.05589 6.16634 1.33203H7.16634ZM5.33301 4.9987V5.4987V4.9987ZM2.64612 2.97848L0.979454 4.64514L1.68656 5.35225L3.35323 3.68558L2.64612 2.97848ZM0.979454 5.35225L2.64612 7.01892L3.35323 6.31181L1.68656 4.64514L0.979454 5.35225ZM6.16634 1.33203V3.66536H7.16634V1.33203H6.16634ZM6.16634 3.66536C6.16634 3.88638 6.07854 4.09834 5.92226 4.25462L6.62937 4.96173C6.97319 4.61791 7.16634 4.15159 7.16634 3.66536H6.16634ZM5.92226 4.25462C5.76598 4.4109 5.55402 4.4987 5.33301 4.4987V5.4987C5.81924 5.4987 6.28555 5.30554 6.62937 4.96173L5.92226 4.25462ZM5.33301 4.4987H1.33301V5.4987H5.33301V4.4987Z"
                                                            fill="#909090"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 left-12  h-full flex items-center z-0 select-none">
                                                <div className="text-suva-grey animate-typing overflow-x-hidden flex-none whitespace-nowrap">
                                                    <div className="pr-2">
                                                        Coba cari Hero
                                                    </div>
                                                </div>
                                                <div className="w-full border-l border-cyan-blue-500 h-5 animate-blinking" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute flex space-x-4 truncate"
                            style={{ width: 805 }}
                        >
                            <a
                                className="text-base font-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer bg-white-smoke px-2 py-[3px] text-dim-grey rounded"
                                rel="noreferrer"
                                target="_self"
                                href="/g/roblox/robux-5-hari?search_keyword=Robux&amp;searchquery=Robux&amp;from=searchpopular&amp;search_type=itemType"
                                style={{ lineHeight: "1.125rem" }}
                            >
                                Robux
                            </a>
                            <a
                                className="text-base font-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer bg-white-smoke px-2 py-[3px] text-dim-grey rounded"
                                rel="noreferrer"
                                target="_self"
                                href="/g/growtopia/lock/diamond-lock?search_keyword=Diamond%20Lock&amp;searchquery=Diamond%20Lock&amp;from=searchpopular&amp;search_type=itemInfo&amp;page=1"
                                style={{ lineHeight: "1.125rem" }}
                            >
                                Diamond Lock
                            </a>
                            <a
                                className="text-base font-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer bg-white-smoke px-2 py-[3px] text-dim-grey rounded"
                                rel="noreferrer"
                                target="_self"
                                href="/g/mobile-legends/akun?search_keyword=Akun%20ML&amp;searchquery=Akun%20ML&amp;from=searchpopular&amp;search_type=itemType"
                                style={{ lineHeight: "1.125rem" }}
                            >
                                Akun ML
                            </a>
                            <a
                                className="text-base font-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer bg-white-smoke px-2 py-[3px] text-dim-grey rounded"
                                rel="noreferrer"
                                target="_self"
                                href="/g/mobile-legends/top-up/weekly-diamond-pass?search_keyword=Weekly%20Pass%20ML&amp;searchquery=Weekly%20Pass%20ML&amp;from=searchpopular&amp;search_type=itemInfo&amp;region=id&amp;page=1&amp;group=27"
                                style={{ lineHeight: "1.125rem" }}
                            >
                                Weekly Pass ML
                            </a>
                        </div>
                    </div>
    )
}

export default Search