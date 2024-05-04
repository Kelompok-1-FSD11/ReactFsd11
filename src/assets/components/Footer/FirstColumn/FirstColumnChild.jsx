const FirstColumnChild = (props) => {
    return (
        <div>
            <a
                className="text-base font-normal text-normal text-charcoal hover:text-cyan-blue-500 cursor-pointer undefined"
                href={props.link}
                style={{ lineHeight: "1.125rem" }}
            >
                {props.footerChildName}
            </a>
        </div>
    );
};

export default FirstColumnChild;
