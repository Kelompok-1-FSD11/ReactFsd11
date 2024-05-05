const Promo = (props) => {
    const {img="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F2024320%2F6r2av9ysjchha3avng6f8_thumbnail.webp&w=414&q=75"} = props;
    return(
        <div
  className="ds-rounded-lg ds-bg-white ds-shadow-card false relative p-3 flex flex-col justify-between overflow-hidden min-h-[230px] bg-gradient-to-b from-[#E19797] to-[#D46969]"
  id="card-catalog"
>
  <div className="absolute right-0 top-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={44}
      viewBox="0 0 52 44"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0H52V36L44 44H0V12L12 0Z"
        fill="#EF6000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0H52V36L44 44H0V12L12 0Z"
        fill="white"
        fillOpacity="0.75"
      />
    </svg>
  </div>
  <div className="absolute right-0 top-0 p-1">
    <img
      alt="recommendation-cheapest"
      fetchpriority="high"
      width={36}
      height={36}
      decoding="async"
      data-nimg={1}
      className=" "
      src="https://files.itemku.com/icon/product-icon/filled/game-page/coin.svg"
      style={{ color: "transparent" }}
    />
  </div>
  <p className="ds-text-lg ds-leading-5 ds-font-bold text-white">Termurah</p>
  <div className="space-y-2 z-0">
    <div>
      <a href="/dagangan/mobile-legends-akun-mobile-legends-rgamingshop-49-rgamingshop/2614379?from=termurah_section_explore&fromAds=1&src=prodads_explore">
        <div className="rounded bg-white shadow-card overflow-hidden cursor-pointer">
          <div className="px-2 py-1">
            <p className="ds-text-sm ds-leading-4 ds-font-normal text-dim-grey text-ellipsis line-clamp-1" />
            <p className="ds-text-base ds-leading-[18px] ds-font-normal text-charcoal text-ellipsis line-clamp-1">
              AKUN MOBILE LEGENDS rgamingshop #49
            </p>
          </div>
          <div className="px-2 py-1 bg-solitude-300">
            <p className="ds-text-lg ds-leading-5 ds-font-bold text-charcoal">
              Rp600.000
            </p>
          </div>
        </div>
      </a>
    </div>
    <div>
      <a href="/dagangan/mobile-legends-akun-mobile-legends-rgamingshop-48-rgamingshop/2614366?from=termurah_section_explore&fromAds=1&src=prodads_explore">
        <div className="rounded bg-white shadow-card overflow-hidden cursor-pointer">
          <div className="px-2 py-1">
            <p className="ds-text-sm ds-leading-4 ds-font-normal text-dim-grey text-ellipsis line-clamp-1" />
            <p className="ds-text-base ds-leading-[18px] ds-font-normal text-charcoal text-ellipsis line-clamp-1">
              AKUN MOBILE LEGENDS rgamingshop #48
            </p>
          </div>
          <div className="px-2 py-1 bg-solitude-300">
            <p className="ds-text-lg ds-leading-5 ds-font-bold text-charcoal">
              Rp600.000
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
  <a className="w-fit flex" href="/g/mobile-legends/termurah">
    <p className="ds-text-sm ds-leading-4 ds-font-normal text-white">
      Lihat Semua
    </p>
    <div id="chevron-right-icon" style={{ height: 16, width: 16 }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.49994 18C9.63155 18.0008 9.76201 17.9755 9.88385 17.9258C10.0057 17.876 10.1165 17.8027 10.2099 17.71L15.2099 12.71C15.3037 12.617 15.3781 12.5064 15.4288 12.3846C15.4796 12.2627 15.5057 12.132 15.5057 12C15.5057 11.868 15.4796 11.7373 15.4288 11.6154C15.3781 11.4936 15.3037 11.383 15.2099 11.29L10.2099 6.29C10.1167 6.19676 10.006 6.1228 9.88419 6.07234C9.76237 6.02188 9.6318 5.99591 9.49994 5.99591C9.36808 5.99591 9.23751 6.02188 9.11569 6.07234C8.99387 6.1228 8.88318 6.19676 8.78994 6.29C8.6967 6.38324 8.62274 6.49393 8.57228 6.61575C8.52182 6.73758 8.49585 6.86814 8.49585 7C8.49585 7.2663 8.60164 7.5217 8.78994 7.71L13.0899 12L8.78994 16.29C8.69621 16.383 8.62182 16.4936 8.57105 16.6154C8.52028 16.7373 8.49414 16.868 8.49414 17C8.49414 17.132 8.52028 17.2627 8.57105 17.3846C8.62182 17.5064 8.69621 17.617 8.78994 17.71C8.88338 17.8027 8.9942 17.876 9.11603 17.9258C9.23787 17.9755 9.36833 18.0008 9.49994 18Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  </a>
</div>
    )
}

export default Promo;