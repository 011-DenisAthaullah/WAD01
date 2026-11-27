import { useState } from 'react'

function DaftarBelanja() {
    const [teks, setTeks] = useState('')
    const [daftar, setDaftar] = useState([])

    function tambahItem() {
        if (teks === '') return
        setDaftar([...daftar, teks])
        setTeks('')
    }

    function hapusItem(nomor) {
        setDaftar(daftar.filter((item, i) => i !== nomor))
    }

    return (
        <section className="px-10 py-16">
        <h1 className="mb-4 text-2xl font-bold">Daftar Belanja Saya</h1>

        <div className="flex gap-2 mb-3">
            <input
            type="text"
            value={teks}
            onChange={(e) => setTeks(e.target.value)}
            placeholder="Contoh: ganti oli"
            className="px-3 py-2 border rounded"
            />
            <button onClick={tambahItem} className="px-4 py-2 text-white bg-red-600 rounded">
            Tambah
            </button>
        </div>

        <ul>
            {daftar.map((item, i) => (
            <li key={i} className="mb-1">
                {item}{' '}
                <button onClick={() => hapusItem(i)} className="text-red-600">Hapus</button>
            </li>
            ))}
        </ul>
        </section>
    )
}

export default DaftarBelanja