const FooterImg = () => {
    return (
        <div className="flex w-full justify-center">
            <span
                style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: 400,
                    height: 200,
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                }}
            >
                <img
                    alt="footer"
                    srcSet="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Fillustration%2Fitemku%2Fhome%2Fdesktop-footer.png&w=414&q=75 1x, https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Fillustration%2Fitemku%2Fhome%2Fdesktop-footer.png&w=800&q=75 2x"
                    src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Fillustration%2Fitemku%2Fhome%2Fdesktop-footer.png&w=800&q=75"
                    decoding="async"
                    data-nimg="fixed"
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
                    }}
                />
            </span>
        </div>
    );
};

export default FooterImg;
