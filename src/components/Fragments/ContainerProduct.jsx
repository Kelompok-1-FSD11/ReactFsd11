import { Fragment } from "react";
import CrusorPointer from "../Elements/CrusorPointer";
import SnapImg from "../Elements/Snap";
const ContainerProduct = () => {
    return(
        <Fragment>
            <div className="flex mt-6">
                <CrusorPointer/>
                <CrusorPointer img="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/dg5frlof3qo30u8st1gcs.svg" title="akun"/>
                <CrusorPointer img="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/gwoqgq42u4rwxtprhe8oo.svg" title="Vhoucher & Game Key"/>
                <CrusorPointer img="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/6guieyhqvoi4zc0v9r84sc.svg" title="Koin Game"/>
                <CrusorPointer img="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/507fm72v5sn1th89seopsq.svg" title="Item"/>
            </div> 
                <div className="space-x-6 bg-cyan-100 border-cyan-200 rounded-b border-b border-r border-l">
                    <div className="w-full py-2">
                        <div className="undifined">
                            <div className="relative flex items-center">
                                <div className="relative hide-scroll-view flex flex-nowrap w-full items-center overflow-x-scroll scroll-smooth transform snap-x overflow-y-clip">
                                    <div className="flex space-x-4">
                                        <SnapImg>High Domino</SnapImg>
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024425%2F8pro4l2xu4x8ih1ml6x2f.png&w=375&q=75">Mobile Legend</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2Fy4jqgkdbtbd3zfokbvtknb.jpg&w=375&q=75">PUBG Mobile Indonesia</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231130%2F54syz1hfqdslfn0jpltdaa.png&w=375&q=75">Point Blank Byound limits</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024124%2Fr3pjzsht0ml980bat5nbni.png&w=375&q=75">Genshin Impact</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2Fqlb49pvpfwaxhi4im32tu.jpg&w=375&q=75">Free Fire</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2Fj2bqga0lpr8cax0641gscr.jpg&w=375&q=75">growtopia</SnapImg>                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
export default ContainerProduct;