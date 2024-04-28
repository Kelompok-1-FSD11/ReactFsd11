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
                                href="#"
                                style={{ lineHeight: "1.125rem" }}
                            >
                                Robux
                            </a>
                            <a
                                className="text-base font-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer bg-white-smoke px-2 py-[3px] text-dim-grey rounded"
                                rel="noreferrer"
                                target="_self"
                                href="#"
                                style={{ lineHeight: "1.125rem" }}
                            >
                                Diamond Lock
                            </a>
                            <a
                                className="text-base font-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer bg-white-smoke px-2 py-[3px] text-dim-grey rounded"
                                rel="noreferrer"
                                target="_self"
                                href="#"
                                style={{ lineHeight: "1.125rem" }}
                            >
                                Akun ML
                            </a>
                            <a
                                className="text-base font-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer bg-white-smoke px-2 py-[3px] text-dim-grey rounded"
                                rel="noreferrer"
                                target="_self"
                                href="#"
                                style={{ lineHeight: "1.125rem" }}
                            >
                                Weekly Pass ML
                            </a>
                        </div>
                    </div>
    )
}

export default Search