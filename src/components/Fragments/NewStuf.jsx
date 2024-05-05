import { Fragment } from "react";
import SnapImg from "../Elements/Snap";

const NewStuf = () =>{
    return(
        <Fragment>
             <div className="space-x-6 bg-cyan-100 border-cyan-200 rounded-b border-b border-r border-l">
                    <div className="w-full py-2">
                        <div className="undifined">
                            <div className="relative flex items-center">
                                <div className="relative hide-scroll-view flex flex-nowrap w-full items-center overflow-x-scroll scroll-smooth transform snap-x overflow-y-clip">
                                    <div className="flex space-x-4">
                                        <SnapImg>High Domino</SnapImg>
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F202453%2Fcz2paypoessfvlsf71o7vj.webp&w=375&q=75">Legend of Mushroom</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024417%2Ftskelvai4qrauxk6ftpptl.png&w=375&q=75">Moonlight Blade</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F202445%2Fx7a52tfr79kg3zviyep0yf.jpg&w=375&q=75">Solo Leveling</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024124%2Fr3pjzsht0ml980bat5nbni.png&w=375&q=75">Genshin Impact</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F202443%2Fqikh3y0vbc7tb5drgk6z7.jpg&w=390&q=75">Seven Knight</SnapImg>                                   
                                        <SnapImg img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F202444%2Fnlhu5si0ztfirys4cbnjo.png&w=375&q=75">Dragon Nest Throne</SnapImg>                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default NewStuf;