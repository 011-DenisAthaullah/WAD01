import logo from '../assets/maintenance.png'

const menu = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Kategori', href: '#kategori' },
    { label: 'Produk', href: '#produk' },
    { label: 'Kontak', href: '#kontak' },
]

function Header() {
    return (
        <header className="flex justify-between items-center px-10 py-3 bg-[#1c1c1c] text-white">
        <div className="flex items-center gap-2.5 text-2xl font-bold">
            <img src={logo} alt="Logo SparepartKu" className="h-12" />
            <span>SparepartKu</span>
        </div>
        <nav>
            <ul className="flex gap-6">
            {menu.map((item) => (
                <li key={item.href}>
                <a href={item.href} className="hover:text-[#e63946]">
                    {item.label}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        </header>
    )
}

export default Header