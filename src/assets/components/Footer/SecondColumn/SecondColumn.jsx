import MediaQuery from 'react-responsive';
import FirstColumnHeader from '../FirstColumn/FirstColumnHeader';
import FooterIcon from './FooterIcon';
import FooterImg from './FooterImg';
import SocialIcon from './SocialIcon';
import ListIconFooter from '../../services/icon/ListIconSocial';
import ListIconPayment from '../../services/icon/ListIconPayment';

const SecondColumn = () => {
	return (
		<div className='flex w-full flex-row space-x-8'>
			<div className='space-y-3 flex flex-col w-full'>
				<FirstColumnHeader footerName={'Metode Pembayaran'} />
				<div className='grid grid-cols-4 gap-4'>
					{ListIconPayment.map((payment) => (
						<FooterIcon
							key={payment.id}
							alt={payment.name}
							src={payment.imgSrc}
						/>
					))}
				</div>
			</div>
			<div className='space-y-10 w-full flex flex-col'>
				<div className='space-y-3'>
					<p className='text-lg font-bold text-nero'>Ikuti Itemku </p>
					<div className='flex space-x-2 items-center'>
						{ListIconFooter.map((category) => (
							<SocialIcon
								key={category.id}
								link={category.link}
								src={category.imgSrc}
							/>
						))}
					</div>
				</div>
				<MediaQuery minWidth={1440}>
					<FooterImg />
				</MediaQuery>
			</div>
		</div>
	);
};

export default SecondColumn;
