// import { useState } from 'react'
import "./App.css";
import Footer from "./assets/components/Footer/Footer";
import Navbar from "./assets/components/Navbar/Navbar";
import Card from "./assets/components/Product/Card";

function App() {
    return (
        <div>
            <div className="bg-ghost-white">
                <div className="min-h-screen mx-auto bg-ghost-white px-32 max-w-1440px">
                    <div>
                        <div className="">
                            <div className="fixed left-0 w-full top-0 z-50 bg-gradient-to-b from-[#CEDAF3] to-[#FBFCFE]/10 backdrop-blur-[2px] transition-all font-itemkuV2">
                                <div className="bg-cyan-blue-100 py-1 w-full">
                                    <Navbar />
                                </div>
                                <div className="py-2 flex justify-center px-32 mx-auto max-w-1440px">
                                    <div style={{ width: 805, height: 24 }} />
                                </div>
                            </div>
                            <div
                                className="w-full"
                                style={{ height: 120 }}
                            ></div>
                            <main>
                                <div className="block font-itemkuV2">
                                    <div className="flex flex-col mt-4">
                                        <Card />
                                    </div>
                                </div>
                                <Footer />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
