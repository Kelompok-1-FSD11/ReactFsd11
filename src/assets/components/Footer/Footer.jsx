import Copyright from "./Copyright";
import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";

const Footer = () => {
    return (
        <div className="w-full mt-20 space-y-10 font-itemkuV2">
            <div className="-ml-32 -mr-32">
                <div className="ds-border-b ds-border-whisper ds-w-full undefined" />
            </div>
            <div className="flex w-full justify-between space-x-8 desktop-small:space-x-16">
                <FirstColumn />
                <SecondColumn />
            </div>
            <Copyright />
        </div>
    );
};

export default Footer;
