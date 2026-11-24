import { useState } from 'react'

function Kategori() {
    const [teks, setTeks] = useState('')     // isi kolom input
    const [daftar, setDaftar] = useState([]) // daftar belanja, awalnya kosong

    function tambahItem() {
        if (teks === '') return                // kalau kosong, jangan tambah
        setDaftar([...daftar, teks])           // salin daftar lama, tambah item baru
        setTeks('')                            // kosongkan input
    }

    function hapusItem(nomor) {
        setDaftar(daftar.filter((item, i) => i !== nomor))
    }

    return (
        <section id="kategori" className="px-10 py-16">
        <h2 className="mb-4 text-2xl font-bold">Kategori Spare Part</h2>

        <div className="flex gap-5 mb-10">
            <div className="flex-1 p-5 text-center border rounded">🛢️ Oli dan Cairan</div>
            <div className="flex-1 p-5 text-center border rounded">🔋 Aki dan Kelistrikan</div>
            <div className="flex-1 p-5 text-center border rounded">🛑 Rem dan Kaki-kaki</div>
            <div className="flex-1 p-5 text-center border rounded">🌬️ Filter dan Busi</div>
        </div>

        <h3 className="mb-2 text-lg font-bold">Daftar Belanja Saya</h3>
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

export default Kategori