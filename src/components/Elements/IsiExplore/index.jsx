const IsiExplore = (props) => {
    const {judul="1 M Koin Emas MD",desc="Higs Domino"} = props;
    return(
        <a href="#">
            <div className="h-full">
                <div className="ds-rounded-lg ds-bg-white drop-shadow-card flex-col h-full min-h-248px w-full rounded">
                    <div className="w-full overflow-hidden relative bg-whisper rounded-t">
                        <img src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F2024320%2F6r2av9ysjchha3avng6f8_thumbnail.webp&w=414&q=75" alt="" />
                    </div>
                    <div className="w-full px-2 py-3 space-y-3">
                        <h2>
                            <span className="text-nero text-base">{judul}</span>
                            <span className="text-nero text-sm text-suva-gray">{desc}</span>
                        </h2>
                        <div className="flex flex-row items-center space-x-1">
                            <div className="w-4 h-4">
                                <p className="w-full text-red-600 font-bold h-full bg-nero rounded-full">90%</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xl font-bold mr-2 ">
                                RP. 200
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default IsiExplore;