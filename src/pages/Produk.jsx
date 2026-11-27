import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Produk(props) {
    const [daftarProduk, setDaftarProduk] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect: ambil data sekali saja saat halaman pertama tampil
    useEffect(() => {
        fetch('/produk.json')
        .then((respon) => respon.json())
        .then((data) => {
            setDaftarProduk(data)
            setLoading(false)
        })
        .catch((err) => {
            console.log('Gagal ambil data:', err)
            setLoading(false)
        })
    }, [])

    return (
        <section className="px-10 py-16 bg-gray-100">
        <h1 className="mb-4 text-2xl font-bold">Produk Terlaris</h1>

        {loading && <p>Memuat produk...</p>}

        <div className="grid grid-cols-4 gap-5">
            {daftarProduk.map((produk) => (
            <ProductCard
                key={produk.id}
                id={produk.id}
                ikon={produk.ikon}
                nama={produk.nama}
                harga={produk.harga}
                tambah={props.tambah}
            />
            ))}
        </div>
        </section>
    )
}

export default Produk