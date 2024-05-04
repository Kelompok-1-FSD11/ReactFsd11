import { Fragment } from "react";

const CrusorPointer = (props) => {
    const {img ="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/hwrs5aeqdh8axc6rqurhrl.svg", title="Top Up Game"} = props;
    return(
        <Fragment>
            <div className="flex px-5 py-3 items-center space-x-2 cursor-pointer rounded-t bg-cyan-blue-100/75 border-t border-r border-l border-cyan-blue-200">
                <div className="w-8 h-8 overflow-clip">
                <img alt="Top Up Game" loading="lazy"
                width={32}
                height={32}
                decoding="async"
                data-nimg={1}
                className=" "
                src={img}
                style={{ color: "transparent" }}
                />
                </div>
                <p className="ds-text-xl ds-leading-6 ds-font-bold undefined"> {title}</p>
            </div>

        </Fragment>
    )
}
// gambar diamon
// https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/hwrs5aeqdh8axc6rqurhrl.svg
export default CrusorPointer;