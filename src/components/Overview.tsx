import Image from 'next/image'
import React from 'react'

const Overview: React.FC = () => {
  return (
    <section className="px-24 py-24 bg-primary-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl font-pj">Overview</h2>
        <p className="mt-4 text-base leading-7 text-primary-600 sm:mt-8 font-pj">Unlock the power of understanding with our advanced text simplification tool.</p>
      </div>
      <div className="grid items-center grid-cols-1 mb-24 lg:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">Simplify Your Reading</h2>
          <p className="mb-5 text-base text-center text-primary-600 sm:text-left md:text-lg">
            Whether you are tackling challenging articles, legal documents, or
            technical reports, Layman AI makes it accessible for everyone. Simplify your reading experience and gain a clearer understanding of the information that matters to you.
          </p>
        </div>
        <div className="w-full h-full">
          <Image className='rounded-xl border-white' src={'/screenshot/layman_screenshot_3.png'} alt='layman screenshot image' width={1000} height={1000} />
        </div>
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">Storage of Past Prompts</h2>
          <p className="mb-5 text-base text-center text-primary-600 sm:text-left md:text-lg">
            Layman AI allows you to save and access past prompts, making it easy to review and reuse
            previous text inputs. For users without an account, demo versions store prompts locally,
            while registered users enjoy the convenience of cloud storage, ensuring access from anywhere.
          </p>
        </div>
        <div className="w-full h-full">
          <Image className='rounded-xl border-white' src={'/screenshot/layman_screenshot_2.png'} alt='layman screenshot image' width={1000} height={1000} />
        </div>
      </div>
    </section>

  )
}

export default Overview
