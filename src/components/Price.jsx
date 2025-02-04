import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'

const Price = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl  sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'>
            Pricing
        </h2>
        <div className='flex flex-wrap  '>
            {pricingOptions.map((option, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-3'>
                    <div className='p-10 border border-violet-300 rounded-xl'>
                        <p className='text-4xl mb-6'>{option.title}

                        </p>
                        <p className='mb-8'>
                            <span className='text-4xl mt-6 mr-2'>{option.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature , index) =>(
                                <li key={index} className='mt-6 flex items-center'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#"
                        className='inline-flex justify-center items-center text-center w-full h-12 mt-10 tracking-tight
                         text-xl hover:bg-gradient-to-r from-violet-500 to-blue-800 border border-blue-600 rounded-lg transition duration-200'
                         >
                            Subscribe
                         </a>
                    </div>
                </div>
            


            ))}
        </div>
    </div>
  )
}

export default Price