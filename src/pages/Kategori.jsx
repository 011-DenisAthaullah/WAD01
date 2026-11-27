function Kategori() {
    return (
        <section className="px-10 py-16">
        <h1 className="mb-4 text-2xl font-bold">Kategori Spare Part</h1>
        <div className="grid grid-cols-4 gap-5">
            <div className="p-5 text-center border rounded">🛢️ Oli dan Cairan</div>
            <div className="p-5 text-center border rounded">🔋 Aki dan Kelistrikan</div>
            <div className="p-5 text-center border rounded">🛑 Rem dan Kaki-kaki</div>
            <div className="p-5 text-center border rounded">🌬️ Filter dan Busi</div>
        </div>
        </section>
    )
}

export default Kategori