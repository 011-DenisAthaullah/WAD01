import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Kategori from './components/Kategori'
import Produk from './components/Produk'
import Footer from './components/Footer'

function App() {
  // state counter keranjang, awalnya 0
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
      <Hero />
      <Kategori />
      <Produk tambah={tambah} />
      <Footer />
    </div>
  )
}

export default App