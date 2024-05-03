import { Fragment } from "react";

const CrusorPointer = (props) => {
    const {children = "https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/hwrs5aeqdh8axc6rqurhrl.svg"} = props;
    return(
        <Fragment>
            <div className="flex px-5 py-3 items-center space-x-2 crusor-pointer rounded-t bg-cyan-blue-70/100 border-t border-r border-cyan-blue-200">
                <div className="w-8 h-8 overflow-clip">
                    <img src={children} alt="top up game" width={32} height={32} />
                </div>
            </div>
        </Fragment>
    )
}
// gambar diamon
// https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/hwrs5aeqdh8axc6rqurhrl.svg
export default CrusorPointer;