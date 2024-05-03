import React from 'react';
import CardProduct from '../components/Fragments/CardProduct';
const HomePage = () => {

    return (
        <div>
            <div className="bg-ghost-white">
                <div className="min-h-screen mx-auto bg-ghost-white px-32 max-w-1440px">
                    <div className="flex flex-col mt-4 bg-slate-500">
                        <div className="min-h-screen mx-auto bg-ghost-white px-32 max-w-1440px">
                            <div className="flex flex-col">
                                <CardProduct.Container/>
                                <CardProduct.Container/>
                                <CardProduct.Container/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default HomePage;