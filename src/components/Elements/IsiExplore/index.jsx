const IsiExplore = (props) => {
    const {judul="Akun Mobile Legends",harga="570.000",img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F2022910%2Fg0nyr7o6q2d8amh9gimpap_thumbnail.webp&w=1033&q=75"} = props;
    return(
        <a href="/detail-product" className="w-full border">
        <div className="h-full">
          <div className="ds-rounded-lg ds-bg-white ds-shadow-card false flex flex-col cursor-pointer  select-none h-full min-h-248px w-full rounded">
            <div
              className="w-full relative overflow-hidden bg-whisper rounded-t"
              style={{ paddingTop: "50%" }}
            >
              <div className="w-full absolute top-0 bottom-0 left-0 right-0">
                <div
                  className="w-full h-full relative object-cover object-top"
                  style={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <img
                    alt="Gambar Product 1M Koin Emas MD"
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="object-top object-cover"
                    sizes="(min-resolution: 4dppx) 37px, (min-resolution: 3dppx) 49px, (min-resolution: 2dppx) 74px, 148px"
                    src={img}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent"
                    }}
                  />
                </div>
              </div>
              <p
                className="text-whisper text-base absolute"
                style={{
                  right: 12,
                  bottom: 0,
                  textShadow: "rgba(0, 0, 0, 0.5) 0.2px 0.5px 0.5px"
                }}
              >
                Ad
              </p>
            </div>
            <div className="w-full px-2 py-3 space-y-3">
              <h2>
                <span className="text-nero text-base">
                  <span className="line-clamp-2 ">{judul}</span>
                </span>{" "}
                <span className="flex flex-row">
                  <span className="text-sm  text-suva-grey">Mobile Legend</span>{" "}
                </span>
              </h2>
              <div className="flex flex-row items-center space-x-1 ">
                <div className="ds-opacity-100 ds-px-1 ds-text-white ds-bg-red-orange-500 ds-align-middle ds-capitalize ds-flex ds-flex-row ds-font-itemku ds-font-normal ds-item-center ds-justify-center ds-rounded ds-select-none ds-text-center ds-w-auto undefined">
                  <p className="ds-text-base ds-leading-[18px] ds-font-normal ds-self-center false">
                    96%
                  </p>
                </div>
                <div className="text-sm text-suva-grey line-through">Rp2.000.000</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xl  text-persimmon-500 font-bold leading-tight mr-2">
                  Rp{harga}
                </div>
              </div>
            </div>
            <div className="px-2 pb-3 w-full h-auto grow flex flex-col justify-end space-y-2">
              <div className="flex flex-row justify-between items-end">
                <div className="flex flex-row space-x-1 items-center">
                  <div className="ds-opacity-100 ds-px-1 ds-text-cyan-blue-500 ds-bg-solitude-500 ds-align-middle ds-capitalize ds-flex ds-flex-row ds-font-itemku ds-font-normal ds-item-center ds-justify-center ds-rounded ds-select-none ds-text-center ds-w-auto undefined">
                    <p className="ds-text-base border bg-red-500 rounded text-white ds-leading-[18px] ds-font-normal ds-self-center ds-table ds-align-middle">
                      Baru
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   </a>
    //     <a href="#">
    //         <div className="h-full">
    //             <div className="ds-rounded-lg border border-shadow ds-bg-white drop-shadow-card flex-col h-full min-h-248px w-full rounded">
    //                 <div className="w-full overflow-hidden relative bg-whisper rounded-t">
    //                     <img src={img} alt="" />
    //                 </div>
    //                 <div className="w-full px-2 py-3 space-y-3">
    //                     <h2>
    //                         <span className="text-nero text-base">{judul}</span>
    //                         <span className="text-nero text-sm text-suva-gray">{desc}</span>
    //                     </h2>
    //                     <div className="flex flex-row items-center space-x-1">
    //                         <div className="w-4 h-4">
    //                             <p className="w-full text-red-600 font-bold h-full bg-nero rounded-full">90%</p>
    //                         </div>
    //                     </div>
    //                     <div className="flex flex-col">
    //                         <div className="text-xl font-bold mr-2 ">
    //                             RP. 200
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </a>
    )
}

export default IsiExplore;