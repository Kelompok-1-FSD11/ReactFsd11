import React from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import HeadingContainer from '../components/Elements/Heading';
import NewStuf from '../components/Fragments/NewStuf';
import TokoPopuler from '../components/Fragments/TokoPopuler';
import ExploreItem from '../components/Fragments/ExploreItem';

const HomePage = () => {

    return (
        <div>
            <div className="bg-ghost-white">
                <div className="min-h-screen mx-auto bg-ghost-white px-32 max-w-1440px">
                    <div className="flex flex-col mt-4 bg-ghost-white">
                        <div className="min-h-screen mx-auto bg-ghost-white px-32 max-w-1440px">
                            <div className="flex flex-col">
                                <div className="mt-3 bg-ghost-white">
                                    <HeadingContainer img="https://files.itemku.com/icon/product-icon/homepage-revamp/new-stuffs.svg" title="Ada Yang Baru Nih!!"/>
                                    <NewStuf/>
                                    <HeadingContainer/>
                                    <CardProduct/>
                                    <HeadingContainer img="https://files.itemku.com/icon/product-icon/homepage-revamp/toko-populer.svg" title="Toko Populer"/>
                                    <TokoPopuler/>
                                    <HeadingContainer img="https://files.itemku.com/icon/product-icon/homepage-revamp/explore-itemku.svg" title="Explore Item"/>
                                    <ExploreItem/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default HomePage;