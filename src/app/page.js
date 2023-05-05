import Image from 'next/image';
import logo from './assets/images/android-chrome-192x192.png'
import Navbar from './components/Navbar';
import Hero from './components/home/Hero';

export default function Home() {
  return (
    <>
      <div className="h-screen bg-cover bg-no-repeat bg-opacity-60 bg-[url('./assets/images/landscapehome.jpg')]">
        <div className='h-screen bg-cover bg-black bg-opacity-40'>
          {/* Início da NavBar */}
          <Navbar />
          {/* Fim da NavBar */}
          {/* Início do Hero */}
          <Hero />
          {/* Fim do Hero */}
        </div>
      </div>
    </>
  )
}
