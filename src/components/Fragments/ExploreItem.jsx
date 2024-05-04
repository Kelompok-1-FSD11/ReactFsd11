import { Fragment } from "react";
import HeadingContainer from "../Elements/Heading";
import IsiExplore from "../Elements/IsiExplore";
import CrusorPointer from "../Elements/CrusorPointer";
const ExploreItem = (props) => {
    return(
        <Fragment>
            <HeadingContainer/>
            <div className="flex mt-6">
                    <CrusorPointer/><p className="test-xm items-center justify-center leading-6 font-bold undefined">Top up Game</p>
                    <CrusorPointer img="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/dg5frlof3qo30u8st1gcs.svg"/><p className="test-xm items-center justify-center leading-6 font-bold undefined">High Domino</p>
                    <CrusorPointer img="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/gwoqgq42u4rwxtprhe8oo.svg"/><p className="test-xm items-center justify-center leading-6 font-bold undefined">Mobile Legends</p>
                    <CrusorPointer img="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/6guieyhqvoi4zc0v9r84sc.svg"/><p className="test-xm items-center justify-center leading-6 font-bold undefined">Steam</p>
                    <CrusorPointer img="https://d1x91p7vw3vuq8.cloudfront.net/game_category/202396/507fm72v5sn1th89seopsq.svg"/><p className="test-xm items-center justify-center leading-6 font-bold undefined">PUBG Indonesia</p>
            </div>
            <div className="flex gap-4 mb-6 flex-col-5">
                <IsiExplore/>
                <IsiExplore/>
                <IsiExplore/>
                <IsiExplore/>
                <IsiExplore/>
            </div>
            <div className="flex gap-4 mb-6 flex-col-5">
                <IsiExplore/>
                <IsiExplore/>
                <IsiExplore/>
                <IsiExplore/>
                <IsiExplore/>
            </div>
        </Fragment>
    )
}

export default ExploreItem;