import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative bg-gray-50">
            <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
                <Image src={'/bg/background-pattern.png'}
                    alt='bg pattern'
                    width={1000}
                    height={1000}
                />
            </div>

            <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
                        <div>
                            <div className="text-center lg:text-left  mb-28">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">AA special project for you.</h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                            </div>

                            <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">2943</p>
                                    <p className="ml-3 text-sm text-gray-900 font-pj">Cards<br />Delivered</p>
                                </div>

                                <div className="hidden sm:block">
                                    <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                        <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                        <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                        <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                        <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                    </svg>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">$1M+</p>
                                    <p className="ml-3 text-sm text-gray-900 font-pj">Transaction<br />Completed</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Image 
                                className="w-full" 
                                src="/img/layman_ai_laptop_2.png" 
                                alt="Hero image" 
                                width={5500}
                                height={5500}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;