import MediaQuery from 'react-responsive';
import Copyright from './Copyright';
import FirstColumn from './FirstColumn/FirstColumn';
import SecondColumn from './SecondColumn/SecondColumn';
import MobilePaymentMethod from './Mobile/PaymentMethod';
import Information from './Mobile/Information';
import Separator from './Mobile/Separator';
import About from './Mobile/About';
import Social from './Mobile/Social';
import CopyrightMobile from './Mobile/CopyrightMobile';

const Footer = () => {
	return (
		<>
            <MediaQuery maxWidth={1023}>
                <Separator/>
				<MobilePaymentMethod/>
                <Separator/>
                <Information/>
                <Separator/>
                <About/>
                <Separator/>
                <Social/>
                <CopyrightMobile/>
			</MediaQuery>
			<MediaQuery minWidth={1024}>
				<div className='w-full mt-20 space-y-10 font-itemkuV2'>
					<div className='-ml-32 -mr-32'>
						<div className='ds-border-b ds-border-whisper ds-w-full undefined' />
					</div>
					<div className='flex w-full justify-between space-x-8 desktop-small:space-x-16'>
						<FirstColumn />
						<SecondColumn />
					</div>
					<Copyright />
				</div>
			</MediaQuery>
		</>
	);
};

export default Footer;
