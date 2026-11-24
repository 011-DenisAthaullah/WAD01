import ProductCard from './ProductCard'

const daftarProduk = [
    { id: 1, ikon: '🛢️', nama: 'Oli Mesin 4L', deskripsi: 'Oli sintetik untuk mesin bensin.', harga: 'Rp350.000' },
    { id: 2, ikon: '🔋', nama: 'Aki Mobil 45Ah', deskripsi: 'Aki kering bebas perawatan.', harga: 'Rp850.000' },
    { id: 3, ikon: '🛑', nama: 'Kampas Rem Depan', deskripsi: 'Satu set, tahan panas dan awet.', harga: 'Rp275.000' },
    { id: 4, ikon: '🌬️', nama: 'Filter Udara', deskripsi: 'Menjaga udara masuk mesin tetap bersih.', harga: 'Rp95.000' },
]

function Produk() {
    return (
        <section id="produk" className="px-10 py-16 bg-gray-100">
        <h2 className="mb-4 text-2xl font-bold text-[#e63946]">Produk Terlaris</h2>
        <div className="grid grid-cols-4 gap-5">
            {daftarProduk.map((produk) => (
            <ProductCard
                key={produk.id}
                ikon={produk.ikon}
                nama={produk.nama}
                deskripsi={produk.deskripsi}
                harga={produk.harga}
            />
            ))}
        </div>
        </section>
    )
}

export default Produk