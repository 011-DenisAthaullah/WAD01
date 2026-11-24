import Header from './components/Header'
import Hero from './components/Hero'
import Kategori from './components/Kategori'
import Produk from './components/Produk'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <Kategori />
        <Produk />
      </main>
      <Footer />
    </div>
  )
}

export default App