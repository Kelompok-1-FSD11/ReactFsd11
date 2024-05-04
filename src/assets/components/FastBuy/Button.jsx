import ListBeliCepat from '../json/belicepat';
import { useState } from 'react';

const ButtonBeliCepat = () => {
	const [clickedButton, setClickedButton] = useState(null);

	const handleButtonClick = (category) => {
		setClickedButton(category);
	};

	return (
		<div className='min-w-fit'>
			{ListBeliCepat.map((category) => (
				<button
					key={category.id}
					onClick={() => handleButtonClick(category)}
					className={`inline-block mr-4 mb-4 px-3 py-2 rounded w-fit min-w-fit space-x-3 items-center  text-white-smoke ${clickedButton === category ? 'border-2 border-cyan-blue-300 text-cyan-blue-300 bg-cyan-blue-200 bg-opacity-25' : 'border border-whisper hover:bg-cyan-blue-200 hover:bg-opacity-25 cursor-pointer'}`}
				>
					<p className='ds-text-base ds-leading-[18px] ds-font-bold sm:text-xl'>
						{category.label}
					</p>
				</button>
			))}
		</div>
	);
};

export default ButtonBeliCepat;
