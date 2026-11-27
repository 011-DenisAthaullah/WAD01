import { Link } from 'react-router'
import logo from '../assets/maintenance.png'

function Header(props) {
    return (
        <header className="flex items-center justify-between px-10 py-3 bg-[#1c1c1c] text-white">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-12" />
            <span>SparepartKu</span>
        </Link>

        <nav>
            <ul className="flex items-center gap-4 text-sm">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/produk">Produk</Link></li>
            <li><Link to="/kategori">Kategori</Link></li>
            <li><Link to="/daftar-belanja">Daftar Belanja</Link></li>
            <li><Link to="/promo">Promo</Link></li>
            <li><Link to="/tentang">Tentang</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/kontak">Kontak</Link></li>
            <li className="flex items-center gap-2">
                <button onClick={props.kurangi} className="px-2 text-black bg-white rounded">-</button>
                <span>🛒 {props.jumlah}</span>
                <button onClick={props.reset} className="px-2 bg-red-600 rounded">Reset</button>
            </li>
            </ul>
        </nav>
        </header>
    )
}

export default Header