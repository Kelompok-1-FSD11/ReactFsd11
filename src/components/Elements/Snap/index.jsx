const SnapImg = (props) => {
    const {children="High Domino", img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231129%2F4lv01exy4ft5r6v94j14uq.jpg&w=375&q=75"} = props;
    return(
        <div className="snap-start">
            <div className="snap-start">
                <a href="#">
                    <div className="relative crusor-pointer h-32 flex flex-col items-center justify-center">
                        <div className="game relative w-18 h-18 rounded overflow-hidden animate-none">
                            <img src={img} className="w-32 h-32" alt="High Domino" />
                        </div>
                        <div className="mx-3">
                            <p className="text-xs text-center justify-center font-bold">{children}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SnapImg;