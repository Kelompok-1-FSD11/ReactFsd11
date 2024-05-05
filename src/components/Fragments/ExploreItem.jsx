import { Fragment } from "react";
import HeadingContainer from "../Elements/Heading";
import IsiExplore from "../Elements/IsiExplore";
import CrusorPointer from "../Elements/CrusorPointer";
const ExploreItem = (props) => {
    return(
        <Fragment>
            {/* <HeadingContainer/> */}
            <div className="flex mt-6">
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F2024425%2F8pro4l2xu4x8ih1ml6x2f.png&w=32&q=75" title="Mobile Legends"/>
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231129%2F4lv01exy4ft5r6v94j14uq.jpg&w=32&q=75" title="High Domino"/>
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231130%2Fqqvqxmjx1teu85nerqohnr.png&w=32&q=75" title="Steam"/>
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231116%2Fy4jqgkdbtbd3zfokbvtknb.jpg&w=32&q=75" title="PUBG Mobile Indonesia"/>
                    <CrusorPointer img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231130%2F54syz1hfqdslfn0jpltdaa.png&w=32&q=75" title="Point Blank Beyond Limits"/>
            </div>
            <div className="flex w-full gap-4 mb-6 flex-col-5">
                <IsiExplore/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F202411%2F8izl5cj2yelvrb32msesx_thumbnail.webp&w=148&q=75" judul="Akun Mobile Legends"/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F202411%2F8izl5cj2yelvrb32msesx_thumbnail.webp&w=148&q=75" judul="Akun Mobile Legends"/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F2023824%2Fzm5in1bpxge6hnoivbklk8_thumbnail.webp&w=32&q=75"judul="Akun Mobile Legends"/>
                <IsiExplore img=" "/>             
            </div>
            <div className="flex gap-4 mb-6 flex-col-5">
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F2023224%2Ftdgwp2gsbarvxoieoqmjo_thumbnail.webp&w=24&q=75"  judul="Akun Mobile Legends"/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F202338%2F3hoexdv7vb28ivbnd90ox_thumbnail.webp&w=390&q=75" judul="Akun Mobile Legends"/>
                <IsiExplore judul="Akun Mobile Legends"/>
                <IsiExplore img="" judul="Akun Mobile Legends"/>
                <IsiExplore img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F202338%2F3hoexdv7vb28ivbnd90ox_thumbnail.webp&w=390&q=75" judul="Akun Mobile Legends"/>
            </div>
        </Fragment>
    )
}

export default ExploreItem;