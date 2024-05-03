const SnapImg = (props) => {
    return(
        <div className="snap-start">
            <div className="snap-start">
                <a href="#">
                    <div className="relative crusor-pointer h-32 min-w-[120px] max-w-[127px] flex flex-col items-center justify-center">
                        <div className="game relative w-18 h-18 rounded overflow-hidden animate-none">
                            <img src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F20231129%2F4lv01exy4ft5r6v94j14uq.jpg&w=375&q=75" alt="High Domino" />
                        </div>
                        <div className="mx-3">
                            <p className="text-sm font-bold">High Domino</p>
                        </div>
                        <div class="absolute bottom-0 w-30 h-23 rounded overflow-hidden animate-none">
                            <div class="h-full w-full bg-[linear-gradient(180deg,rgba(24,89,170,0.24)_0%,rgba(24,89,170,0.94)_56.97%)]"></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SnapImg;