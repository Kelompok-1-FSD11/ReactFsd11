const Social = () => {
	return (
        <>
            <div className='flex w-full justify-center pt-8 pb-4 px-4'>
                <div>
                    <p className='text-charcoal text-center font-normal text-base leading-4'>
                        Ikuti itemku{' '}
                    </p>
                    <div className='flex space-x-4 justify-center mt-2 items-center'>
                        <a
                            href='https://www.facebook.com/itemku'
                            rel='noreferrer'
                            target='_blank'
                            data-test='facebook-icon'
                        >
                            <img
                                alt='itemku facebook'
                                loading='lazy'
                                width={24}
                                height={24}
                                decoding='async'
                                data-nimg={1}
                                src='https://files.itemku.com/logo/social-media/facebook-square.svg'
                                style={{ color: 'transparent' }}
                            />
                        </a>
                        <a
                            href='https://www.instagram.com/itemku/'
                            rel='noreferrer'
                            target='_blank'
                            data-test='ig-icon'
                        >
                            <img
                                alt='itemku instagram'
                                loading='lazy'
                                width={24}
                                height={24}
                                decoding='async'
                                data-nimg={1}
                                src='https://files.itemku.com/logo/social-media/instagram-square.svg'
                                style={{ color: 'transparent' }}
                            />
                        </a>
                        <a
                            href='https://www.youtube.com/channel/UCivcD-ZzafzPgPZpAfVR2pA'
                            rel='noreferrer'
                            target='_blank'
                            data-test='youtube-icon'
                        >
                            <img
                                alt='itemku youtube'
                                loading='lazy'
                                width={24}
                                height={24}
                                decoding='async'
                                data-nimg={1}
                                src='https://files.itemku.com/logo/social-media/youtube-square.svg'
                                style={{ color: 'transparent' }}
                            />
                        </a>
                        <a
                            href='https://www.tiktok.com/@itemkuofficial'
                            rel='noreferrer'
                            target='_blank'
                            data-test='tiktok-icon'
                        >
                            <img
                                alt='itemku tiktok'
                                loading='lazy'
                                width={24}
                                height={24}
                                decoding='async'
                                data-nimg={1}
                                src='https://files.itemku.com/logo/social-media/tiktok-square.svg'
                                style={{ color: 'transparent' }}
                            />
                        </a>
                        <a
                            href='https://twitter.com/itemkuofficial'
                            rel='noreferrer'
                            target='_blank'
                            data-test='twitter-icon'
                        >
                            <img
                                alt='itemku twitter'
                                loading='lazy'
                                width={24}
                                height={24}
                                decoding='async'
                                data-nimg={1}
                                src='https://files.itemku.com/logo/social-media/twitter-square.svg'
                                style={{ color: 'transparent' }}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ds-border-b ds-border-whisper ds-w-full undefined" />
        </>
	);
};

export default Social
