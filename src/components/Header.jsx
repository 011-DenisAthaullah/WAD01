import logo from '../assets/maintenance.png'

function Header(props) {
    return (
        <header className="flex justify-between items-center px-10 py-3 bg-[#1c1c1c] text-white">
        <div className="flex items-center gap-2 text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-12" />
            <span>SparepartKu</span>
        </div>

        <nav>
            <ul className="flex items-center gap-6">
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#kategori">Kategori</a></li>
            <li><a href="#produk">Produk</a></li>
            <li><a href="#kontak">Kontak</a></li>
            <li className="flex items-center gap-2">
                <button onClick={props.kurangi} className="px-2 bg-white text-black rounded">-</button>
                <span>🛒 {props.jumlah}</span>
                <button onClick={props.reset} className="px-2 bg-red-600 rounded">Reset</button>
            </li>
            </ul>
        </nav>
        </header>
    )
}

export default Header