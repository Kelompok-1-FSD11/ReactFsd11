import { Fragment } from "react";
import CrusorPointer from "../Elements/CrusorPointer";
import HeadingContainer from "../Elements/Heading";
import SnapImg from "../Elements/Snap";

const CardProduct = (props) =>{
    const {children} = props;
    return(
        <div className="bg-ghost-white">
            <div className="min-h-screen mx-auto bg-ghost-white px-32 max-w-1440px">
                <div className="flex flex-col mt-4 bg-slate-500">
                    <div className="min-h-screen mx-auto bg-ghost-white px-32 max-w-1440px">
                        <div className="flex">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Container = (props) =>{
    return(
        <Fragment>
            <div className="mt-3 bg-slate-300">
                <HeadingContainer/>
                <div className="flex mt-6">
                    <CrusorPointer/><p className="test-xl items-center justify-center leading-6 font-bold undefined">Top up Game</p>
                    <CrusorPointer/><p className="test-xl items-center justify-center leading-6 font-bold undefined">Top up Game</p>
                    <CrusorPointer/><p className="test-xl items-center justify-center leading-6 font-bold undefined">Top up Game</p>
                    <CrusorPointer/><p className="test-xl items-center justify-center leading-6 font-bold undefined">Top up Game</p>
                    <CrusorPointer/><p className="test-xl items-center justify-center leading-6 font-bold undefined">Top up Game</p>
                </div>
                <div className="space-x-6 bg-cyan-100 border-cyan-200 rounded-b border-b border-r border-l">
                    <div className="w-full py-2">
                        <div className="undifined">
                            <div className="relative flex items-center">
                                <div className="relative hide-scroll-view flex flex-nowrap w-full items-center overflow-x-scroll scroll-smooth transform snap-x overflow-y-clip">
                                    <div className="flex space-x-4 scroll-px-4 py-2 items-start space-y-6">
                                        <SnapImg/>
                                        <SnapImg/>
                                        <SnapImg/>
                                        <SnapImg/>
                                        <SnapImg/>
                                        <SnapImg/>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


CardProduct.Container = Container;

export default CardProduct;