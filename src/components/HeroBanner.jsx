import React from 'react'
import BannerImge from '../assets/images/banner-logo.png'

const HeroBanner = () => {
    return (
        <>
           

            <section class="min-h-screen bg-black flex items-center">
                <div className="container w-full mx-auto px-3
                sm:max-w-[540px]
                md:max-w-[720px]
                lg:max-w-[960px]
                xl:max-w-[1140px]
                2xl:max-w-[1440px]"
                >

                     <div className='grid grid-cols-2 text-white'>
                <div className='col-6'>
                    <div class="mx-auto w-full">
                        <div class="flex items-center gap-4 mb-10">
                            <span class="w-20 h-px bg-[#8B2E1F]"></span>
                            <p class="text-xs tracking-[6px] uppercase text-[#8B2E1F]">
                                At Home Massage Therapy
                            </p>
                            <span class="w-20 h-px bg-[#8B2E1F]"></span>
                        </div>
                        <h1 class="text-white text-5xl lg:text-7xl font-serif leading-tight">
                            Recovery,
                            <span class="text-[#8B2E1F]">Redefined.</span>
                        </h1>
                        <p class="mt-8 max-w-xl text-gray-300 text-lg leading-relaxed">
                            Qualified, insured therapists at your door — in as little as
                            10 minutes. Available 7am to 11pm, every day.
                        </p>
                        <div class="flex flex-wrap gap-5 mt-10">

                            <a href="#"
                                class="px-8 py-4 rounded-full bg-gradient-to-r from-[#C44A2A] to-[#8B2E1F] text-white font-semibold uppercase tracking-wide shadow-[0_0_30px_rgba(196,74,42,0.4)]">
                                Download The App
                            </a>

                            <a href=''
                                class="px-8 py-4 rounded-full border border-gray-800 text-gray-400 flex items-center gap-3 uppercase tracking-wide">
                                <span class="w-2 h-2 rounded-full bg-[#C44A2A]"></span>
                                Available on iOS & Android
                            </a>

                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='text-center'>
                        <img className='m-auto' src={BannerImge} alt="" />
                    </div>
                </div>
            </div>
                </div>
            </section>
        </>

    )
}

export default HeroBanner