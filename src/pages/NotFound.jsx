import { Link } from 'react-router'

function NotFound() {
    return (
        <section className="px-10 py-20 text-center">
        <h1 className="mb-2 text-5xl font-bold">404</h1>
        <p className="mb-4">Halaman tidak ditemukan.</p>
        <Link to="/" className="underline">Kembali ke Beranda</Link>
        </section>
    )
}

export default NotFound