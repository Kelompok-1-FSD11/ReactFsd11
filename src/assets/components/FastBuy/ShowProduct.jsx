import ListBeliCepat from '../api/belicepat';
import { useState } from 'react';

const ShowProduct = () => {
	const [clickedButton, setClickedButton] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(ListBeliCepat[0]);

	const handleButtonClickAndCategory = (category) => {
		setClickedButton(category);
		setSelectedCategory(category);
	};

	return (
		<div>
			<div className='min-w-fit'>
				{ListBeliCepat.map((category) => (
					<button
						key={category.id}
						onClick={() => handleButtonClickAndCategory(category)}
						className={`inline-block mr-4 mb-4 px-3 py-2 rounded w-fit min-w-fit space-x-3 items-center  text-white-smoke ${
							clickedButton === category
								? 'border-2 border-cyan-blue-300 text-cyan-blue-300 bg-cyan-blue-200 bg-opacity-25'
								: 'border border-whisper hover:bg-cyan-blue-200 hover:bg-opacity-25 cursor-pointer'
						}`}
					>
						<p className='ds-text-base ds-leading-[18px] ds-font-bold sm:text-xl'>
							{category.label}
						</p>
					</button>
				))}
			</div>
			<div className='flex flex-wrap gap-6 mb-6'>
				{selectedCategory &&
					selectedCategory.products.map((product) => (
						<div
							key={product['product-name']}
							className='relative cursor-pointer h-32 min-w-[120px] max-w-[127px] flex flex-col items-center [&>div.game>img]:hover:scale-110 active:[&>div.game>img]:scale-100 z-10'
						>
							<div className='game relative w-18 h-18 rounded overflow-hidden shadow-qb-card-icon animate-none'>
								<img
									alt={product['product-name']}
									className='bg-white transition-all object-contain'
									sizes='100vw'
									srcSet={product.src}
									src={product.src}
									style={{
										position: 'absolute',
										height: '100%',
										width: '100%',
										inset: 0,
										color: 'transparent',
									}}
								/>
							</div>
							<div className='mx-3 my-2 h-10 w-24 flex justify-center items-center text-center animate-none'>
								<p className='ds-text-lg ds-leading-5 ds-font-semibold text-white line-clamp-2'>
									{product['product-name']}
								</p>
							</div>
							<div
								className='absolute bottom-0 w-30 h-23 rounded overflow-hidden -z-10 animate-none'
								style={{
									clipPath:
										'polygon(0% 0%, 86.7% 0%, 100% 17.4%, 100% 100%, 13.3% 100%, 0% 82.6%)',
								}}
							>
								<div className='h-full w-full bg-[linear-gradient(180deg,rgba(24,89,170,0.24)_0%,rgba(24,89,170,0.94)_56.97%)]' />
								<img
									alt={product['product-name']}
									loading='lazy'
									width={120}
									height={120}
									decoding='async'
									data-nimg={1}
									className='absolute bottom-0 w-42 h-42 blur-sm -z-10 bg-ghost-white object-contain'
									srcSet={product.src}
									style={{ color: 'transparent' }}
								/>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ShowProduct;
