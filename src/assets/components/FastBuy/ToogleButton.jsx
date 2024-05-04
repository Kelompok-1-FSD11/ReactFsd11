const ToggleShowItemsButton = ({ showAll, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='px-4 py-2 rounded border border-cyan-blue-300 text-cyan-blue-300 bg-cyan-blue-200 bg-opacity-25 hover:bg-opacity-50 cursor-pointer'
		>
			{showAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
		</button>
	);
};

export default ToggleShowItemsButton;
