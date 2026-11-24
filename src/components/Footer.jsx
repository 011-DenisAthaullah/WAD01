import logo from '../assets/maintenance.png'

function Footer() {
    return (
        <footer id="kontak" className="flex items-center justify-between px-10 py-8 bg-[#1c1c1c] text-white">
        <div className="flex items-center flex-1 gap-2 text-xl font-bold">
            <img src={logo} alt="Logo" className="h-10" />
            <span>SparepartKu</span>
        </div>
        <div className="flex-1 text-center">
            <p>Website latihan React tentang toko spare part mobil.</p>
        </div>
        <div className="flex-1 text-right">
            <p>Jl. Contoh No. 12</p>
            <p>halo@sparepartku.com</p>
        </div>
        </footer>
    )
}

export default Footer