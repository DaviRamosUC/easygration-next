import Image from 'next/image';

export default function Card(options) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center mt-3">
        <img src={options.imagesrc} height={200} width={200} alt='Image of property' className='rounded' />
      </div>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {options.title}
          </h5>
        </a>
        <p className=" font-normal text-gray-700 dark:text-gray-400">
          {options.description}
        </p>
      </div>
    </div>
  )
}