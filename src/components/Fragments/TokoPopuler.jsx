import { Fragment } from "react";
import CrusorPointer from "../Elements/CrusorPointer";
import TagA from "../Elements/TagA";

const TokoPopuler = () =>{
    return(
        <Fragment>
            <div class="flex space-x-3 px-4 pt-4">
                <div class="flex flex-col items-center cursor-pointer">
                    <div class="flex items-center bg-white">
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231129%2F4lv01exy4ft5r6v94j14uq.jpg&w=375&q=75" title="High Domino"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024425%2F8pro4l2xu4x8ih1ml6x2f.png&w=375&q=75" title="Mobile Legends"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2Fy4jqgkdbtbd3zfokbvtknb.jpg&w=375&q=75"title="PUBG Indonesia"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F202445%2Fx7a52tfr79kg3zviyep0yf.jpg&w=375&q=75"title="Solo Leveling"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024124%2Fr3pjzsht0ml980bat5nbni.png&w=375&q=75" title="Gesin Impact"/>
                        <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2F0o47cgd62lvcyj6242jugg.jpg&w=48&q=75"title="Roblox"/>
                    </div>
                </div>
            </div>
            <div className="pt-3 pb-4 px-4 bg-gradient-to-b from-[#CBDFF8] to-[#81B2EE] relative grid grid-cols-3 gap-2">
                  <TagA/>
                  <TagA text="Sip Idku" rate="4.74"/>
                  <TagA text="Bowok Store" rate="4.77"/>
            </div>

                    
        </Fragment>
    )
}

export default TokoPopuler;