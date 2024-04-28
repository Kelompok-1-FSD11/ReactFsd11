import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";

const Footer = () => {
    return (
        <div className="flex w-full justify-between space-x-8 desktop-small:space-x-16">
            <FirstColumn/>
            <SecondColumn/>
        </div>
    );
};

export default Footer;
