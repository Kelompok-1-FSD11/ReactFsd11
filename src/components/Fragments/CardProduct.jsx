import { Fragment } from "react";
import HeadingContainer from "../Elements/Heading";
import ContainerProduct from "./ContainerProduct";

const CardProduct = (props) =>{
    const {children} = props;
    return(
        <Fragment>
            <div className="mt-3 bg-ghost-white">
                <ContainerProduct/>
            </div>
        </Fragment>
    )
}

export default CardProduct;