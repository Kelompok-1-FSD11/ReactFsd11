const HeadingContainer = (props) => {
    const {img="https://files.itemku.com/icon/product-icon/homepage-revamp/kategori-populer.svg"} = props;
    return(
        <div className="flex justify-between items-end w-full">
            <div className="w-full">
                <div className="flex space-x-4 items-end">
                    <div className="flex w-16 h-16 items-center justify-center">
                        <div class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <g filter="url(#filter0_b_9474_137668)">
                                    <mask id="path-1-inside-1_9474_137668" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64 64H0V0H48L64 16V64Z"></path>
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64 64H0V0H48L64 16V64Z" fill="#EAF2FC" fill-opacity="0.48"></path>
                                    <path d="M0 64V65H-1V64H0ZM64 64H65V65H64V64ZM0 0H-1V-1H0V0ZM48 0V-1H48.4142L48.7071 -0.707108L48 0ZM64 16L64.7071 15.2929L65 15.5858V16H64ZM0 63H64V65H0V63ZM1 0V64H-1V0H1ZM48 1H0V-1H48V1ZM48.7071 -0.707108L64.7071 15.2929L63.2929 16.7071L47.2929 0.707108L48.7071 -0.707108ZM63 64V16H65V64H63Z" fill="#307FE2" mask="url(#path-1-inside-1_9474_137668)"></path>
                                    <path d="M0 64V65H-1V64H0ZM64 64H65V65H64V64ZM0 0H-1V-1H0V0ZM48 0V-1H48.4142L48.7071 -0.707108L48 0ZM64 16L64.7071 15.2929L65 15.5858V16H64ZM0 63H64V65H0V63ZM1 0V64H-1V0H1ZM48 1H0V-1H48V1ZM48.7071 -0.707108L64.7071 15.2929L63.2929 16.7071L47.2929 0.707108L48.7071 -0.707108ZM63 64V16H65V64H63Z" fill="white" fill-opacity="0.75" mask="url(#path-1-inside-1_9474_137668)"></path>
                                </g>
                                <defs>
                                    <filter id="filter0_b_9474_137668" x="-4" y="-4" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur>
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9474_137668"></feComposite>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9474_137668" result="shape"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="abssolute">
                            <img src={img} alt="Kategori Populer" width={48} height={48} />
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-3xl font-bold">Kategori Populer</p>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default HeadingContainer;