const HeadingContainer = (props) => {
    const {img="https://files.itemku.com/icon/product-icon/homepage-revamp/kategori-populer.svg", title="Kategori Populer"} = props;
    return(
        <div className="flex justify-between items-end my-6 w-full">
            <div className="w-full">
                <div className="flex space-x-4 items-end">
                    <div className="flex w-16 h-16 items-center justify-center">
                        <div className="absolute">
                            <img src={img} alt="Kategori Populer" width={48} height={48} />
                        </div>
                        <div className="abssolute">
                            <img src={img} alt="Kategori Populer" width={48} height={48} />
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-3xl font-bold">{title}</p>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default HeadingContainer;