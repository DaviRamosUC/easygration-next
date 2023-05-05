import Image from 'next/image'
import Card from "./Card"
import ArrowIcon from "src/app/assets/icons/Arrowicon.png"

export default function Hero() {
  return (
    <div className="mt-5 pt-6 ml-6 sm:ml-6 w-1/2">
      <div className="text-start flex flex-col">
        <p className="mt-6 mb-6 text-lg leading-8 text-white">
          Casas | Apartamentos | Condomínios
        </p>
        <h5 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
          A maneira mais fácil <br />de encontrar o seu lar.
        </h5>
      </div>
      <div className='mt-5 pt-6'>
        <div className='flex justify-between'>
          <h5 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">
            Melhores ofertas
          </h5>
          <a href="">
            <Image src={ArrowIcon} height={30} width={30} alt="Arrow Icon" />
          </a>
        </div>
        <div className="grid grid-flow-col gap-2">
          <Card
            title="2/4 em Salvador"
            description="Apartamento em Salvador"
            applications={31}
            imagesrc="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
          />
          <Card
            title="3/4 no RJ"
            description="Apartamento em Salvador"
            applications={31}
            imagesrc="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
          />
          <Card
            title="1/4 em São Paulo"
            description="Apartamento em Salvador"
            applications={31}
            imagesrc="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
          />
        </div>
      </div>
    </div>
  )
}