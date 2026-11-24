function ProductCard({ ikon, nama, deskripsi, harga }) {
    return (
        <div className="p-5 bg-white border border-gray-300 rounded-lg">
        <div className="flex items-center justify-center h-32 mb-3 text-5xl bg-gray-200 rounded">
            {ikon}
        </div>
        <h3 className="font-bold">{nama}</h3>
        <p className="mb-2 text-sm">{deskripsi}</p>
        <p className="font-bold text-[#e63946]">{harga}</p>
        </div>
    )
}

export default ProductCard