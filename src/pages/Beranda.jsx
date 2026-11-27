import { Link } from 'react-router'

function Beranda() {
    return (
        <section className="px-10 py-20 text-center bg-gray-100">
        <h1 className="mb-4 text-4xl font-bold">Spare Part Mobil Lengkap, Harga Terjangkau</h1>
        <p className="mb-6">Cari oli, aki, rem, sampai filter untuk mobilmu.</p>
        <Link to="/produk" className="px-6 py-3 text-white bg-red-600 rounded">
            Lihat Produk
        </Link>
        </section>
    )
}

export default Beranda