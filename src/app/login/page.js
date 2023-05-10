import Image from 'next/image';
import Navbar from '../components/Navbar';
import Logo from '../assets/images/favicon-32x32.png'
import LogoGoogle from '../assets/icons/google.png'
import LogoFacebook from '../assets/icons/facebook.png'

export default function Login() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-3/4">
        <div className="m-8 flex justify-between align-center">
          <a href="/" className="text-2xl font-semibold flex flex-row">
            <Image src={Logo} alt={"Logo Easygration"} className="mr-3" />
            Easygration
          </a>
          <p>
            Não tem uma conta? <a href="#" className="text-[#20DC49]">Cadastre-se</a>
          </p>
        </div>
        <div className="w-full flex flex-col mt-10 pt-20">
          <h2 className="font-bold text-4xl text-center pb-2">Seja bem vindo novamente</h2>
          <p className="text-center font-semibold text-xl">Realize o login em sua conta</p>
        </div>
        <div className="inline-flex justify-center w-full mt-10">
          <div className="grid grid-cols-2 w-[280px]">
            <button type="button" className="bg-white
                                            focus:ring-4
                                            focus:outline-none
                                            hover:border-[#20DC49]
                                            border
                                            focus:ring-[#20DC49]/50
                                            font-medium
                                            rounded-lg
                                            text-sm
                                            px-5
                                            py-2.5
                                            text-center
                                            items-center
                                            inline-flex
                                            dark:focus:ring-[#20DC49]/55
                                            m-auto">

              <Image src={LogoGoogle} alt={'Logo google'} className="mr-2 font-semibold" />
              Google
            </button>
            <button type="button" className="bg-white
                                            focus:ring-4
                                            focus:outline-none
                                            hover:border-[#20DC49]
                                            border
                                            focus:ring-[#20DC49]/50
                                            font-medium
                                            rounded-lg
                                            text-sm
                                            px-5 py-2.5
                                            text-center
                                            inline-flex
                                            items-center
                                            dark:focus:ring-[#20DC49]/55
                                            m-auto">
              <Image src={LogoFacebook} alt={'Logo facebook'} className="mr-2 font-semibold" />
              Facebook
            </button>
          </div>
        </div>
        <div className="relative flex py-5 items-center">
          <span className="ml-20"></span>
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 ">Ou continue com</span>
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="ml-20"></span>
        </div>
        <div className="w-1/2 flex flex-col">
          <form action="" className="">
            <div className="sm:col-span-4">
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" placeholder='Email' className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-4">
              <div className="mt-2">
                <input id="password" name="password" type="password" autocomplete="password" placeholder='senha' className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-green-100 w-1/4">bbbbb</div>
    </div>
  )
}