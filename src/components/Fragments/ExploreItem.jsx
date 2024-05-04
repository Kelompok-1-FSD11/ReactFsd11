import { Fragment } from "react";
import HeadingContainer from "../Elements/Heading";
import IsiExplore from "../Elements/IsiExplore";
import CrusorPointer from "../Elements/CrusorPointer";
const ExploreItem = (props) => {
    return(
        <Fragment>
            {/* <HeadingContainer/> */}
            <div className="flex mt-6">
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231129%2F4lv01exy4ft5r6v94j14uq.jpg&w=32&q=75" title="High Domino"/>
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024425%2F8pro4l2xu4x8ih1ml6x2f.png&w=32&q=75" title="Mobile Legends"/>
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231130%2Fqqvqxmjx1teu85nerqohnr.png&w=32&q=75" title="Steam"/>
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2Fy4jqgkdbtbd3zfokbvtknb.jpg&w=32&q=75" title="PUBG Mobile Indonesia"/>
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231130%2F54syz1hfqdslfn0jpltdaa.png&w=32&q=75" title="Point Blank Beyond Limits"/>
            </div>
            <div className="flex gap-4 mb-6 flex-col-5">
                <IsiExplore/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20211211%2Fmheobbns6lynccypikg7o_thumbnail.webp&w=375&q=75"/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20211211%2Fmheobbns6lynccypikg7o_thumbnail.webp&w=375&q=75"/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20211211%2Fmheobbns6lynccypikg7o_thumbnail.webp&w=375&q=75"/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20211211%2Fmheobbns6lynccypikg7o_thumbnail.webp&w=375&q=75"/>             
            </div>
            <div className="flex gap-4 mb-6 flex-col-5">
                <IsiExplore />
                <IsiExplore img=""/>
                <IsiExplore img=""/>
                <IsiExplore img=""/>
                <IsiExplore img=""/>
            </div>
        </Fragment>
    )
}

export default ExploreItem;