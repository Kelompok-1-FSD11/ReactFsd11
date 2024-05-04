import { Fragment } from "react";
import CrusorPointer from "../Elements/CrusorPointer";
import TagA from "../Elements/TagA";

const TokoPopuler = () =>{
    return(
        <Fragment>
            <div class="flex space-x-3 px-4 pt-4">
                <div class="flex flex-col items-center cursor-pointer">
                    <div class="flex items-center bg-white">
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231129%2F4lv01exy4ft5r6v94j14uq.jpg&w=375&q=75"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024425%2F8pro4l2xu4x8ih1ml6x2f.png&w=375&q=75"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2Fy4jqgkdbtbd3zfokbvtknb.jpg&w=375&q=75"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F202445%2Fx7a52tfr79kg3zviyep0yf.jpg&w=375&q=75"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024124%2Fr3pjzsht0ml980bat5nbni.png&w=375&q=75"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2F0o47cgd62lvcyj6242jugg.jpg&w=48&q=75"/>
                    </div>
                </div>
            </div>
            <div className="pt-3 pb-4 px-4 relative flex bg-cyan-100 flex-row items-center gap-2">
                <TagA/>
                <TagA text="Rafa Gaming" rate="4.9"/>
                <TagA text="Joker Gaming" rate="5.0"/>
            </div>
                    
        </Fragment>
    )
}

export default TokoPopuler;