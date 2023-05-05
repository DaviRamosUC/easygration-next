export default function Navbar() {
  return (
    <div className="">
      <nav className='pb-3 pt-4 text-lg font-san text-white flex flex-wrap items-center justify-between mb-6'>
        <h2 className='mx-6 md:mx-8 text-2xl font-semibold'>Easygration</h2>
        <ul className='flex'>
          <li><a href="#" className='mr-6 md:mr-8'>Início</a></li>
          <li><a href="#" className='mr-6 md:mr-8'>Sobre nós</a></li>
          <li><a href="#" className='mr-6 md:mr-8'>Premium</a></li>
          <li><a href="#" className='mr-6 md:mr-8'>Blog</a></li>
          <li>
            <a href="#" className='mr-4 md:mr-6 text-white py-1.5 px-4 rounded-lg border-2 border-white hover:border-[#20DC49] hover:text-[#20DC49]'>Entrar</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}