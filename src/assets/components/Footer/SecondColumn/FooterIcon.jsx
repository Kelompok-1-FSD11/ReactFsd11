const FooterIcon = (props) => {
    return (
        <div>
            <span
                style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: 46,
                    height: 24,
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                }}
            >
                <img
                    alt={props.alt}
                    src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Flinkaja-sm.png&w=96&q=75"
                    decoding="async"
                    data-nimg="fixed"
                    srcSet={props.src}
                    style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                />
                <noscript />
            </span>
        </div>
    );
};

export default FooterIcon;
