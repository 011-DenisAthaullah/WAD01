const daftarKategori = [
    { ikon: '🛢️', nama: 'Oli dan Cairan' },
    { ikon: '🔋', nama: 'Aki dan Kelistrikan' },
    { ikon: '🛑', nama: 'Rem dan Kaki-kaki' },
    { ikon: '🌬️', nama: 'Filter dan Busi' },
]

function Kategori() {
    return (
        <section id="kategori" className="px-10 py-16">
        <h2 className="mb-4 text-2xl font-bold text-[#e63946]">Kategori Spare Part</h2>
        <div className="flex gap-5">
            {daftarKategori.map((kategori) => (
            <div
                key={kategori.nama}
                className="flex-1 p-5 text-center border border-gray-300 rounded-lg"
            >
                <p className="text-4xl">{kategori.ikon}</p>
                <h3 className="mt-2 font-bold">{kategori.nama}</h3>
            </div>
            ))}
        </div>
        </section>
    )
}

export default Kategori