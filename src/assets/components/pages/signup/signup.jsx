const SignUp = () => {
	return (
		<div className='min-h-screen mx-auto bg-white max-w-600px'>
			<div className='__variable_f34e9f __variable_daef00 font-itemku'>
				<div className=''>
					<main>
						<div>
							<div className='pb-6'>
								<div className='w-full max-w-600px sticky top-0 shadow-bottom'>
									<div
										role='group'
										aria-label='Header Container'
										className='ds-flex ds-w-full ds-capitalize ds-items-center ds-h-12 ds-text-xl ds-px-4 ds-z-10 ds-font-normal bg-white  ds-border-none ds-shadow-bottom '
									>
										<div className='w-full flex truncate'>
											<div
												role='button'
												aria-label='Go To Previous Page'
												title='Go To Previous Page'
												className='flex flex-none justify-center z-10 pr-3 bg-white'
											>
												<button className='ds-align-middle ds-justify-center ds-items-center ds-cursor-pointer ds-text-lg ds-capitalize undefined'>
													<div
														id='arrow-left-icon'
														style={{
															height: 24,
															width: 24,
														}}
													>
														<svg
															viewBox='0 0 24 24'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M18.9999 11H7.4099L12.7099 5.71C12.8036 5.61704 12.878 5.50644 12.9288 5.38458C12.9796 5.26272 13.0057 5.13201 13.0057 5C13.0057 4.86799 12.9796 4.73728 12.9288 4.61542C12.878 4.49356 12.8036 4.38296 12.7099 4.29C12.6169 4.19627 12.5063 4.12188 12.3845 4.07111C12.2626 4.02034 12.1319 3.9942 11.9999 3.9942C11.8679 3.9942 11.7372 4.02034 11.6153 4.07111C11.4935 4.12188 11.3829 4.19627 11.2899 4.29L4.2899 11.29C4.19886 11.3851 4.12749 11.4972 4.0799 11.62C3.97988 11.8635 3.97988 12.1365 4.0799 12.38C4.12749 12.5028 4.19886 12.6149 4.2899 12.71L11.2899 19.71C11.4782 19.8983 11.7336 20.0041 11.9999 20.0041C12.2662 20.0041 12.5216 19.8983 12.7099 19.71C12.8982 19.5217 13.004 19.2663 13.004 19C13.004 18.7337 12.8982 18.4783 12.7099 18.29L7.4099 13H18.9999C19.2651 13 19.5195 12.8946 19.707 12.7071C19.8945 12.5196 19.9999 12.2652 19.9999 12C19.9999 11.7348 19.8945 11.4804 19.707 11.2929C19.5195 11.1054 19.2651 11 18.9999 11Z'
																fill='#474747'
															/>
														</svg>
													</div>
												</button>
											</div>
											<div
												className='flex flex-row space-x-2 items-center cursor-default relative'
												style={{
													transform:
														'translateX(0px)',
													transition:
														'all 1000ms linear 0s',
												}}
											>
												<h1 className='truncate'>
													<span className='hidden' />{' '}
													Daftar
												</h1>
											</div>
										</div>
										<div className='flex space-x-3 mr-0 ml-auto' />
									</div>
								</div>
								<div className='px-4'>
									<div className='mt-8 space-y-4 max-w-400px mx-auto'>
										<div>
											<div
												id='g_id_signin'
												data-type='standard'
												className='w-full h-40px flex justify-center border rounded-lg overflow-hidden border-charcoal font-light leading-6'
											>
												<div
													className='S9gUrf-YoZ4jf'
													style={{
														position: 'relative',
													}}
												>
													<div />
													<iframe
														src='https://accounts.google.com/gsi/button?theme=outline&size=large&shape=rectangular&logo_alignment=center&text=signup_with&width=400&client_id=912636350905-m0m08kaami7dslumuosi8oga6bf0ti5f.apps.googleusercontent.com&iframe_id=gsi_214887_385209&as=pkAztYhUjfNM4RmxPlsD1g&hl=id-ID'
														allow='identity-credentials-get'
														id='gsi_214887_385209'
														title='Tombol Login dengan Google'
														style={{
															display: 'block',
															position:
																'relative',
															top: 0,
															left: 0,
															height: 44,
															width: 420,
															border: 0,
															margin: '-2px -10px',
														}}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className='mt-6 items-center flex'>
										<div className='ds-border-b ds-border-whisper ds-w-full undefined' />
										<p className='mx-2 text-base text-charcoal flex-none text-center min-w-106px'>
											atau daftar dengan
										</p>
										<div className='ds-border-b ds-border-whisper ds-w-full undefined' />
									</div>
									<div className='mt-6 pb-2'>
										<div className=' ds-flex ds-flex-col'>
											<p className='ds-text-lg ds-text-charcoal ds-mb-1'>
												Email
											</p>
											<div className='ds-relative ds-w-full'>
												<input
													placeholder='contohemail@mail.com'
													type='text'
													className='focus:ds-outline-none ds-text-lg ds-w-full ds-bg-transparent ds-text-nero ds-caret-cyan-blue-500 ds-pb-2 ds-border-b-charcoal focus-within:ds-border-b-cyan-blue-500 ds-border-b ds-pl-1 ds-pr-1 ds-px-1 '
													defaultValue=''
												/>
											</div>
										</div>
									</div>
									<div className='mt-6 pb-2'>
										<div className=' ds-flex ds-flex-col'>
											<p className='ds-text-lg ds-text-charcoal ds-mb-1'>
												Password
											</p>
											<div className='ds-relative ds-w-full'>
												<input
													placeholder=''
													type='password'
													className='focus:ds-outline-none ds-text-lg ds-w-full ds-bg-transparent ds-text-nero ds-caret-cyan-blue-500 ds-pb-2 ds-border-b-charcoal focus-within:ds-border-b-cyan-blue-500 ds-border-b ds-pl-1 ds-pr-9  '
													defaultValue=''
												/>
												<span className='ds-absolute ds-text-nero ds-text-lg ds-top-2/3 -ds-translate-y-3/4 ds-right-1'>
													<div className='ds-cursor-pointer -ds-mt-px'>
														<div
															id='eye-close-icon'
															style={{
																height: 24,
																width: 24,
															}}
														>
															<svg
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	d='M22 8C22 7.73478 21.8946 7.48043 21.7071 7.29289C21.5196 7.10536 21.2652 7 21 7C20.7348 7 20.4804 7.10536 20.2929 7.29289C20.1054 7.48043 20 7.73478 20 8C20 10.71 16.34 13 12 13C7.66 13 4 10.71 4 8C4 7.73478 3.89464 7.48043 3.70711 7.29289C3.51957 7.10536 3.26522 7 3 7C2.73478 7 2.48043 7.10536 2.29289 7.29289C2.10536 7.48043 2 7.73478 2 8C2.06267 9.07573 2.39978 10.1175 2.97919 11.026C3.55861 11.9345 4.36104 12.6795 5.31 13.19L4.63 14.37C4.49963 14.5996 4.46536 14.8715 4.53468 15.1263C4.604 15.3811 4.77127 15.5981 5 15.73C5.11354 15.7965 5.23909 15.84 5.36946 15.8579C5.49983 15.8758 5.63246 15.8678 5.75973 15.8344C5.887 15.8009 6.00643 15.7427 6.11115 15.663C6.21587 15.5833 6.30384 15.4838 6.37 15.37L7.1 14.1C8.34545 14.6005 9.66119 14.9041 11 15V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V15C14.3152 14.9163 15.61 14.633 16.84 14.16L17.63 15.54C17.6957 15.6543 17.7832 15.7544 17.8876 15.8349C17.992 15.9153 18.1112 15.9744 18.2384 16.0087C18.3656 16.0431 18.4983 16.0521 18.629 16.0351C18.7597 16.0182 18.8857 15.9757 19 15.91C19.1143 15.8443 19.2144 15.7568 19.2949 15.6524C19.3753 15.548 19.4344 15.4288 19.4687 15.3016C19.5031 15.1744 19.5121 15.0417 19.4951 14.911C19.4782 14.7803 19.4357 14.6543 19.37 14.54L18.63 13.27C19.5988 12.7572 20.4184 12.0023 21.0089 11.0788C21.5995 10.1552 21.9409 9.09459 22 8Z'
																	fill='#474747'
																/>
															</svg>
														</div>
													</div>
												</span>
											</div>
										</div>
									</div>
									<div className='mt-6 pb-2'>
										<div className=' ds-flex ds-flex-col'>
											<p className='ds-text-lg ds-text-charcoal ds-mb-1'>
												Kode Referal (optional)
											</p>
											<div className='ds-relative ds-w-full'>
												<input
													placeholder=''
													type='text'
													className='focus:ds-outline-none ds-text-lg ds-w-full ds-bg-transparent ds-text-nero ds-caret-cyan-blue-500 ds-pb-2 ds-border-b-charcoal focus-within:ds-border-b-cyan-blue-500 ds-border-b ds-pl-1 ds-pr-1 ds-px-1 '
													defaultValue=''
												/>
											</div>
										</div>
									</div>
									<div className='mt-6 justify-center flex'>
										<button className='ds-align-middle ds-justify-center ds-items-center ds-cursor-pointer ds-text-lg ds-capitalize ds-bg-cyan-blue-500  ds-px-5 ds-w-full ds-h-10 ds-rounded-lg ds-text-white ds-font-bold ds-flex ds-flex-row ds-justify-center ds-items-center false'>
											<div className='ds-flex ds-flex-row-reverse'>
												<span
													className='ds-leading-4 ds-self-center 
      '
												>
													Daftar
												</span>
											</div>
										</button>
									</div>
									<div className='text-base text-normal text-nero text-center w-full mt-2'>
										Dengan mendaftar saya menyetujui
										<a
											href='/aturan-penggunaan'
											className='no-underline text-cyan-blue-500'
											target='_blank'
											rel='noreferrer'
										>
											{' '}
											Aturan Penggunaan{' '}
										</a>
										dan
										<a
											href='/kebijakan-privasi'
											className='no-underline text-cyan-blue-500'
											target='_blank'
											rel='noreferrer'
										>
											{' '}
											Kebijakan Privasi{' '}
										</a>
										itemku
									</div>
									<div className='mt-20 flex justify-center items-baseline'>
										<p className='font-normal justify-self-center text-base mr-1'>
											Sudah punya akun?
										</p>
										<button className='ds-align-middle ds-justify-center ds-items-center ds-cursor-pointer ds-text-lg ds-capitalize bg-transparent text-cyan-blue-500 font-bold flex flex-row justify-center items-center undefined'>
											<div className='flex flex-row-reverse justify-center items-center'>
												<div className='ds-h-4 ds-leading-tight ds-self-center'>
													Login
												</div>
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col justify-center items-center w-full mx-auto' />
					</main>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
