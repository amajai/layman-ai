import Link from "next/link";

const CTA: React.FC = () => {
    return (
        <section className="py-10 bg-black sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Simplify Your Text Today</h2>
                    <p className="mt-4 text-2xl font-medium text-primary-500">Unlock the power of Layman AI and transform complex language into clear, easy-to-understand text.</p>

                    <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
                        <Link href="/demo" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary-200 border border-transparent rounded-md sm:w-auto hover:bg-primary-200 focus:bg-primary-200" role="button">Try Demo</Link>

                        <Link href="/register" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-md sm:w-auto hover:bg-white hover:text-black focus:bg-white focus:text-black" role="button">
                            Sign Up
                        </Link>
                    </div>
                    <p className="mt-6 text-base text-white">Already have an account? <a href="/login" className="text-primary-600 transition-all duration-200 hover:text-primary-200 focus:text-primary-200 hover:underline">Log in</a></p>
                </div>
            </div>
        </section>
    );
}

export default CTA;