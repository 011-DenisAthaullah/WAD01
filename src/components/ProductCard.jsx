function ProductCard(props) {
    return (
        <div className="p-5 bg-white border rounded">
        <p className="mb-2 text-5xl text-center">{props.ikon}</p>
        <h3 className="font-bold">{props.nama}</h3>
        <p className="mb-2">Rp{props.harga}</p>
        <button onClick={props.tambah} className="w-full py-2 text-white bg-red-600 rounded">
            Tambah ke Keranjang
        </button>
        </div>
    )
}

export default ProductCard