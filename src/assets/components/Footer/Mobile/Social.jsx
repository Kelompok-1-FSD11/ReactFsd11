import ListIconSocial from '../../services/icon/ListIconSocial';

const Social = () => {
	return (
		<>
			<div className='flex w-full justify-center pt-8 pb-4 px-4'>
				<div>
					<p className='text-charcoal text-center font-normal text-base leading-4'>
						Ikuti itemku{' '}
					</p>
					<div className='flex space-x-4 justify-center mt-2 items-center'>
						{ListIconSocial.map((social) => (
							<a
								key={social.id}
								href={social.link}
								rel='noreferrer'
								target='_blank'
								data-test={social.alt}
							>
								<img
									alt={social.name}
									loading='lazy'
									width={24}
									height={24}
									decoding='async'
									data-nimg={1}
									src={social.imgSrc}
									style={{ color: 'transparent' }}
								/>
							</a>
						))}
					</div>
				</div>
			</div>
			<div className='ds-border-b ds-border-whisper ds-w-full undefined' />
		</>
	);
};

export default Social;
