import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Beranda from './pages/Beranda'
import Produk from './pages/Produk'
import DetailProduk from './pages/DetailProduk'
import Kategori from './pages/Kategori'
import DaftarBelanja from './pages/DaftarBelanja'
import Promo from './pages/Promo'
import Tentang from './pages/Tentang'
import FAQ from './pages/FAQ'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'

function App() {
  // state counter keranjang, dipakai di Header dan halaman produk
  const [jumlah, setJumlah] = useState(0)

  function tambah() {
    setJumlah(jumlah + 1)
  }

  function kurangi() {
    if (jumlah > 0) {
      setJumlah(jumlah - 1)
    }
  }

  function reset() {
    setJumlah(0)
  }

  return (
    <div>
      <Header jumlah={jumlah} kurangi={kurangi} reset={reset} />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/produk" element={<Produk tambah={tambah} />} />
        <Route path="/produk/:id" element={<DetailProduk tambah={tambah} />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/daftar-belanja" element={<DaftarBelanja />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App