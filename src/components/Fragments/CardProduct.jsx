const CardProduct = (props) =>{
    const {children} = props;
    return(
        <div className="w-full flex flex-col mx-2 my-2 justify-between max-w-sm bg-gray-800 border border-gray-600 rounded-lg shadow">
            {children}
        </div>
    )
}

const Header = (props) =>{
    const {gambar} = props;
    return(
        <a href="#">
            <img src={gambar} alt="product" className="p-8 rounded-t-lg h-64 w-full " />
        </a>
    )
}


export default CardProduct;