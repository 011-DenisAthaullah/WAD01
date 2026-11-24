import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function Produk(props) {
    const [daftarProduk, setDaftarProduk] = useState([]) // data dari JSON
    const [loading, setLoading] = useState(true)         // sedang memuat?

    // useEffect: ambil data sekali saja saat komponen pertama tampil
    useEffect(() => {
        fetch('/produk.json')
        .then((respon) => respon.json())
        .then((data) => {
            setDaftarProduk(data)
            setLoading(false)
        })
    }, [])

    return (
        <section id="produk" className="px-10 py-16 bg-gray-100">
        <h2 className="mb-4 text-2xl font-bold">Produk Terlaris</h2>

        {loading && <p>Memuat produk...</p>}

        <div className="grid grid-cols-4 gap-5">
            {daftarProduk.map((produk) => (
            <ProductCard
                key={produk.id}
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