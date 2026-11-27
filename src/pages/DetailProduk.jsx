import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'

function DetailProduk(props) {
    const { id } = useParams()          // ambil :id dari alamat URL
    const [produk, setProduk] = useState(null)
    const [loading, setLoading] = useState(true)

    // effect jalan lagi kalau id di URL berubah
    useEffect(() => {
        fetch('/produk.json')
        .then((respon) => respon.json())
        .then((data) => {
            const hasil = data.find((item) => item.id === Number(id))
            setProduk(hasil)
            setLoading(false)
        })
        .catch(() => setLoading(false))
    }, [id])

    if (loading) return <p className="px-10 py-16">Memuat...</p>
    if (!produk) return <p className="px-10 py-16">Produk tidak ditemukan.</p>

    return (
        <section className="px-10 py-16">
        <p className="text-6xl">{produk.ikon}</p>
        <h1 className="mt-4 mb-2 text-3xl font-bold">{produk.nama}</h1>
        <p className="mb-4 text-xl text-red-600">Rp{produk.harga}</p>
        <button onClick={props.tambah} className="px-6 py-2 mr-3 text-white bg-red-600 rounded">
            Tambah ke Keranjang
        </button>
        <Link to="/produk" className="underline">Kembali ke produk</Link>
        </section>
    )
}

export default DetailProduk