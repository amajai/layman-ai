import React from 'react'

const Package: React.FC = () => {
  return (
    <section className="text-gray-50">
      <div className="container mx-auto flex flex-col items-center justify-center lg:max-w-full lg:flex-row">
        <div className="flex flex-col items-center h-full py-20 px-20 justify-center flex-1 bg-primary">
          <span className="text-xl mb-4">Demo</span>
          <p className="text-2xl font-bold text-center mb-4">5 Prompts / Day</p>
          <p className="font-semibold text-center">Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos voluptatibus sequi cum, non nesciunt aspernatur a?</p>
          <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12  border-gray-700">Sign up</button>
        </div>
        <div className="flex flex-col items-center h-full py-20 px-20 justify-center flex-1 bg-primary-100">
          <span className="text-xl mb-4">Demo</span>
          <p className="text-2xl font-bold text-center mb-4">5 Prompts / Day</p>
          <p className="font-semibold text-center">Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos voluptatibus sequi cum, non nesciunt aspernatur a?</p>
          <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12  border-gray-700">Sign up</button>
        </div>
      </div>
    </section>
  )
}

export default Package