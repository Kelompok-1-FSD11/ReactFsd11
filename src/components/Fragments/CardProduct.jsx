const CardProduct = (props) =>{
    const {children} = props;
    return(
        <div className="w-full flex flex-col mx-2 my-2 justify-between max-w-sm bg-gray-800 border border-gray-600 rounded-lg shadow">
            {children}
        </div>
    )
}