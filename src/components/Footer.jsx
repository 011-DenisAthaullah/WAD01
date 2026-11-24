import logo from '../assets/maintenance.png'

function Footer() {
    return (
        <footer id="kontak" className="flex justify-between items-center px-10 py-8 bg-[#1c1c1c] text-white">
        <div className="flex-1 flex items-center gap-2.5 text-xl font-bold">
            <img src={logo} alt="Logo SparepartKu" className="h-11" />
            <span>SparepartKu</span>
        </div>
        <div className="flex-1 text-center">
            <p>
            Website latihan tentang toko online spare part mobil. Semua produk dan
            harga hanya contoh.
            </p>
        </div>
        <div className="flex-1 text-right">
            <p>Jl. Contoh No. 12</p>
            <p>halo@sparepartku.com</p>
            <p>0812-0000-0000</p>
            <p>
            <a
                href="https://www.flaticon.com/free-icons/car-service"
                title="car service icons"
                className="text-[#e63946]"
            >
                Icon by Flaticon
            </a>
            </p>
        </div>
        </footer>
    )
}

export default Footer