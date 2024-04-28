import FirstColumnChild from "./FirstColumnChild";
import FirstColumnHeader from "./FirstColumnHeader";

const FirstColumn = () => {
    return (
        <div className="flex w-2/4 desktop-small:w-3/4 justify-between space-x-8">
            <div className="space-y-6">
                <div className="space-y-3">
                    <FirstColumnHeader footerName={"Bantuan"} />
                    <div className="space-y-2 flex flex-col">
                        <FirstColumnChild
                            footerChildName={"Pusat Bantuan"}
                            link={"#"}
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    <FirstColumnHeader footerName={"Itemku"} />
                    <div className="space-y-2 flex flex-col">
                        <FirstColumnChild
                            footerChildName={"Tentang itemku"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"itemku Blog"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Identitas Brand"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Hubungi Kami"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Aturan Penggunaan"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Kebijakan Pengembalian Dana"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Kebijakan Privasi"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Karir"}
                            link={"#"}
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="space-y-3">
                    <FirstColumnHeader footerName={"Pembeli"} />
                    <div className="space-y-2 flex flex-col">
                        <FirstColumnChild
                            footerChildName={"Cara Belanja"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Cara Trading"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Cara Belanja"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Cara Pembayaran"}
                            link={"#"}
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    <FirstColumnHeader footerName={"Penjual"} />
                    <div className="space-y-2 flex flex-col">
                        <FirstColumnChild
                            footerChildName={"Cara Berjualan"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Cerita Penjual Sukses"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Pencairan Saldo"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Keuntungan Berjualan di itemku"}
                            link={"#"}
                        />
                        <FirstColumnChild
                            footerChildName={"Tips Berjualan"}
                            link={"#"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstColumn;
