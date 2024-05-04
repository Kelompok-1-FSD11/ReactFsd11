import ShowProduct from "./ShowProduct"

const BeliCepat = () => {
    return (
        <div>
            <div
                className='relative font-itemkuV2 w-screen my-8 py-6 flex justify-center bg-cyan-blue-800 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'
                style={{
                    backgroundImage:
                        'url("https://files.itemku.com/bg/quickbuy-bg.svg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: '70%',
                }}
            >
                <div className='max-w-1440px w-full px-32 -mt-10'>
                    <div className='left-0 right-0 w-full flex justify-center pointer-events-none'>
                        <div
                            className='absolute right-0 top-0 h-6 w-7/12 bg-white -mt-[1px]'
                            style={{
                                clipPath:
                                    'polygon(0px 0px, 100% 0px, 100% 100%, 24px 100%)',
                            }}
                        />
                    </div>
                    <div
                        className='absolute right-0 bottom-0 h-6 w-5/12 bg-white -mb-[1px]'
                        style={{
                            clipPath:
                                'polygon(24px 0px, 100% 0px, 100% 100%, 0px 100%)',
                        }}
                    />
                    <div className='flex justify-between items-end w-full relative'>
                        <div className='w-full'>
                            <div className='flex space-x-4 items-end'>
                                <div className='flex w-16 h-16 items-center justify-center'>
                                    <div className='absolute'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width={64}
                                            height={64}
                                            viewBox='0 0 64 64'
                                            fill='none'
                                        >
                                            <g filter='url(#filter0_b_9474_137668)'>
                                                <mask
                                                    id='path-1-inside-1_9474_137668'
                                                    fill='white'
                                                >
                                                    <path
                                                        fillRule='evenodd'
                                                        clipRule='evenodd'
                                                        d='M64 64H0V0H48L64 16V64Z'
                                                    />
                                                </mask>
                                                <path
                                                    fillRule='evenodd'
                                                    clipRule='evenodd'
                                                    d='M64 64H0V0H48L64 16V64Z'
                                                    fill='#EAF2FC'
                                                    fillOpacity='0.48'
                                                />
                                                <path
                                                    d='M0 64V65H-1V64H0ZM64 64H65V65H64V64ZM0 0H-1V-1H0V0ZM48 0V-1H48.4142L48.7071 -0.707108L48 0ZM64 16L64.7071 15.2929L65 15.5858V16H64ZM0 63H64V65H0V63ZM1 0V64H-1V0H1ZM48 1H0V-1H48V1ZM48.7071 -0.707108L64.7071 15.2929L63.2929 16.7071L47.2929 0.707108L48.7071 -0.707108ZM63 64V16H65V64H63Z'
                                                    fill='#307FE2'
                                                    mask='url(#path-1-inside-1_9474_137668)'
                                                />
                                                <path
                                                    d='M0 64V65H-1V64H0ZM64 64H65V65H64V64ZM0 0H-1V-1H0V0ZM48 0V-1H48.4142L48.7071 -0.707108L48 0ZM64 16L64.7071 15.2929L65 15.5858V16H64ZM0 63H64V65H0V63ZM1 0V64H-1V0H1ZM48 1H0V-1H48V1ZM48.7071 -0.707108L64.7071 15.2929L63.2929 16.7071L47.2929 0.707108L48.7071 -0.707108ZM63 64V16H65V64H63Z'
                                                    fill='white'
                                                    fillOpacity='0.75'
                                                    mask='url(#path-1-inside-1_9474_137668)'
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id='filter0_b_9474_137668'
                                                    x={-4}
                                                    y={-4}
                                                    width={72}
                                                    height={72}
                                                    filterUnits='userSpaceOnUse'
                                                    colorInterpolationFilters='sRGB'
                                                >
                                                    <feFlood
                                                        floodOpacity={0}
                                                        result='BackgroundImageFix'
                                                    />
                                                    <feGaussianBlur
                                                        in='BackgroundImageFix'
                                                        stdDeviation={2}
                                                    />
                                                    <feComposite
                                                        in2='SourceAlpha'
                                                        operator='in'
                                                        result='effect1_backgroundBlur_9474_137668'
                                                    />
                                                    <feBlend
                                                        mode='normal'
                                                        in='SourceGraphic'
                                                        in2='effect1_backgroundBlur_9474_137668'
                                                        result='shape'
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className='absolute'>
                                        <img
                                            alt='Beli Cepat'
                                            width={48}
                                            height={48}
                                            src='https://files.itemku.com/icon/product-icon/homepage-revamp/beli-cepat.svg'
                                            style={{ color: 'transparent' }}
                                        />
                                    </div>
                                </div>
                                <div className='relative'>
                                    <p
                                        className='ds-text-[21px] ds-leading-8 ds-font-bold text-4xl cursor-default pb-1 text-white'
                                    >
                                        Beli Cepat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='ds-relative'>
                            <div
                                className='ds-w-full ds-select-none scroll-hide ds-h-full ds-overflow-x-auto ds-overflow-y-hidden scrolling-touch'
                                style={{ cursor: 'auto' }}
                            >
                                <div className='ds-w-full ds-h-full ds-flex ds-flex-row'>
                                    <div className='ds-w-full ds-flex ds-flex-row undefined'>
                                        <div className='py-6 space-x-4 flex'>
                                            <ShowProduct/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{' '}
        </div>
    )
}


export default BeliCepat
